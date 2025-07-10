import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-2xl">SWELL</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="/#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a href="/contact" className="text-foreground font-semibold">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Login
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact SWELL
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Get in touch with our team for sales inquiries, support, or
              partnership opportunities. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-blue-200 hover:border-blue-500 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Sales Inquiries</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground">
                    Ready to get started? Our sales team will help you find the
                    right plan.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">
                      sales@swell.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri 9AM-6PM PST
                    </p>
                  </div>
                  <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule Demo
                  </button>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:border-green-500 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Customer Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground">
                    Need help with your account? Our support team is here 24/7.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">+1 (555) 123-4568</p>
                    <p className="text-sm text-muted-foreground">
                      support@swell.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 Support Available
                    </p>
                  </div>
                  <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Get Support
                  </button>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:border-purple-500 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-600"
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
                  <CardTitle>Partnerships</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground">
                    Interested in partnering with SWELL? Let's explore
                    opportunities.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">+1 (555) 123-4569</p>
                    <p className="text-sm text-muted-foreground">
                      partnerships@swell.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri 9AM-5PM PST
                    </p>
                  </div>
                  <button className="w-full mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Partner With Us
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Corporate Offices */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Headquarters - San Francisco
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">
                      SWELL Attribution Inc.
                    </p>
                    <p className="text-muted-foreground">
                      500 Howard Street, Suite 400
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-muted-foreground mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-muted-foreground mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>legal@swell.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-muted-foreground mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Mon-Fri 9AM-6PM PST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    European Office - London
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">
                      SWELL Attribution Europe Ltd.
                    </p>
                    <p className="text-muted-foreground">
                      25 Old Broad Street
                      <br />
                      London EC2N 1HN
                      <br />
                      United Kingdom
                    </p>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-muted-foreground mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>+44 20 7946 0958</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-muted-foreground mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>europe@swell.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-muted-foreground mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Mon-Fri 9AM-5PM GMT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Contact Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Press & Media</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-muted-foreground text-sm">
                    For press inquiries and media requests
                  </p>
                  <p className="font-semibold">press@swell.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Legal & Privacy</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-muted-foreground text-sm">
                    For legal matters and privacy concerns
                  </p>
                  <p className="font-semibold">legal@swell.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Careers</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-muted-foreground text-sm">
                    Interested in joining our team?
                  </p>
                  <p className="font-semibold">careers@swell.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">SWELL</span>
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a
                href="/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="/legal"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/legal"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 SWELL Attribution Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
