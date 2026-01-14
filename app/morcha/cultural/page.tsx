import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CulturalCommitteePage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Cultural Committee</h1>
          <p className="text-lg text-gray-100">Preserving and promoting Ceylonese heritage and traditions</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003087] mb-4">Preserving Our Heritage</h2>
              <p className="text-gray-600 mb-4">
                The Cultural Committee is dedicated to preserving and promoting the rich cultural heritage of Ceylonese
                Malaysians.
              </p>
              <p className="text-gray-600 mb-4">
                Through various cultural events, festivals, and educational programs, we ensure that our traditions are
                celebrated and passed down to future generations.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <p className="font-bold text-[#003087]">Annual Cultural Festivals</p>
                    <p className="text-sm text-gray-600">Celebrating Ceylonese traditions and festivals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <p className="font-bold text-[#003087]">Arts & Performance</p>
                    <p className="text-sm text-gray-600">Traditional dance, music, and theatre programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-bold text-[#003087]">Language & Literature</p>
                    <p className="text-sm text-gray-600">Tamil language and literary preservation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mb-2 text-center">Detailed Upcoming Events</h2>
          <p className="text-gray-600 text-center mb-12">Join us in celebrating and preserving Ceylonese culture</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Thai Pongal Event */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/cultural-thai-pongal-event.jpg" alt="Thai Pongal 2025" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#CE0000] text-white px-3 py-1 rounded-full text-xs font-bold">FESTIVAL</span>
                </div>
                <h3 className="text-xl font-bold text-[#003087] mb-2">Thai Pongal 2025</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Celebrate the harvest season with traditional Pongal festivities, featuring cultural performances,
                  traditional food, and community celebrations honoring agricultural abundance.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold text-[#003087]">Date:</span> January 14-15, 2025
                  </p>
                  <p>
                    <span className="font-bold text-[#003087]">Venue:</span> MCC Community Center, Kuala Lumpur
                  </p>
                  <p>
                    <span className="font-bold text-[#003087]">Time:</span> 10:00 AM - 6:00 PM
                  </p>
                </div>
                <button className="mt-4 w-full bg-[#CE0000] text-white py-2 rounded hover:bg-[#003087] transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            {/* Heritage Awareness Month */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/cultural-heritage-awareness.jpg"
                alt="Heritage Awareness Month"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#003087] text-white px-3 py-1 rounded-full text-xs font-bold">WORKSHOP</span>
                </div>
                <h3 className="text-xl font-bold text-[#003087] mb-2">Heritage Awareness Month</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A month-long celebration featuring cultural workshops, language classes, heritage talks by experts,
                  and interactive sessions on preserving Ceylonese traditions.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold text-[#003087]">Date:</span> February 1-28, 2025
                  </p>
                  <p>
                    <span className="font-bold text-[#003087]">Venue:</span> Multiple Locations (KL, Selangor, Penang)
                  </p>
                  <p>
                    <span className="font-bold text-[#003087]">Time:</span> 7:00 PM - 9:00 PM
                  </p>
                </div>
                <button className="mt-4 w-full bg-[#003087] text-white py-2 rounded hover:bg-[#CE0000] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Arts & Crafts Exhibition */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/cultural-arts-exhibition.jpg"
                alt="Arts & Crafts Exhibition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#CE0000] text-white px-3 py-1 rounded-full text-xs font-bold">EXHIBITION</span>
                </div>
                <h3 className="text-xl font-bold text-[#003087] mb-2">Arts & Crafts Exhibition</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A grand showcase of traditional and contemporary Ceylonese art forms including pottery, weaving,
                  painting, sculpture, and traditional craftsmanship by local artists and artisans.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold text-[#003087]">Date:</span> March 1-31, 2025
                  </p>
                  <p>
                    <span className="font-bold text-[#003087]">Venue:</span> National Art Gallery, Kuala Lumpur
                  </p>
                  <p>
                    <span className="font-bold text-[#003087]">Time:</span> 11:00 AM - 7:00 PM
                  </p>
                </div>
                <button className="mt-4 w-full bg-[#CE0000] text-white py-2 rounded hover:bg-[#003087] transition-colors">
                  Reserve Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mb-12 text-center">
            Cultural Programs & Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#CE0000] pl-6 py-4">
              <h3 className="text-xl font-bold text-[#003087] mb-3">Tamil Language Classes</h3>
              <p className="text-gray-600 mb-4">
                Intensive Tamil language courses for all age groups, from beginners to advanced learners, conducted by
                certified instructors to preserve our linguistic heritage.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Classes held every Saturday and Sunday</li>
                <li>• Online and offline modes available</li>
                <li>• Certificate upon completion</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#003087] pl-6 py-4">
              <h3 className="text-xl font-bold text-[#003087] mb-3">Traditional Arts Training</h3>
              <p className="text-gray-600 mb-4">
                Classes in Bharatanatyam dance, traditional music, and classical art forms taught by experienced
                practitioners to keep our cultural traditions alive.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Daily training sessions</li>
                <li>• Open for all age groups</li>
                <li>• Regular performances and recitals</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#CE0000] pl-6 py-4">
              <h3 className="text-xl font-bold text-[#003087] mb-3">Cultural Publications</h3>
              <p className="text-gray-600 mb-4">
                Publishing literary works, historical documents, and cultural magazines to document and share the rich
                heritage of Ceylonese Malaysian community.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quarterly cultural magazine</li>
                <li>• Book publication program</li>
                <li>• Digital archives available</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#003087] pl-6 py-4">
              <h3 className="text-xl font-bold text-[#003087] mb-3">Youth Cultural Exchange</h3>
              <p className="text-gray-600 mb-4">
                Exchange programs with cultural institutions enabling young people to learn, share, and celebrate
                Ceylonese culture with international communities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Annual cultural tour</li>
                <li>• International partnerships</li>
                <li>• Scholarship opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
