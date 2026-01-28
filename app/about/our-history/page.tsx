import MCCHistory from "@/components/mcc-history"

export default function FoundersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Our History & Founders</h1>
          <p className="text-lg md:text-xl text-gray-100">From 1900 to Present: The Journey of the Malaysian Ceylonese Congress</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-6">The Founders' Vision</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
            The Malaysian Ceylonese Congress was founded by the late Mr. M.W. Navaratnam on February 24, 1958, with a vision to unite and represent the political, educational, social, and cultural interests of Malaysians of Ceylonese origin. His visionary leadership transformed a fragmented community into an organized force for positive change.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Building upon the foundations laid by earlier organizations including the Selangor Ceylon Tamils Association (1900) and the Ceylon Association of Selangor (1912), Mr. Navaratnam's leadership created a movement that transcended community boundaries and contributed meaningfully to Malaysia's political and social landscape.
          </p>
        </div>
      </div>

      {/* Detailed History Component */}
      <MCCHistory />
    </div>
  )
}
