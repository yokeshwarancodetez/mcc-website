"use client"

export default function MissionPillars() {
  const pillars = [
    {
      image: "/education-scholarship-books.jpg",
      title: "Education & Scholarships",
      description: "Bursaries, mentorship and support to shape futures.",
      color: "border-[#CE0000] bg-[#CE0000]/5",
    },
    {
      image: "/youth-sports-community-team.jpg",
      title: "Youth & Sports",
      description: "Programs enhancing leadership, skills and healthy competition.",
      color: "border-[#003087] bg-[#003087]/5",
    },
    {
      image: "/culture-heritage-traditional-art.jpg",
      title: "Culture & Heritage",
      description: "Language, arts and heritage programmes that preserve identity and pride.",
      color: "border-[#CE0000] bg-[#CE0000]/5",
    },
    {
      image: "/welfare-health-community-care.jpg",
      title: "Welfare & Legal Aid",
      description: "Community clinics, advisory services and support networks.",
      color: "border-[#003087] bg-[#003087]/5",
    },
    {
      image: "/women-empowerment-family.jpg",
      title: "Women & Family Development",
      description: "Empowerment, safety and economic participation for women and families.",
      color: "border-[#CE0000] bg-[#CE0000]/5",
    },
    {
      image: "/member-services-network.jpg",
      title: "Member Services",
      description: "Chapter networking, information resources and support for members.",
      color: "border-[#003087] bg-[#003087]/5",
    },
  ]

  return (
    <section id="mission" className="w-full py-20 bg-gradient-to-b from-[#003087]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Focus Areas</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Six key departments dedicated to serving our community
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className={`group rounded-xl p-6 border-l-4 ${pillar.color} hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img src={pillar.image || "/placeholder.svg"} alt={pillar.title} className="w-16 h-16 rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
