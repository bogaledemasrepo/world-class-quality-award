"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Calendar, ArrowRight, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "upcoming-award-2026",
    title: "Upcoming Quality Awards 2026",
    excerpt:
      "Discover the upcoming nomination criteria, deadlines, and key highlights for the nation's premier quality and performance excellence awards.",
    image:
      "https://staff.worldclassqualityaward.com/uploads/122996908_1481119898749238_7808829061734319718_n_2566a2c592.jpg",
    date: "Sep 04, 2026",
    category: "Events",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "what-makes-world-class-quality-award-special",
    title: "What Makes World Class Quality Award Special",
    excerpt:
      "An in-depth look at our rigorous multi-stage evaluation process, independent expert panels, and international benchmarks.",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg",
    date: "Aug 28, 2026",
    category: "Standards",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "how-to-apply-and-prepare-documentation",
    title: "How to Apply and Prepare Documentation",
    excerpt:
      "A step-by-step guide for organizations seeking to structure their self-assessment reports and compliance frameworks.",
    image:
      "https://staff.worldclassqualityaward.com/uploads/hero_carousel_5_c3e9100054.jpg",
    date: "Aug 15, 2026",
    category: "Guide",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "who-can-register-to-get-award",
    title: "Who Can Register to Get the Award?",
    excerpt:
      "Eligibility guidelines covering manufacturing firms, service companies, healthcare providers, educational institutions, and NGOs.",
    image:
      "https://staff.worldclassqualityaward.com/uploads/hero_carousel_4_87ce1b3789.jpg",
    date: "Jul 30, 2026",
    category: "Eligibility",
    readTime: "3 min read",
  },
  {
    id: "5",
    slug: "building-sustainable-quality-culture",
    title: "Building a Sustainable Quality Culture",
    excerpt:
      "How industry leaders leverage performance excellence frameworks to achieve continuous improvement and market leadership.",
    image:
      "https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_40_08_87142a277a.jpg",
    date: "Jul 12, 2026",
    category: "Leadership",
    readTime: "7 min read",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero / Header Section */}
      <section className="relative bg-[#071d33] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://staff.worldclassqualityaward.com/uploads/photo_2023_08_19_22_39_21_5b3b60a6de.jpg"
            alt="Blogs background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#071d33] via-[#071d33]/80 to-transparent z-10" />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Blogs</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            News & <span className="text-primary">Insights</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
            Stay updated with the latest articles, industry standards, evaluation guides, and award announcements.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Search Bar & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> articles
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-56 w-full overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-semibold text-primary shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-primary" /> {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-4 border-t border-border/60 flex items-center text-sm font-semibold text-primary group-hover:underline">
                      Read Article <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 space-y-3">
              <p className="text-lg font-semibold text-foreground">No articles found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search query.</p>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">
              Page <span className="font-medium text-foreground">1</span> of{" "}
              <span className="font-medium text-foreground">1</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                disabled
                className="p-2.5 rounded-xl border border-border text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                disabled
                className="p-2.5 rounded-xl border border-border text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Award, X } from "lucide-react";
// import { Hero } from "@/components/hero";
// import AcessmentCTA from "@/components/sections/AcessmentCTA";

// export default function HomePage() {

//   const [activeLightboxImage, setActiveLightboxImage] = useState<{
//     src: string;
//     alt: string;
//   } | null>(null);

//   // Close lightbox on Escape key press
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setActiveLightboxImage(null);
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);


//   return (
//     <div className="w-full overflow-hidden bg-[#f8f6f0] text-[#102a43] font-sans">
//       <main>
//         <Hero />

