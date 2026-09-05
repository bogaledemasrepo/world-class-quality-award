"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Award } from "lucide-react";

interface EventVideo {
  id: number;
  title: string;
  videoUrl: string;
}

const EVENTS_DATA: EventVideo[] = [
  {
    id: 1,
    title: "Adey Abeba Transport",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/04_Adey_Abeba_Trasporet_Final_1_c0aaf7fc67.mp4#t=4",
  },
  {
    id: 2,
    title: "Addis Ababa Abattorois Enterprise",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/02_Addis_Ababa_Abattorois_Enterprise_1_fb4d02b3c5.mp4#t=4",
  },
  {
    id: 3,
    title: "Aggar Micro Finance",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/07_Aggar_Micro_Finance_Promo_28_7_15_1_1a7aa5cd07.mp4#t=4",
  },
  {
    id: 4,
    title: "Denga",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/15_Dengal_Final_1_0e2305385e.mp4#t=4",
  },
  {
    id: 5,
    title: "Geosynthetic Ind. Works",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/21_Geosenthetic_Ind_Works_Final_1_3d73b0a6ff.mp4#t=4",
  },
  {
    id: 6,
    title: "Dejen Gmesikel Commercial",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/14_Dejen_gmesikel_commercial_video_1_9c66fdd8e2.mp4#t=4",
  },
  {
    id: 7,
    title: "Bora Integrated Commercial",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/10_Bora_Integrated_Commercial_Farm_1_48639925e7.mp4#t=4",
  },
  {
    id: 8,
    title: "Ethio Bus",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/18_Ethio_bus_MP_4_Quality_1_3f98307530.mp4#t=4",
  },
  {
    id: 9,
    title: "Guo Peiyu",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/22_Guo_Peiyu_1_b74a0bd7c9.mp4#t=4",
  },
  {
    id: 10,
    title: "Kombolcha Textile S.C.",
    videoUrl:
      "https://staff.worldclassqualityaward.com/uploads/23_kombolcha_Textle_sc_final_1_faf914e836.mp4#t=4",
  },
];

const ITEMS_PER_PAGE = 6;

export default function EventsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(EVENTS_DATA.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEvents = EVENTS_DATA.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section id="events" className="py-20 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            <span>Highlights & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Some Of Our Events
          </h2>
          <p className="text-lg text-muted-foreground italic font-medium">
            &ldquo;We will reward those who have done outstanding work to save the world and its people.&rdquo;
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {currentEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-card rounded-2xl border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-black/90 overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={event.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Card Title */}
                <div className="p-5 flex-1 flex items-center justify-between bg-card">
                  <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <span className="p-2 rounded-full bg-muted/60 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Play className="w-4 h-4 fill-current" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
        >
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{startIndex + 1}</span> to{" "}
            <span className="font-semibold text-foreground">
              {Math.min(startIndex + ITEMS_PER_PAGE, EVENTS_DATA.length)}
            </span>{" "}
            of <span className="font-semibold text-foreground">{EVENTS_DATA.length}</span> events
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <span className="px-4 py-2 text-sm font-semibold rounded-lg bg-muted text-foreground">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}