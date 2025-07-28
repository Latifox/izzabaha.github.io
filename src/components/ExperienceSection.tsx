import { Briefcase, Calendar, MapPin, TrendingUp, Users, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Fiabilisation de manutention de Phosboucraa ( MBF sur la Stockeuse ) ",
      company: "JESA",
      location: "Maroc",
      period: "Fév 2025 – Juin 2025",
      type: "PFE",
      logo: "https://www.jesagroup.com/asset/img/logo.png", // Replace with actual JESA logo URL
      achievements: [
        "Évaluation des équipements de manutention via analyse de criticité",
        "Définition de l'arborescence technique des équipements",
        "Application de la méthode AMDEC sur systèmes critiques",
        "Élaboration d'un plan de maintenance préventive",
        "Création des dashboards et suivi des KPIs avec Power BI"
      ],
      technologies: ["MBF", "AMDEC", "Power BI","SAP", "Analyse de criticité", "Maintenance préventive", "KPIs"]
    },
    {
      position: "Analyse des causes de défaillance des équipements mécaniques",
      company: "OCP Phosboucraa",
      location: "Maroc", 
      period: "Juil 2024 – Sept 2024",
      type: "Stage PFA",
      logo: "https://www.ocpgroup.ma/themes/custom/ocp_child/logo-white.svg", // Replace with actual OCP logo URL
      description: "Analyse des causes de défaillance des équipements mécaniques pour améliorer performance et fiabilité.",
      achievements: [
        "Découverte le processus de traitement de phosphate dans la laverie",
        "Analyse des causes de défaillance des équipements mécaniques",
        "Création des diagrammes de Pareto pour identifier les causes principales",
        "Propositions et mise en œuvre de solutions pour améliorer performance et fiabilité",
        "Collaboration avec l'équipe de maintenance",
        "Amélioration des processus de maintenance"
      ],
      technologies: ["Pareto","AMDEC","Analyse de défaillance", "Maintenance corrective", "Fiabilité équipements", "maintenance préventive"]
    },
    {
      position: "Stagiaire - Département de Maintenance",
      company: "OCP Phosboucraa",
      location: "Maroc",
      period: "Juil 2023 – Août 2023",
      type: "Stage d'initiation",
      logo: "https://www.ocpgroup.ma/themes/custom/ocp_child/logo-white.svg", // Replace with actual OCP logo URL
      description: "Participation à la maintenance préventive et corrective avec acquisition de connaissances pratiques en gestion de maintenance.",
      achievements: [
        "Participation à la maintenance préventive et corrective",
        "Acquisition de connaissances pratiques en gestion de maintenance",
        "Découverte des processus industriels",
        "Formation aux bonnes pratiques de maintenance"
      ],
      technologies: ["Maintenance préventive", "Maintenance corrective", "Gestion maintenance", "Processus industriels"]
    }
  ];

  const getIcon = (index: number) => {
    const icons = [Cog, TrendingUp, Users];
    return icons[index % icons.length];
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Expérience <span className="gradient-primary bg-clip-text text-transparent">Professionnelle</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
            Favoriser l'excellence opérationnelle dans les principales entreprises technologiques 
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getIcon(index);
              return (
                <Card 
                  key={index}
                  className="bg-card border-border hover-glow transition-spring animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Company Logo & Timeline */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="relative w-16 h-16 mb-4">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain rounded-lg border border-border/50 bg-background/80 p-2 shadow-md hover:shadow-lg transition-all duration-300"
                            onError={(e) => {
                              // Fallback to icon if logo fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling.style.display = 'flex'; 
                            }}
                          />
                          <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center shadow-glow absolute top-0 left-0" style={{ display: 'none' }}>
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                        </div>
                        {index < experiences.length - 1 && (
                          <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        {/* Header */}
                        <div className="space-y-3">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                            <h3 className="text-2xl font-bold text-foreground">
                              {exp.position}
                            </h3>
                            <Badge variant="secondary" className="w-fit">
                              {exp.type.toUpperCase()}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4" />
                              <span className="font-medium text-primary">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Réalisations</h4>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Technologies Utilisées</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ExperienceSection;