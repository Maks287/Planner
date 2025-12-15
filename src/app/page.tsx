import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Usp from '@/components/landing/usp';
import Transformation from '@/components/landing/transformation';
import ProductCatalog from '@/components/landing/product-catalog';
import Methodology from '@/components/landing/methodology';
import SocialProof from '@/components/landing/social-proof';
import Upsell from '@/components/landing/upsell';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Usp />
        <Transformation />
        <ProductCatalog />
        <Methodology />
        <SocialProof />
        <Upsell />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
