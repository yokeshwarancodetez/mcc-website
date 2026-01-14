import Header from "@/components/header"
import Footer from "@/components/footer"

export default function YouthMorchaPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Youth Morcha</h1>
          <p className="text-lg text-gray-100">Empowering the next generation of Ceylonese community leaders</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003087] mb-4">About Youth Morcha</h2>
              <p className="text-gray-600 mb-4">
                The Youth Morcha is MCC's dedicated wing focused on engaging young Ceylonese Malaysians in community
                development and nation-building activities.
              </p>
              <p className="text-gray-600 mb-4">
                We provide a platform for youth to develop leadership skills, participate in meaningful social projects,
                and contribute to the advancement of our community.
              </p>
              <p className="text-gray-600">
                Through various programs, training, and mentorship, we prepare the next generation to take active roles
                in MCC leadership and national governance.
              </p>
              <div className="mt-8">
                <img
                  src="/youth-morcha.jpg"
                  alt="Youth Morcha members in action"
                  className="w-full rounded-lg shadow-lg h-80 object-cover"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#003087] to-[#CE0000] rounded-lg p-4 text-white pb-4">
              <h3 className="text-2xl font-bold mb-4">Key Initiatives</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-bold">Leadership Training</p>
                    <p className="text-sm text-gray-200">Developing future party leaders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-bold">Community Service</p>
                    <p className="text-sm text-gray-200">Active participation in social projects</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-bold">Career Development</p>
                    <p className="text-sm text-gray-200">Mentorship and professional guidance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎤</span>
                  <div>
                    <p className="font-bold">Public Speaking</p>
                    <p className="text-sm text-gray-200">Advocacy and communication skills</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-bold">Sports & Wellness</p>
                    <p className="text-sm text-gray-200">Health and recreational programs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-bold">Environmental Action</p>
                    <p className="text-sm text-gray-200">Sustainability and conservation efforts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-bold">Educational Programs</p>
                    <p className="text-sm text-gray-200">Scholarships and student support</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold">Skill Development</p>
                    <p className="text-sm text-gray-200">Technical and soft skill training</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-bold">Innovation Hub</p>
                    <p className="text-sm text-gray-200">Digital transformation and tech initiatives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <p className="font-bold">Mentorship Program</p>
                    <p className="text-sm text-gray-200">One-on-one guidance from senior leaders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎪</span>
                  <div>
                    <p className="font-bold">Cultural Events</p>
                    <p className="text-sm text-gray-200">Heritage preservation and community bonding</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
