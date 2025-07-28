import { Briefcase, Calendar, MapPin, TrendingUp, Users, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Senior Industrial Engineer",
      company: "Tesla, Inc.",
      location: "Fremont, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead process optimization initiatives for Model 3 and Model Y production lines, focusing on automation integration and quality improvements.",
      achievements: [
        "Reduced production cycle time by 18% through line rebalancing",
        "Implemented predictive maintenance system reducing downtime by 25%", 
        "Led cross-functional team of 12 engineers on battery pack assembly optimization"
      ],
      technologies: ["Lean Manufacturing", "Six Sigma", "AutoCAD", "Python", "SAP"]
    },
    {
      position: "Industrial Engineer",
      company: "Boeing Commercial Airplanes",
      location: "Seattle, WA", 
      period: "2020 - 2022",
      type: "Full-time",
      description: "Optimized aircraft assembly processes and developed time studies for 737 MAX production line to improve efficiency and reduce manufacturing costs.",
      achievements: [
        "Designed new wing assembly process reducing labor hours by 15%",
        "Conducted ergonomic assessments improving worker safety scores by 30%",
        "Saved $2.3M annually through waste reduction initiatives"
      ],
      technologies: ["CATIA", "Minitab", "Arena Simulation", "MS Project", "Kaizen"]
    },
    {
      position: "Junior Process Engineer",
      company: "Intel Corporation",
      location: "Santa Clara, CA",
      period: "2018 - 2020",
      type: "Full-time",
      description: "Supported semiconductor manufacturing operations with focus on yield improvement and process standardization across multiple production facilities.",
      achievements: [
        "Improved chip yield by 8% through statistical process control",
        "Standardized cleanroom procedures across 3 manufacturing sites",
        "Trained 25+ technicians on new quality protocols"
      ],
      technologies: ["JMP", "SPC", "DOE", "FMEA", "ISO Standards"]
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
              Professional <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Driving operational excellence across leading technology companies
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
                      {/* Icon & Timeline */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-glow mb-4">
                          <Icon className="h-8 w-8 text-primary-foreground" />
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
                              {exp.type}
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
                          <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
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
                          <h4 className="text-lg font-semibold text-foreground mb-3">Technologies & Methods</h4>
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