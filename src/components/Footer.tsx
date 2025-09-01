import { Bot, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">RentalAI</span>
              <Badge variant="secondary" className="text-xs">
                Beta
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automate your vacation rental business with intelligent AI that never sleeps.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-foreground transition-colors">Demo</a></li>
              <li><a href="#api" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@rentalai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RentalAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#security" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}