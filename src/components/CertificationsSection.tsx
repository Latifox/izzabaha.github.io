import { Award, CheckCircle, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Analyse de données Google",
      issuer: "Google",
      date: "2024",
      status: "Actif",
      description: "Certificat professionnel en analyse de données couvrant la collecte, le nettoyage, l'analyse et la visualisation de données à l'aide d'outils standard de l'industrie.",
      credentialId: "ZQA53H5YL2GE",
      verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/37Q3FEU3RE7F", // Add your Google verification URL here when available
      skills: ["Analyse de Données", "Visualisation de Données", "Analyse Statistique", "Intelligence d'Affaires"]
    },
    {
      name: "Six Sigma - Yellow Belt",
      issuer: "Institut Six Sigma",
      date: "2024",
      status: "Actif",
      description: "Certification de base en méthodologie Six Sigma pour l'amélioration des processus et la gestion de la qualité.",
      credentialId: "890026",
      verificationUrl: "https://www.6sigmastudy.com/certification/verify?type=SSYB&number=890026",
      skills: ["Amélioration des Processus", "Gestion de la Qualité", "DMAIC", "Outils Statistiques"]
    },
    {
      name: "Formation Power BI",
      issuer: "Orange",
      date: "2023",
      status: "Actif", 
      description: "Formation complète sur les fonctionnalités avancées de Microsoft Excel, la programmation VBA et Power BI pour l'intelligence d'affaires.",
      credentialId: "ORANGE-EVPBI-2023",
      verificationUrl: "https://media.licdn.com/dms/image/v2/D4E22AQHNSg6m2ElMtw/feedshare-shrink_800/feedshare-shrink_800/0/1706460830258?e=1756339200&v=beta&t=hdACQXOvSl826MC3SR20_sRrCSY3E79-NNXdj-uH1C8", // Add Orange verification URL here when available
      skills: ["Excel Avancé", "Programmation VBA", "Power BI", "Modélisation de Données"]
    },
    {
      name: "Développeur Power BI",
      issuer: "365 Data Science",
      date: "2023",
      status: "Actif",
      description: "Certification spécialisée en développement Power BI, programmation DAX et solutions avancées d'intelligence d'affaires.",
      credentialId: "CC-8C6C5952B4",
      verificationUrl: "https://learn.365datascience.com/certificates/CC-8C6C5952B4/", // Add 365 Data Science verification URL here when available
      skills: ["Développement Power BI", "DAX", "Modélisation de Données", "Intelligence d'Affaires"]
    },
    {
      name: "Excel/VBA for Creative Problem Solving ",
      issuer: "Coursera",
      date: "2024",
      status: "Actif",
      description: "Maîtrise des tableaux, chaînes de texte, automatisation de tâches Excel et création de formulaires interactifs via VBA.",
      credentialId: "AE5BCXUG55UQ",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/AE5BCXUG55UQ", // Add your Google verification URL here when available
      skills: ["Spreadsheet Software", "Visual Basic (Programming Language)", "Automation", "Data Structures", "Excel Macros", "Data Import/Export"]
    }
  ];



  const handleVerification = (cert) => {
    if (cert.verificationUrl) {
      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback: show credential ID for manual verification
      alert(`ID du diplôme : ${cert.credentialId}\nVeuillez vérifier manuellement sur le site web de ${cert.issuer}.`);
    }
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
             Mes Certifications  <span className="gradient-primary bg-clip-text text-transparent"></span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Une vitrine de mon développement professionnel et de mon engagement envers l'apprentissage continu.
            </p>
          </div>

          {/* Active Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications Actives
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

                      {/* Verification Status */}
                      <div className="flex items-center gap-2">
                        {cert.verificationUrl ? (
                          <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Vérifiable en Ligne
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            Vérification Manuelle Requise
                          </Badge>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Obtenu : {cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="h-4 w-4" />
                          <span>ID : {cert.credentialId}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Compétences associées :</p>
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
                        onClick={() => handleVerification(cert)}
                        variant="outline" 
                        size="sm" 
                        className={`w-full transition-spring ${
                          cert.verificationUrl 
                            ? "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" 
                            : "border-muted-foreground/30 text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {cert.verificationUrl ? "Vérifier en Ligne" : "Voir le Diplôme"}
                      </Button>
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