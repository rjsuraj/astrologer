import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, BookOpen, Award, Users } from "lucide-react";

interface AboutPageProps {
  phoneNumber?: string;
}

const AboutPage = ({ phoneNumber = "+91 8829922256" }: AboutPageProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            मोलाना साहिल खान के बारे में
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            25+ वर्षों के अनुभव के साथ, प्रसिद्ध मुस्लिम ज्योतिषी मोलाना साहिल खान ने हजारों मुस्लिम परिवारों की समस्याओं का इस्लामिक तरीकों से समाधान किया है
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-white/95 backdrop-blur-sm border-2 border-golden/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">इस्लामिक शिक्षा और योग्यता</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <BookOpen className="text-saffron mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">इस्लामिक ज्योतिष आचार्य</h3>
                  <p className="text-muted-foreground">जामिया मिलिया इस्लामिया से इस्लामिक स्टडीज में स्नातकोत्तर</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="text-saffron mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">क़ुरान और हदीस विशेषज्ञ</h3>
                  <p className="text-muted-foreground">क़ुरान शरीफ और हदीस का गहरा अध्ययन और ज्ञान</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="text-saffron mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">दुआ और वज़ीफा सिद्ध</h3>
                  <p className="text-muted-foreground">इस्लामिक दुआ और वज़ीफा की विशेष विद्याओं में प्रवीणता</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 backdrop-blur-sm border-2 border-golden/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">इस्लामिक विशेषताएं</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Award className="text-golden mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">निकाह की समस्या विशेषज्ञ</h3>
                  <p className="text-muted-foreground">इस्लामिक तरीकों से निकाह और रिश्तों की समस्याओं में सिद्धहस्त</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-golden mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">हलाल व्यापार ज्योतिष</h3>
                  <p className="text-muted-foreground">व्यापार में बरकत और हलाल कमाई के इस्लामिक उपाय</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-golden mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">तुरंत बरकती समाधान</h3>
                  <p className="text-muted-foreground">अल्लाह की रहमत से 2-7 दिन में दिखने वाले परिणाम</p>
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
            <div className="text-white/90">संतुष्ट ग्राहक</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-deep-orange to-mystic-purple text-white">
            <Award size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-white/90">वर्षों का अनुभव</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-emerald to-golden text-white">
            <BookOpen size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-white/90">सफलता दर</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-mystic-purple to-deep-orange text-white">
            <Phone size={48} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/90">सेवा उपलब्ध</div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-golden to-saffron text-white">
            <h2 className="text-3xl font-bold mb-4">
              आज ही संपर्क करें - इन्शा अल्लाह
            </h2>
            <p className="text-xl mb-6">
              अपनी समस्या का इस्लामिक समाधान पाने के लिए अभी कॉल करें - अल्लाह की रहमत से
            </p>
            <Button 
              variant="consult" 
              size="xl" 
              onClick={handleCall}
              className="text-xl px-12 py-6"
            >
              कॉल करें: {phoneNumber}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;