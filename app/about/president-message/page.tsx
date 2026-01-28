"use client"

import { Mail, ChevronRight } from "lucide-react"

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. S. Sathish Kumar",
      position: "President",
      description: "Leading MCC with vision and integrity for over a decade",
      image: "/mcc-president.jpg",
    },
    {
      name: "Mr. Vincent Kurup",
      position: "Vice President",
      description: "Supporting community initiatives and strategic partnerships",
      image: "/mcc-vice-president.jpg",
    },
    {
      name: "Ms. Priya Sharma",
      position: "General Secretary",
      description: "Ensuring transparent operations and member engagement",
      image: "/mcc-general-secretary.jpg",
    },
    {
      name: "Mr. Rajesh Nair",
      position: "Treasurer",
      description: "Managing resources with accountability and efficiency",
      image: "/mcc-treasurer.jpg",
    },
  ]

  return (
    <section className="w-full bg-white">

      {/* ===================== */}
      {/* Top Banner / Breadcrumb */}
      {/* ===================== */}
      <div className="w-full bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-4 md:py-7">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our President’s Message
          </h1>

         
        </div>
      </div>

      {/* ===================== */}
      {/* President Message Header */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-14 space-y-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003087]">
            About The President
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
            "Through six decades of service, MCC continues to be the voice of the
            Malaysian Ceylonese community—championing unity, education and the
            spirit of seva that defines our heritage."
          </p>
        </div>

        {/* ===================== */}
        {/* President Message Card */}
        {/* ===================== */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#003087] to-[#001f52] rounded-2xl p-8 md:p-12 shadow-xl border border-[#003087]">
          <div className="space-y-6 text-white text-base md:text-lg leading-relaxed">
            <p>
              Our organization stands at a critical juncture where the values of
              integrity, unity, service, and excellence guide every decision we
              make. In serving the Malaysian Ceylonese community, we remain
              steadfast in our commitment to education, cultural preservation,
              and social uplift.
            </p>

            <p>
              As we move forward, we invite you to join us in this journey of
              community empowerment and national unity.
            </p>

            <p className="pt-4 font-semibold">
              — MCC Leadership
            </p>
          </div>
        </div>

        {/* ===================== */}
        {/* Leadership Grid */}
        {/* ===================== */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="h-56 bg-gray-200 overflow-hidden">
                 <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                /> 
              </div>

             
            </div>
          ))}
        </div> */}

        {/* ===================== */}
        {/* Historical Messages */}
        {/* ===================== */}
         <div className="mt-12 space-y-8">
              {/* On the Question of Why MCC */}
              <div className="bg-white border-l-4 border-[#CE0000] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#CE0000] mb-4">Message from the President</h3>
                <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                  "On occasions one is asked 'Why the M.C.C.? It is widely known that majority of our people do not belong to any political group and that we lack a single strong organisation. Our past weaknesses are now beginning to tell on us and our children. Hitherto, we had been fortunate to obtain places in the various institutions of Higher learning. To many parents this has now become a real nightmare and they are faced with other problems too! It is the community as a whole that is to be blamed for the situation we are in today."
                </blockquote>
              </div>

              {/* On Need for Unity */}
              <div className="bg-white border-l-4 border-[#003087] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#003087] mb-4">On the Need for Unity and Organisation</h3>
                <div className="space-y-4">
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                    "You know these are very hard times for us. They are times that require the closest co-operation. They also require the dedication of every one of us to our common National interest."
                  </blockquote>
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                    "The Governments recognition of the M.C.C. has already re-awakened our faith and hope."
                  </blockquote>
                </div>
              </div>

              {/* On Responsibility */}
              <div className="bg-white border-l-4 border-[#CE0000] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#CE0000] mb-4">On Responsibility and Participation</h3>
                <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                  "The M.C.C. could look into your problems and prospects, but to be effective there should be strong basic support. This is why the Malaysian Ceylonese Congress has set up Divisional branches all over the country and we would once again appeal to our community to enroll themselves as members for herein lies our strength and solidarity. We need your active participation at all levels."
                </blockquote>
              </div>

              {/* On Future */}
              <div className="bg-white border-l-4 border-[#003087] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#003087] mb-4">On the Future of the Community</h3>
                <div className="space-y-4">
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                    "We have the capability to overcome the hard realities of our times, if only we have the will and if our past mistrust and recrimination give way to mutual understanding, respect for each other, and a meaningful co-operation and operate beyond the narrow circle of self-interest."
                  </blockquote>
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                    "Much remains to be done. It is through our enterprise and diligence only we can hope to provide our children with wider opportunities for education and economic security."
                  </blockquote>
                </div>
              </div>

              {/* On National Commitment */}
              <div className="bg-white border-l-4 border-[#CE0000] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#CE0000] mb-4">On National Commitment</h3>
                <div className="space-y-4">
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                    "Our beloved Prime Minister has assured us the Government will continue to safeguard the rights of the minorities, hence our choice is clear and our responsibility compelling. We have a pledge to honour."
                  </blockquote>
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-gray-300">
                    "Let us join hands and demonstrate to future generations that our vision was equal to our children."
                  </blockquote>
                </div>
              </div>
              </div>
                </div>
  
    </section>
  )
}
