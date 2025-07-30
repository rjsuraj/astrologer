import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award, Users } from "lucide-react";

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Star className="text-golden" size={48} />,
      title: "25+ वर्षों का अनुभव",
      description: "ज्योतिष विद्या में गहरा अध्ययन और व्यावहारिक अनुभव"
    },
    {
      icon: <Award className="text-golden" size={48} />,
      title: "100% गारंटीशुदा समाधान",
      description: "सभी समस्याओं का पूर्ण समाधान या पैसे वापस की गारंटी"
    },
    {
      icon: <Users className="text-golden" size={48} />,
      title: "10,000+ संतुष्ट ग्राहक",
      description: "हजारों परिवारों में खुशियां लाने का गौरवशाली इतिहास"
    },
    {
      icon: <CheckCircle className="text-golden" size={48} />,
      title: "24/7 सेवा उपलब्ध",
      description: "किसी भी समय संपर्क करें, तुरंत सलाह और समाधान"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-mystic-purple/10 to-deep-orange/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            हमें क्यों चुनें?
          </h2>
          <p className="text-xl text-muted-foreground">
            विश्वसनीयता और परिणाम हमारी पहचान है
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-white/95 backdrop-blur-sm border-2 border-golden/20 hover:border-golden/40 transition-all duration-300 hover:shadow-warm transform hover:scale-105">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};