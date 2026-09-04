"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RegistrationSection() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Info Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" /> Excellence Recognized
            </div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Get World Class <span className="text-primary">Quality </span>Award
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              To win a World Class Quality Award, an organization must meet certain
              criteria that demonstrate their commitment to excellence. The exact criteria
              can vary depending on the specific award and organization presenting it.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              By meeting these criteria and demonstrating a commitment to excellence in all
              aspects of their operations, organizations can position themselves as leaders
              in their industry and earn recognition through prestigious awards such as the
              World Class Quality Award.
            </p>
          </motion.div>

          {/* Right Column: Registration Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border shadow-xl hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Get Registered
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The award is a prestigious recognition given to individuals or
                    organizations that have made significant contributions in their
                    respective fields.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle registration action
                  }}
                  className="space-y-4 pt-2"
                ><Link href="/auth/register" className="w-full">
                    <Button
                      type="submit"
                      className="w-full bg-[#feb900] hover:bg-[#e0a400] text-black font-semibold py-6 text-base rounded-xl shadow-md transition-all hover:scale-[1.01]"
                    >
                      Get Registered <ArrowRight className="ml-2 h-5 w-5" />

                    </Button></Link>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Verified Indicators */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-muted-foreground text-sm border-t border-border/60 w-full max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" /> Verified Standards
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" /> Independent Panel
          </div>
          <div className="flex items-center justify-center gap-2 col-span-2 md:col-span-1">
            <ShieldCheck className="h-5 w-5 text-primary" /> Global Recognition
          </div>
        </motion.div>
      </div>
    </section>
  );
}