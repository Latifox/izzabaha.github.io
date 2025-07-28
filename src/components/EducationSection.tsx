import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay
    }
  }
});

const EducationSection = () => {
  const education = [
    {
      degree: "Diplôme d'Ingénieur d'État, Génie Industriel & Numérique",
      school: "École Nationale Supérieure d'Arts et Métiers, Rabat",
      location: "Rabat, Maroc",
      period: "2022 – 2025",
      achievements: [
        "Spécialisation en Génie Industriel"
      ]
    },
    {
      degree: "Classes Préparatoires aux Grandes Écoles (CPGE)",
      school: "Lycée Bab Sahra, Guelmim",
      location: "Guelmim, Maroc", 
      period: "2020 – 2022",
      achievements: [
        "Formation intensive en Physiques et sciences de l'ingénieur.",
        "Préparation au CNC ."
      ]
    },
    {
      degree: "Baccalauréat Scientifique, Option Mathématiques",
      school: "Lycée Ahmed Ben Mohamed Errachdi, Boujdour",
      location: "Boujdour, Maroc",
      period: "2020",
      achievements: [
        "Spécialisation en sciences mathématiques"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
               <span className="gradient-primary bg-clip-text text-transparent">Formation</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Construire une base solide en principes d'ingénierie et méthodologies avancées
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative pl-4 border-l-2 border-dashed border-primary/40 space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-300 relative">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-lg">
                          <GraduationCap className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4" />
                              <span className="font-medium">{edu.school}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Accomplissements</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="mt-1 w-2 h-2 bg-primary rounded-full"></span>
                                <span className="text-sm leading-snug">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
