import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle, Mail, Clock, Globe } from "lucide-react";

interface ContactPageProps {
  phoneNumber?: string;
}

const ContactPage = ({ phoneNumber = "+91 8829922256" }: ContactPageProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:jyotishsamadhan@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            संपर्क करें
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            किसी भी समस्या के लिए तुरंत संपर्क करें। हम 24/7 आपकी सेवा में उपलब्ध हैं।
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-saffron to-golden text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <Phone size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">तुरंत कॉल करें</h3>
            <p className="text-white/90 mb-4">सीधे बात करें</p>
            <Button variant="consult" size="sm" onClick={handleCall} className="w-full">
              {phoneNumber}
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-emerald to-golden text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp चैट</h3>
            <p className="text-white/90 mb-4">मैसेज करें</p>
            <Button variant="consult" size="sm" onClick={handleWhatsApp} className="w-full">
              WhatsApp
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-deep-orange to-mystic-purple text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <Mail size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ईमेल करें</h3>
            <p className="text-white/90 mb-4">लिखित परामर्श</p>
            <Button variant="consult" size="sm" onClick={handleEmail} className="w-full">
              Email भेजें
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-mystic-purple to-royal-red text-white hover:shadow-warm transform hover:scale-105 transition-all duration-300">
            <Globe size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ऑनलाइन सेवा</h3>
            <p className="text-white/90 mb-4">वीडियो कॉल</p>
            <Button variant="consult" size="sm" onClick={handleCall} className="w-full">
              ऑनलाइन मीट
            </Button>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-white/95 backdrop-blur-sm border-2 border-golden/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">संपर्क विवरण</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-saffron mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">फोन नंबर</h3>
                  <p className="text-muted-foreground">{phoneNumber}</p>
                  <p className="text-sm text-muted-foreground">24/7 उपलब्ध</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="text-emerald mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">{phoneNumber}</p>
                  <p className="text-sm text-muted-foreground">तुरंत उत्तर</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-deep-orange mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">ईमेल</h3>
                  <p className="text-muted-foreground">jyotishsamadhan@gmail.com</p>
                  <p className="text-sm text-muted-foreground">24 घंटे में जवाब</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-mystic-purple mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">सेवा क्षेत्र</h3>
                  <p className="text-muted-foreground">पूरे भारत में उपलब्ध</p>
                  <p className="text-sm text-muted-foreground">सभी राज्यों में सेवा</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 backdrop-blur-sm border-2 border-golden/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">समय सारणी</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-golden" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">सोमवार - शुक्रवार</h3>
                  <p className="text-muted-foreground">सुबह 6:00 AM - रात 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="text-golden" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">शनिवार - रविवार</h3>
                  <p className="text-muted-foreground">सुबह 7:00 AM - रात 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="text-golden" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">आपातकालीन सेवा</h3>
                  <p className="text-muted-foreground">24/7 उपलब्ध</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-golden/10 to-saffron/10 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">विशेष नोट</h3>
              <p className="text-muted-foreground text-sm">
                पहली बार कॉल करने पर परामर्श बिल्कुल निःशुल्क है। 
                आपकी गोपनीयता हमारी प्राथमिकता है।
              </p>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-royal-red to-deep-orange text-white">
            <h2 className="text-3xl font-bold mb-4">
              आपातकालीन सहायता
            </h2>
            <p className="text-xl mb-6">
              तुरंत समाधान चाहिए? 24/7 उपलब्ध आपातकालीन सेवा
            </p>
            <div className="text-4xl font-bold text-golden mb-6 animate-pulse">
              {phoneNumber}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="golden" 
                size="xl" 
                onClick={handleCall}
                className="text-xl px-12 py-6 animate-pulse"
              >
                तुरंत कॉल करें
              </Button>
              <Button 
                variant="consult" 
                size="xl" 
                onClick={handleWhatsApp}
                className="text-xl px-12 py-6"
              >
                WhatsApp मैसेज
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;