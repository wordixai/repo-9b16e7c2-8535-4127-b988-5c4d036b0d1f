import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  DollarSign,
  Calendar,
  BarChart3,
  Shield,
  Smartphone,
  Clock,
  TrendingUp } from
"lucide-react";

const features = [
{
  icon: MessageSquare,
  title: "AI Guest Communication",
  description: "Intelligent chatbot handles inquiries, bookings, and support 24/7",
  badge: "Smart AI",
  glow: "hover:shadow-[0_0_20px_hsla(217,91%,60%,0.3)]"
},
{
  icon: DollarSign,
  title: "Dynamic Pricing",
  description: "Optimize rates automatically based on demand, seasonality, and market data",
  badge: "Revenue+",
  glow: "hover:shadow-[0_0_20px_hsla(142,76%,36%,0.3)]"
},
{
  icon: Calendar,
  title: "Smart Scheduling",
  description: "Automated check-ins, cleanings, and maintenance coordination",
  badge: "Automation",
  glow: "hover:shadow-[0_0_20px_hsla(217,91%,60%,0.3)]"
},
{
  icon: BarChart3,
  title: "Analytics Dashboard",
  description: "Real-time insights on occupancy, revenue, and guest satisfaction",
  badge: "Insights",
  glow: "hover:shadow-[0_0_20px_hsla(142,76%,36%,0.3)]"
},
{
  icon: Shield,
  title: "Risk Management",
  description: "AI-powered guest screening and fraud detection",
  badge: "Security",
  glow: "hover:shadow-[0_0_20px_hsla(217,91%,60%,0.3)]"
},
{
  icon: Smartphone,
  title: "Mobile Control",
  description: "Manage everything from your phone with our intuitive app",
  badge: "Mobile",
  glow: "hover:shadow-[0_0_20px_hsla(142,76%,36%,0.3)]"
}];


export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Complete Automation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to
            <br />
            
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI handles the day-to-day operations so you can focus on growing your portfolio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <Card
            key={index}
            className={`relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${feature.glow} hover:border-primary/30 group`}>

              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-primary">
            <TrendingUp className="w-8 h-8 text-primary-foreground" />
            <div className="text-left">
              <p className="text-lg font-semibold text-primary-foreground">
                Average 35% revenue increase
              </p>
              <p className="text-primary-foreground/80">
                in the first 3 months of automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}