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
      title: "प्रेम समस्या समाधान",
      description: "वश में करना, प्रेम विवाह, एकतरफा प्यार का समाधान",
      color: "from-royal-red to-saffron"
    },
    {
      icon: <TrendingUp className="text-emerald" size={40} />,
      title: "व्यापार वृद्धि",
      description: "व्यापार में तरक्की, आर्थिक समस्या, नौकरी की समस्या",
      color: "from-emerald to-golden"
    },
    {
      icon: <Home className="text-mystic-purple" size={40} />,
      title: "पारिवारिक समस्या",
      description: "घरेलू कलह, रिश्तों में मतभेद, सास-बहू की समस्या",
      color: "from-mystic-purple to-deep-orange"
    },
    {
      icon: <Baby className="text-saffron" size={40} />,
      title: "संतान प्राप्ति",
      description: "संतान योग, संतान की समस्या, गर्भधारण की समस्या",
      color: "from-saffron to-golden"
    },
    {
      icon: <Shield className="text-deep-orange" size={40} />,
      title: "काला जादू निवारण",
      description: "टोना-टोटका, नजर लगना, बुरी शक्तियों से सुरक्षा",
      color: "from-deep-orange to-royal-red"
    },
    {
      icon: <Zap className="text-golden" size={40} />,
      title: "तुरंत समाधान",
      description: "2-7 दिन में परिणाम, आपातकालीन समस्याओं का समाधान",
      color: "from-golden to-saffron"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-golden/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            हमारी विशेषताएं
          </h2>
          <p className="text-xl text-muted-foreground">
            जीवन की सभी समस्याओं के लिए विशेष उपाय
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
                सलाह लें
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};