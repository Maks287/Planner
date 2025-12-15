'use client';

import { useLanguage } from '@/hooks/use-language';
import content from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ProductCard = ({ product, cta, isBundle = false, comingSoonLabel }: { product: any; cta: string; isBundle?: boolean, comingSoonLabel: string }) => {
  const isComingSoon = product.comingSoon;
  const purchaseLink = `/checkout?product=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price + product.currency)}`;
  return (
    <Card className={cn("flex flex-col", isBundle && "border-primary border-2 shadow-lg relative overflow-hidden")}>
      {isBundle && !isComingSoon && (
        <Badge variant="default" className="absolute top-4 right-4 flex gap-1">
          <Star className="h-3 w-3"/>
          {product.tag}
        </Badge>
      )}
      {isComingSoon && (
         <Badge variant="secondary" className="absolute top-4 right-4 flex gap-1">
          <Clock className="h-3 w-3"/>
          {comingSoonLabel}
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        {product.description && <CardDescription className="pt-2">{product.description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">{product.price}{product.currency}</span>
          {product.oldPrice && <span className="text-lg text-muted-foreground line-through">{product.oldPrice}{product.currency}</span>}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={isBundle ? 'default' : 'secondary'} asChild={!isComingSoon} disabled={isComingSoon}>
          {isComingSoon ? (
            <span>
              <Clock className="mr-2 h-4 w-4" />
              {comingSoonLabel}
            </span>
          ) : (
            <Link href={purchaseLink}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              {cta}
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function ProductCatalog() {
  const { language } = useLanguage();
  const productContent = content.products[language];

  return (
    <section id="catalog" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {productContent.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            One-time payment, lifetime access. Choose the perfect template or get the full set for the best value.
          </p>
        </div>
        
        <div className="grid gap-8">
            <div className="max-w-2xl mx-auto w-full">
                <ProductCard product={productContent.bundle} cta={productContent.cta} isBundle={true} comingSoonLabel={productContent.comingSoon} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productContent.items.map((item) => (
                    <ProductCard key={item.name} product={item} cta={productContent.cta} comingSoonLabel={productContent.comingSoon} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
