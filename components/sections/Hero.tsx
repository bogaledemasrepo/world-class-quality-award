import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section id="home" className="relative min-h-[84vh] grid items-center isolate">
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071d33]/95 via-[#071d33]/75 to-[#071d33]/30" />
            <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
                alt="Excellence ceremony"
                fill
                priority
                className="object-cover -z-20"
            />
            <div className="max-w-295 mx-auto px-5 w-full pt-28 pb-16 md:pt-36 md:pb-24">
                <div className="max-w-3xl">
                    <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                        Recognizing Operational Excellence
                    </p>
                    <span className="w-12 h-0.5 bg-[#d8a72d] block mt-5 mb-6" />
                    <h1 className="font-serif text-white text-4xl md:text-6xl leading-[1.08]">
                        Celebrating World-Class Standards in Industry
                    </h1>
                    <p className="mt-7 max-w-2xl text-white/85 text-base md:text-lg leading-8">
                        The Abissiniya Quality Awards honor organizations that set benchmark standards in performance, innovation, continuous improvement, and leadership across public and private sectors.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            href="#registration"
                            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#d8a72d] hover:bg-[#f4df9c] text-[#071d33] text-sm font-bold transition-all hover:-translate-y-0.5"
                        >
                            Submit Entry
                        </Link>
                        <Link
                            href="#framework"
                            className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/80 hover:bg-white hover:text-[#071d33] text-white text-sm font-bold transition-all"
                        >
                            Explore Framework
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero