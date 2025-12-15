import { Cloud, Rocket, Users, Shield, Shuffle, Gem } from 'lucide-react';
import content from '@/lib/content';

const icons: { [key: string]: React.ElementType } = {
  "Cloud-Based": Cloud,
  "Fast Start": Rocket,
  "Collaborative": Users,
  "Secure": Shield,
  "Flexible": Shuffle,
  "One-Time Purchase": Gem
};

export default function Usp() {
  const uspContent = content.usp['en']; // Content is language-agnostic in structure

  return (
    <section id="why" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {uspContent.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Planner for life is designed to be powerful yet simple, integrating seamlessly into your life without the fuss.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
          {uspContent.features.map((feature) => {
            const Icon = icons[feature.name];
            return (
              <div key={feature.name} className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.name}</h3>
                <p className="text-muted-foreground mt-2">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
