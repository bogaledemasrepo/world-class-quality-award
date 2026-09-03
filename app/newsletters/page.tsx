"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Trophy,
  Award,
  ChevronRight,
  HeartHandshake,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
}

interface Winner {
  id: string;
  name: string;
  category: string;
  date: string;
  image: string;
}

const NEWS_ARTICLES: Article[] = [
  {
    id: "1",
    title: "የከፍተኛ ክብር ሎሬት ሽልማት ለሚወዳደሩ የወጣ ማስታወቂያ፡፡",
    excerpt:
      "አቢሲኒያ የከፍተኛ ክብር ሽልማት ድርጅት ከጎልደን ዌይ ትሬዲንግ ኃ.የተ.የግ.ማ እህትማማች ድርጅቶች ከአቢሲኒያ የኢንደስትሪ ሽልማት ድርጅት ፣ ከወርልድ ክላስ የጥራት ሽልማት ጋር በመተባበር የተዘጋጀ፡፡",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2024_08_05_00_42_13_82a59e36ff.jpg",
    category: "Abissiniya Award",
    date: "Sep 04, 2026",
    featured: true,
  },
  {
    id: "2",
    title: "የጥራት ሽልማት ተወዳዳሪነት ማስታወቂያ",
    excerpt:
      "ወርልድ ክላስ የጥራት ሽልማት ድርጅት ህጋዊ ፍቃድ ኖሮት ምርታማ እና የላቀ አገልግሎት የሰጡ ተቋማትን በጥራት ሽልማት መለኪያ መስፈርት መዝኖ ለመሸለም የተዘጋጀ ጥሪ፡፡",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2024_08_05_00_55_55_82166924c4.jpg",
    category: "World Class Award",
    date: "Aug 29, 2026",
  },
  {
    id: "3",
    title: "Global Standards and Compliance Guidelines for 2026",
    excerpt:
      "Exploring updated evaluation criteria for institutional excellence and quality control benchmarks across industry sectors.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    category: "Standards",
    date: "Aug 18, 2026",
  },
];

const WORLD_CLASS_WINNERS: Winner[] = [
  {
    id: "w1",
    name: "Apex Manufacturing Ltd.",
    category: "Manufacturing",
    date: "2026 Winner",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_18_12_31_45_5fa46d42bc.jpg",
  },
  {
    id: "w2",
    name: "Ethio Financial Services",
    category: "Service Sector",
    date: "2026 Winner",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_18_12_31_45_5fa46d42bc.jpg",
  },
  {
    id: "w3",
    name: "St. Gabriel Medical Center",
    category: "Healthcare",
    date: "2025 Winner",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_18_12_31_45_5fa46d42bc.jpg",
  },
];

const ABISSINIYA_WINNERS: Winner[] = [
  {
    id: "a1",
    name: "Horizon Logistics Group",
    category: "Higher Honor Award",
    date: "2026 Recipient",
    image:
      "https://staff.worldclassqualityaward.com/uploads/122996908_1481119898749238_7808829061734319718_n_2566a2c592.jpg",
  },
  {
    id: "a2",
    name: "National Energy Solution",
    category: "Industry Excellence",
    date: "2025 Recipient",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg",
  },
];

export default function NewsletterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Abissiniya Award", "World Class Award", "Standards"];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      {/* Hero Header Banner */}
      <section className="relative bg-[#071d33] text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg"
            alt="Newsletter Header Background"
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
            <span className="text-primary font-medium">Newsletter & Press</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            News & <span className="text-primary">Announcements</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
            Stay informed with official press releases, award announcements, and upcoming competition deadlines.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-muted-foreground mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search newsletter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Featured Headline Banner */}
          {activeCategory === "All" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden border border-border shadow-lg group bg-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-105">
                <div className="relative lg:col-span-7 min-h-70 lg:min-h-full overflow-hidden bg-muted">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                        {featuredArticle.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <Link href={`/newsletter/${featuredArticle.id}`}>
                    <Button className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90">
                      Read Full Announcement <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Layout: Articles Feed (Left) & Award Winners Sidebar (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Content Area: News Articles Grid */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Latest Press Releases
                </h3>
                <span className="text-xs text-muted-foreground">
                  Showing {filteredArticles.length} results
                </span>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-semibold text-primary">
                          {article.category}
                        </span>
                      </div>

                      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-muted-foreground gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {article.date}
                          </div>
                          <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {article.excerpt}
                          </p>
                        </div>

                        <Link
                          href={`/newsletter/${article.id}`}
                          className="pt-3 border-t border-border/60 text-xs font-semibold text-primary flex items-center justify-between group-hover:underline"
                        >
                          Read Story <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card rounded-2xl border border-border space-y-2">
                  <p className="text-base font-semibold text-foreground">No news found</p>
                  <p className="text-xs text-muted-foreground">Try modifying your filter or search keywords.</p>
                </div>
              )}
            </div>

            {/* Right Sidebar: Winners Directories */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* World Class Quality Award Winners Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" /> World Class Quality Winners
                  </h4>
                </div>

                <div className="space-y-3">
                  {WORLD_CLASS_WINNERS.map((winner) => (
                    <Link
                      key={winner.id}
                      href="/worldclass"
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/60 transition-colors border border-transparent hover:border-border/60"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-muted">
                        <Image
                          src={winner.image}
                          alt={winner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold text-primary uppercase tracking-wider block">
                          {winner.category}
                        </span>
                        <h5 className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                          {winner.name}
                        </h5>
                        <span className="text-[11px] text-muted-foreground">{winner.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/worldclass"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 text-xs font-semibold rounded-xl border border-border hover:bg-muted transition-colors text-foreground"
                >
                  View All Recipients <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

              {/* Abissiniya Award Winners Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" /> Abissiniya Award Winners
                  </h4>
                </div>

                <div className="space-y-3">
                  {ABISSINIYA_WINNERS.map((winner) => (
                    <Link
                      key={winner.id}
                      href="/abisiniyaawardwinners"
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/60 transition-colors border border-transparent hover:border-border/60"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-muted">
                        <Image
                          src={winner.image}
                          alt={winner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold text-primary uppercase tracking-wider block">
                          {winner.category}
                        </span>
                        <h5 className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                          {winner.name}
                        </h5>
                        <span className="text-[11px] text-muted-foreground">{winner.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/abisiniyaawardwinners"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 text-xs font-semibold rounded-xl border border-border hover:bg-muted transition-colors text-foreground"
                >
                  View Directory <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Floating Donate Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/Donate">
          <Button className="rounded-full shadow-2xl bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-6 gap-2 hover:scale-105 transition-all">
            <HeartHandshake className="w-5 h-5" /> Donate Now
          </Button>
        </Link>
      </div>
    </main>
  );
}