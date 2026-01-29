export default function History() {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#003087] rounded"></div>
            <div>
              <p className="text-[#003087] font-semibold text-sm tracking-wide">
                Honouring Our Roots, Building Our Future
              </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
  Six Decades of Service to the <br />
  Malaysian Ceylonese Community
</h2>

            </div>
          </div>
        </div>

        {/* Full-width red highlight row */}
<div className="w-full bg-[#CE0000] rounded-xl p-10 sm:p-12 shadow-xl mb-16 text-center">
  <p className="text-white text-xl sm:text-2xl ">
    From 50 founding members in 1958 to over 5,000 families today
  </p>

  <p className="mt-3 text-white text-lg sm:text-xl">
    
    <span className="font-bold italic">Our growth reflects the trust our community places in MCC’s leadership </span>
  </p>
</div>




        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Left Card */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow h-full">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Founded in 1958, the Malaysian Ceylonese Congress has been the cornerstone of the Sri Lankan Tamil community in Malaysia for over six decades. Our journey began with a vision to preserve our cultural heritage while fostering integration into Malaysian society.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                From humble beginnings with just 50 founding members, MCC has grown into a vibrant organization representing thousands of families across Malaysia. We have weathered political changes, economic challenges, and social transformations while maintaining our commitment to seva (service).
              </p>
            </div>
          </div>

          {/* Right Card - top aligned */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow h-full">
            <p className="text-gray-700 leading-relaxed text-lg">
              Our legacy includes establishing the first Tamil cultural center in Kuala Lumpur, launching scholarship programs that have benefited over 2,000 students, and creating a network of support that spans generations.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
