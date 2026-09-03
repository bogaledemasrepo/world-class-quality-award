"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, X } from "lucide-react";
import { Hero } from "@/components/hero";
import AcessmentCTA from "@/components/sections/AcessmentCTA";

export default function HomePage() {

  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  return (
    <div className="w-full overflow-hidden bg-[#f8f6f0] text-[#102a43] font-sans">
      <main>
        <Hero />

        <section id="registration" className="bg-[#d8a72d] py-14 md:py-16">
          <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-center">
            <div>
              <p className="text-[#102a43] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Nominations Open
              </p>
              <h2 className="font-serif text-[#071d33] text-3xl font-bold mt-3 leading-tight">
                Apply for the 2026 Industry Excellence Awards
              </h2>
              <p className="text-[#102a43] mt-4 leading-7">
                Take your organization to the global stage. Submit your application or nominate an industry leader working toward high-value benchmarks.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="#categories"
                className="inline-flex items-center gap-2 bg-[#071d33] text-white px-6 py-4 font-bold hover:bg-[#102a43] focus:outline-none focus:ring-4 focus:ring-white transition-colors"
              >
                View Categories
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28">
          <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Our Mission
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
                Elevating Global Quality Benchmarks Across Sectors
              </h2>
              <p className="mt-6 text-[#52616d] leading-8">
                Founded to promote institutional efficiency and continuous operational refine, the Abissiniya Quality Award evaluates companies against rigorous metrics of leadership, strategy, and sustainable execution.
              </p>
              <div className="mt-8 flex gap-4">
                <span className="w-12 h-0.5 bg-[#d8a72d] block mt-3 shrink-0" />
                <p className="font-semibold leading-7">
                  Empowering organizations through strategic assessment, industry benchmark analysis, and peer prestige.
                </p>
              </div>
            </div>
            <div className="relative z-10 after:absolute after:-right-4 after:-bottom-4 after:w-[72%] after:h-[74%] after:-z-10 after:border after:border-[#d8a72d]">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                alt="Executive team meeting"
                width={600}
                height={400}
                className="w-full min-h-97.5 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section id="framework" className="bg-[#ebe8de] py-20 md:py-28">
          <div className="max-w-295 mx-auto px-5">
            <div className="max-w-2xl">
              <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Assessment Model
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
                Three Pillars of Sustainable Quality
              </h2>
              <p className="mt-5 text-[#52616d] leading-8">
                Our evaluation framework provides a comprehensive evaluation of institutional health and market capability.
              </p>
            </div>
            <div className="mt-14 grid lg:grid-cols-[1fr_.9fr] gap-12 lg:gap-20 items-start">
              <div>
                {[
                  {
                    num: "01",
                    title: "Strategic Leadership",
                    copy: "Visionary direction that embeds operational compliance, ethical standards, and continuous adaptation into organizational culture.",
                  },
                  {
                    num: "02",
                    title: "Process & Value Design",
                    copy: "Streamlined operational flows that minimize waste, increase reliability, and maximize service output value.",
                  },
                  {
                    num: "03",
                    title: "Customer & Partner Impact",
                    copy: "Measurable stakeholder trust, brand sentiment, retention rates, and community value creation.",
                  },
                ].map((point) => (
                  <article
                    key={point.num}
                    className="border-t border-[#dfe4e7] pt-5 pb-6 grid grid-cols-[58px_1fr] gap-5 hover:border-[#d8a72d] hover:translate-x-1 transition-all"
                  >
                    <span className="font-serif text-[#d8a72d] text-3xl leading-none">
                      {point.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-bold">{point.title}</h3>
                      <p className="mt-2 text-[#52616d] leading-7">{point.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
                alt="Business analysis"
                width={600}
                height={400}
                className="w-full min-h-100 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Difference Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
              alt="Team strategy meeting"
              width={600}
              height={400}
              className="w-full min-h-95 h-full object-cover order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                The Difference
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
                Why Our Standard Matters
              </h2>
              <p className="mt-5 text-[#52616d] leading-8">
                Unlike standard certificates, the Abissiniya Award provides structured feedback from independent lead auditors to uncover actionable growth channels.
              </p>
              <div className="mt-8 border-l-2 border-[#d8a72d] pl-5">
                <p className="font-semibold leading-7">
                  98% of past participants report accelerated process improvements within 12 months of assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Audits Section */}
        <section className="bg-[#102a43] py-20 md:py-28 text-white">
          <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-[1fr_.9fr] gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Rigorous Evaluation
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
                Data-Driven Excellence Audits
              </h2>
              <p className="text-white/75 mt-5 leading-8">
                Assessments are conducted through transparent benchmarking methodologies to ensure unbiased performance rankings.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-3">
                  <Award className="w-5 h-5 shrink-0 mt-1 text-[#d8a72d]" />
                  <p className="text-white/85 leading-7">
                    Independent audit teams with deep expertise in industry standards.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Award className="w-5 h-5 shrink-0 mt-1 text-[#d8a72d]" />
                  <p className="text-white/85 leading-7">
                    In-depth feedback reports covering operational strengths and gaps.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 after:absolute after:-right-4 after:-bottom-4 after:w-[72%] after:h-[74%] after:-z-10 after:border after:border-[#d8a72d]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                alt="Auditing session"
                width={600}
                height={400}
                className="w-full min-h-97.5 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Assessment CTA */}
        <AcessmentCTA />



      </main>



      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 p-6 bg-[#030d18]/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div className="relative max-w-245 w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveLightboxImage(null)}
              type="button"
              className="absolute right-2 top-2 z-10 w-11 h-11 grid place-items-center bg-white text-[#071d33] rounded-full focus:outline-none focus:ring-4 focus:ring-[#d8a72d]"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={activeLightboxImage.src}
                alt={activeLightboxImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}