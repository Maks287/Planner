import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { productName, priceInCents, currency, email } = await req.json();

        if (!productName || !priceInCents || !currency || !email) {
            return NextResponse.json({ error: "Missing required session parameters" }, { status: 400 });
        }

        const origin = req.headers.get('origin') || 'http://localhost:9002';

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: currency,
                        product_data: {
                            name: productName,
                        },
                        unit_amount: priceInCents,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            customer_email: email,
            success_url: `${origin}/?payment_success=true`,
            cancel_url: `${origin}/checkout`,
        });

        return NextResponse.json({ id: session.id }, { status: 200 });

    } catch (err: any) {
        console.error('Error creating checkout session:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
