import React from "react";
import Image from "next/image";

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gallery-image-one",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Annual Gala Night",
  },
  {
    id: "gallery-image-two",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    caption: "Keynote Addresses",
  },
  {
    id: "gallery-image-three",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    caption: "Trophy Handover",
  },
  {
    id: "gallery-image-four",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    caption: "Executive Networking",
  },
  {
    id: "gallery-image-five",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    caption: "Honoring Winners",
  },
  {
    id: "gallery-image-six",
    src: "https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=800&q=80",
    caption: "Leadership Forum",
  },
];

interface GallerySectionProps {
  onSelectImage: (image: { src: string; alt: string }) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-295 mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
              Highlights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
              Past Award Moments
            </h2>
          </div>
          <p className="text-[#52616d] leading-7 max-w-sm">
            Moments of celebration, networking, and industry leadership recognition.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {GALLERY_IMAGES.map((img) => (
            <button
              key={img.id}
              type="button"
              onClick={() => onSelectImage({ src: img.src, alt: img.caption })}
              className="group relative overflow-hidden min-h-56.25 bg-[#071d33] text-left focus:outline-none focus:ring-4 focus:ring-[#d8a72d]"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#071d33]/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute z-10 bottom-5 left-5 text-white font-serif text-lg">
                {img.caption}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};