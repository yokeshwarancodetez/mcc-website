"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    heading: "Welcome to Malaysian Ceylonese Congress",
    subheading:
      "Since 1958, Over Six Decades of Service, Integrity, and Community Leadership. Building a stronger tomorrow through unity and excellence.",
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

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-black">

      {/* Background Image */}
      <div
        key={current}
        className="absolute inset-0 bg-no-repeat bg-center bg-contain sm:bg-cover transition-all duration-700"
        style={{ backgroundImage: `url('${slides[current].image}')` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full flex items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          {/* Soft text backdrop */}
          <div className="bg-gradient-to-br from-black/60 via-black/30 to-transparent rounded-2xl p-5 sm:p-7 lg:p-9 max-w-2xl mx-auto lg:mx-0">

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">

              <div className="space-y-3 sm:space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  {slides[current].heading}
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed">
                  {slides[current].subheading}
                </p>

                <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-red-700 to-blue-900 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
                <button className="px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-r from-red-700 to-blue-900 text-white font-bold rounded-lg hover:scale-105 transition uppercase tracking-wide text-sm sm:text-base shadow-lg">
                  {slides[current].buttonText}
                </button>

                <Link href="/membership">
                  <button className="px-7 sm:px-9 py-3 sm:py-3.5 bg-white/15 border border-white/40 text-white font-bold rounded-lg hover:bg-white/25 transition uppercase tracking-wide text-sm sm:text-base backdrop-blur shadow-lg">
                    Join MCC
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ✅ Dots only */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-red-600 w-7 h-2.5"
                : "bg-white/60 w-2.5 h-2.5 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  )
}
