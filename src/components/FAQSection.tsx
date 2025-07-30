import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "क्या आपका समाधान 100% गारंटीशुदा है?",
      answer: "जी हां, हमारे सभी उपाय और समाधान 100% गारंटीशुदा हैं। यदि निर्धारित समय में परिणाम नहीं मिलता तो हम पूरा पैसा वापस करते हैं।"
    },
    {
      question: "कितने दिन में परिणाम मिलता है?",
      answer: "आमतौर पर 2-7 दिन में प्रारंभिक परिणाम दिखने लगते हैं। पूर्ण समाधान 15-21 दिन में मिल जाता है। कुछ गंभीर मामलों में 1-2 महीने लग सकते हैं।"
    },
    {
      question: "क्या आपकी सेवाएं पूरे भारत में उपलब्ध हैं?",
      answer: "जी हां, हमारी सेवाएं पूरे भारत में उपलब्ध हैं। फोन पर परामर्श लेकर आप घर बैठे ही सभी उपाय कर सकते हैं।"
    },
    {
      question: "परामर्श का शुल्क कितना है?",
      answer: "पहली बार बात करने पर परामर्श बिल्कुल निःशुल्क है। समाधान के लिए यज्ञ-हवन की सामग्री का न्यूनतम शुल्क लगता है।"
    },
    {
      question: "क्या यह सब सुरक्षित है?",
      answer: "हमारे सभी उपाय पूर्णतः सुरक्षित और वैदिक हैं। कोई भी नुकसान या दुष्प्रभाव नहीं होता। सभी उपाय धार्मिक और आध्यात्मिक हैं।"
    },
    {
      question: "क्या दूर से भी उपाय किया जा सकता है?",
      answer: "जी हां, दूर से भी सभी उपाय किए जा सकते हैं। नाम, पिता का नाम और जन्म तिथि से ही सभी उपाय संभव हैं।"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          <p className="text-xl text-muted-foreground">
            आपके मन में आने वाले सभी सवालों के जवाब
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 border-golden/20">
              <Button
                variant="ghost"
                className="w-full p-6 text-left justify-between h-auto hover:bg-golden/10"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="text-saffron" size={24} />
                ) : (
                  <ChevronDown className="text-saffron" size={24} />
                )}
              </Button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};