import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Process Optimization",
      description: "Expert in lean manufacturing and continuous improvement methodologies"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams to achieve operational excellence"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Developing creative solutions to complex engineering challenges"
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Using statistical analysis to drive informed decision-making"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With over 8 years of experience in industrial engineering, I specialize in transforming 
              complex operational challenges into streamlined, efficient processes that drive business success.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-foreground">My Engineering Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My passion for industrial engineering began during my undergraduate studies, where I discovered 
                the perfect intersection of technology, problem-solving, and business optimization. Since then, 
                I've dedicated my career to developing innovative solutions that improve efficiency, reduce costs, 
                and enhance quality across various industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of data-driven decision making and collaborative problem-solving. 
                My approach combines traditional industrial engineering principles with modern technology 
                and agile methodologies to deliver measurable results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">8+ years of industrial engineering experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Led 15+ process improvement projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Achieved 25% average efficiency improvements</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={index} className="bg-card/50 border-border/50 hover-glow transition-spring">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{highlight.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
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