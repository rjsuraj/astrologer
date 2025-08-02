import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award, Users } from "lucide-react";

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Star className="text-golden" size={48} />,
      title: "25+ वर्षों का इस्लामिक अनुभव",
      description: "इस्लामिक ज्योतिष विद्या में गहरा अध्ययन और शरीयत अनुकूल व्यावहारिक अनुभव"
    },
    {
      icon: <Award className="text-golden" size={48} />,
      title: "100% हलाल समाधान",
      description: "क़ुरान और सुन्नत के अनुसार सभी समस्याओं का पूर्ण समाधान - अल्लाह की रहमत से"
    },
    {
      icon: <Users className="text-golden" size={48} />,
      title: "10,000+ खुश मुस्लिम परिवार",
      description: "हजारों मुस्लिम परिवारों में खुशियां और बरकत लाने का गौरवशाली इतिहास"
    },
    {
      icon: <CheckCircle className="text-golden" size={48} />,
      title: "24/7 इस्लामिक सेवा",
      description: "किसी भी समय संपर्क करें, तुरंत इस्लामिक सलाह और हलाल समाधान"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-mystic-purple/10 to-deep-orange/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            मोलाना साहिल खान को क्यों चुनें?
          </h2>
          <p className="text-xl text-muted-foreground">
            इस्लामिक विश्वसनीयता और अल्लाह की रहमत से परिणाम हमारी पहचान है
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-card backdrop-blur-sm border-2 border-emerald/30 hover:border-emerald/50 transition-all duration-300 hover:shadow-warm transform hover:scale-105">
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