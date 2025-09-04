import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Calculator, Users, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for single property owners",
    badge: null,
    features: [
      "1 Property",
      "AI Guest Communication",
      "Basic Analytics",
      "Email Support",
      "Mobile App Access",
      "Standard Templates"
    ],
    cta: "Start Free Trial",
    variant: "outline" as const
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "Ideal for growing portfolios",
    badge: "Most Popular",
    features: [
      "Up to 5 Properties",
      "Dynamic Pricing AI",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
      "Revenue Optimization",
      "Multi-channel Sync",
      "Guest Review Management"
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    highlight: true
  },
  {
    name: "Scale",
    price: "$399",
    period: "/month",
    description: "For serious property managers",
    badge: "Enterprise",
    features: [
      "Unlimited Properties",
      "Full AI Automation Suite",
      "White-label Solution",
      "Dedicated Account Manager",
      "Custom AI Training",
      "API Access",
      "Advanced Reporting",
      "Team Collaboration Tools"
    ],
    cta: "Contact Sales",
    variant: "outline" as const
  }
];

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "Start with any plan completely free for 14 days. No credit card required. Cancel anytime during the trial with no charges."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle."
  },
  {
    question: "What happens if I exceed my property limit?",
    answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or we'll help you optimize your current setup."
  },
  {
    question: "Is there setup assistance available?",
    answer: "All plans include onboarding support. Growth and Scale plans get priority setup assistance and dedicated training sessions."
  },
  {
    question: "How does the AI pricing optimization work?",
    answer: "Our AI analyzes market data, local events, seasonality, and competitor pricing to automatically adjust your rates for maximum revenue."
  }
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <Calculator className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Simple pricing that
            <br />
            <span className="gradient-text">scales with you</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts. 
            Cancel anytime with just one click.
          </p>
          
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${
                  plan.highlight 
                    ? 'border-primary shadow-[0_0_30px_hsla(217,91%,60%,0.2)] scale-105' 
                    : 'border-border/50'
                } bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-bg px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.highlight ? 'gradient-bg hero-glow' : ''}`}
                    variant={plan.variant}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              ROI Calculator
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See your potential
              <br />
              <span className="gradient-text">revenue increase</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">35%</CardTitle>
                <CardDescription>Average Revenue Increase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI-powered pricing optimization typically increases revenue by 35% in the first 3 months
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-2xl">20hrs</CardTitle>
                <CardDescription>Time Saved Per Week</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automate guest communication, pricing, and scheduling to save 20+ hours weekly
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">98%</CardTitle>
                <CardDescription>Customer Satisfaction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  24/7 AI support leads to faster response times and happier guests
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently asked
              <br />
              <span className="gradient-text">questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing and features
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button variant="outline" size="lg">
              Contact Support
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to automate your
            <br />
            vacation rental business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of property owners who've increased their revenue with RentalAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;