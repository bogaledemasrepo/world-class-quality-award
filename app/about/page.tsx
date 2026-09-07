"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Trophy,
  Clock,
  CheckCircle2,
  Target,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Testimonials from "@/components/testimonials";
import HowItWorksSection from "@/components/how-it-works";
import WhatMakesUsDifferentSection from "@/components/whate-make-us-defferent";

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

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stats = [
  { label: "Total Nominees", value: "232+", icon: Users },
  { label: "Awards Granted", value: "521+", icon: Trophy },
  { label: "Hours Of Support", value: "1,463", icon: Clock },
  { label: "Dedicated Staff", value: "15", icon: Award },
];

const coreValues = [
  "Deliver a consistently positive customer experience",
  "Value and empower our workforce",
  "Think and act ethically",
  "Think and act strategically",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <section className="relative py-28 md:py-40 flex items-center justify-center border-b border-border/50 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={ASSETS.headerBg}
            alt="World Class Quality Award Header Background"
            fill
            priority
            className="object-cover brightness-[0.25]"
          />
        </motion.div>

        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 container mx-auto px-4 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 border-primary/40 bg-primary/10 text-primary rounded-full backdrop-blur-md">
              Established 1988
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight"
          >
            About Our Institution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-300 text-sm md:text-base font-medium"
          >
            Home <span className="text-primary mx-2">/</span> <span className="text-white">About Us</span>
          </motion.p>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 relative h-95 md:h-120 rounded-2xl overflow-hidden border border-border shadow-2xl group"
          >
            <Image
              src={ASSETS.heroSection}
              alt="World Class Quality Award Trophy"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeIn} className="space-y-2">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Legacy</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">World Class Quality Award</h2>
            </motion.div>

            <motion.p variants={fadeIn} className="text-muted-foreground leading-relaxed text-justify">
              Abyssinia Award is fully licensed under registration numbers MT/AA/2/0007938/2012, 
              MT/AA/2/0049077/2019, and BL/AA/2/0031409/2015. Functioning legally under Ethiopian government 
              commercial and business license proclamation No. 980/2016, our organization is dedicated to 
              evaluating, encouraging, and elevating performance standards.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-2">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline cursor-pointer group">
                Verify Governance Credentials <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Animated Metrics Section */}
      <section className="py-16 bg-card border-y border-border/60">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeIn}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/40 transition-colors shadow-sm"
                >
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{stat.value}</span>
                  <span className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Who We Are & What We Do */}
      <section className="py-20 container mx-auto px-4 max-w-7xl space-y-24">
        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 space-y-6 order-2 lg:order-1"
          >
            <motion.div variants={fadeIn} className="space-y-2">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who We Are</h2>
            </motion.div>

            <motion.p variants={fadeIn} className="text-muted-foreground leading-relaxed">
              The World Class Quality Award Performance Excellence Program is dedicated to institutional quality and national growth.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-4">
              {[
                "Raises awareness about performance excellence across local and global economies.",
                "Provides standardized organizational assessment criteria.",
                "Educates leaders across business, education, healthcare, and government sectors.",
                "Honors national role models with premier excellence awards.",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeIn} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 relative h-95 rounded-2xl overflow-hidden border border-border shadow-lg order-1 lg:order-2"
          >
            <Image src={ASSETS.whoWeAre} alt="Who We Are" fill className="object-cover" />
          </motion.div>
        </div>

        {/* What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 relative h-95 rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <Image src={ASSETS.whatWeDo} alt="What We Do" fill className="object-cover" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeIn} className="space-y-2">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Operational Reach</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What We Do</h2>
            </motion.div>

            <motion.p variants={fadeIn} className="text-muted-foreground leading-relaxed">
              We educate organizations in performance excellence management and administer national quality recognition frameworks through integrated evaluation strategies, expert assessments, and capacity-building workshops.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <HowItWorksSection />
      <WhatMakesUsDifferentSection />
      {/* 5. Mission & Core Values */}
      <section className="py-20 bg-card border-y border-border/60">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn} className="space-y-6 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                To enhance competitiveness and operational execution across organizations for the benefit of all citizens by developing evaluation criteria, promoting performance frameworks, and sharing best management practices.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Core Values</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((val, idx) => (
                  <motion.div key={idx} whileHover={{ y: -2 }}>
                    <Card className="border-border/60 bg-background/50 hover:border-primary/40 transition-colors h-full">
                      <CardContent className="p-4 flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium leading-snug">{val}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}