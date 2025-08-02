import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Eye, CheckCircle } from "lucide-react";

interface ProcessSectionProps {
  phoneNumber: string;
}

export const ProcessSection = ({ phoneNumber }: ProcessSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const steps = [
    {
      icon: <Phone className="text-white" size={32} />,
      title: "Call Us",
      description: "Tell us your problem",
      color: "bg-gradient-to-r from-deep-orange to-saffron"
    },
    {
      icon: <MessageSquare className="text-white" size={32} />,
      title: "Share Your Problem",
      description: "Explain your problem in detail",
      color: "bg-gradient-to-r from-saffron to-golden"
    },
    {
      icon: <Eye className="text-white" size={32} />,
      title: "Astrological Analysis",
      description: "Analysis of your horoscope and problem",
      color: "bg-gradient-to-r from-mystic-purple to-deep-orange"
    },
    {
      icon: <CheckCircle className="text-white" size={32} />,
      title: "Get Solution",
      description: "Complete solution in 2-7 days",
      color: "bg-gradient-to-r from-emerald to-golden"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground">
            Get your problem solved in just 4 easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <Card className="p-6 bg-card backdrop-blur-sm border-2 border-emerald/30 hover:border-emerald/50 transition-all duration-300 hover:shadow-warm transform hover:scale-105 mb-4">
                <div className={`${step.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-saffron mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="golden" 
            size="xl" 
            onClick={handleCall}
            className="text-md px-12 py-6"
          >
           Start today - {phoneNumber}
          </Button>
        </div>
      </div>
    </section>
  );
};
