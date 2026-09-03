"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "World Class Quality Award Certificate",
    year: "2012",
    category: "Award 2012",
    image:
      "https://staff.worldclassqualityaward.com/uploads/design_1_a61c3108df.jpg",
  },
  {
    id: "2",
    title: "Institutional Excellence Trophy Design",
    year: "2012",
    category: "Award 2012",
    image:
      "https://staff.worldclassqualityaward.com/uploads/design_2_5c3c9d4ec6.jpg",
  },
  {
    id: "3",
    title: "Leadership Distinction Medal",
    year: "2013",
    category: "Award 2013",
    image:
      "https://staff.worldclassqualityaward.com/uploads/design_5_7564ac7c78.jpg",
  },
  {
    id: "4",
    title: "Higher Honor Laurel Badge",
    year: "2013",
    category: "Award 2013",
    image:
      "https://staff.worldclassqualityaward.com/uploads/design_4_e13110a82a.jpg",
  },
  {
    id: "5",
    title: "Global Performance Plaque",
    year: "2013",
    category: "Award 2013",
    image:
      "https://staff.worldclassqualityaward.com/uploads/design_3_eea1a5aaa5.jpg",
  },
];

const CATEGORIES = ["All", "Award 2012", "Award 2013"];

export default function AwardsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      {/* Header Banner */}
      <section className="relative bg-[#071d33] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg"
            alt="Awards Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#071d33] via-[#071d33]/80 to-transparent z-10" />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-4">
          <nav className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Award Designs</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Award <span className="text-primary">Gallery & Designs</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
            Explore our archive of officially certified awards, laurel medallions, and institutional recognition plaques over the years.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-10">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              <Filter className="w-4 h-4 text-muted-foreground ml-2 hidden sm:block" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white space-y-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground text-xs font-semibold">
                        <Award className="w-3.5 h-3.5" /> {item.year} Edition
                      </span>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <button
                        onClick={() => openLightbox(index)}
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg"
                        aria-label="View Image Fullscreen"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full min-h-75">
                <Image
                  src={filteredItems[activeImageIndex].image}
                  alt={filteredItems[activeImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center text-white space-y-1">
                <h4 className="text-lg font-bold">
                  {filteredItems[activeImageIndex].title}
                </h4>
                <p className="text-xs text-gray-400">
                  {filteredItems[activeImageIndex].category}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}