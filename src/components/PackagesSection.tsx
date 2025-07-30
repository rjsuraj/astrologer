import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Star, Gift } from "lucide-react";

interface PackagesSectionProps {
  phoneNumber: string;
}

export const PackagesSection = ({ phoneNumber }: PackagesSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const packages = [
    {
      name: "तत्काल समाधान",
      price: "निःशुल्क परामर्श",
      duration: "30 मिनट",
      features: [
        "फोन पर विस्तृत चर्चा",
        "समस्या का विश्लेषण",
        "तुरंत उपाय बताना",
        "मुफ्त सलाह"
      ],
      color: "from-saffron to-golden",
      popular: false
    },
    {
      name: "संपूर्ण समाधान",
      price: "केवल सामग्री शुल्क",
      duration: "15-21 दिन",
      features: [
        "विस्तृत कुंडली विश्लेषण",
        "विशेष यज्ञ-हवन",
        "रुद्राक्ष और यंत्र",
        "15 दिन तक सहायता"
      ],
      color: "from-deep-orange to-mystic-purple",
      popular: true
    },
    {
      name: "प्रीमियम पैकेज",
      price: "विशेष छूट",
      duration: "1-2 महीने",
      features: [
        "संपूर्ण ज्योतिषीय उपचार",
        "व्यक्तिगत मार्गदर्शन",
        "वास्तु सुधार",
        "आजीवन सहायता"
      ],
      color: "from-emerald to-golden",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-mystic-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            परामर्श पैकेज
          </h2>
          <p className="text-xl text-muted-foreground">
            आपकी आवश्यकता के अनुसार चुनें सबसे उपयुक्त पैकेज
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative p-8 bg-white/95 backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-warm transform hover:scale-105 ${pkg.popular ? 'border-golden shadow-warm scale-105' : 'border-golden/20 hover:border-golden/40'}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-golden to-saffron text-white px-4 py-1">
                  <Star className="mr-1" size={16} />
                  सबसे लोकप्रिय
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className={`bg-gradient-to-r ${pkg.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <Gift className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-saffron mb-2">
                  {pkg.price}
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Clock size={16} className="mr-1" />
                  {pkg.duration}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={pkg.popular ? "golden" : "consult"} 
                size="lg" 
                onClick={handleCall}
                className="w-full"
              >
                <Phone className="mr-2" size={18} />
                अभी संपर्क करें
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};