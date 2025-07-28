import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Industrial Engineering",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      achievements: [
        "Graduated Summa Cum Laude",
        "Research in Supply Chain Optimization",
        "Teaching Assistant for Operations Research"
      ]
    },
    {
      degree: "Bachelor of Science in Industrial Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA", 
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List (6 semesters)",
        "President of Industrial Engineering Society",
        "Capstone Project: Warehouse Automation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Building a strong foundation in engineering principles and advanced methodologies
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover-glow transition-spring animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <GraduationCap className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <div className="space-y-2">
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
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="text-primary font-medium">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <div 
                              key={achievementIndex}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;