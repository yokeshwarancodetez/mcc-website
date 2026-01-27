"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    heading: "Malaysian Ceylonese Congress",
    subheading:
      "Over Six Decades of Service, Integrity, and Community Leadership. Building a stronger tomorrow through unity and excellence.",
    buttonText: "Learn More",
    image: "/mcc_banner.png",
  },
  {
    heading: "Empowering Our Youth",
    subheading: "Scholarships, mentorship, and opportunities for the next generation of leaders.",
    buttonText: "Explore Programs",
    image: "/mcc_banner_01.png",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        key={current}
        className="absolute inset-0 z-0 bg-center bg-cover transition-opacity duration-700"
        style={{ backgroundImage: `url('${slides[current].image}')` }}
      />

      {/* Strong dark overlay for full readability */}
      <div className="absolute inset-0 z-0 bg-black/55"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {slides[current].heading}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl">
                {slides[current].subheading}
              </p>

              <div className="w-24 h-1.5 bg-gradient-to-r from-red-700 to-blue-900 rounded-full"></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-red-700 to-blue-900 text-white font-bold rounded-lg hover:shadow-2xl transition uppercase tracking-wide text-sm sm:text-base">
                {slides[current].buttonText}
              </button>

              <Link href="/membership">
                <button className="px-8 sm:px-10 py-3.5 sm:py-4 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 hover:shadow-2xl transition uppercase tracking-wide text-sm sm:text-base backdrop-blur">
                  Join MCC
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-black/60 px-5 py-3 rounded-full backdrop-blur-md border border-white/20">
        <button
          onClick={prev}
          className="p-2.5 rounded-full bg-red-700 hover:bg-red-800 text-white transition hover:shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-red-600 w-8 h-2.5"
                  : "bg-white/50 w-2.5 h-2.5 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2.5 rounded-full bg-red-700 hover:bg-red-800 text-white transition hover:shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
