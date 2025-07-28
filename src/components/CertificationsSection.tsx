import { Award, CheckCircle, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Lean Six Sigma Black Belt",
      issuer: "American Society for Quality (ASQ)",
      date: "2021",
      status: "Active",
      description: "Advanced certification in process improvement methodologies, statistical analysis, and project management for quality enhancement.",
      credentialId: "ASQ-LSSBB-2021-4789",
      skills: ["Process Improvement", "Statistical Analysis", "Project Management", "Quality Control"]
    },
    {
      name: "Project Management Professional (PMP)",
      issuer: "Project Management Institute (PMI)",
      date: "2020",
      status: "Active",
      description: "Globally recognized certification demonstrating competency in leading and directing project teams.",
      credentialId: "PMI-PMP-2020-7845",
      skills: ["Project Planning", "Risk Management", "Team Leadership", "Stakeholder Management"]
    },
    {
      name: "Certified Manufacturing Engineer (CMfgE)",
      issuer: "Society of Manufacturing Engineers (SME)",
      date: "2019",
      status: "Active", 
      description: "Professional certification validating expertise in manufacturing processes, systems, and technologies.",
      credentialId: "SME-CMfgE-2019-3621",
      skills: ["Manufacturing Systems", "Production Planning", "Quality Systems", "Process Design"]
    },
    {
      name: "Professional Engineer (PE) - Industrial",
      issuer: "California Board of Professional Engineers",
      date: "2022",
      status: "Active",
      description: "State licensure demonstrating competency to practice engineering and sign off on engineering plans.",
      credentialId: "CA-PE-IND-2022-9876",
      skills: ["Engineering Ethics", "Public Safety", "Technical Leadership", "Regulatory Compliance"]
    }
  ];

  const upcomingCertifications = [
    {
      name: "Certified Supply Chain Professional (CSCP)",
      issuer: "APICS",
      expectedDate: "Q2 2024",
      progress: 75
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      expectedDate: "Q1 2024",
      progress: 60
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Certifications & <span className="gradient-primary bg-clip-text text-transparent">Credentials</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Professional certifications demonstrating expertise and commitment to continuous learning
            </p>
          </div>

          {/* Active Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Active Certifications
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border hover-glow transition-spring animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {cert.name}
                          </h4>
                          <p className="text-primary font-medium">{cert.issuer}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {cert.status}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Obtained: {cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="h-4 w-4" />
                          <span>ID: {cert.credentialId}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Related Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex}
                              variant="outline" 
                              className="text-xs border-primary/30 text-primary"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify Credential
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              In Progress
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingCertifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 border-border/50 hover-glow transition-spring animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-primary text-sm">{cert.issuer}</p>
                        <p className="text-muted-foreground text-sm">Expected: {cert.expectedDate}</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium text-primary">{cert.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${cert.progress}%`,
                              animationDelay: `${1 + (index * 0.3)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;