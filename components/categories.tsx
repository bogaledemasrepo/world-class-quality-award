"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Factory,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Store,
  Heart,
  ShieldCheck,
  Building2,
  ArrowUpRight,
} from "lucide-react";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const CATEGORIES: Category[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "The selection process for the Manufacturing Award is rigorous and thorough, recognizing companies that demonstrate excellence in manufacturing processes, technology, and innovation.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    icon: Factory,
  },
  {
    id: "service",
    title: "Service Company",
    description:
      "Evaluated through a comprehensive set of criteria designed to ensure that only the most deserving companies are recognized for their outstanding service delivery and operational standards.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Honoring individuals or organizations that exhibit overall excellence, safety compliance, and significant contributions to advancing the healthcare industry.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    icon: HeartPulse,
  },
  {
    id: "education",
    title: "Education",
    description:
      "Presented to academic institutions and leaders demonstrating quality management, learning outcome excellence, and impactful contributions to education.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    icon: GraduationCap,
  },
  {
    id: "small-business",
    title: "Small Business",
    description:
      "Evaluated based on key financial performance metrics including revenue growth, operational sustainability, and positive community impact.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    icon: Store,
  },
  {
    id: "non-profit",
    title: "Non-Profit (NGO)",
    description:
      "Recognizing non-profit organizations that demonstrate financial stability, transparent governance, and strong leadership teams to drive sustained social impact.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    icon: Heart,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Honoring entities and leaders demonstrating technical innovation, robust architecture, and exceptional risk management standards in cybersecurity.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    icon: ShieldCheck,
  },
  {
    id: "government",
    title: "Government",
    description:
      "Honors awarded to public service institutions and personnel demonstrating exceptional dedication, administrative transparency, and civic achievements.",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    icon: Building2,
  },
];

// Stagger container variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Item animation variant
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function AwardCategories() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Industry Sectors
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            World Class Quality <span className="text-primary">Award Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our company has prepared the quality award measurement framework based on the
            best practices of global institutions, tailored specifically to fit and benefit
            our nation&apos;s organizations.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                variants={itemVariants}
                className="group relative flex flex-col sm:flex-row bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative sm:w-2/5 min-h-50 sm:min-h-full overflow-hidden bg-muted">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}