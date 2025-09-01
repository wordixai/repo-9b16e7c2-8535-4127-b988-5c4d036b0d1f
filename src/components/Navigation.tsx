import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Bot, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">RentalAI</span>
            <Badge variant="secondary" className="ml-2 text-xs">
              Beta
            </Badge>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button className="gradient-bg">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="gradient-bg justify-start">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}