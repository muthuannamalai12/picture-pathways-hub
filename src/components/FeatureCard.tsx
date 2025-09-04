import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ icon: Icon, title, description, image }: FeatureCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-elegant hover:scale-105">
      <CardContent className="p-6">
        <div className="relative overflow-hidden rounded-lg mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;