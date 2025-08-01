import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, TrendingUp } from "lucide-react";
interface HeroSectionProps {
  phoneNumber: string;
}
export const HeroSection = ({
  phoneNumber
}: HeroSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return <section className="relative bg-gradient-to-br from-mystic-purple via-deep-orange to-saffron min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="block text-golden">प्रसिद्ध मुस्लिम ज्योतिषी</span>
            <span className="block mt-2">मोलाना साहिल खान</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            निकाह की समस्या • इस्लामिक प्रेम समाधान • व्यापार में बरकत • नौकरी की समस्या • पारिवारिक अमन चैन
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="golden" size="xl" onClick={handleCall} className="text-xl px-12 py-6 animate-pulse">
              इन्शा अल्लाह तुरंत सम्पर्क करें: {phoneNumber}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">25+</div>
              <div className="text-white/80">साल का इस्लामिक अनुभव</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">10,000+</div>
              <div className="text-white/80">खुश मुस्लिम परिवार</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">100%</div>
              <div className="text-white/80">हलाल समाधान</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">24/7</div>
              <div className="text-white/80">इस्लामिक सेवा</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};