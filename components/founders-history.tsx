"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Founder {
  id: number
  name: string
  title: string
  description: string
  years: string
  image: string
}

const founders: Founder[] = [
  {
    id: 1,
    name: "Founder 1",
    title: "Founder",
    description: "Founded the Malaysian Ceylonese Congress with a vision of unity and cultural preservation.",
    years: "1950 - 1970 • 20 years",
    image: "/founder-1.jpeg",
  },
  {
    id: 2,
    name: "Founder 2",
    title: "2nd President",
    description:
      "Expanded MCC's reach and established community programs. Strengthened political engagement and cultural preservation.",
    years: "1970 - 1983 • 13 years",
    image: "/founder-2.jpeg",
  },
  {
    id: 3,
    name: "Founder 3",
    title: "3rd President",
    description:
      "Continued the mission of MCC and strengthened community bonds. Advanced education and youth programs.",
    years: "1983 - 1995 • 12 years",
    image: "/founder-3.jpeg",
  },
  {
    id: 4,
    name: "Founder 4",
    title: "4th President",
    description:
      "Modernized MCC operations and expanded cultural initiatives. Enhanced community engagement and social welfare programs.",
    years: "1995 - 2005 • 10 years",
    image: "/founder-4.jpeg",
  },
  {
    id: 5,
    name: "Founder 5",
    title: "5th President",
    description:
      "Strengthened inter-community relations and expanded MCC presence. Focused on education and cultural preservation.",
    years: "2005 - 2012 • 7 years",
    image: "/founder-5.jpeg",
  },
  {
    id: 6,
    name: "Founder 6",
    title: "6th President",
    description:
      "Advanced digital initiatives and youth empowerment. Expanded MCC's influence in national affairs and community development.",
    years: "2012 - 2018 • 6 years",
    image: "/founder-6.jpeg",
  },
  {
    id: 7,
    name: "Founder 7",
    title: "Current President",
    description:
      "Leading MCC into the future with focus on unity, sustainability, and community empowerment across all demographics.",
    years: "2018 - Present • 6+ years",
    image: "/founder-7.jpeg",
  },
]

export default function FoundersHistory() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? founders.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === founders.length - 1 ? 0 : prevIndex + 1))
  }

  const currentFounder = founders[currentIndex]

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image with Caption */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-gray-900">
              <img
                src={currentFounder.image || "/placeholder.svg"}
                alt={currentFounder.name}
                className="w-full h-[420px] object-cover"
              />
              <div className="bg-gray-900 px-6 py-4">
                <h4 className="text-white font-bold text-lg">{currentFounder.name}</h4>
                <p className="text-amber-400 text-sm">{currentFounder.years.split(" • ")[0]}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-6 lg:items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">{currentFounder.name}</h2>
              <p className="text-blue-900 font-semibold text-lg">{currentFounder.title}</p>
            </div>

            {/* Years and tenure */}
            <p className="text-gray-600 text-base">{currentFounder.years}</p>

            {/* Description in blue bordered box */}
            <div className="border-l-4 border-blue-900 bg-blue-50 px-6 py-4 rounded">
              <p className="text-gray-700 leading-relaxed">{currentFounder.description}</p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={goToPrevious}
                className="flex items-center gap-2 px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
                aria-label="Previous founder"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-6 py-2 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors"
                aria-label="Next founder"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide indicator */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-gray-600 font-semibold">
                {currentIndex + 1} of {founders.length}
              </span>
              <div className="flex gap-2">
                {founders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-900" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
