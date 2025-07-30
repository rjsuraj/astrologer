import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

interface ContactSectionProps {
  phoneNumber: string;
}

export const ContactSection = ({ phoneNumber }: ContactSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-deep-orange to-mystic-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            तुरंत सम्पर्क करें
          </h2>
          <p className="text-xl text-white/90">
            समस्या का तुरंत समाधान पाने के लिए अभी संपर्क करें
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <Phone className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">फोन कॉल</h3>
            <p className="text-white/80 mb-4">तुरंत बात करें</p>
            <Button variant="golden" size="sm" onClick={handleCall} className="w-full">
              Call Now
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <MessageCircle className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">WhatsApp</h3>
            <p className="text-white/80 mb-4">चैट करें</p>
            <Button variant="prosperity" size="sm" onClick={handleWhatsApp} className="w-full">
              WhatsApp
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <Clock className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">समय</h3>
            <p className="text-white/80">24/7 उपलब्ध</p>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <MapPin className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">सेवा क्षेत्र</h3>
            <p className="text-white/80">पूरे भारत में</p>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="text-6xl font-bold text-golden mb-4 animate-pulse">
            {phoneNumber}
          </div>
          <Button 
            variant="golden" 
            size="xl" 
            onClick={handleCall}
            className="text-2xl px-16 py-8 animate-pulse"
          >
            अभी कॉल करें - निःशुल्क सलाह
          </Button>
        </div>
      </div>
    </section>
  );
};