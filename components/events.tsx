import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function Events() {
  const news = [
    {
      title: "MCC Announces 2025 Scholarship Intake",
      description: "Applications now open for secondary and tertiary students across Malaysia.",
      color: "border-l-4 border-[#CE0000] bg-[#CE0000]/5",
    },
    {
      title: "Cultural Heritage Week Launched Across All Chapters",
      description: "Celebrating Tamil language, arts, traditions and community dialogue.",
      color: "border-l-4 border-[#003087] bg-[#003087]/5",
    },
    {
      title: "Youth Mentorship Circles Start with Industry Partners",
      description: "Empowering youth with leadership, career and civic guidance.",
      color: "border-l-4 border-[#CE0000] bg-[#CE0000]/5",
    },
  ]

  const events = [
    {
      title: "Pongal Villa 2026",
      date: "25-01-2026",
      time: "Morning Session",
      location: "Malaysia",
      description:
        "A grand Pongal celebration featuring traditional kolam, Pongal cooking rituals, cultural exhibitions and community fellowship.",
      headerColor: "from-[#CE0000] to-[#b20000]",
      image: "/pongal-event1.jpeg",
    },
    {
      title: "Pongal Villa 2026",
      date: "25-01-2026",
      time: "Morning Session",
      location: "Malaysia",
      description:
        "Enjoy Bharatanatyam performances, folk dances, live music, traditional food stalls and family-friendly cultural programs.",
      headerColor: "from-[#003087] to-[#001f52]",
      image: "/pongal-event2.jpeg",
    },
    {
      title: "Pongal Villa 2026",
      date: "25-01-2026",
      time: "Morning Session",
      location: "Malaysia",
      description:
        "Women-focused Pongal activities including debates, cultural competitions, leadership games and team-building sessions.",
      headerColor: "from-[#CE0000] to-[#b20000]",
      image: "/pongal-event3.jpeg",
    },
  ]

  return (
    <section id="media" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= NEWS ================= */}
        <div className="mb-20">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#CE0000] rounded"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                From the MCC Newsroom
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {news.map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-xl overflow-hidden ${item.color} hover:shadow-lg transition-all duration-300 p-6 space-y-3 cursor-pointer hover:-translate-y-1`}
              >
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
                <button className="text-[#003087] font-semibold text-sm">
                  Read More →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/media/interviews">
              <button className="px-8 py-3 border-2 border-[#CE0000] text-[#CE0000] font-bold rounded-lg hover:bg-[#CE0000]/5 transition-colors">
                View All News
              </button>
            </Link>
          </div>
        </div>

        {/* ================= EVENTS ================= */}
        <div>
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#003087] rounded"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Our Next Events
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* 🔥 FULL COVER IMAGE */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/25"></div>

                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#003087]/90 to-[#CE0000]/90 px-4 py-3">
                    <p className="text-white font-bold text-sm tracking-wide">
                      Pongal Festival Event
                    </p>
                  </div> */}
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="text-gray-700 text-sm">{event.description}</p>

                  <div className="space-y-2 py-4 border-y border-gray-200">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar size={16} className="text-[#003087]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={16} className="text-[#CE0000]" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={16} className="text-[#003087]" />
                      {event.location}
                    </div>
                  </div>

                  <button
                    className={`w-full px-4 py-2 bg-gradient-to-r ${event.headerColor} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border-2 border-[#003087] text-[#003087] font-bold rounded-lg hover:bg-[#003087]/5 transition-colors">
              All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
