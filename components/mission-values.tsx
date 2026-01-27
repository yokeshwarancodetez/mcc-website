"use client"

export default function MissionValues() {
  const objectives = [
    {
      icon: "📚",
      title: "Uphold the Constitution & Rukun Negara",
      description: "Emphasize MCC's unwavering commitment to Malaysia's national principles and constitutional framework.",
      borderColor: "border-l-[#CE0000]",
      bgColor: "bg-white",
    },
    {
      icon: "ℹ️",
      title: "Ensure Representation",
      description: "Seek seats in Parliament and State Assemblies to effectively voice community concerns and interests.",
      borderColor: "border-l-[#CE0000]",
      bgColor: "bg-white",
    },
    {
      icon: "🏰",
      title: "Promote National Unity & Racial Harmony",
      description: "Foster goodwill and understanding among all communities in Malaysia's diverse society.",
      borderColor: "border-l-[#003087]",
      bgColor: "bg-white",
    },
    {
      icon: "👥",
      title: "Collaborate for Common Goals",
      description: "Partner with like-minded organizations to achieve shared objectives for community development.",
      borderColor: "border-l-[#CE0000]",
      bgColor: "bg-white",
    },
    {
      icon: "≡",
      title: "Advance Social & Economic Equity",
      description: "Work tirelessly for national solidarity and inclusive progress that benefits all Malaysians.",
      borderColor: "border-l-[#CE0000]",
      bgColor: "bg-white",
    },
    {
      icon: "🎓",
      title: "Support Education & Co-operation",
      description: "Develop foundations and activities that promote lifelong learning and community cooperation.",
      borderColor: "border-l-[#CE0000]",
      bgColor: "bg-white",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Empower the Malaysian Ceylonese",
      description: "Protect and advance community rights in politics, economy, education, and cultural preservation.",
      borderColor: "border-l-[#003087]",
      bgColor: "bg-white",
    },
    {
      icon: "✓",
      title: "Fulfill All Constitutional Objectives",
      description: "Stay mission-aligned in all initiatives while upholding our constitutional responsibilities and commitments.",
      borderColor: "border-l-[#CE0000]",
      bgColor: "bg-white",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Mission & Vision</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Eight pillars guiding our mission and vision for the community
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, idx) => (
            <div
              key={idx}
              className={`${objective.borderColor} border-l-4 rounded-lg p-6 ${objective.bgColor} shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0 min-w-fit">{objective.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#CE0000] mb-2">{objective.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
