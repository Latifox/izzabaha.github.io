import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Gestion de la Maintenance",
      description: "Connaissances solides en gestion de la maintenance préventive et analyse des modes de défaillance des équipements"
    },
    {
      icon: Users,
      title: "Six Sigma & Lean",
      description: "Certifié aux méthodologies Six Sigma et aux principes du lean manufacturing"
    },
    {
      icon: Lightbulb,
      title: "Analyse de Données",
      description: "Compétences avancées en Power BI, Python, SQL, Spreadsheets et Tableau pour l'analyse statistique et la prise de décision"
    },
    {
      icon: TrendingUp,
      title: "Amélioration des Processus",
      description: "Application de la méthode AMDEC et des outils d'amélioration continue tels que PDCA, 5S et Kaizen pour optimiser les performances industrielles"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-secondary/10 to-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-down">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              À propos de <span className="gradient-primary bg-clip-text text-transparent">Moi</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              Ingenieur en Génie Industriel à l'ENSAM Rabat, je suis passionné par l'optimisation des systèmes industriels et l'amélioration de l'efficacité opérationnelle.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light mt-4">
            J’allie rigueur analytique et créativité pour relever des défis concrets. Motivé à rejoindre une organisation innovante et collaborative.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 animate-slide-in-left">
              <h3 className="text-3xl font-semibold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Mon Parcours</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                J’ai intégré l’ENSAM Rabat après des classes préparatoires. Mes stages chez OCP Phosboucraa et JESA m’ont permis de maîtriser la gestion de la maintenance et la fiabilité des équipements.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Je combine les principes du génie industriel avec des outils modernes comme Power BI et Python, en mettant l’accent sur la maintenance préventive, l’optimisation des processus et les méthodologies Six Sigma.
              </p>
              
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="bg-card/80 border border-border/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6 text-center">
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-5 shadow-md">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-base mb-3 text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;