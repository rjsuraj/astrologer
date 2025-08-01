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
            Contact Us Immediately
          </h2>
          <p className="text-xl text-white/90">
            Contact us now to get an immediate solution to your problem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <Phone className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">Phone Call</h3>
            <p className="text-white/80 mb-4">Talk to us now</p>
            <Button variant="golden" size="sm" onClick={handleCall} className="w-full">
              Call Now
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <MessageCircle className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">WhatsApp</h3>
            <p className="text-white/80 mb-4">Chat with us</p>
            <Button variant="prosperity" size="sm" onClick={handleWhatsApp} className="w-full">
              WhatsApp
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <Clock className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">Timings</h3>
            <p className="text-white/80">Available 24/7</p>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <MapPin className="mx-auto mb-4 text-golden" size={48} />
            <h3 className="text-lg font-semibold mb-2 text-white">Service Area</h3>
            <p className="text-white/80">Across India</p>
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
            className="text-md px-8 py-8 animate-pulse"
          >
            Call Now - Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
