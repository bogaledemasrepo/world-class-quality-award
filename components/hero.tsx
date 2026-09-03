"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Badge } from "./ui/badge";

const MotionImage = motion.create(Image);

const CAROUSEL_IMAGES = [
  "https://staff.worldclassqualityaward.com/uploads/hero_carousel_1_e1433b0bc4.jpg",
  "https://staff.worldclassqualityaward.com/uploads/hero_carousel_2_299dce3389.jpg",
  "https://staff.worldclassqualityaward.com/uploads/hero_carousel_3_66bec2cee7.jpg",
  "https://staff.worldclassqualityaward.com/uploads/hero_carousel_4_87ce1b3789.jpg",
  "https://staff.worldclassqualityaward.com/uploads/photo_2024_07_19_05_19_19_57bbf17275.jpg",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds (matching data-bs-interval="5000")
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white py-20">
      {/* Background Image Carousel with Cross-Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <MotionImage
            key={currentIndex}
            src={CAROUSEL_IMAGES[currentIndex]}
            alt={`Hero slide ${currentIndex + 1}`}
            fill
            priority
            sizes="100vw"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="object-cover"
          />
        </AnimatePresence>

        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Foreground Content with Staggered Entrance Animations */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
           
        <div className="max-w-3xl mx-auto text-center">
                 {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Badge
              variant="outline"
              className="px-4 py-1.5 rounded-full border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide backdrop-blur-md"
            >
              <Award className="mr-2 h-4 w-4 inline" /> Higher Honor Laureate
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight"
          >
            World Class <span className="text-primary">Quality</span> Award
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            The World Class Quality Award Program educates organizations in performance
            excellence management and administers the World Class Quality Award National Quality
            Award. We are the nation&apos;s public-private partnership dedicated to improving the
            performance of ETHIOPIA. Organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="#get-started"
              className="inline-block bg-[#d8a72d] hover:bg-[#c39422] text-[#071d33] font-semibold px-8 py-3.5 rounded-md transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 z-30 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        aria-label="Next slide"
        className="absolute right-4 z-30 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-8 bg-[#d8a72d]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
         
    </section>
  );
}