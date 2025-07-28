import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import izzabahaPortrait from "@/assets/izzabaha.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-primary/30 rounded-lg animate-float"></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 border border-accent/40 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Mouad</span>{" "}
                <span className="gradient-primary bg-clip-text text-transparent">Izzabaha</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Ingénieur d'État en Génie Industriel
              </p>
              <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Passionné par la maintenance industrielle, l'optimisation des processus et l'analyse de données. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="gradient-primary hover-glow transition-spring text-lg px-8 py-3">
                <a href="/assets/izzabaha.pdf" download className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger le CV
                </a>
              </Button>
            </div>
            
            {/* Social Media Buttons */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/mouad-izzabaha-0a4916247/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Se connecter sur LinkedIn"
              >
                <Button variant="ghost" size="icon" className="hover-scale transition-spring hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              
              {/* Mail Button */}
              <a 
                href="mailto:mouadizzabaha70@gmail.com"
                aria-label="Envoyer un e-mail"
              >
                <Button variant="ghost" size="icon" className="hover-scale transition-spring hover:text-primary">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-card border-4 border-primary/20 hover-glow transition-spring">
                <img 
                  src={izzabahaPortrait} 
                  alt="Mouad Izzabaha - Industrial Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                <span className="text-2xl font-bold text-primary-foreground">IM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;