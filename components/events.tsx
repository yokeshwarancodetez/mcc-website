import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function Events() {
  const news = [
    {
      title: "MCC Announces 2025 Scholarship Intake",
      description: "Applications now open for secondary and tertiary students.",
      color: "border-l-4 border-[#CE0000] bg-[#CE0000]/5",
    },
    {
      title: "Cultural Heritage Week Launched Across All Chapters",
      description: "Engaging language workshops, arts and community dialogues.",
      color: "border-l-4 border-[#003087] bg-[#003087]/5",
    },
    {
      title: "Youth Mentorship Circles Start with Industry Partners",
      description: "Equipping students for career and civic leadership.",
      color: "border-l-4 border-[#CE0000] bg-[#CE0000]/5",
    },
  ]

  const events = [
    {
      title: "MCC Scholarship Clinic",
      date: "15 Nov 2025",
      time: "Morning Session",
      location: "Kuala Lumpur",
      description: "Walk-in assistance for application forms, eligibility and documentation.",
      headerColor: "from-[#CE0000] to-[#b20000]",
    },
    {
      title: "Heritage & Language Festival",
      date: "29 Nov 2025",
      time: "9:00 AM",
      location: "Penang Chapter",
      description: "Arts performance, food fair and Tamil language workshops.",
      headerColor: "from-[#003087] to-[#001f52]",
    },
    {
      title: "Youth Leadership Bootcamp",
      date: "12 Dec 2025",
      time: "9:00 AM",
      location: "Selangor",
      description: "Soft skills, debates and team-building for ages 16–24.",
      headerColor: "from-[#CE0000] to-[#b20000]",
    },
  ]

  return (
    <section id="media" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Latest News Section */}
        <div className="mb-20">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#CE0000] rounded"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">From the MCC Newsroom</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {news.map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-xl overflow-hidden ${item.color} hover:shadow-lg transition-all duration-300 p-6 space-y-3 cursor-pointer hover:-translate-y-1`}
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
                <button className="text-[#003087] font-semibold text-sm hover:text-[#001f52] transition-colors">
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

        {/* Upcoming Events Section */}
        <div>
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#003087] rounded"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Next Events</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="w-full h-48 bg-cover bg-center flex items-center justify-center relative overflow-hidden">
                  <img
                    src={
                      idx === 0
                        ? "/event-scholarship-clinic.jpg"
                        : idx === 1
                          ? "/event-heritage-festival.jpg"
                          : "/event-youth-bootcamp.jpg"
                    }
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.headerColor} opacity-40`}></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{event.description}</p>

                  <div className="space-y-2 py-4 border-y border-gray-200">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Calendar size={16} className="text-[#003087] flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Clock size={16} className="text-[#CE0000] flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <MapPin size={16} className="text-[#003087] flex-shrink-0" />
                      <span>{event.location}</span>
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
