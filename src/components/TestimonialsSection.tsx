import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import muslimCoupleHappy from "@/assets/muslim-couple-happy.jpg";
import islamicFamily from "@/assets/islamic-family.jpg";
import islamicScholar from "@/assets/islamic-scholar.jpg";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mrs. Aisha Khan",
      location: "Delhi",
      text: "Thank God, my son got married with the help of Molana Sahil Khan's prayers. The problem that was stuck for 3 years was solved in 15 days.",
      stars: 5,
      image: muslimCoupleHappy
    },
    {
      name: "Mohammad Ahmed",
      location: "Mumbai", 
      text: "I was facing huge losses in business. With Molana Sahab's Islamic remedies, my business is now prospering.",
      stars: 5,
      image: islamicFamily
    },
    {
      name: "Mrs. Fatima Begum",
      location: "Hyderabad",
      text: "There were daily fights between husband and wife. With Molana ji's wazifa, there is now peace in the house.",
      stars: 5,
      image: islamicScholar
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-golden/10 to-saffron/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experiences of Happy Muslim Families
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by thousands of Muslim brothers and sisters, successful solutions by the grace of Allah
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card backdrop-blur-sm border-2 border-emerald/30 hover:border-emerald/50 transition-all duration-300 hover:shadow-warm flex flex-col items-center text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover border-4 border-emerald/30 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="text-golden fill-current" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
