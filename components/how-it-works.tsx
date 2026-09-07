"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Organizations everywhere are looking for ways to effectively and efficiently meet their missions and achieve their visions.",
  "World Class Quality Award provides a framework to improve your organization's performance and get sustainable results.",
  "Whether your organization is— large or small, service or manufacturing, education or health care, government or nonprofit, has one site or worldwide locations, World Class Quality Award can work for you. Your Organization’s Success Is Our Goal!",
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            <Award className="w-4 h-4" />
            <span>Methodology & Standards</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            How World Class Quality Award Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our company has prepared the quality award measurement document based on the practice of the great institutions that have the quality award measurement in the world and in a way that is suitable and useful for our country&apos;s institutions.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                World Class Quality Award at a Glance
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-6">
              {FEATURES.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Animated Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-border shadow-2xl group">
              <Image
                src="https://staff.worldclassqualityaward.com/uploads/hero_carousel_2_299dce3389.jpg"
                alt="World Class Quality Award at a Glance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-lg">
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  Empowering Organizational Excellence Across All Sectors
                </p>
              </div>
            </div>

            {/* Decorative Background Accent */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}