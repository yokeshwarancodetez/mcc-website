export default function Programs() {
  const programs = [
    {
      title: "Education & Scholarships",
      description: "Empowering youth through financial aid, mentorship, and career guidance",
      image: "/Education and Scholarship.png",
      stats: "2,000+ Scholarships Awarded",
      color: "from-[#CE0000] to-[#b20000]",
    },
    {
      title: "Heritage & Culture",
      description: "Preserving Tamil language, arts, festivals, and cultural practices",
      image: "/program-culture.jpg",
      stats: "500+ Cultural Events Annually",
      color: "from-[#003087] to-[#001f52]",
    },
    {
      title: "Community Welfare",
      description: "Supporting vulnerable families through healthcare, food assistance, and relief",
      image: "/Community Welfare.png",
      stats: "5,000+ Families Supported",
      color: "from-[#CE0000] to-[#b20000]",
    },
    {
      title: "Youth Development",
      description: "Building leaders through skills training, mentorship, and civic engagement",
      image: "/Youth development.png",
      stats: "3,000+ Youth Trained",
      color: "from-[#003087] to-[#001f52]",
    },
    // {
    //   title: "Political Advocacy",
    //   description: "Championing community interests in parliament and state assemblies",
    //   image: "/program-advocacy.jpg",
    //   stats: "12 Parliamentary Seats",
    //   color: "from-[#CE0000] to-[#b20000]",
    // },
    {
      title: "Women Empowerment",
      description: "Advancing women's rights, entrepreneurship, and leadership roles",
      image: "/Women empowerment.png",
      stats: "1,500+ Women Empowered",
      color: "from-[#003087] to-[#001f52]",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Key Programs & Initiatives</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            MCC delivers impact through focused programs that transform lives and strengthen communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-[#CE0000] transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className="w-full h-56 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('${program.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r ${program.color}`}>
                  <p className="text-white font-bold text-sm">{program.stats}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <button className="bg-gradient-to-r from-red-700 to-blue-900 text-white font-bold px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
