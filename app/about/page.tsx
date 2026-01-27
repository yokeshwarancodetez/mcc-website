export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">About MCC</h1>
          <p className="text-lg md:text-xl text-gray-100">Footprints of Seva - Over 60 Years of Community Leadership</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* About the Party Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-8">About the Party</h2>
            <div className="space-y-6 bg-white border-l-4 border-[#CE0000] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                The Malaysian Ceylonese Congress (MCC) is a political party in Malaysia formed in 1958, established as a political party with the aim of giving support to the then Alliance party. MCC has continuously supported the Barisan National.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                MCC was the brainchild of the late Mr. M.W Navaratnam and was formed to promote and preserve the Political, Educational, Economical, Social and Cultural aspects of the Malaysians of Ceylonese origin, or Sri Lankan, descent.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-8">Our Story</h2>
          
          {/* Three Paragraph Structure */}
          <div className="space-y-6 mb-12">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Founded in 1958, the Malaysian Ceylonese Congress has been the cornerstone of the Sri Lankan Tamil community in Malaysia for over six decades. Our journey began with a vision to preserve our cultural heritage while fostering integration into Malaysian society.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              From humble beginnings with just 50 founding members, MCC has grown into a vibrant organization representing thousands of families across Malaysia. We have weathered political changes, economic challenges, and social transformations while maintaining our commitment to seva (service).
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Our legacy includes establishing the first Tamil cultural center in Kuala Lumpur, launching scholarship programs that have benefited over 2,000 students, and creating a network of support that spans generations.
            </p>
          </div>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-3 gap-4 mb-16">
            <div className="bg-[#CE0000] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">60+</p>
              <p className="text-sm">Years Active</p>
            </div>
            <div className="bg-[#003087] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">2000+</p>
              <p className="text-sm">Scholarships</p>
            </div>
            <div className="bg-[#CE0000] text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">5000+</p>
              <p className="text-sm">Families Served</p>
            </div>
          </div> */}
        </div>

        {/* Our Vision */}
        <div className="mt-16 md:mt-20 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-8 text-center">Our Vision</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#003087] to-[#001f52] text-white p-8 rounded-xl shadow-lg">
            <p className="text-lg leading-relaxed">
              To be the leading political and community organization representing Malaysians of Ceylonese origin, advancing the political, educational, social, and cultural interests of our community while contributing to Malaysia's unity, prosperity, and progress as a multiethnic nation.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-16 md:mt-20 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-8 text-center">Our Mission</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#CE0000] to-[#B00000] text-white p-8 rounded-xl shadow-lg">
            <p className="text-lg leading-relaxed">
              To uphold the Constitution and promote the political, educational, social and cultural interests of Malaysians of Ceylonese origin, fostering unity, service, and excellence within our community and the nation while empowering through education, cultural preservation, social welfare, and civic participation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
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
