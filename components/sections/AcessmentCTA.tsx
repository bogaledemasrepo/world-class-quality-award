import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AcessmentCTA() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-295 mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="w-full min-h-95 h-full object-cover"
                />
                <div>
                    <p className="text-[#d8a72d] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                        Get Evaluated
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
                        Ready to Benchmark Your Organization?
                    </h2>
                    <p className="mt-5 text-[#52616d] leading-8">
                        Join leading enterprises and dynamic startups in raising industry expectations across the continent.
                    </p>
                    <Link
                        href="#categories"
                        className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#d8a72d] hover:bg-[#f4df9c] text-[#071d33] text-sm font-bold transition-all mt-9"
                    >
                        Select Category
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AcessmentCTA