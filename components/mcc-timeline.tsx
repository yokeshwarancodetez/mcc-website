'use client'

import { Calendar, Award, CheckCircle2 } from 'lucide-react'

export default function MCCTimeline() {
  const milestones = [
    {
      year: '1958',
      date: '24 February 1958',
      title: 'Birth of MCC',
      description: 'M.W. Navaratnam announced the birth of the Malayan Ceylonese Congress, marking the climax to the public life of Ceylonese in Malaya.',
      icon: Award,
      color: 'from-[#CE0000] to-[#A00000]',
    },
    {
      year: '1966',
      date: '6 June 1966',
      title: 'Constitution Revised',
      description: 'With the new Societies Act brought into effect, the constitution of the Congress was revised and official registration was obtained.',
      icon: CheckCircle2,
      color: 'from-[#003087] to-[#001f52]',
    },
    {
      year: '1970s',
      date: 'Leadership Era',
      title: 'Expansion to 17 Branches',
      description: 'Under the leadership of Dato\' Dr. C. Sinnadurai, the organization grew significantly to seventeen branches across Malaysia.',
      icon: Award,
      color: 'from-[#CE0000] to-[#A00000]',
    },
    {
      year: '1980s-1990s',
      date: 'Senate Representation',
      title: 'President Appointed to Senate',
      description: 'The President was appointed to the Senate and represented the M.C.C. and its position in the Malaysian Parliament.',
      icon: CheckCircle2,
      color: 'from-[#003087] to-[#001f52]',
    },
    {
      year: '2009',
      date: '27 February 2009',
      title: 'SPR Registration',
      description: 'MCC was registered with the Malaysian Elections Commission (SPR), taking a significant step in formal political recognition.',
      icon: Award,
      color: 'from-[#CE0000] to-[#A00000]',
    },
    {
      year: '2009',
      date: '20 April 2009',
      title: 'Political Party Status',
      description: 'After 50 years, MCC was officially registered as a political party with SPR and listed as one of the 29 registered political parties in Malaysia.',
      icon: CheckCircle2,
      color: 'from-[#003087] to-[#001f52]',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            MCC Timeline & Milestones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey through the pivotal moments that shaped the Malaysian Ceylonese Congress over six decades
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#CE0000] via-[#003087] to-[#CE0000]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative">
                  <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#CE0000]">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-[#CE0000]" />
                          <span className="text-sm font-semibold text-[#CE0000]">{milestone.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="w-0 flex justify-center">
                      <div className={`bg-gradient-to-br ${milestone.color} rounded-full p-4 shadow-lg ring-4 ring-white relative z-10`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className={`w-1/2 ${isLeft ? 'pl-8' : 'pr-8'}`}>
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-[#CE0000] to-[#A00000] rounded-full px-6 py-3 shadow-lg">
                          <span className="text-white font-bold text-lg">{milestone.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">

          <a href="/about/founders" className="inline-block px-8 py-3 bg-[#CE0000] text-white rounded-lg font-semibold hover:bg-[#b20000] transition-colors shadow-lg">
            Learn More About Our History
          </a>
        </div>
      </div>
    </section>
  )
}
