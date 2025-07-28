import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to optimize processes. Feel free to reach out!
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
            <Button className="gradient-primary hover-glow transition-spring">
              <Mail className="mr-2 h-5 w-5" />
              alex.rodriguez@email.com
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-spring">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-slide-in-right">
            <Button variant="ghost" size="icon" className="hover-scale transition-spring hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale transition-spring hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale transition-spring hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © 2024 Alex Rodriguez. Made with 
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              and engineering precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;