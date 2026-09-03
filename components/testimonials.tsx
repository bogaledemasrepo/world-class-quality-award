"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Quote,
  Star,
} from "lucide-react";

// Image Assets
const ASSETS = {
  headerBg: "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg",
  heroSection: "https://staff.worldclassqualityaward.com/uploads/hero_carousel_2_299dce3389.jpg",
  whoWeAre: "https://staff.worldclassqualityaward.com/uploads/hero_carousel_3_66bec2cee7.jpg",
  whatWeDo: "https://staff.worldclassqualityaward.com/uploads/hero_carousel_5_c3e9100054.jpg",
  testimonials: {
    lemmaGuya: "https://staff.worldclassqualityaward.com/uploads/lemaguya_Painter_fe53cc6a86.jpg",
    mulatuAstatke: "https://staff.worldclassqualityaward.com/uploads/mulatu_e9471c4723.jpg",
    belayAbegaz: "https://staff.worldclassqualityaward.com/uploads/download_1_b2a70c9e0d.jpg",
  },
};


// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Testimonials() {


    const testimonials = [
      {
        name: "Laureate Painter Lemma Guya (Doctor of Honor)",
        role: "Painter",
        image: ASSETS.testimonials.lemmaGuya,
        quote:
          "Lemma Guya Gemeda was born in 1928 in Ada'a, Oromia, Ethiopia. He was an Ethiopian prior Painting Artist who created over ten thousand original works using goat skin for portraits.",
      },
      {
        name: "Laureate Mulatu Astatke (Doctor of Honor)",
        role: "Musician and Arranger",
        image: ASSETS.testimonials.mulatuAstatke,
        quote:
          "Considered the father of 'Ethio-jazz', Mulatu combined his jazz and Latin music interests with traditional Ethiopian music after training in London, New York City, and Boston.",
      },
      {
        name: "Laureate Dr. Belay Abegaz",
        role: "Pediatric Cardiology Specialist",
        image: ASSETS.testimonials.belayAbegaz,
        quote:
          "Founder and Board Chairman of Children's Heart Fund of Ethiopia. Dr. Belay studied medicine in the USA and specialized in Pediatric Cardiology before returning home to serve.",
      },
    ];
    
  return (
    <section className="py-20 container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary/30 text-primary rounded-full px-4 py-1">
            Laureates & Role Models
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Honored Testimonials</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Voices of distinguished individuals recognized for outstanding lifetime achievements.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div key={item.name} variants={fadeIn} whileHover={{ y: -6 }}>
              <Card className="h-full border-border/60 bg-card flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
                <CardContent className="p-6 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                    <Avatar className="h-12 w-12 border border-primary/40">
                      <AvatarImage src={item.image} alt={item.name} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
  )
}

export default Testimonials