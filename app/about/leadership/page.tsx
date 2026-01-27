"use client"

const leaders = [
  {
    name: "Mr. M. W. Navaratnam",
    position: "Founder and First President",
    tenure: "1958 - 1969",
    color: "red",
    bio: "MCC was the brainchild of the late Mr. M.W. Navaratnam. He announced the birth of the Malayan Ceylonese Congress on the 24th day of February 1958, establishing the foundation for community representation and service.",
  },
  {
    name: "Senator Tan Sri Dr. C. Sinnadurai",
    position: "President",
    tenure: "1970 - 1983",
    color: "blue",
    bio: "Tan Sri Dato' Dr. C. Sinnadurai took over the leadership in 1970. The President was appointed to the Senate and represented the M.C.C. and its situation in the Senate, emerging as the sole spokesman of the Malaysian Ceylonese.",
  },
  {
    name: "Tan Sri Dato' Seri V. Jeyaratnam",
    position: "President",
    tenure: "1983 - 1987",
    color: "red",
    bio: "Tan Sri Dato' Seri V. Jeyaratnam was declared duly elected unopposed as the President. His tenure focused on forging unity within the community towards achieving the organisation's aims and objects.",
  },
  {
    name: "Dato Dr. N. Arumugasamy",
    position: "President (Neurosurgeon)",
    tenure: "1988 - 1995",
    color: "blue",
    bio: "Dato Dr N. Arumugasamy, a distinguished neurosurgeon, led the organization through a period of growth and professional excellence, bringing medical expertise to community welfare initiatives.",
  },
  {
    name: "Datuk Dr. D. M. Thuraiapah",
    position: "President",
    tenure: "1996 - 2003",
    color: "red",
    bio: "Datuk Dr. D.M. Thuraiapah provided strategic leadership during a transformative period, strengthening organizational infrastructure and expanding community services across Malaysia.",
  },
  {
    name: "Dato' Dr NKS Tharmaseelan",
    position: "President",
    tenure: "2004 - Present",
    color: "blue",
    bio: "Dato' Dr NKS Tharmaseelan continues the legacy of visionary leadership, modernizing MCC operations, spearheading digital transformation, and expanding educational and welfare programs for community members.",
  },
]

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Party Leadership
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Meet the dedicated leaders guiding Malaysian Ceylonese Congress toward a brighter future
          </p>
        </div>
      </div>

      {/* Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mb-14 text-center">
            Presidents of MCC
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader, idx) => {
              const isRed = leader.color === "red"

              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 bg-[#f7faff]
                  border-l-[6px] ${isRed ? "border-[#CE0000]" : "border-[#003087]"}`}
                >
                  <div className="space-y-4">

                    <div>
                      <h3 className={`text-xl font-bold ${isRed ? "text-[#CE0000]" : "text-[#003087]"}`}>
                        {leader.name}
                      </h3>

                      <p className={`font-semibold ${isRed ? "text-[#CE0000]" : "text-[#003087]"}`}>
                        {leader.position}
                      </p>

                      {/* YEAR – MADE PROMINENT */}
                      <p className={`text-lg font-bold mt-2 ${isRed ? "text-[#CE0000]" : "text-[#003087]"}`}>
                        {leader.tenure}
                      </p>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {leader.bio}
                    </p>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
