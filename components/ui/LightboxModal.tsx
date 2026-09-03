"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxModalProps {
  image: { src: string; alt: string } | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 p-6 bg-[#030d18]/90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="relative max-w-245 w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          type="button"
          className="absolute right-2 top-2 z-10 w-11 h-11 grid place-items-center bg-white text-[#071d33] rounded-full focus:outline-none focus:ring-4 focus:ring-[#d8a72d]"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative w-full h-[80vh]">
          <Image src={image.src} alt={image.alt} fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};