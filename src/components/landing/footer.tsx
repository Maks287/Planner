'use client';

import Link from 'next/link';
import { GanttChartSquare, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import content from '@/lib/content';

export default function Footer() {
  const { language } = useLanguage();
  const footerContent = content.footer[language];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                <GanttChartSquare className="h-6 w-6 text-primary" />
                <span>Planner for life</span>
            </Link>
            <p className="text-sm text-muted-foreground">{footerContent.copyright}</p>
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              {footerContent.policy}
            </Link>
            <Link href="/offer" className="transition-colors hover:text-primary">
              {footerContent.offer}
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
