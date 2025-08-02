import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import images
import loveSolution from "@/assets/love-solution.jpg";
import businessProsperity from "@/assets/business-prosperity.jpg";
import islamicFamily from "@/assets/islamic-family.jpg";
import islamicPrayer from "@/assets/islamic-prayer.jpg";
import islamicAstrology from "@/assets/islamic-astrology.jpg";
import astrologerConsultation from "@/assets/astrologer-consultation.jpg";
import businessGrowth from "@/assets/business_growth2.jpg";
import loveProblem from "@/assets/love_problem.jpg";
import blackMagic from "@/assets/Black_magic_removal.jpg"
import birthIssue from "@/assets/birth_issue.jpg"



interface SpecializationsSectionProps {
  phoneNumber: string;
}

export const SpecializationsSection = ({ phoneNumber }: SpecializationsSectionProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const specializations = [
    {
      image: loveProblem,
      title: "Love Problem Solution",
      description: "Get your love back, love marriage, one-sided love solution.",
    },
    {
      image: businessGrowth,
      title: "Business Growth",
      description: "Business growth, financial problems, job problems.",
    },
    {
      image: islamicFamily,
      title: "Family Problems",
      description: "Family disputes, relationship issues, mother-in-law problems.",
    },
    {
      image: birthIssue,
      title: "Childbirth Issues",
      description: "Childbirth prediction, childbirth problems, pregnancy problems.",
    },
    {
      image: blackMagic,
      title: "Black Magic Removal",
      description: "Removal of black magic, evil eye, protection from evil spirits.",
    },
    {
      image: astrologerConsultation,
      title: "Instant Solution",
      description: "Results in 2-7 days, emergency problem solutions.",
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-golden/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Specializations
          </h2>
          <p className="text-xl text-muted-foreground">
            Special solutions for all life problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="group bg-white/95 backdrop-blur-sm border-2 border-golden/20 hover:border-golden/40 transition-all duration-300 overflow-hidden hover:shadow-warm p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-golden/30 group-hover:border-golden/50 transition-all duration-300 mb-4">
                <img src={spec.image} alt={spec.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="text-center flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {spec.description}
                </p>
                <Button 
                  variant="consult" 
                  size="sm" 
                  onClick={handleCall}
                  className="w-full mt-auto"
                >
                  Consult Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
