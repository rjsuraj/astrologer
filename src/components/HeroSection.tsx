import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  phoneNumber: string;
}

export const HeroSection = ({ phoneNumber }: HeroSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="relative bg-gradient-to-br from-mystic-purple via-deep-orange to-saffron min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-golden/20 animate-pulse">
          <Star size={60} />
        </div>
        <div className="absolute top-40 right-32 text-white/20 animate-pulse delay-500">
          <Sparkles size={80} />
        </div>
        <div className="absolute bottom-32 left-32 text-golden/30 animate-pulse delay-1000">
          <Heart size={50} />
        </div>
        <div className="absolute bottom-20 right-20 text-white/20 animate-pulse delay-700">
          <TrendingUp size={70} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-golden">प्रसिद्ध ज्योतिषाचार्य</span>
            <span className="block mt-2">समस्या समाधान गुरुजी</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            विवाह समस्या • प्रेम विवाह • व्यापार वृद्धि • नौकरी समस्या • पारिवारिक समस्या
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="golden" 
              size="xl" 
              onClick={handleCall}
              className="text-xl px-12 py-6 animate-pulse"
            >
              तुरंत सम्पर्क करें: {phoneNumber}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">25+</div>
              <div className="text-white/80">वर्षों का अनुभव</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">10,000+</div>
              <div className="text-white/80">संतुष्ट ग्राहक</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">100%</div>
              <div className="text-white/80">गारंटीशुदा समाधान</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">24/7</div>
              <div className="text-white/80">सेवा उपलब्ध</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};