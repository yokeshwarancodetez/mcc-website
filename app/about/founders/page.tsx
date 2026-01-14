export default function FoundersPage() {
  const founders = [
    {
      name: "Mr. M.W. Navaratnam",
      role: "Chief Founder",
      description:
        "The visionary leader who transformed the Selangor State Ceylonese Association into the Malaysian Ceylonese Congress, establishing the foundation for our political participation.",
      achievements: [
        "Established political foundation in 1958",
        "United diverse Ceylonese communities",
        "Pioneered educational initiatives",
      ],
    },
    {
      name: "Founding Members Council",
      role: "50 Founding Members",
      description:
        "The original 50 dedicated individuals who believed in the vision of community service and political representation for Malaysians of Ceylonese origin.",
      achievements: [
        "Built organizational infrastructure",
        "Established community networks",
        "Created lasting partnerships",
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Details About Founders</h1>
          <p className="text-lg text-gray-100">The Visionaries Who Started Our Journey</p>
        </div>
      </div>

      {/* Founders Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#CE0000] p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#003087] mb-2">{founder.name}</h3>
              <p className="text-sm font-bold text-[#CE0000] mb-4">{founder.role}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{founder.description}</p>
              <div className="space-y-2">
                <p className="font-bold text-[#003087] text-sm">Key Achievements:</p>
                <ul className="space-y-1">
                  {founder.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-[#CE0000] font-bold mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-[#003087]/10 to-[#CE0000]/10 p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-8 text-center">Founding Timeline</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#CE0000] rounded-full mt-2"></div>
                <div className="w-1 h-20 bg-[#CE0000] mt-2"></div>
              </div>
              <div>
                <p className="font-bold text-[#003087]">1958 - The Beginning</p>
                <p className="text-gray-700">
                  MCC is established with a vision to serve the Malaysian Ceylonese community
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#003087] rounded-full mt-2"></div>
                <div className="w-1 h-20 bg-[#003087] mt-2"></div>
              </div>
              <div>
                <p className="font-bold text-[#003087]">1960s - Growth Phase</p>
                <p className="text-gray-700">Establishment of educational and welfare programs across the country</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#CE0000] rounded-full mt-2"></div>
              </div>
              <div>
                <p className="font-bold text-[#003087]">Today - Strong Legacy</p>
                <p className="text-gray-700">
                  Continuing the mission of serving 5000+ families with integrity and excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
