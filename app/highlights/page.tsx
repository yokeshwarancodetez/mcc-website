import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Music, BookOpen, Stethoscope, Building2, Trophy } from "lucide-react"

export default function HighlightsPage() {
  const highlights = [
    {
      date: "January 5, 2013",
      title: "Ramayana - Our Visualisation",
      category: "Cultural Performance",
      icon: Music,
      image: "/dance-image.jpg",
      description:
        "A spectacular stage presentation based on the Hindu epic Ramayanam showcased artistic talents of MCC members and their children.",
      highlights: [
        "Staged by the Ladies Wing of Jalan Klang Lama Branch",
        "Evening of music, dance and drama",
        "Performed at evening event",
        "Showcased community artistic talents",
      ],
    },
    {
      date: "January 20, 2013",
      title: "Micro-Credit Loans for Women Entrepreneurs",
      category: "Community Outreach",
      icon: Building2,
      image: "/womens-images.jpg",
      description:
        "Damansara Branch partnered with TECH Outreach to empower disadvantaged women through micro-credit loans for small business ventures.",
      highlights: [
        "Partnership with TECH Outreach NGO",
        "9 women received micro-credit loans",
        "Support for self-sustainability",
        "Community empowerment initiative",
      ],
    },
    {
      date: "March 17, 2013",
      title: "Community Centre Blessing Ceremony",
      category: "Infrastructure",
      icon: Building2,
      image: "/organization.gif",
      description:
        "Historic partnership between MCC and FOMSO resulted in community centre. Keys were collected and blessing ceremony held with milk boiling ritual.",
      highlights: [
        "Joint partnership between MCC and FOMSO",
        "Community centre materialized",
        "Milk boiling ceremony for purification",
        "Government support acknowledged",
      ],
    },
  ]

  return (
    <main className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-16 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Year 2013 Highlights</h1>
            <p className="text-lg sm:text-xl text-gray-100">Notable Achievements and Milestones</p>
            <div className="flex justify-center gap-2 mt-6">
              <div className="h-1 w-12 bg-white rounded-full"></div>
              <div className="h-1 w-12 bg-yellow-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 sm:h-80 lg:h-96">
                      <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-[#CE0000] to-[#003087]">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#CE0000] uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#003087] mb-2">{item.date}</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{item.title}</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">{item.description}</p>

                    {/* Highlights List */}
                    <div className="space-y-3">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#CE0000] flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <p className="text-sm sm:text-base text-gray-700">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Year Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">2013: A Year of Achievement</h2>
            <div className="flex justify-center gap-2">
              <div className="h-1 w-12 bg-[#CE0000] rounded-full"></div>
              <div className="h-1 w-12 bg-[#003087] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { number: "3", label: "Major Events" },
              { number: "2", label: "Community Programs" },
              { number: "1", label: "Infrastructure Project" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 text-center hover:border-[#CE0000] hover:shadow-lg transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#CE0000] mb-2">{stat.number}</p>
                <p className="text-sm sm:text-base text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#003087] to-[#CE0000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">A Legacy of Progress</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            The year 2013 was a significant milestone in MCC's journey, marked by cultural celebrations, community empowerment,
            infrastructure development, and unprecedented recognition of leadership. These achievements reflect MCC's commitment to
            serving the community while upholding cultural heritage and contributing to national development.
          </p>
          <p className="text-sm sm:text-base text-gray-100 italic">
            From cultural performances to national honours, 2013 showcased the diversity and dedication of the Malaysian Ceylonese
            Congress.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
