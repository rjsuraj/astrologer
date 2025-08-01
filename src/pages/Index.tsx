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
import islamicScholar from "@/assets/islamic-scholar.jpg";
import islamicPrayer from "@/assets/islamic-prayer.jpg";
import islamicNumerology from "@/assets/islamic-numerology.jpg";
import islamicFamily from "@/assets/islamic-family.jpg";

const Index = () => {
  const phoneNumber = "+91 8829922256";

  const services = [
    {
      title: "निकाह में बाधा का समाधान",
      image: muslimCoupleHappy,
      description: "इस्लामिक दुआ और वज़ीफा के द्वारा निकाह की बाधाओं का समाधान। हलाल तरीकों से माता-पिता की सहमति और प्रेम विवाह।",
      variant: "mystical" as const
    },
    {
      title: "खोए हुए प्यार की वापसी",
      image: islamicDua,
      description: "क़ुरानी आयतों और पवित्र दुआ के द्वारा खोए हुए प्यार को वापस पाएं। 100% हलाल इस्लामिक तरीका।",
      variant: "saffron" as const
    },
    {
      title: "तलाक से बचाव के उपाय",
      image: islamicPrayer,
      description: "तलाक से बचने के लिए विशेष वज़ीफा और दुआ। पति-पत्नी के बीच मुहब्बत बढ़ाने के इस्लामिक तरीके।",
      variant: "prosperity" as const
    },
    {
      title: "पारिवारिक समस्या का हल",
      image: islamicFamily,
      description: "पारिवारिक कलह, रिश्तेदारों में झगड़े का इस्लामिक समाधान। सुन्नत तरीकों से घर में शांति और खुशहाली।",
      variant: "golden" as const
    },
    {
      title: "व्यापार में बरकत",
      image: islamicNumerology,
      description: "व्यापार में तरक्की और आर्थिक समस्याओं का इस्लामिक समाधान। हलाल कमाई और बरकत के लिए विशेष दुआ।",
      variant: "saffron" as const
    },
    {
      title: "संतान प्राप्ति की दुआ",
      image: islamicScholar,
      description: "औलाद की नेमत पाने के लिए इस्लामिक दुआ और वज़ीफा। नेक संतान और संतान की सुरक्षा के उपाय।",
      variant: "mystical" as const
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            © 2024 मोलाना साहिल खान - प्रसिद्ध मुस्लिम ज्योतिषी | 
            <span className="text-golden font-semibold"> {phoneNumber}</span>
          </p>
          <p className="text-sm mt-2 text-background/80">
            विश्वसनीय इस्लामिक ज्योतिषी द्वारा 100% हलाल और शरीयत अनुकूल समाधान
          </p>
          <p className="text-xs mt-1 text-background/60">
            क़ुरान और सुन्नत के अनुसार समस्याओं का समाधान
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
