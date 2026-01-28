"use client"

import { useState, useEffect } from "react"

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
• Dato' Dr. N. Arumugasamy (1988–1995)  
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
      "During his presidency, he was appointed to the Senate where he represented MCC. He raised important matters pertaining to the Malaysian Ceylonese community and minority communities, strengthening MCC’s national presence.",
    years: "1970 – 1983 • President",
    image: "/2 founder image.jpeg",
  },
  {
    id: 3,
    name: "Tan Sri Dato' Seri V. Jeyaratnam",
    title: "President",
    description:
      "He was declared duly elected unopposed as President. His leadership focused on forging unity within the community and achieving the organisation’s aims.",
    years: "1983 – 1987 • President",
    image: "/3 founder image.jpeg",
  },
  {
    id: 4,
    name: "Dato’ Dr. N. Arumugasamy",
    title: "President (Neurosurgeon)",
    description:
      "Dato’ Dr. N. Arumugasamy served as President, continuing MCC’s mission of community leadership and development.",
    years: "1988 – 1995 • President",
    image: "/4 founder image.jpeg",
  },
  {
    id: 5,
    name: "Datuk Dr. D. M. Thuraiapah",
    title: "President",
    description:
      "Datuk Dr. D. M. Thuraiapah guided MCC through continued community service and representation.",
    years: "1996 – 2003 • President",
    image: "/5 founder image.jpeg",
  },
  {
    id: 6,
    name: "Dato' Dr. N. K. S. Tharmaseelan",
    title: "President",
    description:
      "Dato’ Dr. N. K. S. Tharmaseelan has served MCC into the modern era, focusing on unity, education, and national engagement.",
    years: "2004 – Present • President",
    image: "/6 founder image.jpeg",
  },
  {
    id: 7,
    name: "MCC Central Leadership Council",
    title: "Founding Leadership Team",
    description:
      "The early MCC leadership council played a crucial role in expanding membership, strengthening organisational structure, and advocating for the Malaysian Ceylonese community nationwide.",
    years: "Founding Council",
    image: "/7 founder image.jpeg",
  },
]

export default function Founderpage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= founders.length) setCurrentIndex(0)
  }, [currentIndex])

  const currentFounder = founders[currentIndex]

  return (
    <section className="w-full bg-white">

      {/* ===== Top Header ===== */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Our Founders & Presidents
          </h1>
          <p className="text-base md:text-xl text-gray-100">
            Visionary leaders who shaped MCC since 1958
          </p>
        </div>
      </div>

      {/* ===== Founder Section ===== */}
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-gray-900">
                <img
                  src={currentFounder.image}
                  alt={currentFounder.name}
                  className="w-full h-[420px] object-cover"
                />
                <div className="bg-gray-900 px-6 py-4">
                  <h4 className="text-white font-bold text-lg">
                    {currentFounder.name}
                  </h4>
                  <p className="text-amber-400 text-sm">
                    {currentFounder.years.split(" • ")[0]}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
                  {currentFounder.name}
                </h2>
                <p className="text-blue-900 font-semibold text-lg">
                  {currentFounder.title}
                </p>
              </div>

              <p className="text-gray-600 font-medium">
                {currentFounder.years}
              </p>

              <div className="border-l-4 border-blue-900 bg-blue-50 px-6 py-4 rounded">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {currentFounder.description}
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-gray-600 font-semibold">
                  {currentIndex + 1} of {founders.length}
                </span>
                <div className="flex gap-2">
                  {founders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition ${
                        index === currentIndex ? "bg-blue-900" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
