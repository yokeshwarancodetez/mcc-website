import { Mail } from "lucide-react"

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. S. Sathish Kumar",
      position: "President",
      description: "Leading MCC with vision and integrity for over a decade",
      color: "from-[#CE0000] to-[#b20000]",
      image: "/mcc-president.jpg",
    },
    {
      name: "Mr. Vincent Kurup",
      position: "Vice President",
      description: "Supporting community initiatives and strategic partnerships",
      color: "from-[#003087] to-[#001f52]",
      image: "/mcc-vice-president.jpg",
    },
    {
      name: "Ms. Priya Sharma",
      position: "General Secretary",
      description: "Ensuring transparent operations and member engagement",
      color: "from-[#003087] to-[#001f52]",
      image: "/mcc-general-secretary.jpg",
    },
    {
      name: "Mr. Rajesh Nair",
      position: "Treasurer",
      description: "Managing resources with accountability and efficiency",
      color: "from-[#CE0000] to-[#b20000]",
      image: "/mcc-treasurer.jpg",
    },
  ]

  return (
    <section id="leadership" className="w-full py-20 bg-gradient-to-b from-[#CE0000]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">From the President</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
            "Through six decades of service, MCC continues to be the voice of the Malaysian Ceylonese
            community—championing unity, education and the spirit of seva that defines our heritage."
          </p>
        </div>

        {/* Message Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#003087] to-[#001f52] rounded-xl p-12 border-2 border-[#003087] shadow-lg">
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              Our organization stands at a critical juncture where the values of integrity, unity, service, and
              excellence guide every decision we make. In serving the Malaysian Ceylonese community, we remain steadfast
              in our commitment to education, cultural preservation, and social uplift.
            </p>
            <p className="text-lg text-white leading-relaxed">
              As we move forward, we invite you to join us in this journey of community empowerment and national unity.
            </p>
            <div className="pt-4">
              <p className="font-bold text-white">— MCC Leadership</p>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-16">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Avatar placeholder */}
              <div className={`w-full h-48 bg-gradient-to-br ${leader.color} flex items-center justify-center`}>
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p
                  className={`bg-gradient-to-r ${leader.color} bg-clip-text text-transparent font-semibold text-sm mb-3`}
                >
                  {leader.position}
                </p>
                <p className="text-gray-700 text-sm mb-4">{leader.description}</p>

                {/* Contact Links */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 p-2 bg-[#003087]/10 hover:bg-[#003087]/20 rounded text-[#003087] text-sm font-medium transition-colors flex items-center justify-center gap-1">
                    <Mail size={16} /> Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Board Info */}
        <div className="bg-gradient-to-r from-[#CE0000] to-[#b20000] rounded-xl p-8 border-2 border-[#CE0000] shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">Executive Committee</h3>
          <p className="text-white/90 mb-6">
            Our executive committee brings together diverse expertise, cultural heritage, and commitment to community
            service. Each member contributes unique perspectives to ensure MCC remains responsive to community needs.
          </p>
          <button className="px-6 py-2 bg-white text-[#CE0000] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Full Committee
          </button>
        </div>
      </div>
    </section>
  )
}
