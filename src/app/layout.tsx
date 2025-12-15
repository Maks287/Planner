import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Planner for life - Optimize Your Life & Finances',
  description:
    'High-quality productivity and financial templates for Google Sheets. Download once, use forever. Optimize time, achieve goals, and gain financial peace of mind.',
  openGraph: {
    title: 'Planner for life - Optimize Your Life & Finances',
    description:
      'High-quality productivity and financial templates for Google Sheets. Download once, use forever. Optimize time, achieve goals, and gain financial peace of mind.',
    type: 'website',
    url: 'https://lifeplan-demo.com', // Placeholder URL
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630', // Placeholder OG image
        width: 1200,
        height: 630,
        alt: 'Planner for life Templates',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
