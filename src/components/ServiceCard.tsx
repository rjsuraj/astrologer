import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  phoneNumber: string;
  variant?: "saffron" | "golden" | "mystical" | "prosperity";
}

export const ServiceCard = ({ 
  title, 
  image, 
  description, 
  phoneNumber, 
  variant = "saffron" 
}: ServiceCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Card className="overflow-hidden bg-card backdrop-blur-sm border-2 border-emerald/30 hover:border-emerald/50 transition-all duration-300 hover:shadow-warm transform hover:scale-105">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="space-y-3">
          <Button 
            variant={variant} 
            size="lg" 
            onClick={handleCall}
            className="w-full text-lg font-semibold"
          >
            CALL ME {phoneNumber}
          </Button>
          <Button 
            variant="consult" 
            size="lg" 
            onClick={handleCall}
            className="w-full"
          >
            CALL NOW {phoneNumber}
          </Button>
        </div>
      </div>
    </Card>
  );
};