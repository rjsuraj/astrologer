import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { SpecializationsSection } from "@/components/SpecializationsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

// Import images
import islamicMosque from "@/assets/islamic-mosque.jpg";
import muslimCoupleHappy from "@/assets/muslim-couple-happy.jpg";
import islamicAstrology from "@/assets/islamic-astrology.jpg";
import islamicDua from "@/assets/islamic-dua.jpg";

const Index = () => {
  const phoneNumber = "+91 8829922256";

  const services = [
    {
      title: "ISLAMIC DUA FOR MARRIAGE",
      image: muslimCoupleHappy,
      description: "इस्लामिक दुआ और वज़ीफा के द्वारा प्रेम विवाह की समस्या का समाधान। हलाल तरीकों से माता-पिता की सहमति पाएं।",
      variant: "mystical" as const
    },
    {
      title: "GET YOUR EX LOVER BACK",
      image: islamicDua,
      description: "क़ुरानी आयतों और दुआ के द्वारा खोए हुए प्यार को वापस पाएं। 100% हलाल और सुरक्षित तरीका।",
      variant: "saffron" as const
    },
    {
      title: "WAZIFA FOR DIVORCE PREVENTION",
      image: islamicAstrology,
      description: "तलाक से बचने के लिए विशेष वज़ीफा और दुआ। पति-पत्नी के बीच प्रेम और समझ बढ़ाने के इस्लामिक तरीके।",
      variant: "prosperity" as const
    },
    {
      title: "FAMILY DISPUTE SOLUTION",
      image: islamicMosque,
      description: "पारिवारिक कलह, रिश्तेदारों में झगड़े, और घर में अशांति का इस्लामिक समाधान। सुन्नत तरीकों से शांति पाएं।",
      variant: "golden" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header phoneNumber={phoneNumber} />
      
      <HeroSection phoneNumber={phoneNumber} />
      
      <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              इस्लामिक ज्योतिष की विशेष सेवाएं
            </h2>
            <p className="text-xl text-muted-foreground">
              हलाल तरीकों से सभी समस्याओं का तुरंत और गारंटीशुदा समाधान - मोलाना साहिल खान
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
                phoneNumber={phoneNumber}
                variant={service.variant}
              />
            ))}
          </div>
        </div>
      </section>
      
      <WhyChooseUsSection />
      
      <SpecializationsSection phoneNumber={phoneNumber} />
      
      <ProcessSection phoneNumber={phoneNumber} />
      
      <PackagesSection phoneNumber={phoneNumber} />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <ContactSection phoneNumber={phoneNumber} />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 मोलाना साहिल खान - इस्लामिक ज्योतिष विशेषज्ञ | 
            <span className="text-golden font-semibold"> {phoneNumber}</span>
          </p>
          <p className="text-sm mt-2 text-background/80">
            विश्वसनीय इस्लामिक ज्योतिषी द्वारा 100% हलाल और गारंटीशुदा समाधान
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
