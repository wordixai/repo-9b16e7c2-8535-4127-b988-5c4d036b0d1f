import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap } from "lucide-react";

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
  "Mobile App Access"],

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
  "Revenue Optimization"],

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
  "API Access"],

  cta: "Contact Sales",
  variant: "outline" as const
}];


export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose your
            <br />
            <span className="gradient-text">automation level</span>
          </h2>
          


        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) =>
          <Card
            key={index}
            className={`relative ${
            plan.highlight ?
            'border-primary shadow-[0_0_30px_hsla(217,91%,60%,0.2)] scale-105' :
            'border-border/50'} bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg`
            }>

              {plan.badge &&
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-bg px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
            }
              
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
                  {plan.features.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                )}
                </ul>
                
                <Button
                className={`w-full ${plan.highlight ? 'gradient-bg hero-glow' : ''}`}
                variant={plan.variant}
                size="lg">

                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <p className="text-xs text-muted-foreground">
            Enterprise customers save an average of $2,400/month in operational costs
          </p>
        </div>
      </div>
    </section>);

}