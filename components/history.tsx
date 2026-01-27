export default function History() {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#003087] rounded"></div>
            <div>
              <p className="text-[#003087] font-semibold text-sm">Honouring Our Roots, Building Our Future</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Six Decades of Service to the Malaysian Ceylonese Community
              </h2>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Two Paragraphs in same card */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <div className="space-y-6">
              {/* Paragraph 1 */}
              <p className="text-gray-700 leading-relaxed text-lg">
                Founded in 1958, the Malaysian Ceylonese Congress has been the cornerstone of the Sri Lankan Tamil community in Malaysia for over six decades. Our journey began with a vision to preserve our cultural heritage while fostering integration into Malaysian society.
              </p>

              {/* Paragraph 2 */}
              <p className="text-gray-700 leading-relaxed text-lg">
                From humble beginnings with just 50 founding members, MCC has grown into a vibrant organization representing thousands of families across Malaysia. We have weathered political changes, economic challenges, and social transformations while maintaining our commitment to seva (service).
              </p>
            </div>
          </div>

          {/* Right Column - Paragraph 3 and Red Box */}
          <div className="space-y-6">
            {/* Paragraph 3 */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700 leading-relaxed text-lg">
                Our legacy includes establishing the first Tamil cultural center in Kuala Lumpur, launching scholarship programs that have benefited over 2,000 students, and creating a network of support that spans generations.
              </p>
            </div>

            {/* Red Box Stats */}
            <div className="bg-[#CE0000] rounded-lg p-12 shadow-lg">
              <p className="text-white leading-relaxed text-lg font-medium">
                From 50 founding members in 1958 to over 5,000 families today – our growth reflects the trust our community places in MCC's leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
