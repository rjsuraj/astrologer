import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, TrendingUp } from "lucide-react";
import prayingMuslim from "@/assets/muslim-praying-sujud-posture.jpg";

interface HeroSectionProps {
  phoneNumber: string;
}

export const HeroSection = ({
  phoneNumber
}: HeroSectionProps) => {
  const handleWhatsAppClick = () => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${formattedPhoneNumber}`, "_blank");
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${prayingMuslim})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-golden">Famous Muslim Astrologer</span>
            <span className="block mt-2">Molana Sahil Khan</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Marriage Problems • Islamic Love Solutions • Business Prosperity • Job Issues • Family Peace
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="golden" size="xl" onClick={handleWhatsAppClick} className="text-xl px-12 py-6 animate-pulse">
              Call here: {phoneNumber}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">25+</div>
              <div className="text-white/80">Years of Islamic Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">10,000+</div>
              <div className="text-white/80">Happy Muslim Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">100%</div>
              <div className="text-white/80">Halal Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">24/7</div>
              <div className="text-white/80">Islamic Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
