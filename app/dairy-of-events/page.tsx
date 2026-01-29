"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Users, MapPin, Clock } from "lucide-react"

export default function DiaryOfEventsPage() {
  const events = [
    {
      id: 1,
      title: "New Year Fellowship Dinner 2014",
      date: "4 January 2014",
      location: "Community Centre, Taman Kanagapuram",
      category: "Community Gathering",
      image: "/newyear-cake.jpg",
      highlights: ["100+ members and guests", "7 days to organize", "Music, food, and entertainment", "Lucky draws"],
      description:
        "The CWC Ladies of Malaysian Ceylonese Congress welcomed more than 100 members and friends of the Ceylonese Community at the New Year Fellowship Dinner. Within a span of 7 days to organize, they commanded the attention of several Branches and members who reciprocated well by ensuring support for MCC. Members and guests were treated to good food, programme, music, lucky draws and fellowship.",
      attendees: [
        "Dato' Dr. NKS Tharmaseelan (President)",
        "Dr. S. Sundralingam (Deputy President)",
        "Ms. G. Rasamalar (Secretary General)",
        "Ms. K. Shamini (Treasurer)",
        "Mr. Eric Kanapathy (Vice Chairman)",
        "Mr. Mahendranathan (Council Member)",
        "Ms. K. Sivamalar (Council Member)",
        "Ms. K. Rajeswari (Council Member)",
      ],
      details: [
        "The evening began with a toast to MCC led by Dato' Vijayanathan, a senior member of MCC Taman Yarl Branch.",
        "The President gave a speech and recorded his thanks to the members, guests and organizers for their show of support.",
        "The CWC members showed their solidarity, goodwill and unity as they got together to jointly cut the New Year cake.",
      ],
    },
    {
      id: 2,
      title: "MCC National Women's Wing Seminar",
      date: "2014",
      location: "Community Centre, Taman Kanagapuram",
      category: "Educational Seminar",
      image: "/events-images.jpg",
      highlights: ["80 participants", "Women empowerment focus", "Multi-topic discussions", "Expert speakers"],
      description:
        "The MCC National Women's Wing conducted a comprehensive Seminar focusing on issues concerning Women and their progress in society. The well-placed event drew about 80 participants and covered multiple aspects of women's development and empowerment across different sectors.",
      topics: [
        {
          title: "Health Issues Affecting Women",
          speaker: "Dr. S. Sundralingam (Deputy President)",
          description:
            "Odyssey of women from formative years to adulthood. Importance of regular medical check-ups to overcome health problems at an early stage. Discussion on emotional and physical changes affecting teenagers and how to cope.",
        },
        {
          title: "Women Empowerment Programs",
          speaker: "Ms. Shameen (Ministry for Women & Welfare)",
          description:
            "Introduction to many programs and ventures in place to empower women. Practical initiatives and resources available for women's advancement.",
        },
        {
          title: "Religion and Women's Progress",
          speaker: "Prof. Dr. Thilagawati",
          description:
            "How religion has affected the progress of Indian women in society. Religion's role in giving hope to women. Discussion on equality and non-discrimination in religious contexts.",
        },
        {
          title: "Financial Management",
          speaker: "Agensi Kaunseling dan Pengurusan Kredit",
          description: "Financial literacy and management strategies for women's economic independence.",
        },
        {
          title: "Social Etiquette",
          speaker: "Social Etiquette Consultant",
          description: "Guidance on how women should conduct themselves under different social circumstances.",
        },
      ],
      keyMessages: [
        "Much still needs to be done to improve the status and progress of women in employment, social, and education",
        "Women should be given equality and should not be discriminated against",
        "Financial independence is crucial for women's empowerment",
        "Education and health awareness are fundamental to women's progress",
      ],
    },
  ]

  return (
    <main className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r  from-[#003087] to-[#CE0000] text-white py-16 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-sm sm:text-base font-semibold uppercase tracking-widest">Community Timeline</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Diary of Events</h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl">
            A chronicle of memorable moments, celebrations, and initiatives that have shaped our community and strengthened our bonds.
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {events.map((event, idx) => (
              <div key={event.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Timeline Dot */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-700 to-blue-900 border-4 border-white shadow-lg"></div>
                  {idx < events.length - 1 && <div className="w-1 h-24 bg-gradient-to-b from-red-700 to-blue-900 mt-4"></div>}
                </div>

                {/* Event Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-80 sm:h-96 lg:h-[600px] overflow-hidden bg-gray-200">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {event.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 lg:p-10">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-700">
                          <Calendar className="w-5 h-5 text-red-700 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <MapPin className="w-5 h-5 text-red-700 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{event.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">{event.description}</p>

                      {/* Highlights */}
                      {event.highlights && (
                        <div className="mb-6">
                          <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Event Highlights</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {event.highlights.map((highlight, i) => (
                              <div key={i} className="bg-blue-50 border-l-4 border-blue-900 p-3 rounded">
                                <p className="text-xs sm:text-sm font-semibold text-blue-900">{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Topics for Seminar */}
                      {event.topics && (
                        <div className="mb-6">
                          <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Topics Covered</h3>
                          <div className="space-y-4">
                            {event.topics.map((topic, i) => (
                              <div key={i} className="bg-gray-50 border-l-4 border-red-700 p-4 rounded-lg">
                                <h4 className="font-bold text-red-700 mb-1 text-sm sm:text-base">{topic.title}</h4>
                                <p className="text-xs sm:text-sm text-blue-900 font-semibold mb-2">Speaker: {topic.speaker}</p>
                                <p className="text-xs sm:text-sm text-gray-700">{topic.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Messages */}
                      {event.keyMessages && (
                        <div className="mb-6">
                          <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Key Takeaways</h3>
                          <ul className="space-y-2">
                            {event.keyMessages.map((msg, i) => (
                              <li key={i} className="flex gap-3 text-xs sm:text-sm text-gray-700">
                                <span className="text-red-700 font-bold flex-shrink-0">•</span>
                                <span>{msg}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Attendees */}
                      {event.attendees && (
                        <div className="mb-6">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-base sm:text-lg">
                            <Users className="w-5 h-5 text-red-700" />
                            Notable Attendees
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {event.attendees.map((attendee, i) => (
                              <div key={i} className="bg-blue-50 p-2 rounded text-xs sm:text-sm text-gray-700">
                                {attendee}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Details */}
                      {event.details && (
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Event Highlights</h3>
                          <ul className="space-y-2">
                            {event.details.map((detail, i) => (
                              <li key={i} className="flex gap-3 text-xs sm:text-sm text-gray-700">
                                <span className="text-red-700 font-bold flex-shrink-0">✓</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="lg:hidden flex items-center gap-4 w-full mb-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-700 to-blue-900 flex-shrink-0"></div>
                  <div className="text-xs font-semibold text-gray-600 uppercase">{event.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Community Legacy</h2>
            <p className="text-gray-100 max-w-2xl mx-auto">
              These events represent our commitment to community building, education, and empowerment across generations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Events Organized", value: "2+" },
              { label: "Total Participants", value: "180+" },
              { label: "Speaker Categories", value: "5+" },
              { label: "Community Branches", value: "Multiple" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
