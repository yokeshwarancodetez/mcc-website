"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Users, MapPin } from "lucide-react"

export default function DiaryOfEventsPage() {
  const events = [
    {
      id: 1,
      title: "New Year Fellowship Dinner 2014",
      date: "4 January 2014",
      location: "Community Centre, Taman Kanagapuram",
      category: "Community Gathering",
      image: "/newyear-cake.jpg",
      highlights: [
        "100+ members and guests",
        "7 days to organize",
        "Music, food, and entertainment",
        "Lucky draws",
      ],
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
        "The evening began with a toast to MCC led by Dato' Vijayanathan.",
        "The President recorded his appreciation for members and organizers.",
        "CWC members jointly cut the New Year cake in unity.",
      ],
    },
    {
      id: 2,
      title: "MCC National Women's Wing Seminar",
      date: "2014",
      location: "Community Centre, Taman Kanagapuram",
      category: "Educational Seminar",
      image: "/events-images.jpg",
      highlights: [
        "80 participants",
        "Women empowerment focus",
        "Multi-topic discussions",
        "Expert speakers",
      ],
      description:
        "The MCC National Women's Wing conducted a comprehensive Seminar focusing on issues concerning Women and their progress in society. The event drew about 80 participants and covered multiple aspects of women's development and empowerment.",
    },
  ]

  return (
    <main className="flex flex-col w-full">
     

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-8 h-8" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Community Timeline
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Diary of Events
          </h1>
          <p className="text-gray-100 max-w-2xl">
            A chronicle of memorable moments that shaped and strengthened our
            community.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className={`flex flex-col lg:flex-row gap-10 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Event Card */}
              <div className="w-full">
                <div className="border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden">

                  {/* Image */}
                  <div className="bg-gray-50 flex justify-center py-6">
                    <div className="relative w-full max-w-md h-44 sm:h-56 lg:h-64 bg-white rounded-xl shadow-inner flex items-center justify-center">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute top-3 right-3 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {event.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-3 mb-5">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-red-700" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-5 h-5 text-red-700" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {event.highlights && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-3">
                          Event Highlights
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {event.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="bg-blue-50 border-l-4 border-blue-900 p-3 rounded text-sm font-semibold text-blue-900"
                            >
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {event.attendees && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-red-700" />
                          Notable Attendees
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {event.attendees.map((a, i) => (
                            <div
                              key={i}
                              className="bg-gray-50 p-2 rounded text-sm"
                            >
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {event.details && (
                      <ul className="space-y-2">
                        {event.details.map((d, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <span className="text-red-700 font-bold">✓</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </main>
  )
}
