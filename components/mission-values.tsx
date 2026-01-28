"use client"

export default function MissionValues() {
  const objectives = [
    {
      icon: "📚",
      title: "Uphold the Constitution & Rukun Negara",
      description: "Emphasize MCC's unwavering commitment to Malaysia's national principles and constitutional framework.",
      tone: "red",
    },
    {
      icon: "ℹ️",
      title: "Ensure Representation",
      description: "Seek seats in Parliament and State Assemblies to effectively voice community concerns and interests.",
      tone: "red",
    },
    {
      icon: "🏰",
      title: "Promote National Unity & Racial Harmony",
      description: "Foster goodwill and understanding among all communities in Malaysia's diverse society.",
      tone: "blue",
    },
    {
      icon: "👥",
      title: "Collaborate for Common Goals",
      description: "Partner with like-minded organizations to achieve shared objectives for community development.",
      tone: "red",
    },
    {
      icon: "≡",
      title: "Advance Social & Economic Equity",
      description: "Work tirelessly for national solidarity and inclusive progress that benefits all Malaysians.",
      tone: "red",
    },
    {
      icon: "🎓",
      title: "Support Education & Co-operation",
      description: "Develop foundations and activities that promote lifelong learning and community cooperation.",
      tone: "red",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Empower the Malaysian Ceylonese",
      description: "Protect and advance community rights in politics, economy, education, and cultural preservation.",
      tone: "blue",
    },
    {
      icon: "✓",
      title: "Fulfill All Constitutional Objectives",
      description: "Stay mission-aligned in all initiatives while upholding our constitutional responsibilities and commitments.",
      tone: "red",
    },
  ]

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#CE0000]/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#003087]/10 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eight pillars guiding our mission and vision for the community
          </p>
        </div>

        {/* Objectives */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {objectives.map((objective, idx) => {
            const isRed = objective.tone === "red"

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Accent bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1.5 ${
                    isRed
                      ? "bg-gradient-to-b from-[#CE0000] to-[#b20000]"
                      : "bg-gradient-to-b from-[#003087] to-[#001f52]"
                  }`}
                />

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition ${
                    isRed
                      ? "bg-gradient-to-br from-[#CE0000] to-transparent"
                      : "bg-gradient-to-br from-[#003087] to-transparent"
                  }`}
                />

                <div className="relative flex gap-5">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md ${
                      isRed
                        ? "bg-[#CE0000]/10 text-[#CE0000]"
                        : "bg-[#003087]/10 text-[#003087]"
                    }`}
                  >
                    {objective.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-lg font-extrabold mb-2 ${
                        isRed ? "text-[#CE0000]" : "text-[#003087]"
                      }`}
                    >
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {objective.description}
                    </p>
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
