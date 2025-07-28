import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground">
              Travaillons Ensemble
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Je suis toujours ouvert à la discussion de nouvelles opportunités, de projets innovants et de moyens d'optimiser les processus. N'hésitez pas à me contacter !
            </p>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
            {/* Email Button */}
            <a href="mailto:mouadizzabaha70@gmail.com">
              <Button className="gradient-primary hover-glow transition-spring">
                <Mail className="mr-2 h-5 w-5" />
                mouadizzabaha70@gmail.com
              </Button>
            </a>
            
            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/mouad-izzabaha-0a4916247/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-spring">
                <Linkedin className="mr-2 h-5 w-5" />
                Se connecter sur LinkedIn
              </Button>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © 2025 Izzabaha. Fait avec 
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              et une précision ingénieure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;