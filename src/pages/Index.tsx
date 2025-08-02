
import { HeroSection } from "@/components/HeroSection";
import BlackMagicSection from "@/components/BlackMagicSection";
import { LostLoveSection } from "@/components/LostLoveSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { SpecializationsSection } from "@/components/SpecializationsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

// Import images and video

import muslimCoupleHappy from "@/assets/muslim-couple-happy.jpg";
import islamicDua from "@/assets/islamic-dua.jpg";
import islamicScholar from "@/assets/islamic-scholar.jpg";
import islamicPrayer from "@/assets/islamic-prayer.jpg";
import islamicNumerology from "@/assets/islamic-numerology.jpg";
import islamicFamily from "@/assets/islamic-family.jpg";
import blackMagicVideo from "@/assets/black_magic.mp4";
import bussinessGrowth from "@/assets/business_growth1.jpg"
import divorceProblem from "@/assets/divorce_problem.jpg"
import lostLove from "@/assets/lost_love.jpg"
import duaChild from "@/assets/dua_child.jpg"

const Index = () => {
  const phoneNumber = "+91 8829922256";

  const services = [
    {
      title: "Marriage Obstacle Solutions",
      image: muslimCoupleHappy,
      description: "Solutions for marriage obstacles through Islamic dua and wazifa. Halal methods for parental consent and love marriage.",
      variant: "mystical" as const
    },
    {
      title: "Return of Lost Love",
      image: lostLove,
      description: "Get your lost love back through Quranic verses and sacred dua. 100% Halal Islamic method.",
      variant: "saffron" as const
    },
    {
      title: "Measures to Prevent Divorce",
      image: divorceProblem,
      description: "Special wazifa and dua to avoid divorce. Islamic methods to increase love between husband and wife.",
      variant: "prosperity" as const
    },
    {
      title: "Family Problem Solutions",
      image: islamicFamily,
      description: "Islamic solutions for family discord and disputes among relatives. Peace and happiness in the home through Sunnah methods.",
      variant: "golden" as const
    },
    {
      title: "Prosperity in Business",
      image: bussinessGrowth,
      description: "Islamic solutions for business progress and financial problems. Special dua for halal earnings and prosperity.",
      variant: "saffron" as const
    },
    {
      title: "Dua for Child Conception",
      image: duaChild,
      description: "Islamic dua and wazifa to be blessed with offspring. Measures for virtuous children and their protection.",
      variant: "mystical" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <HeroSection phoneNumber={phoneNumber} />
      <BlackMagicSection />
      <LostLoveSection />
      
      <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Special Services of Islamic Astrology
            </h2>
            <p className="text-xl text-muted-foreground">
              Instant and guaranteed solutions to all problems with Halal methods - Molana Sahil Khan
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
            © 2024 Molana Sahil Khan - Famous Muslim Astrologer | 
            <span className="text-golden font-semibold"> {phoneNumber}</span>
          </p>
          <p className="text-sm mt-2 text-background/80">
            100% Halal and Sharia compliant solutions by trusted Islamic astrologer
          </p>
          <p className="text-xs mt-1 text-background/60">
            Solutions to problems according to Quran and Sunnah
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
