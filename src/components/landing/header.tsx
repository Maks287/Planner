'use client';

import Link from 'next/link';
import { Globe, Menu, GanttChartSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useLanguage } from '@/hooks/use-language';
import content, { Language } from '@/lib/content';
import { cn } from '@/lib/utils';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const navContent = content.header[language];

  const LanguageSwitcher = ({ isMobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={isMobile ? 'default' : 'icon'}
          className={cn(isMobile && 'w-full')}
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('ru')}>
          Русский
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('pl')}>
          Polski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <GanttChartSquare className="h-6 w-6 text-primary" />
          <span>{navContent.logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navContent.links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors hover:text-primary"
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="#catalog">{navContent.cta}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-lg"
                  >
                    <GanttChartSquare className="h-6 w-6 text-primary" />
                    <span>{navContent.logo}</span>
                  </Link>
                </div>
                <nav className="flex-grow p-4">
                  <ul className="space-y-4">
                    {navContent.links.map((link) => (
                      <li key={link}>
                        <SheetClose asChild>
                          <Link
                            href={`#${link.toLowerCase()}`}
                            className="text-lg font-medium transition-colors hover:text-primary"
                          >
                            {link}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t space-y-2">
                  <LanguageSwitcher isMobile={true} />
                   <Button asChild className="w-full">
                      <Link href="#catalog">{navContent.cta}</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
