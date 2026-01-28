import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CWCPage() {
  const cwcMembers = [
    {
      position: "President",
      name: "Dato' Dr. NKS Tharmaseelan",
      tier: "president",
      image: "/cwc-president.png",
    },
    {
      position: "Deputy President",
      name: "Dr. S. Sundralingam",
      tier: "deputy",
      image: "/deputy-president.jpg",
    },
    {
      position: "Secretary General",
      name: "G. Rasamalar",
      tier: "secretary",
      image: "/secretary.jpg",
    },
    {
      position: "Treasurer General",
      name: "Shamini Kandasamy",
      tier: "treasurer",
      image: "/treasurer.jpg",
    },
  ]

  const viceChairmen = [
    { name: "S. Kamalanathan", image: "/vice1.jpg" },
    { name: "S. Mahalingam", image: "/vice2.htm" },
    { name: "Ericc Ganapathy", image: "/vice3.jpg" },
    { name: "Rasamani Kandiah", image: "/vice4.jpg" },
  ]

  const councilMembers = [
    { name: "Rajeswari Kandiah", image: "/councilmember3.htm" },
    { name: "Sivamalar Kandiah", image: "/council1.jpg" },
    { name: "Saraswathy Rajagopal", image: "/councilmember.jpg" },
    { name: "Mahendranathan T", image: "/council-member2.jpg" },
  ]

  return (
    <main className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Central Working Committee (CWC)</h1>
          <p className="text-lg sm:text-xl text-gray-100">Leadership & Governance of Malaysian Ceylonese Congress</p>
        </div>
      </section>

      {/* President Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Office Bearers</h2>
            <div className="flex justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-700 rounded-full"></div>
              <div className="h-1 w-12 bg-blue-900 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg">The Executive Leadership</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cwcMembers.map((member, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  member.tier === "president"
                    ? "lg:col-span-2 bg-gradient-to-br from-red-700 to-red-800 text-white p-8 sm:p-10"
                    : member.tier === "deputy"
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 sm:p-8"
                      : "bg-white border-2 border-gray-200 p-6 sm:p-8"
                }`}
              >
                <div className={`flex flex-col items-center text-center ${member.tier !== "president" && member.tier !== "deputy" ? "gap-3" : "gap-4"}`}>
                  <div className="relative overflow-hidden rounded-xl bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex-shrink-0">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={member.tier === "president" || member.tier === "deputy" ? "text-white" : ""}>
                    <p
                      className={`text-xs sm:text-sm uppercase tracking-widest font-bold ${
                        member.tier === "president" || member.tier === "deputy" ? "text-yellow-200" : "text-red-700"
                      }`}
                    >
                      {member.position}
                    </p>
                    <p
                      className={`text-lg sm:text-2xl font-bold mt-2 ${
                        member.tier === "president" || member.tier === "deputy" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {member.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vice Chairmen Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Vice Chairmen</h2>
            <div className="flex justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-700 rounded-full"></div>
              <div className="h-1 w-12 bg-blue-900 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {viceChairmen.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-blue-700 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 w-28 h-28 sm:w-36 sm:h-36">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm uppercase tracking-widest font-bold text-blue-900 mb-2">Vice Chairman</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Members Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Council Members</h2>
            <div className="flex justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-700 rounded-full"></div>
              <div className="h-1 w-12 bg-blue-900 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {councilMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-50 to-blue-50 border-l-4 border-red-700 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 w-28 h-28 sm:w-36 sm:h-36">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm uppercase tracking-widest font-bold text-red-700 mb-2">Council Member</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Functions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">CWC Functions & Responsibilities</h2>
            <div className="flex justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-700 rounded-full"></div>
              <div className="h-1 w-12 bg-blue-900 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              The Central Working Committee is responsible for strategic leadership, policy formulation, and oversight of all MCC activities and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Policy Making", desc: "Formulate party policies and programs aligned with MCC objectives and community interests" },
              { title: "Strategic Planning", desc: "Develop long-term strategies for organizational growth and community representation" },
              { title: "Financial Oversight", desc: "Review and approve budgets, financial allocations, and resource management" },
              { title: "Member Discipline", desc: "Address party member grievances, ensure compliance with party constitution and conduct" },
              { title: "Community Programs", desc: "Oversee educational, cultural, welfare, and community engagement initiatives" },
              { title: "Inter-party Relations", desc: "Manage relationships with allied political organizations and government bodies" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-red-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-red-700 to-blue-900 text-white">
                      <span className="text-lg font-bold">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Structure Info */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">1</p>
              <p className="text-base sm:text-lg">President</p>
              <p className="text-sm text-gray-200 mt-2">Apex Leadership Position</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">4</p>
              <p className="text-base sm:text-lg">Vice Chairmen</p>
              <p className="text-sm text-gray-200 mt-2">Regional & Functional Leadership</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">4</p>
              <p className="text-base sm:text-lg">Council Members</p>
              <p className="text-sm text-gray-200 mt-2">Executive Committee Members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
