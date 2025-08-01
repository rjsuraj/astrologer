import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, Home, Baby, Shield, Zap, Star, Phone } from "lucide-react";

interface ServicesPageProps {
  phoneNumber?: string;
}

const ServicesPage = ({ phoneNumber = "+91 8829922256" }: ServicesPageProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const services = [
    {
      icon: <Heart className="text-white" size={40} />,
      title: "निकाह की समस्या का समाधान",
      description: "इस्लामिक तरीकों से निकाह, प्रेम विवाह, रिश्तों की समस्याओं का हल",
      features: ["निकाह में बाधा दूर करना", "माता-पिता की सहमति", "इश्क़ की समस्या", "रिश्ता पक्का कराना"],
      color: "from-royal-red to-saffron",
      price: "निःशुल्क परामर्श"
    },
    {
      icon: <TrendingUp className="text-white" size={40} />,
      title: "व्यापार में बरकत",
      description: "हलाल तरीकों से व्यापार में तरक्की, आर्थिक समस्या का समाधान",
      features: ["व्यापार में बरकत", "हलाल नौकरी", "आर्थिक तंगी का हल", "करियर की बरकत"],
      color: "from-emerald to-golden",
      price: "विशेष दुआ"
    },
    {
      icon: <Home className="text-white" size={40} />,
      title: "पारिवारिक अमन चैन",
      description: "घरेलू कलह, पति-पत्नी में अनबन, पारिवारिक समस्याओं का इस्लामिक समाधान",
      features: ["पति-पत्नी में मुहब्बत", "घर में बरकत", "पारिवारिक एकता", "रिश्तों में सुधार"],
      color: "from-mystic-purple to-deep-orange",
      price: "दुआ और वज़ीफा"
    },
    {
      icon: <Baby className="text-white" size={40} />,
      title: "औलाद की नेमत",
      description: "संतान प्राप्ति, गर्भधारण की समस्या का इस्लामिक समाधान",
      features: ["औलाद की दुआ", "गर्भधारण की समस्या", "नेक संतान", "संतान की सुरक्षा"],
      color: "from-saffron to-golden",
      price: "विशेष वज़ीफा"
    },
    {
      icon: <Shield className="text-white" size={40} />,
      title: "नजर और जादू से हिफाजत",
      description: "नजर लगना, जादू-टोना, बुरी नजर से बचाव के इस्लामिक उपाय",
      features: ["नजर का इलाज", "जादू का तोड़", "बुरी शक्ति से बचाव", "इस्लामिक दम"],
      color: "from-deep-orange to-royal-red",
      price: "तुरंत राहत"
    },
    {
      icon: <Zap className="text-white" size={40} />,
      title: "तत्काल समाधान",
      description: "आपातकालीन समस्याओं का इस्लामिक तरीकों से तुरंत समाधान",
      features: ["तत्काल दुआ", "24 घंटे सेवा", "आपातकालीन मदद", "फौरी परिणाम"],
      color: "from-golden to-saffron",
      price: "तत्काल सेवा"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            हमारी इस्लामिक सेवाएं
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            जीवन की सभी समस्याओं के लिए 100% हलाल और शरीयत अनुकूल समाधान - अल्लाह की रहमत से
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm border-2 border-golden/20 hover:border-golden/40 transition-all duration-300 hover:shadow-warm transform hover:scale-105">
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg mb-6 text-white flex items-center justify-center w-fit mx-auto`}>
                {service.icon}
              </div>
              
              <div className="text-center mb-4">
                <Badge className="bg-golden text-white mb-2">
                  {service.price}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <Star className="text-golden mr-2" size={12} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant="consult" 
                size="lg" 
                onClick={handleCall}
                className="w-full"
              >
                <Phone className="mr-2" size={18} />
                सलाह लें
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-deep-orange to-mystic-purple text-white">
            <h2 className="text-3xl font-bold mb-4">
              किसी भी समस्या के लिए तुरंत संपर्क करें - इन्शा अल्लाह
            </h2>
            <p className="text-xl mb-6">
              24/7 उपलब्ध • निःशुल्क परामर्श • हलाल और शरीयत अनुकूल समाधान
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="golden" 
                size="xl" 
                onClick={handleCall}
                className="text-xl px-12 py-6"
              >
                कॉल करें: {phoneNumber}
              </Button>
              <Button 
                variant="consult" 
                size="xl" 
                onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank')}
                className="text-xl px-12 py-6"
              >
                WhatsApp करें
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;