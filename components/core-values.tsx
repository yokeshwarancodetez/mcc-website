"use client"

export default function CoreValues() {
  const values = [
    {
      image: "/integrity-shield-emblem.jpg",
      title: "Integrity",
      description: "Transparent and accountable leadership in every endeavour.",
      tint: "bg-red-50",
    },
    {
      image: "/unity-hands-together-symbol.jpg",
      title: "Unity",
      description: "Fostering common ground and shared destiny across communities.",
      tint: "bg-blue-50",
    },
    {
      image: "/service-seva-community-hands.jpg",
      title: "Service (Seva)",
      description: "Putting people first and generating tangible impact.",
      tint: "bg-red-50",
    },
    {
      image: "/excellence-star-achievement.jpg",
      title: "Excellence",
      description: "Pursuing high standards in education, culture and governance.",
      tint: "bg-blue-50",
    },
  ]

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Our Core Values
          </h2>

          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            MCC exists to empower the Malaysian Ceylonese community through education, cultural
            preservation, social welfare and civic participation—while furthering national unity
            and shared prosperity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 ${value.tint} border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
