import Image from 'next/image';
import { ArrowRight, Check, X } from 'lucide-react';
import content from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Transformation() {
  const transformationContent = content.transformation['en']; // Content structure is language-agnostic
  const beforeImage = PlaceHolderImages.find((img) => img.id === 'transformation-before');
  const afterImage = PlaceHolderImages.find((img) => img.id === 'transformation-after');

  return (
    <section id="transformation" className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {transformationContent.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {transformationContent.tagline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-full p-4 z-10 shadow-lg">
                <ArrowRight className="w-8 h-8" />
            </div>
          </div>
          
          {/* Point A */}
          <Card className="border-destructive/50 border-2 shadow-lg">
            <CardHeader>
              {beforeImage && (
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={beforeImage.imageUrl}
                    alt={beforeImage.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                    data-ai-hint={beforeImage.imageHint}
                  />
                </div>
              )}
              <CardTitle className="text-destructive">
                {transformationContent.before.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                {transformationContent.before.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0 mt-1">
                        <X className="w-4 h-4" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Point B */}
          <Card className="border-green-500 border-2 shadow-lg">
            <CardHeader>
              {afterImage && (
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={afterImage.imageUrl}
                    alt={afterImage.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                    data-ai-hint={afterImage.imageHint}
                  />
                </div>
              )}
              <CardTitle className="text-green-600">
                {transformationContent.after.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                {transformationContent.after.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