//         <section id="registration" className="bg-[#d8a72d] py-14 md:py-16">
//           <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-center">
//             <div>
//               <p className="text-[#102a43] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
//                 Nominations Open
//               </p>
//               <h2 className="font-serif text-[#071d33] text-3xl font-bold mt-3 leading-tight">
//                 Apply for the 2026 Industry Excellence Awards
//               </h2>
//               <p className="text-[#102a43] mt-4 leading-7">
//                 Take your organization to the global stage. Submit your application or nominate an industry leader working toward high-value benchmarks.
//               </p>
//             </div>
//             <div className="flex lg:justify-end">
//               <Link
//                 href="#categories"
//                 className="inline-flex items-center gap-2 bg-[#071d33] text-white px-6 py-4 font-bold hover:bg-[#102a43] focus:outline-none focus:ring-4 focus:ring-white transition-colors"
//               >
//                 View Categories
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-20 md:py-28">
//           <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
//             <div>
//               <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
//                 Our Mission
//               </p>
//               <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
//                 Elevating Global Quality Benchmarks Across Sectors
//               </h2>
//               <p className="mt-6 text-[#52616d] leading-8">
//                 Founded to promote institutional efficiency and continuous operational refine, the Abissiniya Quality Award evaluates companies against rigorous metrics of leadership, strategy, and sustainable execution.
//               </p>
//               <div className="mt-8 flex gap-4">
//                 <span className="w-12 h-0.5 bg-[#d8a72d] block mt-3 shrink-0" />
//                 <p className="font-semibold leading-7">
//                   Empowering organizations through strategic assessment, industry benchmark analysis, and peer prestige.
//                 </p>
//               </div>
//             </div>
//             <div className="relative z-10 after:absolute after:-right-4 after:-bottom-4 after:w-[72%] after:h-[74%] after:-z-10 after:border after:border-[#d8a72d]">
//               <Image
//                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
//                 alt="Executive team meeting"
//                 width={600}
//                 height={400}
//                 className="w-full min-h-97.5 object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Framework Section */}
//         <section id="framework" className="bg-[#ebe8de] py-20 md:py-28">
//           <div className="max-w-295 mx-auto px-5">
//             <div className="max-w-2xl">
//               <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
//                 Assessment Model
//               </p>
//               <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
//                 Three Pillars of Sustainable Quality
//               </h2>
//               <p className="mt-5 text-[#52616d] leading-8">
//                 Our evaluation framework provides a comprehensive evaluation of institutional health and market capability.
//               </p>
//             </div>
//             <div className="mt-14 grid lg:grid-cols-[1fr_.9fr] gap-12 lg:gap-20 items-start">
//               <div>
//                 {[
//                   {
//                     num: "01",
//                     title: "Strategic Leadership",
//                     copy: "Visionary direction that embeds operational compliance, ethical standards, and continuous adaptation into organizational culture.",
//                   },
//                   {
//                     num: "02",
//                     title: "Process & Value Design",
//                     copy: "Streamlined operational flows that minimize waste, increase reliability, and maximize service output value.",
//                   },
//                   {
//                     num: "03",
//                     title: "Customer & Partner Impact",
//                     copy: "Measurable stakeholder trust, brand sentiment, retention rates, and community value creation.",
//                   },
//                 ].map((point) => (
//                   <article
//                     key={point.num}
//                     className="border-t border-[#dfe4e7] pt-5 pb-6 grid grid-cols-[58px_1fr] gap-5 hover:border-[#d8a72d] hover:translate-x-1 transition-all"
//                   >
//                     <span className="font-serif text-[#d8a72d] text-3xl leading-none">
//                       {point.num}
//                     </span>
//                     <div>
//                       <h3 className="font-serif text-xl font-bold">{point.title}</h3>
//                       <p className="mt-2 text-[#52616d] leading-7">{point.copy}</p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//               <Image
//                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
//                 alt="Business analysis"
//                 width={600}
//                 height={400}
//                 className="w-full min-h-100 object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Difference Section */}
//         <section className="py-20 md:py-28">
//           <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
//             <Image
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
//               alt="Team strategy meeting"
//               width={600}
//               height={400}
//               className="w-full min-h-95 h-full object-cover order-2 lg:order-1"
//             />
//             <div className="order-1 lg:order-2">
//               <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
//                 The Difference
//               </p>
//               <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
//                 Why Our Standard Matters
//               </h2>
//               <p className="mt-5 text-[#52616d] leading-8">
//                 Unlike standard certificates, the Abissiniya Award provides structured feedback from independent lead auditors to uncover actionable growth channels.
//               </p>
//               <div className="mt-8 border-l-2 border-[#d8a72d] pl-5">
//                 <p className="font-semibold leading-7">
//                   98% of past participants report accelerated process improvements within 12 months of assessment.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Performance Audits Section */}
//         <section className="bg-[#102a43] py-20 md:py-28 text-white">
//           <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-[1fr_.9fr] gap-14 lg:gap-24 items-center">
//             <div>
//               <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
//                 Rigorous Evaluation
//               </p>
//               <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
//                 Data-Driven Excellence Audits
//               </h2>
//               <p className="text-white/75 mt-5 leading-8">
//                 Assessments are conducted through transparent benchmarking methodologies to ensure unbiased performance rankings.
//               </p>
//               <div className="mt-8 space-y-5">
//                 <div className="flex gap-3">
//                   <Award className="w-5 h-5 shrink-0 mt-1 text-[#d8a72d]" />
//                   <p className="text-white/85 leading-7">
//                     Independent audit teams with deep expertise in industry standards.
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <Award className="w-5 h-5 shrink-0 mt-1 text-[#d8a72d]" />
//                   <p className="text-white/85 leading-7">
//                     In-depth feedback reports covering operational strengths and gaps.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative z-10 after:absolute after:-right-4 after:-bottom-4 after:w-[72%] after:h-[74%] after:-z-10 after:border after:border-[#d8a72d]">
//               <Image
//                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
//                 alt="Auditing session"
//                 width={600}
//                 height={400}
//                 className="w-full min-h-97.5 object-cover"
//               />
//             </div>
//           </div>
//         </section>
//         <AcessmentCTA />
//       </main>
//       {activeLightboxImage && (
//         <div
//           className="fixed inset-0 z-50 p-6 bg-[#030d18]/90 flex items-center justify-center"
//           role="dialog"
//           aria-modal="true"
//           onClick={() => setActiveLightboxImage(null)}
//         >
//           <div className="relative max-w-245 w-full" onClick={(e) => e.stopPropagation()}>
//             <button
//               onClick={() => setActiveLightboxImage(null)}
//               type="button"
//               className="absolute right-2 top-2 z-10 w-11 h-11 grid place-items-center bg-white text-[#071d33] rounded-full focus:outline-none focus:ring-4 focus:ring-[#d8a72d]"
//               aria-label="Close image preview"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             <div className="relative w-full h-[80vh]">
//               <Image
//                 src={activeLightboxImage.src}
//                 alt={activeLightboxImage.alt}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }