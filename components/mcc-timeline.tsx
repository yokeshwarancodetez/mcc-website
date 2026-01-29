'use client'

import { Calendar, Award, CheckCircle2 } from 'lucide-react'

export default function MCCTimeline() {
  const milestones = [
    {
      year: '1958',
      date: '24 February 1958',
      title: 'Establishment of the Malayan Ceylonese Congress',
      description:
        'The Malayan Ceylonese Congress was established following Malaya’s independence to provide organised political representation and to safeguard the political, educational, social, and cultural interests of Malaysians of Ceylonese origin. The birth of MCC was announced by its Founder and first President, Mr. M. W. Navaratnam.',
      icon: Award,
    },
    {
      year: '1966',
      date: '6 June 1966',
      title: 'Constitution Revised & Official Registration',
      description:
        'Following the introduction of the Societies Act, the Constitution of the Congress was revised and MCC was officially registered, giving it formal legal standing and strengthening its organisational framework.',
      icon: CheckCircle2,
    },
    {
      year: '1969',
      date: 'Period of Organisational Challenge',
      title: 'Temporary Decline in Activities',
      description:
        'Due to the death of key office bearers, the activities of the Congress declined. During this period, MCC faced the possibility of deregistration because of inactivity, affecting organisational momentum.',
      icon: Award,
    },
    {
      year: '1970',
      date: 'Revival Period',
      title: 'Revival of the Congress',
      description:
        'The Congress was successfully revived, restoring its organisational structure and renewing engagement with the community. MCC began expanding its presence through branches and national-level representation.',
      icon: CheckCircle2,
    },
    {
      year: '1975',
      date: '1975 / 1976',
      title: 'Adoption of the Name Malaysian Ceylonese Congress',
      description:
        'The organisation officially adopted the name Malaysian Ceylonese Congress, reflecting its national identity in post-independence Malaysia and strengthening its role as a representative body.',
      icon: Award,
    },
    {
      year: '1988',
      date: '1987 / 1988',
      title: 'Continuity of Representation',
      description:
        'MCC continued its organisational activities and remained actively involved in community and national-level engagements, maintaining continuity of leadership and representation.',
      icon: CheckCircle2,
    },
    {
      year: '1991',
      date: 'Early 1990s',
      title: 'Sustained Community Engagement',
      description:
        'MCC continued addressing community matters in accordance with its constitution, with continued emphasis on unity, representation, and organisational stability.',
      icon: Award,
    },
    {
      year: '2003',
      date: '2002 / 2003',
      title: 'Organisational Stability',
      description:
        'The Congress maintained stability in its administration and activities, continuing to function in line with its established objectives and community responsibilities.',
      icon: CheckCircle2,
    },
    {
      year: '2006',
      date: '2004 / 2006',
      title: 'Continued Role as Community Representative',
      description:
        'From this period onwards, MCC continued its role as the representative organisation of the Malaysian Ceylonese community, carrying forward its foundational goals and organisational structure.',
      icon: Award,
    },
    {
      year: '2009',
      date: '27 February 2009',
      title: 'Registration with Election Commission (SPR)',
      description:
        'MCC was officially registered with the Malaysian Elections Commission (SPR), marking a major milestone in its political journey.',
      icon: CheckCircle2,
    },
    {
      year: '2009',
      date: '20 April 2009',
      title: 'Recognition as a Registered Political Party',
      description:
        'After more than five decades, MCC was officially listed on the SPR website as one of the registered political parties in Malaysia.',
      icon: Award,
    },
    {
      year: '2020',
      date: 'Vision 2020 Era',
      title: 'Alignment with National Vision',
      description:
        'MCC aligned its community outlook with Malaysia’s Vision 2020 framework, emphasising education, unity, progress, and participation in national development.',
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
            <span className="block">Historical Timeline of the</span>
            <span className="block">Malaysian Ceylonese Congress (MCC)</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tracing the journey of MCC from its founding in 1958 to its continued role in national and community development.
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
                <div className="h-1.5 w-full bg-gradient-to-r from-[#CE0000] to-[#003087]" />

                <div className="p-5 sm:p-6 md:p-7 flex flex-col h-full">

                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#CE0000] to-[#003087] flex items-center justify-center shadow-lg">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>

                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003087] tracking-wide">
                      {milestone.year.replace('-', '')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#CE0000]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#CE0000]">
                      {milestone.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#003087] mb-2 sm:mb-3 leading-snug">
                    {milestone.title}
                  </h3>

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
