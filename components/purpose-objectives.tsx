'use client'

import { Target, Heart, Globe, Users } from 'lucide-react'

export default function PurposeObjectives() {
  const purposes = [
    {
      icon: Target,
      title: "Our Primary Purpose",
      description: "To promote and safeguard the Political, Educational, Social and Cultural interests of the Malaysian Ceylonese Community.",
      color: "from-[#CE0000] to-[#A00000]",
      bgColor: "bg-[#CE0000]/10",
    },
    {
      icon: Globe,
      title: "Our Mission",
      description: "Promote and preserve the Political, Educational, Economical, Social and Cultural aspects of the Malaysians of Ceylonese origin, or Sri Lankan, descent.",
      color: "from-[#003087] to-[#001f52]",
      bgColor: "bg-[#003087]/10",
    },
    {
      icon: Heart,
      title: "Our Commitment",
      description: "Being the voice of a minority community and realising the lack of political clout in terms of numerical strength, we forge unity within the community towards achieving our organisation's aims and objects.",
      color: "from-[#CE0000] to-[#8B0000]",
      bgColor: "bg-[#CE0000]/10",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Purpose & Objectives
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded on principles of unity, MCC stands as the voice of our community, dedicated to safeguarding and advancing our interests across all spheres of society.
          </p>
        </div>

        {/* Purpose Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {purposes.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card Content */}
                <div className={`relative p-8 rounded-xl border border-gray-200 ${item.bgColor} group-hover:border-gray-300 transition-colors h-full flex flex-col`}>
                  {/* Icon Container */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base flex-grow">
                    {item.description}
                  </p>

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting Statement */}
        {/* <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#003087]/5 to-[#CE0000]/5 rounded-xl p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[#CE0000] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Unified Community Strength</h4>
                <p className="text-gray-700 leading-relaxed">
                  Recognising that the Malaysian Ceylonese community, while vibrant and resourceful, requires collective action to ensure our voices are heard in the political and social spheres. MCC is the institutional platform through which we achieve our shared aspirations and protect our collective interests.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
