import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Swell Marketing transformed our business in just a few months. We've seen record-breaking growth!",
    author: "Jane Doe",
    title: "CEO",
    company: "Tech Innovations",
  },
  {
    id: "2",
    quote:
      "Their SEO strategies doubled our website traffic and boosted conversions by over 300%.",
    author: "John Smith",
    title: "Marketing Director",
    company: "Retail Solutions",
  },
  {
    id: "3",
    quote:
      "The team at Swell was incredible. Their PPC campaign doubled our sales in just two months!",
    author: "Emily White",
    title: "Founder",
    company: "Creative Studios",
  },
  {
    id: "4",
    quote:
      "Working with Swell Marketing has been a game-changer. Our ROI increased by 250% in the first quarter.",
    author: "Michael Chen",
    title: "E-commerce Manager",
    company: "Digital Retail Co",
  },
  {
    id: "5",
    quote:
      "The data-driven approach and transparent reporting gave us complete confidence in our marketing spend.",
    author: "Sarah Johnson",
    title: "CMO",
    company: "Growth Ventures",
  },
];

export function TestimonialCarousel({
  testimonials = defaultTestimonials,
  className,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval]);

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No testimonials available</p>
      </div>
    );
  }

  return (
    <section id="testimonials" className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from businesses that have experienced significant
            growth and success with Swell Marketing.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      <div className="flex items-center gap-4 mt-auto">
                        {testimonial.avatar && (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </Carousel>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  current === index + 1
                    ? "bg-primary"
                    : "bg-muted hover:bg-muted-foreground/50",
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
