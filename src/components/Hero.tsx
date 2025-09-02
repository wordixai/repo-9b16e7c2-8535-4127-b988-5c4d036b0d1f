import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Bot, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Automation
        </Badge>
        
        <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          Put your
          <br />
          <span className="gradient-text">vacation rental</span>
          <br />
          on autopilot
        </h1>
        
        <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          with <span className="font-bold gradient-text">Smart AI</span>
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Automate guest communication, pricing optimization, and property management with our intelligent AI assistant. 
          Maximize revenue while minimizing your workload.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gradient-bg hero-glow animate-pulse-glow px-8 py-4 text-lg font-semibold">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary/20 hover:border-primary/40">
            <Bot className="mr-2 w-5 h-5" />
            See Demo
          </Button>
        </div>
        
        <div className="flex justify-center items-center gap-8 mt-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            24/7 Automated Responses
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-emerald-400" />
            Smart Pricing Algorithm
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Revenue Optimization
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-20 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-32 w-6 h-6 bg-emerald-400 rounded-full animate-float delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-float delay-1000" />
    </section>
  );
}