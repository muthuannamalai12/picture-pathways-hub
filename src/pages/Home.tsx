import { Rocket, Users, Target } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import feature1Image from "@/assets/feature-1.jpg";
import feature2Image from "@/assets/feature-2.jpg";
import feature3Image from "@/assets/feature-3.jpg";

const Home = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to deliver solutions that push the boundaries of what's possible in the digital space.",
      image: feature1Image,
    },
    {
      icon: Users,
      title: "Collaborative Excellence",
      description: "Our team works closely with yours to ensure every project reflects your vision while exceeding your expectations.",
      image: feature2Image,
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every strategy we implement is designed to deliver measurable results that drive your business forward.",
      image: feature3Image,
    },
  ];

  const handleGetStarted = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Transform Your Digital Vision"
        subtitle="Next-Generation Solutions"
        description="We craft exceptional digital experiences that elevate your brand and drive meaningful results. From concept to launch, we're your trusted partner in digital innovation."
        backgroundImage={heroImage}
        ctaText="Get Started"
        ctaAction={handleGetStarted}
      />

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">NexusStudio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results that matter to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to bring your vision to life with innovative solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;