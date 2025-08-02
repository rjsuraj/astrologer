import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, Home, Baby, Shield, Zap, Star, Phone } from "lucide-react";
interface ServicesPageProps {
  phoneNumber?: string;
}
const ServicesPage = ({
  phoneNumber = "+91 8890488299"
}: ServicesPageProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const services = [{
    icon: <Heart className="text-white" size={40} />,
    title: "Marriage Problem Solution",
    description: "Solution to problems in marriage, love marriage, relationships with Islamic methods.",
    features: ["Removing obstacles in marriage", "Parental consent", "Love problems", "Fixing relationships"],
    color: "from-royal-red to-saffron",
    price: "Free Consultation"
  }, {
    icon: <TrendingUp className="text-white" size={40} />,
    title: "Business Prosperity",
    description: "Prosperity in business, solution to financial problems with Halal methods.",
    features: ["Business prosperity", "Halal job", "Solution to financial crisis", "Career prosperity"],
    color: "from-emerald to-golden",
    price: "Special Dua"
  }, {
    icon: <Home className="text-white" size={40} />,
    title: "Family Peace",
    description: "Islamic solution to domestic discord, husband-wife disputes, family problems.",
    features: ["Love between husband and wife", "Prosperity at home", "Family unity", "Improving relationships"],
    color: "from-mystic-purple to-deep-orange",
    price: "Dua and Wazifa"
  }, {
    icon: <Baby className="text-white" size={40} />,
    title: "Blessing of a Child",
    description: "Islamic solution to problems of childbirth, conception.",
    features: ["Prayer for a child", "Conception problems", "Righteous child", "Protection of the child"],
    color: "from-saffron to-golden",
    price: "Special Wazifa"
  }, {
    icon: <Shield className="text-white" size={40} />,
    title: "Protection from Evil Eye and Magic",
    description: "Islamic remedies for evil eye, magic, protection from evil eye.",
    features: ["Cure for evil eye", "Breaking magic spells", "Protection from evil forces", "Islamic dam"],
    color: "from-deep-orange to-royal-red",
    price: "Instant Relief"
  }, {
    icon: <Zap className="text-white" size={40} />,
    title: "Instant Solution",
    description: "Instant solution to emergency problems with Islamic methods.",
    features: ["Instant prayer", "24-hour service", "Emergency help", "Immediate results"],
    color: "from-golden to-saffron",
    price: "Instant Service"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our Islamic Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            100% Halal and Sharia-compliant solutions for all life problems - by the grace of Allah
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="p-6 backdrop-blur-sm border-2 border-golden/20 hover:border-golden/40 transition-all duration-300 hover:shadow-warm transform hover:scale-105 bg-lime-950">
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
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <Star className="text-golden mr-2" size={12} />
                    {feature}
                  </li>)}
              </ul>

              <Button variant="consult" size="lg" onClick={handleCall} className="w-full">
                <Phone className="mr-2" size={18} />
                Consult Now
              </Button>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-deep-orange to-mystic-purple text-white">
            <h2 className="text-3xl font-bold mb-4">
              Contact us immediately for any problem - Insha'Allah
            </h2>
            <p className="text-xl mb-6">
              Available 24/7 • Free Consultation • Halal and Sharia-compliant solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="golden" size="xl" onClick={handleCall} className="text-xl px-12 py-6">
                Call: {phoneNumber}
              </Button>
              <Button variant="consult" size="xl" onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank')} className="text-xl px-12 py-6">
                WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};
export default ServicesPage;