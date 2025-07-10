import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function About() {
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
              <a href="/about" className="text-foreground font-semibold">
                About
              </a>
              <a
                href="/#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About SWELL Attribution
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Founded in 2019, SWELL Attribution is a Delaware C-Corporation
              providing enterprise-grade marketing attribution solutions to over
              10,000 businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To provide the world's most accurate and actionable marketing
                  attribution platform, enabling businesses to make data-driven
                  decisions that maximize ROI and drive sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our founding, we've processed over $2.3 billion in
                  tracked ad spend and helped our clients improve their ROAS by
                  an average of 347%.
                </p>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Founded</span>
                      <span className="font-semibold">2019</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Incorporation
                      </span>
                      <span className="font-semibold">Delaware C-Corp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">EIN</span>
                      <span className="font-semibold">XX-XXXXXXX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">DUNS Number</span>
                      <span className="font-semibold">XXX-XXX-XXXX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employees</span>
                      <span className="font-semibold">125+</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">
                    10,000+
                  </div>
                  <CardTitle className="text-sm">Active Customers</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-green-600">
                    $2.3B+
                  </div>
                  <CardTitle className="text-sm">Ad Spend Tracked</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-purple-600">
                    99.7%
                  </div>
                  <CardTitle className="text-sm">
                    Attribution Accuracy
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-orange-600">125+</div>
                  <CardTitle className="text-sm">Team Members</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced leadership team brings decades of expertise in
                enterprise software, marketing technology, and data science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">JD</span>
                  </div>
                  <CardTitle>John Doe</CardTitle>
                  <p className="text-muted-foreground">CEO & Co-Founder</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Former VP of Engineering at Salesforce. 15+ years building
                    enterprise SaaS platforms. MBA from Stanford.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">
                      SM
                    </span>
                  </div>
                  <CardTitle>Sarah Martinez</CardTitle>
                  <p className="text-muted-foreground">CTO & Co-Founder</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Former Principal Engineer at Google. PhD in Computer Science
                    from MIT. Expert in machine learning and big data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">
                      MK
                    </span>
                  </div>
                  <CardTitle>Michael Kim</CardTitle>
                  <p className="text-muted-foreground">CFO</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Former CFO at HubSpot. CPA with 20+ years in SaaS finance.
                    Led 3 successful IPOs and multiple funding rounds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funding & Investors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Funding & Investors
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Backed by leading venture capital firms and strategic investors
                who share our vision for the future of marketing attribution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Series B Funding</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Raised</span>
                    <span className="font-semibold text-lg">$47.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Last Round</span>
                    <span className="font-semibold">$25M Series B (2023)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lead Investor</span>
                    <span className="font-semibold">Andreessen Horowitz</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Valuation</span>
                    <span className="font-semibold">$350M</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Strategic Investors</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Badge variant="outline" className="justify-center py-2">
                    Andreessen Horowitz
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Sequoia Capital
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Bessemer Venture
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Index Ventures
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Compliance & Security
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We maintain the highest standards of data security, privacy
                compliance, and business governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-sm">SOC 2 Type II</CardTitle>
                  <p className="text-xs text-muted-foreground">Certified</p>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-sm">GDPR Compliant</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Privacy Shield
                  </p>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-sm">ISO 27001</CardTitle>
                  <p className="text-xs text-muted-foreground">Certified</p>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10 3v4h4V3m-4 14h4v-3H10v3z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-sm">PCI DSS</CardTitle>
                  <p className="text-xs text-muted-foreground">Level 1</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Corporate Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Headquarters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold">SWELL Attribution Inc.</p>
                  <p className="text-muted-foreground">
                    500 Howard Street, Suite 400
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                  <div className="pt-4 space-y-2">
                    <p>
                      <span className="font-semibold">Phone:</span> +1 (555)
                      123-4567
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      legal@swell.com
                    </p>
                    <p>
                      <span className="font-semibold">Support:</span>{" "}
                      support@swell.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>European Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold">SWELL Attribution Europe Ltd.</p>
                  <p className="text-muted-foreground">
                    25 Old Broad Street
                    <br />
                    London EC2N 1HN
                    <br />
                    United Kingdom
                  </p>
                  <div className="pt-4 space-y-2">
                    <p>
                      <span className="font-semibold">Phone:</span> +44 20 7946
                      0958
                    </p>
                    <p>
                      <span className="font-semibold">VAT ID:</span> GB123456789
                    </p>
                    <p>
                      <span className="font-semibold">Company No:</span>{" "}
                      12345678
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
