"use client"

import { Mail, Award, Users, Lightbulb } from "lucide-react"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Dato' Dr. NKS Tharmaseelan",
      position: "President",
      tenure: "2020 - Present",
      image: "/mcc-president.jpg",
      color: "from-[#CE0000] to-[#b20000]",
      bio: "Visionary leader with extensive experience in community development and political advocacy. Dr. Tharmaseelan has dedicated his career to championing the rights and welfare of the Malaysian Ceylonese community.",
      achievements: [
        "Spearheaded digital transformation initiatives",
        "Expanded educational scholarships by 300%",
        "Strengthened parliamentary representation",
        "Enhanced international community relations",
      ],
      email: "president@mcc.org.my",
      phone: "+60 3 XXXX XXXX",
    },
    {
      name: "Mr. Vincent Kurup",
      position: "Vice President",
      tenure: "2020 - Present",
      image: "/mcc-vice-president.jpg",
      color: "from-[#003087] to-[#001f52]",
      bio: "Strategic leader focused on organizational growth and member engagement. Mr. Kurup brings valuable insights from his background in business and community management.",
      achievements: [
        "Launched youth empowerment programs",
        "Developed state-level partnerships",
        "Improved member retention by 45%",
        "Created mentorship initiatives",
      ],
      email: "vicepresident@mcc.org.my",
      phone: "+60 3 XXXX XXXX",
    },
    {
      name: "Ms. Priya Sharma",
      position: "General Secretary",
      tenure: "2021 - Present",
      image: "/mcc-general-secretary.jpg",
      color: "from-[#003087] to-[#001f52]",
      bio: "Dedicated administrator ensuring transparent operations and effective member communication. Ms. Sharma maintains comprehensive records and coordinates all organizational activities.",
      achievements: [
        "Implemented transparent governance framework",
        "Digitalized member communication systems",
        "Enhanced organizational documentation",
        "Increased member participation by 60%",
      ],
      email: "secretary@mcc.org.my",
      phone: "+60 3 XXXX XXXX",
    },
    {
      name: "Mr. Rajesh Nair",
      position: "Treasurer",
      tenure: "2019 - Present",
      image: "/mcc-treasurer.jpg",
      color: "from-[#CE0000] to-[#b20000]",
      bio: "Financial steward managing MCC resources with accountability and efficiency. Mr. Nair ensures prudent allocation of funds to support community initiatives.",
      achievements: [
        "Increased annual fundraising by 250%",
        "Improved financial transparency",
        "Secured additional grants and sponsorships",
        "Expanded scholarship fund significantly",
      ],
      email: "treasurer@mcc.org.my",
      phone: "+60 3 XXXX XXXX",
    },
  ]

  const responsibilities = [
    {
      title: "Vision & Strategy",
      description: "Set organizational direction and long-term strategic goals",
      icon: Lightbulb,
    },
    {
      title: "Community Representation",
      description: "Advocate for community interests in political forums",
      icon: Users,
    },
    {
      title: "Organizational Excellence",
      description: "Ensure efficient operations and member satisfaction",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Party Leadership</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Meet the dedicated leaders guiding Malaysian Ceylonese Congress toward a brighter future
          </p>
        </div>
      </div>

      {/* Leadership Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Leader Image */}
                <div className={`w-full h-64 bg-gradient-to-br ${leader.color} overflow-hidden`}>
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Leader Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{leader.name}</h3>
                    <p
                      className={`bg-gradient-to-r ${leader.color} bg-clip-text text-transparent font-semibold text-sm`}
                    >
                      {leader.position}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{leader.tenure}</p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">{leader.bio}</p>

                  {/* Contact */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center gap-2 text-sm text-[#003087] hover:text-[#CE0000] transition-colors"
                    >
                      <Mail size={16} /> {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Achievements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{leader.position}</h3>
                <ul className="space-y-3">
                  {leader.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="flex gap-3 text-sm text-gray-700">
                      <span className="text-[#CE0000] font-bold">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#CE0000]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Leadership Responsibilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {responsibilities.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CE0000] to-[#003087] rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Executive Committee Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] rounded-xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Executive Committee Structure</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              The MCC Executive Committee comprises dedicated individuals from diverse backgrounds who bring together
              extensive expertise in political advocacy, community development, business, and social welfare. Each
              member is committed to advancing the interests of the Malaysian Ceylonese community while upholding the
              values of integrity, unity, service, and excellence.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold mb-2">Total Members</p>
                <p className="text-2xl font-bold">15+</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold mb-2">Years of Combined Experience</p>
                <p className="text-2xl font-bold">200+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
