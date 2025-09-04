import { Award, Clock, Globe, Heart } from "lucide-react";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "150+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Heart, label: "Happy Clients", value: "200+" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to stay ahead of the curve and deliver cutting-edge solutions."
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from working closely with our clients, understanding their needs, and building solutions together."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality in everything we do, from initial concept to final implementation."
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honest communication, and delivering on our promises every single time."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="About NexusStudio"
        subtitle="Crafting Digital Excellence Since 2016"
        description="We're a passionate team of designers, developers, and strategists dedicated to transforming businesses through innovative digital solutions."
        backgroundImage={heroImage}
      />

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Story</span>
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Founded in 2016, NexusStudio began as a small team of passionate creatives who believed technology could solve real business problems. What started in a garage has grown into a trusted partner for businesses worldwide.
              </p>
              <p>
                Today, we combine years of experience with fresh perspectives to deliver solutions that not only meet current needs but anticipate future challenges. Our approach is simple: listen, understand, create, and exceed expectations.
              </p>
              <p>
                We've had the privilege of working with startups launching their first products, established companies modernizing their operations, and everything in between. Each project teaches us something new and makes us better partners for the next challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-background/10 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our diverse team brings together expertise from design, development, strategy, and beyond. We're united by our passion for creating exceptional digital experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              From UX designers who understand user psychology to developers who speak multiple programming languages fluently, each team member contributes unique skills that make our collective work stronger.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;