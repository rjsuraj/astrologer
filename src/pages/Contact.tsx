import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle, Mail, Clock, Globe } from "lucide-react";
interface ContactPageProps {
  phoneNumber?: string;
}
const ContactPage = ({
  phoneNumber = "+91 8890488299"
}: ContactPageProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };
  const handleEmail = () => {
    window.location.href = 'mailto:jyotishsamadhan@gmail.com';
  };
  return <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Contact Molana Sahil Khan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us immediately for any Islamic problem. By the grace of Allah, we are available 24/7 to serve you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-saffron to-golden text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <Phone size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Call Immediately</h3>
            <p className="text-white/90 mb-4">Talk directly</p>
            <Button variant="consult" size="sm" onClick={handleCall} className="w-full">
              {phoneNumber}
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-emerald to-golden text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp Chat</h3>
            <p className="text-white/90 mb-4">Send a message</p>
            <Button variant="consult" size="sm" onClick={handleWhatsApp} className="w-full">
              WhatsApp
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-deep-orange to-mystic-purple text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <Mail size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-white/90 mb-4">Written consultation</p>
            <Button variant="consult" size="sm" onClick={handleEmail} className="w-full">
              Send Email
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-mystic-purple to-royal-red text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <Globe size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Online Service</h3>
            <p className="text-white/90 mb-4">Video call</p>
            <Button variant="consult" size="sm" onClick={handleCall} className="w-full">
              Online Meet
            </Button>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 backdrop-blur-sm border-2 border-golden/20 bg-lime-950">
            <h2 className="text-3xl font-bold text-foreground mb-6">Molana Sahil Khan Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-saffron mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Phone Number</h3>
                  <p className="text-muted-foreground">{phoneNumber}</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="text-emerald mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">{phoneNumber}</p>
                  <p className="text-sm text-muted-foreground">Instant reply</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-deep-orange mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">jyotishsamadhan@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-mystic-purple mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Islamic Service Area</h3>
                  <p className="text-muted-foreground">Available all over India</p>
                  <p className="text-sm text-muted-foreground">For all Muslim brothers and sisters</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 backdrop-blur-sm border-2 border-golden/20 bg-lime-950">
            <h2 className="text-3xl font-bold text-foreground mb-6">Timetable</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-golden" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Monday - Friday</h3>
                  <p className="text-muted-foreground">6:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="text-golden" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Saturday - Sunday</h3>
                  <p className="text-muted-foreground">7:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="text-golden" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Emergency Service</h3>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-golden/10 to-saffron/10 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Islamic Guidance</h3>
              <p className="text-muted-foreground text-sm">
                The first Islamic consultation is absolutely free. 
                Your privacy is our priority after Allah. All solutions are Sharia-compliant.
              </p>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-royal-red to-deep-orange text-white">
            <h2 className="text-3xl font-bold mb-4">
              Emergency Islamic Assistance
            </h2>
            <p className="text-xl mb-6">
              Need an immediate Islamic solution? Service available 24/7 by the grace of Allah
            </p>
            <div className="text-4xl font-bold text-golden mb-6 animate-pulse">
              {phoneNumber}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="golden" size="xl" onClick={handleCall} className="text-xl px-12 py-6 animate-pulse">
                Call Immediately
              </Button>
              <Button variant="consult" size="xl" onClick={handleWhatsApp} className="text-xl px-12 py-6">
                WhatsApp Message
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};
export default ContactPage;