"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function WhatMakesUsDifferentSection() {
  return (
    <section id="what-makes-us-different" className="py-20 bg-muted/30 text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Animated Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-border shadow-2xl group">
              <Image
                src="https://staff.worldclassqualityaward.com/uploads/hero_carousel_3_66bec2cee7.jpg"
                alt="What Makes World Class Quality Award Different"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Sparkles className="w-5 h-5" />
                </span>
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  Driving Innovation, Sustainability & Sustainable Growth
                </p>
              </div>
            </div>

            {/* Decorative Ambient Background */}
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </motion.div>

          {/* Right Column: Content & Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Unique Value Proposition
              </span>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                What Makes World Class Quality Award Different
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed text-justify">
              World Class Quality Award helps organizations address a dynamic environment, focus on strategy-driven performance, achieve customer and workforce engagement, and improve governance and ethics, societal responsibilities, competitiveness, and long-term organizational sustainability.
            </p>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="shrink-0">
                <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-card-foreground mb-1">
                  Comprehensive Management Approach
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  It offers you a comprehensive management approach that focuses on results in all areas, organizational and personal learning, and knowledge sharing.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}