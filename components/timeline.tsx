"use client"

export default function Timeline() {
  const presidents = [
    {
      name: "Mr. M.W. Navaratnam",
      title: "A.M.N. J.P",
      period: "1958 - 1969",
      description:
        "Founder and first president of MCC. Established the foundation for community leadership and cultural preservation.",
      image: "/political-leader-portrait-1958.jpg",
    },
    {
      name: "Senator Tan Sri Dr. C. Sinnadurai",
      period: "1970 - 1983",
      description: "Leadership during expansion phase. Grew MCC's influence across Malaysia.",
      image: "/political-leader-portrait-senator.jpg",
    },
    {
      name: "Tan Sri Dato' Seri V. Jeyaratnam",
      period: "1983 - 1987",
      description: "Strengthened community initiatives and enhanced MCC's parliamentary presence.",
      image: "/political-leader-portrait-dato.jpg",
    },
    {
      name: "Dato Dr N. Arumugasamy",
      title: "Neurosurgeon",
      period: "1988 - 1995",
      description: "Healthcare and education focus. Introduced scholarship programs benefiting thousands.",
      image: "/doctor-leader-medical-professional.jpg",
    },
    {
      name: "Datuk Dr. D.M. Thuraiapah",
      period: "1996 - 2003",
      description: "Economic and social advancement. Expanded MCC's reach to rural communities.",
      image: "/business-leader-portrait-professional.jpg",
    },
    {
      name: "Dato' Dr NKS Tharmaseelan",
      period: "2004 - 2023",
      description: "Economic and social advancement. Expanded MCC's reach to rural communities.",
      image: "/nks-tharmaseelan-president.jpg",
    },
    {
      name: "Anwar bin Ibrahim",
      period: "2024 - Present",
      description:
        "Current president leading MCC into a new era of progress and inclusive community development with focus on innovation and digital transformation.",
      image: "/anwar-bin-ibrahim-president.jpg",
    },
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-4">History of Our Party Timeline</h2>
          <p className="text-lg text-gray-600">A Glorious Journey of Visionaries Who Shaped MCC</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#CE0000] to-[#003087]"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {presidents.map((president, idx) => (
              <div key={idx} className={`flex md:gap-8 gap-4 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className="md:w-1/2 w-full">
                  <div className="bg-gradient-to-r from-[#003087] to-[#001f52] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold">{president.period}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{president.name}</h4>
                    {president.title && <p className="text-sm text-blue-100 mb-2">{president.title}</p>}
                    <p className="text-sm">{president.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex md:w-auto justify-center flex-col items-center gap-4">
                  <img
                    src={president.image || "/placeholder.svg"}
                    alt={president.name}
                    className="w-24 h-24 rounded-full border-4 border-[#CE0000] shadow-lg object-cover"
                  />
                  <div className="w-6 h-6 bg-[#CE0000] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden flex-shrink-0 pt-1">
                  <div className="w-4 h-4 bg-[#CE0000] rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 bg-gradient-to-r from-[#CE0000] to-[#B00000] p-8 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl font-bold italic">
            "Through six decades of unwavering service, MCC continues to be the voice of the Malaysian Ceylonese
            community, championing unity, progress, and the spirit of Seva that defines our heritage."
          </p>
        </div>
      </div>
    </section>
  )
}
