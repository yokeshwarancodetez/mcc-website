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
    image: "/hero-banner-1.jpg",
  },
  {
    heading: "Empowering Our Youth",
    subheading: "Scholarships, mentorship, and opportunities for the next generation of leaders.",
    buttonText: "Explore Programs",
    image: "/hero-banner-2.jpg",
  },
  {
    heading: "Preserving Our Heritage",
    subheading: "Protecting Ceylonese Tamil culture, traditions, and values within a united Malaysia.",
    buttonText: "Discover Culture",
    image: "/hero-banner-3.jpg",
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
    <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center overflow-hidden">
      {/* Premium gradient overlay for better readability */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${slides[current].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white text-balance leading-tight tracking-tight">
                {slides[current].heading}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-white/95 text-balance leading-relaxed max-w-2xl">
                {slides[current].subheading}
              </p>

              {/* Accent Line - golden yellow like BJP */}
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-red-700 rounded-full"></div>
            </div>

            {/* CTA Buttons - Professional styling */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-red-700 to-blue-900 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-200 text-center whitespace-nowrap uppercase tracking-wide text-sm sm:text-base">
                {slides[current].buttonText}
              </button>
              <button className="px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-red-700 to-blue-900 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-200 text-center whitespace-nowrap uppercase tracking-wide text-sm sm:text-base">
                <Link href="/membership">Join MCC</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls - BJP style */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-3 bg-black/50 px-5 py-3 rounded-full backdrop-blur-md border border-white/20">
        <button
          onClick={prev}
          className="p-2.5 rounded-full bg-red-700 hover:bg-red-800 text-white transition-all duration-200 hover:shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-300 ${idx === current ? "bg-red-600 w-8 h-2.5" : "bg-white/40 w-2.5 h-2.5 hover:bg-white/60"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2.5 rounded-full bg-red-700 hover:bg-red-800 text-white transition-all duration-200 hover:shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
