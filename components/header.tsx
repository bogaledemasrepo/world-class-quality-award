"use client";

import { Award, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "ABISSINIYA INDUSTRY AWARDS", href: "/awards/industry" },
  { name: "ABISSINIYA AWARDS", href: "/awards/standard" },
  { name: "BLOGS", href: "/blogs" },
  { name: "NEWSLETTER", href: "/newsletters" },
  { name: "AWARDS", href: "/awards" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine exact or section-based active link state
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#071d33]/95 border-b border-[#f4df9c]/15 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          aria-label="World Class Quality Award home"
        >
          <span className="w-10 h-10 grid place-items-center border border-[#f4df9c]/80 rounded-full text-[#f4df9c] group-hover:bg-[#f4df9c]/10 transition-colors">
            <Award className="w-5 h-5" />
          </span>
          <span className="text-white font-bold text-sm md:text-base tracking-wide group-hover:text-[#f4df9c] transition-colors">
            World Class Quality Award
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-[0.78rem] font-bold tracking-wide transition-colors duration-200 group ${
                      active ? "text-[#f4df9c]" : "text-white/80 hover:text-[#f4df9c]"
                    }`}
                  >
                    {link.name}

                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#f4df9c] transition-all duration-300 ease-out ${
                        active
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Sign In Button */}
        <Link
          href="/auth/login"
          className="hidden sm:inline-flex items-center justify-center bg-[#d8a72d] hover:bg-[#f4df9c] text-[#071d33] px-5 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 rounded-sm shadow-sm"
        >
          Sign In
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="xl:hidden p-3 -mr-2 text-white hover:text-[#f4df9c] focus:outline-none focus:ring-2 focus:ring-[#f4df9c] rounded-md transition-colors"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="xl:hidden border-t border-white/10 bg-[#071d33] animate-in slide-in-from-top-2 duration-200" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-3 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    active
                      ? "bg-white/10 text-[#f4df9c] border-l-4 border-[#f4df9c] pl-4"
                      : "text-white/90 hover:text-[#f4df9c] hover:bg-white/5"
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    {/* Animated Underline on Hover for Mobile */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f4df9c] transition-all duration-200 group-hover:w-full" />
                  </span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#f4df9c]" />}
                </Link>
              );
            })}

            {/* Mobile Sign In */}
            <div className="pt-3 mt-1 border-t border-white/10">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full bg-[#d8a72d] hover:bg-[#f4df9c] text-[#071d33] py-3.5 text-xs font-bold rounded-md transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}