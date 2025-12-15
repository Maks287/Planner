'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import content from '@/lib/content';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Hero() {
  const { language } = useLanguage();
  const heroContent = content.hero[language];
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section
      id="home"
      className="relative w-full h-[80vh] min-h-[600px] max-h-[800px] flex items-center justify-center text-center text-white"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />

      <div className="relative z-10 container max-w-4xl px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
          {heroContent.headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
          {heroContent.subheadline}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          {heroContent.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button size="lg" asChild>
            <Link href="#catalog">{content.header[language].cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
