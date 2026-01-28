'use client'

import { Calendar, Award, CheckCircle2 } from 'lucide-react'

export default function MCCTimeline() {
  const milestones = [
    {
      year: '1958',
      date: '24 February 1958',
      title: 'Formation of the Malayan Ceylonese Congress',
      description:
        'The formation of the Malayan Ceylonese Congress in 1958 marked the climax of the public life of the Ceylonese community in Malaya. Mr. M. W. Navaratnam announced the birth of the Malayan Ceylonese Congress (M.C.C.) on the 24th day of February 1958.',
      icon: Award,
    },
    {
      year: '1966',
      date: '6 June 1966',
      title: 'Constitution Revised and Official Registration',
      description:
        'In 1966, when the new Societies Act was brought into effect, the constitution of the Congress was revised and registration was officially obtained on the 6th of June 1966.',
      icon: CheckCircle2,
    },
    {
      year: '1970s',
      date: 'Leadership of Dato’ Dr. C. Sinnadurai',
      title: 'Expansion to Seventeen Branches',
      description:
        'Under the leadership of Dato’ Dr. C. Sinnadurai, the organization experienced major growth and expanded to seventeen branches across the country.',
      icon: Award,
    },
    {
      year: '1980s–1990s',
      date: 'Senate Representation Era',
      title: 'MCC Represented in the Senate',
      description:
        'The President was appointed to the Senate and represented the Malayan Ceylonese Congress and its position at the national level.',
      icon: CheckCircle2,
    },
    {
      year: '2009-1',
      date: '27 February 2009',
      title: 'Registration with Malaysian Elections Commission',
      description:
        'On 27 February 2009, MCC was officially registered with the Malaysian Elections Commission (SPR), marking a significant milestone in its political journey.',
      icon: Award,
    },
    {
      year: '2009-2',
      date: '20 April 2009',
      title: 'Official Political Party Status',
      description:
        'On 20 April 2009, after 50 years, MCC was registered with Suruhanjaya Pilihan Raya Malaysia and listed on the SPR website as one of the registered political parties in Malaysia.',
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white relative overflow-hidden">

      {/* Soft background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(206,0,0,0.04),_rgba(0,48,135,0.04))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#003087] mb-3 sm:mb-4 leading-tight">
            Historical Timeline of the Malaysian Ceylonese Congress
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The formation of the Malayan Ceylonese Congress in 1958 is the climax to the public life of the Ceylonese community in Malaya.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon

            return (
              <div
                key={`${milestone.year}-${index}`}
                className="relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition overflow-hidden flex flex-col"
              >
                {/* Top bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#CE0000] to-[#003087]" />

                <div className="p-5 sm:p-6 md:p-7 flex flex-col h-full">

                  {/* Icon + year */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#CE0000] to-[#003087] flex items-center justify-center shadow-lg">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>

                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003087] tracking-wide">
                      {milestone.year.replace('-', '')}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#CE0000]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#CE0000]">
                      {milestone.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#003087] mb-2 sm:mb-3 leading-snug">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                    {milestone.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <a
            href="/about/our-history"
            className="inline-block px-7 sm:px-9 md:px-10 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition text-sm sm:text-base"
          >
            Explore Our History
          </a>
        </div>

      </div>
    </section>
  )
}
