import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Home, Baby, Shield, Zap } from "lucide-react";

interface SpecializationsSectionProps {
  phoneNumber: string;
}

export const SpecializationsSection = ({ phoneNumber }: SpecializationsSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const specializations = [
    {
      icon: <Heart className="text-royal-red" size={40} />,
      title: "Love Problem Solution",
      description: "Get your love back, love marriage, one-sided love solution.",
      color: "from-royal-red to-saffron"
    },
    {
      icon: <TrendingUp className="text-emerald" size={40} />,
      title: "Business Growth",
      description: "Business growth, financial problems, job problems.",
      color: "from-emerald to-golden"
    },
    {
      icon: <Home className="text-mystic-purple" size={40} />,
      title: "Family Problems",
      description: "Family disputes, relationship issues, mother-in-law problems.",
      color: "from-mystic-purple to-deep-orange"
    },
    {
      icon: <Baby className="text-saffron" size={40} />,
      title: "Childbirth Issues",
      description: "Childbirth prediction, childbirth problems, pregnancy problems.",
      color: "from-saffron to-golden"
    },
    {
      icon: <Shield className="text-deep-orange" size={40} />,
      title: "Black Magic Removal",
      description: "Removal of black magic, evil eye, protection from evil spirits.",
      color: "from-deep-orange to-royal-red"
    },
    {
      icon: <Zap className="text-golden" size={40} />,
      title: "Instant Solution",
      description: "Results in 2-7 days, emergency problem solutions.",
      color: "from-golden to-saffron"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-golden/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Specializations
          </h2>
          <p className="text-xl text-muted-foreground">
            Special solutions for all life problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specializations.map((spec, index) => (
            <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm border-2 border-golden/20 hover:border-golden/40 transition-all duration-300 hover:shadow-warm transform hover:scale-105">
              <div className={`bg-gradient-to-r ${spec.color} p-4 rounded-lg mb-4 text-white flex items-center justify-center w-fit mx-auto`}>
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                {spec.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                {spec.description}
              </p>
              <Button 
                variant="consult" 
                size="sm" 
                onClick={handleCall}
                className="w-full"
              >
                Consult Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
