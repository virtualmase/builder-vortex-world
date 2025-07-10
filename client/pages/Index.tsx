import * as React from "react";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  S
                </span>
              </div>
              <span className="font-bold text-xl">Swell Marketing</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#partners"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Partners
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Sign In
              </button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Trusted by 500+ Companies
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            Scale Your Business with
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}
              Data-Driven Marketing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your business with our AI-powered marketing solutions. We
            help companies achieve unprecedented growth through strategic
            digital marketing and advanced analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 text-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors text-lg">
              Watch Demo
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">300%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Marketing Channels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Real-time Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything you need to grow your business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive marketing platform provides all the tools and
              insights you need to drive growth and maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Get deep insights into your marketing performance with
                  real-time analytics and predictive modeling.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle>AI-Powered Optimization</CardTitle>
                <CardDescription>
                  Leverage machine learning to automatically optimize your
                  campaigns for maximum ROI and performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Multi-Channel Attribution</CardTitle>
                <CardDescription>
                  Track customer journeys across all touchpoints to understand
                  which channels drive the most value.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <CardTitle>Custom Dashboards</CardTitle>
                <CardDescription>
                  Build personalized dashboards that show the metrics that
                  matter most to your business goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <CardTitle>Data Security</CardTitle>
                <CardDescription>
                  Enterprise-grade security with GDPR compliance, encryption,
                  and secure data handling protocols.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrate with your existing tech stack through our
                  comprehensive API and webhooks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include
              our core features with scalable options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                  <div className="text-4xl font-bold mb-2">
                    $99
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <CardDescription>
                    Perfect for small businesses getting started
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Up to 5 marketing channels
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Basic analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Email support
                  </li>
                </ul>
                <button className="w-full py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  Start Free Trial
                </button>
              </CardContent>
            </Card>

            <Card className="border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                  <div className="text-4xl font-bold mb-2">
                    $299
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <CardDescription>
                    Ideal for growing businesses
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited marketing channels
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced analytics & AI insights
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Start Free Trial
                </button>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <CardDescription>
                    For large organizations with custom needs
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom development
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    SLA guarantee
                  </li>
                </ul>
                <button className="w-full py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  Contact Sales
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Partners & Affiliations Section */}
      <section id="partners" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Partners & Affiliations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with trusted partners to deliver comprehensive marketing
              solutions and drive exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://swellpartners.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Swell Partners
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Strategic partnerships and collaborations
              </p>
            </a>

            <a
              href="https://www.swellcx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Swell CX
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Customer experience optimization
              </p>
            </a>

            <a
              href="https://www.swellmarketingadvisors.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Swell Marketing Advisors
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Strategic marketing consultation
              </p>
            </a>

            <a
              href="https://swellinc.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Swell Inc
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Corporate solutions and services
              </p>
            </a>

            <a
              href="https://swellstart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Swell Start
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Startup growth and acceleration
              </p>
            </a>

            <a
              href="https://www.swellmktg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Swell MKTG
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Full-service marketing solutions
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to 10x Your Marketing ROI?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of successful businesses using Swell Marketing to
            scale their growth and maximize their marketing impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    S
                  </span>
                </div>
                <span className="font-bold text-xl">Swell Marketing</span>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Transform your business with our data-driven marketing
                solutions. We help companies achieve unprecedented growth
                through strategic digital marketing.
              </p>
              <a
                href="https://linkedin.com/company/swell-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-background/80 hover:text-background transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Follow us on LinkedIn
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a
                    href="#features"
                    className="hover:text-background transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-background transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-background transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="https://swellpartners.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-background transition-colors"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 mb-4 md:mb-0">
              &copy; 2024 Swell Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6 text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
