'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard, Lock, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import content from '@/lib/content';
import { useLanguage } from '@/hooks/use-language';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
    const searchParams = useSearchParams();
    const { language } = useLanguage();
    const productContent = content.products[language];
    
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [priceInCents, setPriceInCents] = useState(0);
    const [currency, setCurrency] = useState('eur');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const urlProduct = searchParams.get('product');
        const urlPrice = searchParams.get('price');

        const availableProducts = [
            productContent.bundle,
            ...productContent.items
        ].filter(p => !p.comingSoon);

        const selectedProduct = availableProducts.find(p => p.name === urlProduct);


        if (selectedProduct && urlPrice) {
            setProductName(selectedProduct.name);
            const priceMatch = urlPrice.match(/(\d+[.,]?\d*)/);
            
            if (priceMatch) {
                const numericPrice = parseFloat(priceMatch[1].replace(',', '.'));
                setPrice(urlPrice);
                setPriceInCents(Math.round(numericPrice * 100));
            }

            setCurrency('eur');

        } else {
             // Fallback to the first available product or show an error
             const fallbackProduct = availableProducts.find(p => p.name === "Weekly Planner");
             if (fallbackProduct) {
                setProductName(fallbackProduct.name);
                const numericPrice = parseFloat(fallbackProduct.price.replace(',', '.'));
                setPrice(fallbackProduct.price + fallbackProduct.currency);
                setPriceInCents(Math.round(numericPrice * 100));
                setCurrency('eur');
             } else {
                setError("No purchasable products available.");
             }
        }

    }, [searchParams, productContent]);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        if (!productName || !priceInCents) {
            setError("Product information is missing or the product is not available for purchase.");
            setLoading(false);
            return;
        }

        if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
            setError("Stripe publishable key is not configured. Please check your environment variables.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName,
                    priceInCents,
                    currency,
                    email,
                }),
            });

            const session = await response.json();

            if (session.id) {
                const stripe = await stripePromise;
                if(stripe) {
                    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
                    if (error) {
                        setError(error.message || "An unexpected error occurred.");
                    }
                }
            } else {
                setError(session.error || "Could not create a checkout session.");
            }
        } catch (err: any) {
            setError(err.message || "An error occurred while processing your payment.");
        } finally {
            setLoading(false);
        }
    };

    if (!productName) {
        return (
             <div className="flex justify-center items-center min-h-screen bg-background p-4">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <CardTitle>Продукт не найден</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Выбранный вами продукт недоступен для покупки.</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="link" asChild className="mx-auto">
                            <Link href="/#catalog">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Вернуться в каталог
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
             </div>
        )
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Оформление заказа</CardTitle>
                    <CardDescription>Завершите покупку для "{productName}"</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <p className="font-semibold text-lg">Сумма: {price}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email для получения доступа</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="you@example.com" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-sm text-destructive">{error}</p>}
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin" /> : <>Оплатить {price}</>}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                       <Lock className="h-3 w-3" />
                       <span>Безопасная оплата через Stripe</span>
                    </div>
                     <Button variant="link" asChild>
                        <Link href="/#catalog">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Вернуться в каталог
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}


export default function CheckoutPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutForm />
        </Suspense>
    )
}
