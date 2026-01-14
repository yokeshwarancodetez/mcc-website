"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WomensWingPage() {
  const achievements = [
    {
      number: "5,000+",
      label: "Women Members",
      description: "Active participants in our programs",
    },
    {
      number: "500+",
      label: "Scholarships Awarded",
      description: "Supporting girl education",
    },
    {
      number: "200+",
      label: "Entrepreneurs Supported",
      description: "Women-led business initiatives",
    },
    {
      number: "50+",
      label: "Community Projects",
      description: "Health and welfare initiatives",
    },
  ]

  return (
    <main className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-4">Women's Wing</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Empowering women, building communities, shaping the future of Malaysia's Ceylonese society
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#CE0000] to-[#B00000] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                Empower Ceylonese women to achieve their full potential through education, economic participation, and
                political representation.
              </p>
              <p>
                We work towards creating a society where women have equal opportunities and play a vital role in
                community development and nation-building.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#003087] mb-4">Programs & Initiatives</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#CE0000] pl-4 py-2">
                  <h4 className="font-bold text-[#003087]">Women Entrepreneurship Program</h4>
                  <p className="text-gray-600 text-sm">Support for women-led businesses and startups</p>
                </div>
                <div className="border-l-4 border-[#003087] pl-4 py-2">
                  <h4 className="font-bold text-[#003087]">Education Scholarships</h4>
                  <p className="text-gray-600 text-sm">Educational support for underprivileged girls</p>
                </div>
                <div className="border-l-4 border-[#CE0000] pl-4 py-2">
                  <h4 className="font-bold text-[#003087]">Health & Wellness</h4>
                  <p className="text-gray-600 text-sm">Community health awareness programs</p>
                </div>
                <div className="border-l-4 border-[#003087] pl-4 py-2">
                  <h4 className="font-bold text-[#003087]">Political Participation</h4>
                  <p className="text-gray-600 text-sm">Women representation in party leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Updated Image Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/womens-wing.jpg"
                alt="Women's Wing Community Empowerment"
                className="max-w-2xl h-80 rounded-lg shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#003087] mb-6">Why Join Women's Wing?</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#CE0000] text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#003087] mb-1">Access to Opportunities</h4>
                    <p className="text-gray-600">
                      Connect with thousands of like-minded women and access exclusive educational and business
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#CE0000] text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#003087] mb-1">Skill Development</h4>
                    <p className="text-gray-600">
                      Participate in workshops, training programs, and mentorship initiatives to develop professional
                      and personal skills.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#CE0000] text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#003087] mb-1">Voice & Representation</h4>
                    <p className="text-gray-600">
                      Amplify your voice in community development and political participation at all levels.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#CE0000] text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#003087] mb-1">Community Support</h4>
                    <p className="text-gray-600">
                      Be part of a supportive community of women working together for positive social change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Statistics Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-medium text-[#003087] mb-12 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#CE0000] mb-2">{achievement.number}</div>
                    <h3 className="text-lg font-semibold text-[#003087] mb-2">{achievement.label}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expanded Key Initiatives Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-medium text-[#003087] mb-12 text-center">Key Initiatives</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="w-12 h-12 bg-[#CE0000] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003087] mb-3">Education & Scholarships</h3>
                  <p className="text-gray-600 mb-4">
                    Providing financial assistance and mentorship to underprivileged girls for quality education and
                    skill development.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Annual scholarship program</li>
                    <li>• Vocational training courses</li>
                    <li>• Mentorship networks</li>
                    <li>• Career guidance workshops</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="w-12 h-12 bg-[#003087] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003087] mb-3">Women Entrepreneurship</h3>
                  <p className="text-gray-600 mb-4">
                    Supporting women entrepreneurs with business training, microfinance, and market access
                    opportunities.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Business plan development</li>
                    <li>• Access to microfinance</li>
                    <li>• Marketing & branding support</li>
                    <li>• Networking events</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="w-12 h-12 bg-[#CE0000] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003087] mb-3">Health & Wellness</h3>
                  <p className="text-gray-600 mb-4">
                    Conducting awareness programs on health, nutrition, mental wellbeing, and access to healthcare
                    services.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Health camps & checkups</li>
                    <li>• Wellness workshops</li>
                    <li>• Mental health support</li>
                    <li>• Family counseling services</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="w-12 h-12 bg-[#003087] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003087] mb-3">Community Empowerment</h3>
                  <p className="text-gray-600 mb-4">
                    Strengthening women's voices in community development, political participation, and social justice
                    initiatives.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Leadership development</li>
                    <li>• Political engagement programs</li>
                    <li>• Community projects</li>
                    <li>• Rights awareness campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">Join the Women's Wing</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Be part of a movement dedicated to women's empowerment, community development, and social progress in
                Malaysia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#CE0000] font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Become a Member
                </button>
                <button className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-[#003087] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
