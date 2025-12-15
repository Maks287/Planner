'use client';

import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import content from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function SocialProof() {
  const { language } = useLanguage();
  const proofContent = content.socialProof[language];

  return (
    <section id="reviews" className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {proofContent.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Real stories from real users who organized their lives and achieved their goals with Planner for life.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {proofContent.testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
              return (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold">{testimonial.name}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
