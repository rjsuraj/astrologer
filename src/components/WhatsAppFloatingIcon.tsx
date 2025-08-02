import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppFloatingIconProps {
  phoneNumber: string;
}

export const WhatsAppFloatingIcon = ({
  phoneNumber,
}: WhatsAppFloatingIconProps) => {
  const handleWhatsAppClick = () => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${formattedPhoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-10 z-50">
      <Button
        size="icon"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="w-24 h-24 !w-[55px] !h-[55px]" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>

    </div>
  );
};