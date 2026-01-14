export default function History() {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#003087] rounded"></div>
            <div>
              <p className="text-[#003087] font-semibold text-sm">About MCC</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Six Decades of Service for the Malaysian Ceylonese Community
              </h2>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#CE0000]/5 to-white rounded-lg p-8 border-l-4 border-[#CE0000] shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                Founded in 1958, following the transformation of the Selangor State Ceylonese Association under M.W.
                Navaratnam, MCC operates to promote the political, educational, social and cultural interests of
                Malaysians of Ceylonese origin. Today we carry forward that legacy to empower youth, preserve heritage,
                and build unity.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#003087] to-[#001f52] rounded-lg p-6 border border-[#003087] shadow-lg">
              <h3 className="text-lg font-bold text-white mb-6">Our Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003087] flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">60+ Years of Service</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#CE0000] flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">2,000+ Scholarships Awarded</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#CE0000] flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">5,000+ Families Supported</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-[#CE0000] text-white rounded-lg font-semibold hover:bg-[#b20000] transition-colors shadow-lg">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
