import * as React from "react";
import { TestimonialCarousel } from "../components/TestimonialCarousel";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Swell Marketing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your business with our data-driven marketing solutions. We
            help companies achieve unprecedented growth through strategic
            digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />

      {/* Additional Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of successful businesses that have scaled their growth
            with our proven marketing strategies.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
