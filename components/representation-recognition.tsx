'use client'

import { Award, Users, Gavel, Star, CheckCircle, Building2 } from 'lucide-react'

export default function RepresentationRecognition() {
  const highlights = [
    {
      icon: Users,
      title: "Sole Representative",
      description: "The only political body representing Malaysian citizens of Ceylonese origin",
      color: "from-[#CE0000] to-[#A00000]",
      iconBg: "bg-[#CE0000]",
    },
    {
      icon: Gavel,
      title: "Senate Voice",
      description: "MCC President raised crucial matters in the Senate for minority communities",
      color: "from-[#003087] to-[#001f52]",
      iconBg: "bg-[#003087]",
    },
    {
      icon: Star,
      title: "Community Spokesman",
      description: "Emerged as the sole spokesman of the Malaysian Ceylonese community",
      color: "from-[#CE0000] to-[#B00000]",
      iconBg: "bg-[#CE0000]",
    },
    {
      icon: CheckCircle,
      title: "Barisan Support",
      description: "Continuously supported the Barisan National and national development",
      color: "from-[#003087] to-[#002060]",
      iconBg: "bg-[#003087]",
    },
    {
      icon: Building2,
      title: "SPR Recognition",
      description: "Listed as one of the registered political parties in Malaysia",
      color: "from-[#CE0000] to-[#900000]",
      iconBg: "bg-[#CE0000]",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            Representation & Recognition
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed px-2">
            MCC's journey of advocacy, recognition, and steadfast commitment to the Malaysian Ceylonese community and the nation
          </p>
        </div>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 lg:mb-14">
          {highlights.slice(0, 3).map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-5 sm:p-6 md:p-7 bg-white border-l-4 border-b-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:translate-y-[-4px] border-t-2 border-r border-gray-200"
                  style={{
                    borderLeftColor: item.color.includes('CE0000') ? '#CE0000' : '#003087',
                  }}
                >
                  {/* Icon Container */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform ${item.iconBg} shadow-md flex-shrink-0`}>
                    <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow line-clamp-4">
                    {item.description}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r rounded-full" style={{
                    backgroundImage: `linear-gradient(to right, ${item.color.includes('CE0000') ? '#CE0000' : '#003087'}, transparent)`
                  }}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom 2 Cards - Centered */}
        <div className="flex justify-center mb-10 sm:mb-12 lg:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-2xl sm:max-w-3xl w-full px-2">
            {highlights.slice(3, 5).map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-5 sm:p-6 md:p-7 bg-white border-l-4 border-b-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:translate-y-[-4px] border-t-2 border-r border-gray-200"
                    style={{
                      borderLeftColor: item.color.includes('CE0000') ? '#CE0000' : '#003087',
                    }}
                  >
                    {/* Icon Container */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform ${item.iconBg} shadow-md flex-shrink-0`}>
                      <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow line-clamp-4">
                      {item.description}
                    </p>

                    {/* Accent Line */}
                    <div className="mt-4 h-1 w-8 bg-gradient-to-r rounded-full" style={{
                      backgroundImage: `linear-gradient(to right, ${item.color.includes('CE0000') ? '#CE0000' : '#003087'}, transparent)`
                    }}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        {/* <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#CE0000]/15 to-[#003087]/15 rounded-xl border-l-4 border-[#CE0000] shadow-md p-6 sm:p-8 md:p-10 mx-2 sm:mx-auto">
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed font-medium">
            Through decades of dedicated service and unwavering commitment, MCC has established itself as the authoritative voice and representative of the Malaysian Ceylonese community, playing a vital role in Malaysia's multicultural fabric while advancing the interests of all Malaysians.
          </p>
        </div> */}
      </div>
    </section>
  )
}
