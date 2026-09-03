"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Award, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "ABISSINIYA INDUSTRY AWARDS", href: "#categories" },
  { name: "ABISSINIYA AWARDS", href: "#gallery" },
  { name: "BLOGS", href: "#framework" },
  { name: "NEWSLETTER", href: "#registration" },
  { name: "GALLERY", href: "#gallery" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#071d33]/95 border-b border-[#f4df9c]/15 backdrop-blur-md">
      <div className="max-w-295 mx-auto px-5 flex min-h-19 items-center justify-between gap-5">
        <Link href="#home" className="flex items-center gap-3" aria-label="Abissiniya Quality Awards home">
          <span className="w-10 h-10 grid place-items-center border border-[#f4df9c]/80 rounded-full text-[#f4df9c]">
            <Award className="w-5 h-5" />
          </span>
          <span className="text-white font-bold text-sm md:text-base tracking-wide">
            Abissiniya Quality Awards
          </span>
        </Link>

        <nav className="hidden xl:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-[#f4df9c] text-[0.76rem] font-bold tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#registration"
          className="hidden sm:inline-flex items-center justify-center bg-[#d8a72d] hover:bg-[#f4df9c] text-[#071d33] px-4 py-3 text-xs font-bold transition-all hover:-translate-y-0.5"
        >
          Nominate Now
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="xl:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#f4df9c]"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="xl:hidden border-t border-white/10 bg-[#071d33]" aria-label="Mobile navigation">
          <div className="max-w-295 mx-auto px-5 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#f4df9c] text-xs font-bold tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#registration"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex self-start items-center justify-center bg-[#d8a72d] text-[#071d33] px-4 py-3 text-xs font-bold"
            >
              Nominate Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};