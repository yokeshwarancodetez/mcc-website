export default function Achievements() {
  const achievements = [
    {
      year: "1958",
      title: "Foundation",
      description: "MCC established as the political voice of Malaysian Ceylonese community",
      image: "/achievement-foundation.jpg",
    },
    {
      year: "1970s",
      title: "Educational Legacy Begins",
      description: "Launched first scholarship programs supporting 500+ students annually",
      image: "/achievement-education.jpg",
    },
    {
      year: "1990s",
      title: "National Expansion",
      description: "Established chapters across all 13 Malaysian states",
      image: "/achievement-expansion.jpg",
    },
    {
      year: "2010s",
      title: "Digital Transformation",
      description: "Modernized governance and launched digital community platforms",
      image: "/achievement-digital.jpg",
    },
    {
      year: "2020s",
      title: "2,000+ Scholarships",
      description: "Milestone achievement in education support for underprivileged youth",
      image: "/achievement-scholarship.jpg",
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Leading cultural preservation and economic empowerment initiatives",
      image: "/achievement-vision.jpg",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#CE0000]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Journey & Achievements</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Six decades of service, sacrifice, and success in serving the Malaysian Ceylonese community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-[#CE0000] transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className="w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${achievement.image}')`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-block px-3 py-1 bg-[#CE0000] rounded-full text-sm font-bold mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-white/90 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
