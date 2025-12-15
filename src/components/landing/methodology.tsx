import Image from 'next/image';
import { Target, TrendingUp, BarChart, Trophy } from 'lucide-react';
import content from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const icons = [Target, TrendingUp, BarChart, Trophy];

export default function Methodology() {
  const methodologyContent = content.methodology['en']; // Content is language-agnostic
  const founderImage = PlaceHolderImages.find((img) => img.id === 'founder');

  return (
    <section id="methodology" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {methodologyContent.title}
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto mb-12 shadow-md">
          <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <blockquote className="text-lg md:text-xl italic font-medium">
                "{methodologyContent.quote}"
              </blockquote>
              <p className="mt-4 text-right font-semibold text-muted-foreground">
                &mdash; {methodologyContent.author}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {methodologyContent.process.map((step, index) => {
              const Icon = icons[index];
              const isEven = (index + 1) % 2 === 0;
              return (
                <div key={step.name} className="flex flex-col items-center text-center relative px-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-1 hidden md:block">
                    <div className="bg-primary text-primary-foreground rounded-full p-4 z-10 border-4 border-background">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="md:hidden bg-primary text-primary-foreground rounded-full p-4 mb-4">
                     <Icon className="w-6 h-6" />
                  </div>
                  <div className={isEven ? 'md:mt-24' : ''}>
                    <h3 className="text-xl font-bold mt-12 md:mt-16">{index + 1}. {step.name}</h3>
                    <p className="text-muted-foreground mt-2">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <p className="mt-16 text-center text-lg italic max-w-3xl mx-auto text-muted-foreground">
          "{methodologyContent.hook}"
        </p>
      </div>
    </section>
  );
}
