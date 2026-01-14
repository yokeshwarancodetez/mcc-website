export default function ConstitutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">MCC Constitution</h1>
          <p className="text-lg text-gray-100">Governance and Principles of the Malaysian Ceylonese Congress</p>
        </div>
      </div>

      {/* Constitution Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Preamble */}
        <div className="bg-gradient-to-r from-[#003087]/10 to-[#CE0000]/10 p-8 md:p-10 rounded-lg mb-12 border-l-4 border-[#003087]">
          <h2 className="text-2xl font-bold text-[#003087] mb-4">Preamble</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We, the members of the Malaysian Ceylonese Congress, do hereby adopt this Constitution to regulate our
            organization, promote the political, educational, social and cultural interests of Malaysians of Ceylonese
            origin, uphold the Constitution and national principles, foster national unity and racial harmony, and
            advance the welfare and interests of our community within the framework of a democratic and unified
            Malaysia.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="border-l-4 border-[#CE0000] pl-6 py-4">
            <h3 className="text-2xl font-bold text-[#003087] mb-3">1. Name and Status</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The organization shall be called the "Malaysian Ceylonese Congress" (MCC), established in 1958 as a
              political party registered under Malaysian law.
            </p>
            <p className="text-gray-700 leading-relaxed">
              MCC operates as a recognized political party committed to democratic principles, constitutional
              governance, and community service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-l-4 border-[#003087] pl-6 py-4">
            <h3 className="text-2xl font-bold text-[#003087] mb-3">2. Objectives</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">•</span>
                <span>
                  To promote the political, educational, social and cultural interests of Malaysians of Ceylonese origin
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">•</span>
                <span>To uphold the Constitution and principles of Rukun Negara</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">•</span>
                <span>To foster unity and cooperation within the community and nation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">•</span>
                <span>To empower youth and preserve cultural heritage</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">•</span>
                <span>To provide educational, healthcare, and welfare services</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-l-4 border-[#CE0000] pl-6 py-4">
            <h3 className="text-2xl font-bold text-[#003087] mb-3">3. Membership</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Membership is open to all Malaysians of Ceylonese origin and others who support our objectives and
              principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Members must adhere to the Constitution, support party decisions, and actively participate in
              organizational activities and governance.
            </p>
          </div>

          {/* Section 4 */}
          <div className="border-l-4 border-[#003087] pl-6 py-4">
            <h3 className="text-2xl font-bold text-[#003087] mb-3">4. Organization Structure</h3>
            <p className="text-gray-700 leading-relaxed mb-4">MCC shall be organized into the following bodies:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">▸</span>
                <div>
                  <p className="font-bold text-[#003087]">General Assembly</p>
                  <p className="text-gray-600 text-sm">Highest decision-making body of the party</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">▸</span>
                <div>
                  <p className="font-bold text-[#003087]">Central Executive Committee</p>
                  <p className="text-gray-600 text-sm">Executive governing body</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">▸</span>
                <div>
                  <p className="font-bold text-[#003087]">President & Office Bearers</p>
                  <p className="text-gray-600 text-sm">Leadership positions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CE0000] font-bold mr-3">▸</span>
                <div>
                  <p className="font-bold text-[#003087]">State Chapters</p>
                  <p className="text-gray-600 text-sm">Regional organizational units</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="border-l-4 border-[#CE0000] pl-6 py-4">
            <h3 className="text-2xl font-bold text-[#003087] mb-3">5. Governance Principles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#CE0000]/5 p-4 rounded">
                <p className="font-bold text-[#003087] mb-2">Integrity</p>
                <p className="text-gray-600 text-sm">Upholding highest standards of honesty and transparency</p>
              </div>
              <div className="bg-[#003087]/5 p-4 rounded">
                <p className="font-bold text-[#003087] mb-2">Unity</p>
                <p className="text-gray-600 text-sm">Bringing together diverse voices for common purpose</p>
              </div>
              <div className="bg-[#CE0000]/5 p-4 rounded">
                <p className="font-bold text-[#003087] mb-2">Service</p>
                <p className="text-gray-600 text-sm">Dedicated commitment to community welfare</p>
              </div>
              <div className="bg-[#003087]/5 p-4 rounded">
                <p className="font-bold text-[#003087] mb-2">Excellence</p>
                <p className="text-gray-600 text-sm">Striving for highest quality in all endeavors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-12 text-center">
          <button className="bg-[#CE0000] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#B00000] transition-colors">
            Download Full Constitution PDF
          </button>
        </div>
      </div>
    </div>
  )
}
