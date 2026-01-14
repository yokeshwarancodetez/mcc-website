export default function LeadersPage() {
  const presidents = [
    {
      name: "Dato' Dr. NKS Tharmaseelan",
      period: "1958-1975",
      title: "Founder & First President",
      legacy:
        "Established the political foundation and organizational structure of MCC, leading the party through its formative years with visionary governance.",
    },
    {
      name: "Tan Sri Dato Seri V. Jeyaratnam",
      period: "1980-1995",
      title: "Second President",
      legacy:
        "Expanded MCC's influence through education and welfare initiatives, establishing scholarship programs that continue to serve thousands.",
    },
    {
      name: "Senator Tan Sri Dr. C. Sinnadurai",
      period: "2000-2010",
      title: "Third President",
      legacy:
        "Modernized organizational structure and expanded parliamentary representation, strengthening MCC's voice in national affairs.",
    },
    {
      name: "Current Leadership Council",
      period: "2015-Present",
      title: "Contemporary Leadership",
      legacy:
        "Leading MCC into the digital age with focus on youth engagement, cultural preservation, and community empowerment.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Life and History of Our Leaders</h1>
          <p className="text-lg text-gray-100">Visionary Leadership Through Six Decades</p>
        </div>
      </div>

      {/* Presidents Timeline */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-12 text-center">Presidential Legacy</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {presidents.map((president, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg border-l-4 ${
                index % 2 === 0
                  ? "border-[#CE0000] bg-gradient-to-br from-[#CE0000]/5 to-white"
                  : "border-[#003087] bg-gradient-to-br from-[#003087]/5 to-white"
              } hover:shadow-lg transition-shadow`}
            >
              <p className="text-sm font-bold text-[#CE0000] mb-2">{president.period}</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#003087] mb-2">{president.name}</h3>
              <p className="text-sm font-bold text-gray-600 mb-4">{president.title}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{president.legacy}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-bold text-[#CE0000] uppercase">Historical Significance</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Contributions */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-8 text-center">Leadership Contributions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#CE0000] text-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Political Advocacy</h3>
              <p className="text-sm leading-relaxed">
                Our leaders have consistently advocated for community rights, parliamentary representation, and
                constitutional amendments benefiting our people.
              </p>
            </div>
            <div className="bg-[#003087] text-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Education & Scholarship</h3>
              <p className="text-sm leading-relaxed">
                Over 2,000 scholarships awarded to deserving students, providing quality education opportunities across
                all levels.
              </p>
            </div>
            <div className="bg-[#CE0000] text-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Community Welfare</h3>
              <p className="text-sm leading-relaxed">
                Comprehensive welfare programs serving 5,000+ families through healthcare, financial aid, and community
                support initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
