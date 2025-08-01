import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "श्रीमती आयशा खान",
      location: "दिल्ली",
      text: "अल्लाह का शुक्र है, मोलाना साहिल खान की दुआ से मेरे बेटे का निकाह हो गया। 3 साल से रुकी समस्या 15 दिन में हल हो गई।",
      stars: 5
    },
    {
      name: "मोहम्मद अहमद",
      location: "मुंबई", 
      text: "व्यापार में भारी नुकसान हो रहा था। मोलाना साहब के इस्लामिक उपाय से अब व्यापार में बरकत हो रही है।",
      stars: 5
    },
    {
      name: "श्रीमती फातिमा बेगम",
      location: "हैदराबाद",
      text: "पति-पत्नी में रोज झगड़े होते थे। मोलाना जी के वज़ीफे से अब घर में अमन चैन है।",
      stars: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-golden/10 to-saffron/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            खुश मुस्लिम परिवारों के अनुभव
          </h2>
          <p className="text-xl text-muted-foreground">
            हजारों मुस्लिम भाई-बहनों का भरोसा, अल्लाह की रहमत से सफल समाधान
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm border-2 border-golden/20 hover:border-golden/40 transition-all duration-300 hover:shadow-warm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="text-golden fill-current" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="text-right">
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