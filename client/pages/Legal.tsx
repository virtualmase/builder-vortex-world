import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Legal() {
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
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
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

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Legal & Privacy</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none dark:prose-invert">
                <p className="text-muted-foreground">
                  <strong>Last Updated:</strong> January 15, 2024
                </p>
                <p>
                  SWELL Attribution Inc. ("SWELL," "we," "us," or "our") is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, and safeguard your information.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Information We Collect
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email, company details)</li>
                  <li>Marketing data and attribution information</li>
                  <li>Usage analytics and performance metrics</li>
                  <li>Communication preferences and support interactions</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6 mb-3">
                  How We Use Your Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our attribution services</li>
                  <li>Generate marketing insights and analytics</li>
                  <li>Communicate about your account and our services</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none dark:prose-invert">
                <p className="text-muted-foreground">
                  <strong>Last Updated:</strong> January 15, 2024
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of SWELL
                  Attribution's platform and services.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Service Description
                </h3>
                <p>
                  SWELL provides marketing attribution and analytics software
                  designed to help businesses track and optimize their
                  advertising performance across multiple channels.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Account Responsibilities
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain accurate account information</li>
                  <li>Protect your login credentials</li>
                  <li>Comply with applicable laws and regulations</li>
                  <li>Use the service for legitimate business purposes only</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Security Certifications</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
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
                        SOC 2 Type II Certified
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
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
                        ISO 27001 Certified
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
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
                        PCI DSS Level 1 Compliant
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Privacy Compliance</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
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
                        GDPR Compliant
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
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
                        CCPA Compliant
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
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
                        Privacy Shield Framework
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to improve your
                  experience, analyze usage, and provide personalized content.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for basic website functionality and security.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors use our website to improve
                      performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to show relevant advertisements and measure campaign
                      effectiveness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For questions about our legal policies or privacy practices,
                  please contact:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Legal Department</strong>
                  </p>
                  <p>SWELL Attribution Inc.</p>
                  <p>500 Howard Street, Suite 400</p>
                  <p>San Francisco, CA 94105</p>
                  <p>Email: legal@swell.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Data Protection Officer:</strong> For EU-related
                    privacy matters, contact our DPO at dpo@swell.com
                  </p>
                </div>
              </CardContent>
            </Card>
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
                href="/contact"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <a
                href="/legal"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
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
