import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is your Islamic solution 100% Halal?",
      answer: "Yes, all our remedies are completely Halal and Sharia-compliant. By the grace of Allah, all solutions are in accordance with the Quran and Sunnah."
    },
    {
      question: "How many days does it take to get results?",
      answer: "Usually, initial results are visible in 2-7 days. A complete solution is achieved in 15-21 days. In some serious cases, it may take 1-2 months."
    },
    {
      question: "Are your services available all over India?",
      answer: "Yes, our services are available all over India. You can get all the remedies done at home by consulting on the phone."
    },
    {
      question: "What is the fee for Islamic consultation?",
      answer: "The first consultation is absolutely free. For the solution, only a minimum fee is charged for the material of dua and wazifa."
    },
    {
      question: "Is all this Halal and safe?",
      answer: "All our remedies are completely Halal and Sharia-compliant. No haram or un-Islamic method is adopted. All remedies are in accordance with the Quran and Sunnah."
    },
    {
      question: "Can remedies be done from a distance?",
      answer: "Yes, all remedies can be done from a distance. All remedies are possible only with name, father's name and date of birth."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Answers to all your questions
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
