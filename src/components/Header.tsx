import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";

interface HeaderProps {
  phoneNumber: string;
}

export const Header = ({ phoneNumber }: HeaderProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header className="bg-gradient-to-r from-deep-orange via-saffron to-golden text-white py-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="text-3xl font-bold tracking-wider flex items-center gap-2">
            <Star className="text-golden animate-pulse" size={32} />
            ज्योतिष समाधान शाला
          </div>
        </div>
        <Button 
          variant="consult" 
          size="lg" 
          onClick={handleCall}
          className="flex items-center gap-2 animate-pulse"
        >
          <Phone size={20} />
          Call: {phoneNumber}
        </Button>
      </div>
    </header>
  );
};