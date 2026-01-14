"use client"

export default function CoreValues() {
  const values = [
    {
      image: "/integrity-shield-emblem.jpg",
      title: "Integrity",
      description: "Transparent and accountable leadership in every endeavour.",
      color: "from-[#CE0000] to-[#b20000]",
      bgColor: "bg-[#CE0000]/5",
    },
    {
      image: "/unity-hands-together-symbol.jpg",
      title: "Unity",
      description: "Fostering common ground and shared destiny across communities.",
      color: "from-[#003087] to-[#001f52]",
      bgColor: "bg-[#003087]/5",
    },
    {
      image: "/service-seva-community-hands.jpg",
      title: "Service (Seva)",
      description: "Putting people first and generating tangible impact.",
      color: "from-[#CE0000] to-[#b20000]",
      bgColor: "bg-[#CE0000]/5",
    },
    {
      image: "/excellence-star-achievement.jpg",
      title: "Excellence",
      description: "Pursuing high standards in education, culture and governance.",
      color: "from-[#003087] to-[#001f52]",
      bgColor: "bg-[#003087]/5",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Mission & Values</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            MCC exists to empower the Malaysian Ceylonese community through education, cultural preservation, social
            welfare and civic participation—while furthering national unity and shared prosperity.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-xl p-8 ${value.bgColor} border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <img src={value.image || "/placeholder.svg"} alt={value.title} className="w-16 h-16 rounded-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-[#CE0000] text-white rounded-lg font-semibold hover:bg-[#b20000] transition-colors shadow-lg">
            Read the Mission
          </button>
        </div>
      </div>
    </section>
  )
}
