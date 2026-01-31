export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ✅ Hero Section (Reduced Size) */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-6 md:py-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
            About MCC
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-100">
            Footprints of Seva - Over 60 Years of Community Leadership
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 md:py-16">

        {/* About the Party */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-10 text-center">
            About the Party
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-l-4 border-[#CE0000] p-6 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                The Malaysian Ceylonese Congress (MCC) is a political party in Malaysia formed in 1958, established with the aim of giving support to the then Alliance Party. Since its inception, MCC has continuously supported Barisan Nasional while serving as the political voice of Malaysians of Ceylonese origin.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#003087] p-6 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                MCC was the brainchild of the late Mr. M.W. Navaratnam and was founded to promote and preserve the political, educational, economic, social and cultural interests of Malaysians of Sri Lankan descent, ensuring dignity, representation, and progress for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-10 text-center">
            Our Story
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border-l-4 border-[#003087] p-6 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#003087] mb-3">Our Beginning</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Founded in 1958, MCC emerged as a unifying force for the Sri Lankan Tamil community in Malaysia, rooted in a vision to preserve heritage while building strong civic participation in a growing nation.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#CE0000] p-6 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#CE0000] mb-3">Our Growth</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                From just 50 founding members, MCC expanded into a nationwide organisation representing thousands of families, overcoming political shifts and social changes while remaining anchored in service.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#003087] p-6 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#003087] mb-3">Our Legacy</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                MCC’s legacy includes cultural institutions, scholarship programmes supporting over 2,000 students, and intergenerational leadership networks dedicated to education, unity, and empowerment.
              </p>
            </div>

          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-6 text-center md:text-left">
              Our Vision
            </h2>
            <div className="bg-gradient-to-r from-[#003087] to-[#001f52] text-white p-8 md:p-10 rounded-xl shadow-lg h-full">
              <p className="text-base md:text-lg leading-relaxed">
                To be the leading political and community organization representing Malaysians of Ceylonese origin, advancing political, educational, social, and cultural interests while contributing to Malaysia’s unity and progress.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-6 text-center md:text-left">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-[#CE0000] to-[#B00000] text-white p-8 md:p-10 rounded-xl shadow-lg h-full">
              <p className="text-base md:text-lg leading-relaxed">
                To uphold the Constitution and empower the community through education, cultural preservation, social welfare, and civic participation, fostering unity, service, and excellence.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#CE0000]/5 border-l-4 border-[#CE0000] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#CE0000] mb-3">Integrity</h3>
              <p className="text-gray-700">Transparent and accountable leadership in every endeavour.</p>
            </div>

            <div className="bg-[#003087]/5 border-l-4 border-[#003087] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#003087] mb-3">Unity</h3>
              <p className="text-gray-700">Fostering common ground and shared destiny across communities.</p>
            </div>

            <div className="bg-[#CE0000]/5 border-l-4 border-[#CE0000] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#CE0000] mb-3">Service (Seva)</h3>
              <p className="text-gray-700">Putting people first and generating tangible impact.</p>
            </div>

            <div className="bg-[#003087]/5 border-l-4 border-[#003087] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#003087] mb-3">Excellence</h3>
              <p className="text-gray-700">Pursuing high standards in education, culture and governance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
