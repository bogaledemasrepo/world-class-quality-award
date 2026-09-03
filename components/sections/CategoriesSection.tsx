import React from "react";
import Image from "next/image";

export interface CategoryItem {
  id: string;
  label: string;
  title: string;
  copy: string;
  image: string;
}

const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "manufacturing",
    label: "Sector 01",
    title: "Manufacturing",
    copy: "Precision engineering, sustainable production, and supply chain excellence.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "service",
    label: "Sector 02",
    title: "Services & Banking",
    copy: "Customer satisfaction, digital experience, and reliable service delivery.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "healthcare",
    label: "Sector 03",
    title: "Healthcare",
    copy: "Patient care excellence, safety compliance, and medical innovation.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "education",
    label: "Sector 04",
    title: "Education",
    copy: "Academic rigor, institution management, and skill empowerment.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "smallbiz",
    label: "Sector 05",
    title: "Small Business",
    copy: "Fast-growing enterprises driving local market innovation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ngo",
    label: "Sector 06",
    title: "NGOs & Non-Profits",
    copy: "Social impact, organizational accountability, and sustainable outreach.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cyber",
    label: "Sector 07",
    title: "Technology & Cyber",
    copy: "Software architecture, cybersecurity standards, and tech innovation.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "government",
    label: "Sector 08",
    title: "Public Sector",
    copy: "Transparent governance, public administration efficiency, and civic service.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
  },
];

export const CategoriesSection = () => {
  return (
    <section id="categories" className="bg-[#071d33] py-20 md:py-28">
      <div className="max-w-295 mx-auto px-5">
        <div className="max-w-3xl">
          <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
            Industry Divisions
          </p>
          <h2 className="font-serif text-white text-3xl md:text-4xl mt-4 leading-tight">
            Award Categories
          </h2>
          <p className="text-white/70 mt-5 leading-8">
            Explore key business sectors structured to celebrate sector-specific achievements.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
          {CATEGORIES_DATA.map((cat) => (
            <article
              key={cat.id}
              className="group relative min-h-73.75 overflow-hidden flex items-end bg-[#071d33] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#071d33]/95 via-[#071d33]/50 to-transparent" />
              <div className="relative z-10 p-6">
                <p className="text-[#f4df9c] text-xs font-bold tracking-[0.18em] uppercase">
                  {cat.label}
                </p>
                <h3 className="font-serif text-white text-xl mt-2">{cat.title}</h3>
                <p className="text-white/75 text-sm leading-6 mt-3">{cat.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};