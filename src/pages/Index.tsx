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
import marriageSolution from "@/assets/marriage-solution.jpg";
import businessProsperity from "@/assets/business-prosperity.jpg";
import loveSolution from "@/assets/love-solution.jpg";
import astrologerConsultation from "@/assets/astrologer-consultation.jpg";

const Index = () => {
  const phoneNumber = "+91 8829922256";

  const services = [
    {
      title: "LOVE MARRIAGE SOLUTION",
      image: marriageSolution,
      description: "प्रेम विवाह की समस्या, माता-पिता की सहमति, जाति-पाति की समस्या का तुरंत समाधान। 100% गारंटीशुदा परिणाम।",
      variant: "mystical" as const
    },
    {
      title: "GET YOUR EX BACK",
      image: loveSolution,
      description: "बिछड़े हुए प्रेमी-प्रेमिका को वापस पाने का अचूक उपाय। मनचाहे व्यक्ति को वश में करने की विधा।",
      variant: "saffron" as const
    },
    {
      title: "BUSINESS PROSPERITY",
      image: businessProsperity,
      description: "व्यापार में वृद्धि, नौकरी की समस्या, आर्थिक परेशानी का समाधान। धन लाभ के लिए विशेष उपाय।",
      variant: "prosperity" as const
    },
    {
      title: "FAMILY PROBLEM SOLUTION",
      image: astrologerConsultation,
      description: "पारिवारिक कलह, पति-पत्नी में अनबन, सास-बहू की समस्या, संतान प्राप्ति के लिए उपाय।",
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
              हमारी विशेष सेवाएं
            </h2>
            <p className="text-xl text-muted-foreground">
              सभी प्रकार की समस्याओं का तुरंत और गारंटीशुदा समाधान
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
            © 2024 ज्योतिष समाधान शाला - सभी अधिकार सुरक्षित | 
            <span className="text-golden font-semibold"> {phoneNumber}</span>
          </p>
          <p className="text-sm mt-2 text-background/80">
            प्रसिद्ध ज्योतिषाचार्य द्वारा 100% गारंटीशुदा समाधान
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
