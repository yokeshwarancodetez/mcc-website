"use client"

import { useState, useEffect } from "react"
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
  name: "Mr. M. W. Navaratnam",
  title: "Founder & President",
  description: `MCC was established as a political party with the aim of supporting the then Alliance Party and has continuously supported Barisan Nasional.

MCC was the brainchild of the late Mr. M. W. Navaratnam and was formed to promote and preserve the political, educational, economic, social, and cultural interests of Malaysians of Ceylonese (Sri Lankan) origin.

To date, six (6) presidents have held office since 1958:

• Mr. M. W. Navaratnam (1958–1969)  
• Senator Tan Sri Dr. C. Sinnadurai (1970–1983)  
• Tan Sri Dato' Seri V. Jeyaratnam (1983–1987)  
• Dato' Dr. N. Arumugasamy (Neurosurgeon) (1988–1995)  
• Datuk Dr. D. M. Thuraiapah (1996–2003)  
• Dato' Dr. N. K. S. Tharmaseelan (2004–Present)`,
  years: "1958 – 1969 • Founder President",
  image: "/founder-image.png",
},

  {
    id: 2,
    name: "Senator Tan Sri Dr. C. Sinnadurai",
    title: "President",
    description:
      "During his presidency, he was appointed to the Senate where he represented MCC. He raised important matters pertaining to the Malaysian Ceylonese community in particular, and minority communities in general, strengthening MCC’s national presence.",
    years: "1970 – 1983 • President",
    image: "/2 founder image.jpeg",
  },
  {
    id: 3,
    name: "Tan Sri Dato' Seri V. Jeyaratnam",
    title: "President",
    description:
      "He was declared duly elected unopposed as President. His leadership focused on forging unity within the community and working towards achieving the aims and objectives of the organisation.",
    years: "1983 – 1987 • President",
    image: "/3 founder image.jpeg",
  },
  {
    id: 4,
    name: "Dato’ Dr. N. Arumugasamy",
    title: "President (Neurosurgeon)",
    description:
      "Dato’ Dr. N. Arumugasamy served as President during this period, continuing MCC’s mission of community leadership and development.",
    years: "1988 – 1995 • President",
    image: "/4 founder image.jpeg",
  },
  {
    id: 5,
    name: "Datuk Dr. D. M. Thuraiapah",
    title: "President",
    description:
      "Datuk Dr. D. M. Thuraiapah served as President of the Malaysian Ceylonese Congress, guiding the organisation through continued community service and representation.",
    years: "1996 – 2003 • President",
    image: "/5 founder image.jpeg",
  },
  // {
  //   id: 6,
  //   name: "Dato’ Dr. NKS Tharmaseelan",
  //   title: "President",
  //   description:
  //     "Dato’ Dr. NKS Tharmaseelan has served as President from 2004 to the present, leading MCC into the modern era with sustained commitment to community development, unity, and progress.",
  //   years: "2004 – Present • President",
  //   image: "/founder-7.jpeg",
  // },
]

export default function FoundersHistory() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 🔒 Prevent out-of-range crash if slides change
  useEffect(() => {
    if (currentIndex >= founders.length) {
      setCurrentIndex(0)
    }
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? founders.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === founders.length - 1 ? 0 : prev + 1))
  }

  const currentFounder = founders[currentIndex] || founders[0]

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* Left Side - Image */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-gray-900">
              <img
                src={currentFounder?.image || "/placeholder.svg"}
                alt={currentFounder?.name || "Founder"}
                className="w-full h-[420px] object-cover"
              />
              <div className="bg-gray-900 px-6 py-4">
                <h4 className="text-white font-bold text-lg">{currentFounder.name}</h4>
                <p className="text-amber-400 text-sm">
                  {currentFounder.years.split(" • ")[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-6 lg:items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
                {currentFounder.name}
              </h2>
              <p className="text-blue-900 font-semibold text-lg">
                {currentFounder.title}
              </p>
            </div>

            <p className="text-gray-600 text-base">{currentFounder.years}</p>

            <div className="border-l-4 border-blue-900 bg-blue-50 px-6 py-4 rounded">
              <p className="text-gray-700 leading-relaxed">
                {currentFounder.description}
              </p>
            </div>

            {/* Buttons */}
            {/* <div className="flex items-center gap-4 pt-4">
              <button
                onClick={goToPrevious}
                className="flex items-center gap-2 px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-6 py-2 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div> */}

            {/* Indicator */}
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
