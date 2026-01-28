import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CECPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      {/* Top Banner */}
      <section className="bg-gradient-to-r  from-[#003087] to-[#CE0000] text-white py-12 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Central Election Committee
          </h1>
          <p className="text-lg text-gray-100">
            Ensuring Fair and Transparent Democratic Processes
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003087] mb-4">
                Role & Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                The Central Election Committee (CEC) is responsible for managing and overseeing all internal democratic
                processes within MCC, including:
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Conducting fair, transparent, and impartial elections",
                  "Setting election guidelines and procedures",
                  "Supervising nomination and candidature processes",
                  "Resolving electoral disputes and appeals",
                  "Maintaining election records and documentation",
                  "Ensuring adherence to constitutional provisions",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#CE0000] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#CE0000] to-[#9C0000] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Committee Leadership</h3>
              <p className="font-bold text-lg">Chief Election Commissioner</p>
              <p className="text-sm text-gray-200 mb-4">
                Oversees all electoral matters and ensures constitutional compliance
              </p>
              <hr className="border-white/30" />
              <p className="text-sm mt-4">
                The CEC comprises experienced party members with expertise in election administration, law, and
                democratic governance to ensure credible elections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Election Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">
            Election Process & Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["1", "Notification", "Official announcement of election dates and guidelines issued to all members"],
              ["2", "Nomination", "Submission of nominations within specified timeframe with required documentation"],
              ["3", "Scrutiny", "Verification of nominations and candidate eligibility by CEC officials"],
              ["4", "Polling", "Supervised voting conducted with adequate security and transparency measures"],
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#CE0000] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item[0]}
                </div>
                <h3 className="font-bold text-[#003087] mb-2">{item[1]}</h3>
                <p className="text-sm text-gray-600">{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CEC Leadership – FULL IMAGE VISIBLE */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-12 text-center">
            CEC Leadership
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dato' Dr. NKS Tharmaseelan",
                position: "Chief Election Commissioner",
                image: "/founder-1.jpeg",
                color: "from-[#CE0000] to-[#b20000]",
              },
              {
                name: "Mr. Vincent Kurup",
                position: "Deputy Commissioner",
                image: "/founder-3.jpeg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Ms. Priya Sharma",
                position: "Secretary",
                image: "/founder-6.jpeg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Mr. Rajesh Nair",
                position: "Treasurer",
                image: "/founder-4.jpeg",
                color: "from-[#CE0000] to-[#b20000]",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Image area */}
                <div className={`w-full h-64 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-contain bg-white p-2"
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold text-sm`}>
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities & Qualifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">
            CEC Responsibilities & Qualifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#003087] mb-4">Key Responsibilities</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Conduct fair and transparent elections at all party levels",
                  "Enforce electoral code of conduct for all candidates",
                  "Resolve electoral disputes and complaints impartially",
                  "Maintain confidentiality and integrity of voting processes",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#CE0000] font-bold text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003087] mb-4">Member Qualifications</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Minimum 5 years active party membership",
                  "No disciplinary action in past 3 years",
                  "Knowledge of party constitution and election laws",
                  "Commitment to democratic principles and impartiality",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#CE0000] font-bold text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">
            CEC Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#003087] to-[#001f52] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Impartiality</h3>
              <p className="text-sm">
                The CEC operates with complete neutrality, ensuring no favoritism or bias.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#CE0000] to-[#9C0000] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-sm">
                All election processes are conducted openly with proper documentation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#003087] to-[#CE0000] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Accountability</h3>
              <p className="text-sm">
                The CEC is answerable to party members and constitutional bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
