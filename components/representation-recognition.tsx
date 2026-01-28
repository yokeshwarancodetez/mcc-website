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

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Representation & Recognition
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MCC's journey of advocacy, recognition, and steadfast commitment to the Malaysian Ceylonese community and the nation
          </p>
        </div>

        {/* Top 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {highlights.slice(0, 3).map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="group relative">
                <div
                  className="relative h-full p-6 bg-white border-l-4 border-b-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 border-t-2 border-r border-gray-200"
                  style={{
                    borderLeftColor: item.color.includes('CE0000') ? '#CE0000' : '#003087',
                  }}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${item.iconBg} shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* 🔥 MOBILE FONT INCREASED HERE */}
                  <p className="text-base sm:text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div
                    className="mt-4 h-1 w-10 rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${item.color.includes('CE0000') ? '#CE0000' : '#003087'}, transparent)`
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom 2 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl w-full">
            {highlights.slice(3, 5).map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="group relative">
                  <div
                    className="relative h-full p-6 bg-white border-l-4 border-b-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 border-t-2 border-r border-gray-200"
                    style={{
                      borderLeftColor: item.color.includes('CE0000') ? '#CE0000' : '#003087',
                    }}
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${item.iconBg} shadow-md`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    {/* 🔥 MOBILE FONT INCREASED HERE */}
                    <p className="text-base sm:text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    <div
                      className="mt-4 h-1 w-10 rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${item.color.includes('CE0000') ? '#CE0000' : '#003087'}, transparent)`
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
