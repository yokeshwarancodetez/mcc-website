import MCCHistory from "@/components/mcc-history"
import { Landmark, Users, Globe, Sparkles } from "lucide-react"

export default function FoundersPage() {
  return (
    <div className="bg-white">

      {/* ================= Hero Section ================= */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Our History & Founders
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            From 1900 to Present: The Journey of the Malaysian Ceylonese Congress
          </p>
        </div>
      </div>

      {/* ================= Founders Vision (Rich UI) ================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-14 md:py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-6 flex items-center gap-3">
              <Sparkles className="text-[#CE0000]" size={28} />
              The Founders’ Vision
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">
              The Malaysian Ceylonese Congress was founded by the late
              <span className="font-semibold text-[#003087]"> Mr. M. W. Navaratnam</span> on
              February 24, 1958, with a powerful vision to unite and represent the political,
              educational, social, and cultural interests of Malaysians of Ceylonese origin.
            </p>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Building upon foundations laid by earlier organizations such as the Selangor
              Ceylon Tamils Association (1900) and the Ceylon Association of Selangor (1912),
              his leadership transformed a fragmented community into a structured national
              movement contributing meaningfully to Malaysia’s development.
            </p>
          </div>

          {/* Right Highlight Card */}
          <div className="bg-gradient-to-br from-[#003087] to-[#001f52] text-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-6">A Vision That Built a Legacy</h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <Landmark className="text-[#ffd6d6]" />
                <p className="leading-relaxed">
                  To establish a strong political voice for Malaysians of Ceylonese origin
                  within the national framework.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Users className="text-[#ffd6d6]" />
                <p className="leading-relaxed">
                  To unite the community under one organisation focused on dignity,
                  opportunity, and social progress.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="text-[#ffd6d6]" />
                <p className="leading-relaxed">
                  To contribute meaningfully to Malaysia’s multicultural harmony,
                  education advancement, and nation-building.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Mini Stat Strip */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

          <div className="bg-[#003087]/5 border-l-4 border-[#003087] p-5 rounded-lg">
            <p className="text-3xl font-bold text-[#003087]">1900</p>
            <p className="text-gray-700 text-sm mt-1">Early Community Roots</p>
          </div>

          <div className="bg-[#CE0000]/5 border-l-4 border-[#CE0000] p-5 rounded-lg">
            <p className="text-3xl font-bold text-[#CE0000]">1958</p>
            <p className="text-gray-700 text-sm mt-1">MCC Founded</p>
          </div>

          <div className="bg-[#003087]/5 border-l-4 border-[#003087] p-5 rounded-lg">
            <p className="text-3xl font-bold text-[#003087]">60+</p>
            <p className="text-gray-700 text-sm mt-1">Years of Leadership</p>
          </div>

          <div className="bg-[#CE0000]/5 border-l-4 border-[#CE0000] p-5 rounded-lg">
            <p className="text-3xl font-bold text-[#CE0000]">National</p>
            <p className="text-gray-700 text-sm mt-1">Community Impact</p>
          </div>

        </div> */}
      </div>

      {/* ================= Detailed History ================= */}
      <MCCHistory />

    </div>
  )
}
