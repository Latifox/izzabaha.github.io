import { Code, Cpu, BarChart3, Settings, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Génie Industriel ",
      icon: Settings,
      skills: [
        { name: "Gestion de Maintenance", level: 90 },
        { name: "Six Sigma", level: 85 },
        { name: "Gestion de Production", level: 80 },
        { name: "Gestion de Projet", level: 85 },
        { name: "Management de la Qualité", level: 85 },
        { name: "Amélioration continue : KAIZEN, 5S et PDCA", level: 90},
      ]
    },
    {
      title: "Programmation & Développement",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "VBA", level: 80 },
        { name: "R", level: 75 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      title: "Outils de Données & d'Analyse",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 75 },
        { name: "DAX", level: 85 },
        { name: "Microsoft Excel", level: 95 },
        { name: "Google Sheets", level: 85 }
      ]
    },
    {
      title: "CAO/FAO & Simulation",
      icon: Cpu,
      skills: [
        { name: "CATIA V5", level: 80 },
        { name: "Simulation Arena", level: 75 },
        { name: "Métrologie 3D", level: 70 },
        { name: "Suivie de calibration", level: 85 },
        { name: "Vérifications Périodiques", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Compétences Techniques & <span className="gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Une vitrine de mes capacités et de mon expertise techniques.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={categoryIndex}
                  className="bg-card border-border hover-glow transition-spring animate-slide-in-left"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground font-medium">
                              {skill.name}
                            </span>

                          </div>
                          <div className="relative">
                            <Progress 
                              value={skill.level} 
                              className="h-2 bg-secondary/50"
                            />
                            <div 
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Settings,
                title: "Optimisation des Processus",
                description: "Connaissance avancée de la conception et de l'optimisation des processus de fabrication"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Résolution créative de problèmes avec un focus sur l'amélioration continue"
              },
              {
                icon: BarChart3,
                title: "SMQ",
                description: "Connaissance des normes ISO et des méthodes de contrôle qualité basées sur l’analyse statistique."
              }
            ].map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="bg-secondary/50 border-border/50 hover-glow transition-spring animate-fade-in"
                  style={{ animationDelay: `${1 + (index * 0.2)}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;