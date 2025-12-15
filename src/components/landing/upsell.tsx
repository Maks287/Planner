'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import content from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function Upsell() {
  const { language } = useLanguage();
  const upsellContent = content.upsell[language];

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-xl bg-primary/10 p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            {upsellContent.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            {upsellContent.description}
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="https://t.me/nikita_riabcev" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-5 w-5" />
              {upsellContent.cta}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
