import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, BookOpen, Award, Users } from "lucide-react";
interface AboutPageProps {
  phoneNumber?: string;
}
const AboutPage = ({
  phoneNumber = "+91 8829922256"
}: AboutPageProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About Molana Sahil Khan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 25 years of experience, the famous Muslim astrologer Molana Sahil Khan has solved the problems of thousands of Muslim families with Islamic methods.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 backdrop-blur-sm border-2 border-golden/20 bg-lime-950">
            <h2 className="text-3xl font-bold text-foreground mb-6">Islamic Education and Qualification</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <BookOpen className="text-saffron mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Islamic Astrology Acharya</h3>
                  <p className="text-muted-foreground">Postgraduate in Islamic Studies from Jamia Millia Islamia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="text-saffron mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Quran and Hadith Specialist</h3>
                  <p className="text-muted-foreground">Deep study and knowledge of Quran Sharif and Hadith</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="text-saffron mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Dua and Wazifa Siddha</h3>
                  <p className="text-muted-foreground">Proficiency in special sciences of Islamic dua and wazifa</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 backdrop-blur-sm border-2 border-golden/20 bg-lime-950">
            <h2 className="text-3xl font-bold text-foreground mb-6">Islamic Specializations</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Award className="text-golden mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Nikah Problem Specialist</h3>
                  <p className="text-muted-foreground">Expert in Nikah and relationship problems with Islamic methods</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-golden mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Halal Business Astrology</h3>
                  <p className="text-muted-foreground">Islamic remedies for business prosperity and halal earnings</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-golden mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Instant Beneficial Solutions</h3>
                  <p className="text-muted-foreground">Results visible in 2-7 days with the grace of Allah</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-saffron to-golden text-white">
            <Users size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-white/90">Satisfied Clients</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-deep-orange to-mystic-purple text-white">
            <Award size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-white/90">Years of Experience</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-emerald to-golden text-white">
            <BookOpen size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-white/90">Success Rate</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-mystic-purple to-deep-orange text-white">
            <Phone size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/90">Service Available</div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-golden to-saffron text-white">
            <h2 className="text-3xl font-bold mb-4">
              Contact Today - Insha'Allah
            </h2>
            <p className="text-xl mb-6">
              Call now to get an Islamic solution to your problem - by the grace of Allah
            </p>
            <Button variant="consult" size="xl" onClick={handleCall} className="text-xl px-12 py-6">
              Call: {phoneNumber}
            </Button>
          </Card>
        </div>
      </div>
    </div>;
};
export default AboutPage;