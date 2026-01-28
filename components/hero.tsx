"use client"

import { useState, useEffect, useRef } from "react"
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
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    if (distance > 50) next()
    if (distance < -50) prev()

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="
        relative w-full 
        min-h-[78vh] sm:min-h-[75vh] lg:min-h-[85vh] 
        flex items-center overflow-hidden
        bg-black
      "
    >
      {/* Background Image */}
      <div
        key={current}
        className="absolute inset-0 bg-no-repeat bg-center bg-contain sm:bg-cover transition-all duration-700"
        style={{ backgroundImage: `url('${slides[current].image}')` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 w-full flex items-center justify-center lg:justify-start">
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-16 sm:pt-0">

          <div className="
            bg-transparent sm:bg-gradient-to-br sm:from-black/60 sm:via-black/30 sm:to-transparent 
            rounded-xl sm:rounded-2xl 
            p-4 sm:p-7 lg:p-9 
            max-w-xl mx-auto lg:mx-0
          ">
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight drop-shadow-xl">
              {slides[current].heading}
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-lg">
              {slides[current].subheading}
            </p>

            <div className="mt-4 sm:mt-5 w-12 sm:w-24 h-1 bg-gradient-to-r from-red-700 to-blue-900 rounded-full mx-auto lg:mx-0"></div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
              <button className="px-4 py-2 sm:px-9 sm:py-3.5 bg-gradient-to-r from-red-700 to-blue-900 text-white font-semibold sm:font-bold rounded-md sm:rounded-lg hover:scale-105 transition uppercase tracking-wide text-[11px] sm:text-base shadow-lg">
                {slides[current].buttonText}
              </button>

              <Link href="/membership">
                <button className="px-4 py-2 sm:px-9 sm:py-3.5 bg-white/20 border border-white/40 text-white font-semibold sm:font-bold rounded-md sm:rounded-lg hover:bg-white/30 transition uppercase tracking-wide text-[11px] sm:text-base backdrop-blur shadow-lg">
                  Join MCC
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md border border-white/20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-red-600 w-6 sm:w-7 h-2"
                : "bg-white/60 w-2 h-2 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
