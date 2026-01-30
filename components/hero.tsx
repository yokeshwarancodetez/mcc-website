"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const slides = [
  {
    type: "image",
    heading: "Welcome to Malaysian Ceylonese Congress",
    subheading:
      "Since 1958, Over Six Decades of Service, Integrity, and Community Leadership. Building a stronger tomorrow through unity and excellence.",
    buttonText: "Learn More",
    src: "/mcc_banner_01.png",
  },
  {
    type: "video",
    src: "/mcc-video.mp4",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 50) setCurrent((p) => (p + 1) % slides.length)
    if (distance < -50) setCurrent((p) => (p - 1 + slides.length) % slides.length)
    touchStartX.current = null
    touchEndX.current = null
  }

  const slide = slides[current]

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-black"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 bg-black">
        {slide.type === "image" && (
          <div
            className="
              w-full h-full
              bg-center
              bg-cover sm:bg-cover
              bg-no-repeat
              transition-opacity duration-700
            "
            style={{ backgroundImage: `url('${slide.src}')` }}
          />
        )}

        {slide.type === "video" && (
          <video
            key={slide.src}
            src={slide.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-contain sm:object-cover bg-black"
          />
        )}
      </div>

      {/* ================= CONTENT (IMAGE SLIDE ONLY) ================= */}
      {slide.type === "image" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center sm:justify-start">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <div className="
                bg-black/60
                sm:bg-gradient-to-br sm:from-black/70 sm:via-black/40 sm:to-transparent
                rounded-2xl
                p-5 sm:p-8 lg:p-10
                max-w-xl mx-auto sm:mx-0
              ">
                <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  {slide.heading}
                </h1>

                <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed">
                  {slide.subheading}
                </p>

                <div className="mt-4 sm:mt-5 w-16 sm:w-20 h-1 bg-gradient-to-r from-red-700 to-blue-900 rounded-full mx-auto sm:mx-0" />

                <div className="hidden sm:flex mt-6 gap-4 justify-center sm:justify-start">
                  <button className="px-8 py-3 bg-gradient-to-r from-red-700 to-blue-900 text-white font-bold rounded-lg hover:scale-105 transition">
                    {slide.buttonText}
                  </button>

                  <Link href="/membership">
                    <button className="px-8 py-3 bg-white/20 border border-white/40 text-white font-bold rounded-lg hover:bg-white/30 transition backdrop-blur">
                      Join MCC
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur border border-white/20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all ${
              idx === current
                ? "bg-red-600 w-7 h-2"
                : "bg-white/70 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
