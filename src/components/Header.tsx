import { Button } from "@/components/ui/button";
import { Star, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  phoneNumber: string;
}

export const Header = ({ phoneNumber }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const navLinks = [
    { to: "/", label: "होम" },
    { to: "/about", label: "हमारे बारे में" },
    { to: "/services", label: "सेवाएं" },
    { to: "/contact", label: "संपर्क" }
  ];

  return (
    <header className="bg-gradient-to-r from-deep-orange via-saffron to-golden text-white py-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-bold tracking-wider flex items-center gap-2">
              <Star className="text-golden animate-pulse" size={32} />
              <span className="hidden sm:inline">ज्योतिष समाधान शाला</span>
              <span className="sm:hidden">ज्योतिष</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-medium hover:text-golden transition-colors duration-200 ${
                  location.pathname === link.to ? 'text-golden border-b-2 border-golden' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="consult" 
              size="lg" 
              onClick={handleCall}
              className="hidden sm:flex items-center gap-2 animate-pulse"
            >
              <Phone size={20} />
              <span className="hidden lg:inline">Call: {phoneNumber}</span>
              <span className="lg:hidden">Call</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-golden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-medium hover:text-golden transition-colors duration-200 ${
                    location.pathname === link.to ? 'text-golden' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="consult" 
                size="lg" 
                onClick={handleCall}
                className="mt-4 animate-pulse"
              >
                <Phone size={20} className="mr-2" />
                Call: {phoneNumber}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};