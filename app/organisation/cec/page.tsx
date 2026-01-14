import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CECPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Central Election Committee</h1>
          <p className="text-lg text-gray-100">Ensuring Fair and Transparent Democratic Processes</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003087] mb-4">Role & Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                The Central Election Committee (CEC) is responsible for managing and overseeing all internal democratic
                processes within MCC, including:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Conducting fair, transparent, and impartial elections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Setting election guidelines and procedures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Supervising nomination and candidature processes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Resolving electoral disputes and appeals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Maintaining election records and documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Ensuring adherence to constitutional provisions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#CE0000] to-[#9C0000] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Committee Leadership</h3>
              <div className="space-y-3">
                <p className="font-bold text-lg">Chief Election Commissioner</p>
                <p className="text-sm text-gray-200 mb-4">
                  Oversees all electoral matters and ensures constitutional compliance
                </p>
                <hr className="border-white border-opacity-30" />
                <p className="text-sm mt-4">
                  The CEC comprises experienced party members with expertise in election administration, law, and
                  democratic governance to ensure credible elections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Election Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">Election Process & Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#CE0000] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-[#003087] mb-2">Notification</h3>
              <p className="text-sm text-gray-600">
                Official announcement of election dates and guidelines issued to all members
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#CE0000] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-[#003087] mb-2">Nomination</h3>
              <p className="text-sm text-gray-600">
                Submission of nominations within specified timeframe with required documentation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#CE0000] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-[#003087] mb-2">Scrutiny</h3>
              <p className="text-sm text-gray-600">
                Verification of nominations and candidate eligibility by CEC officials
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#CE0000] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                4
              </div>
              <h3 className="font-bold text-[#003087] mb-2">Polling</h3>
              <p className="text-sm text-gray-600">
                Supervised voting conducted with adequate security and transparency measures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEC Members Grid with leader cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-12 text-center">CEC Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dato' Dr. NKS Tharmaseelan",
                position: "Chief Election Commissioner",
                image: "/mcc-president.jpg",
                color: "from-[#CE0000] to-[#b20000]",
              },
              {
                name: "Mr. Vincent Kurup",
                position: "Deputy Commissioner",
                image: "/mcc-vice-president.jpg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Ms. Priya Sharma",
                position: "Secretary",
                image: "/mcc-general-secretary.jpg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Mr. Rajesh Nair",
                position: "Treasurer",
                image: "/mcc-treasurer.jpg",
                color: "from-[#CE0000] to-[#b20000]",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-full h-40 bg-gradient-to-br ${member.color}`}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
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

      {/* CEC Responsibilities & Qualifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">CEC Responsibilities & Qualifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#003087] mb-4">Key Responsibilities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Conduct fair and transparent elections at all party levels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Enforce electoral code of conduct for all candidates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Resolve electoral disputes and complaints impartially</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Maintain confidentiality and integrity of voting processes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#003087] mb-4">Member Qualifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Minimum 5 years active party membership</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>No disciplinary action in past 3 years</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Knowledge of party constitution and election laws</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold text-lg">•</span>
                  <span>Commitment to democratic principles and impartiality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CEC Principles */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">CEC Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#003087] to-[#001f52] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Impartiality</h3>
              <p className="text-sm">
                The CEC operates with complete neutrality, ensuring no favoritism or bias in any electoral decision or
                process.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#CE0000] to-[#9C0000] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-sm">
                All election processes are conducted openly with adequate supervision and documentation available for
                scrutiny.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#003087] to-[#CE0000] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Accountability</h3>
              <p className="text-sm">
                The CEC is answerable to party members and constitutional bodies for all electoral decisions and
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
