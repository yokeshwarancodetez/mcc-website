"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const VIDEOS_PER_PAGE = 12

export default function VideoGalleryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "news", name: "News & Updates" },
    { id: "speeches", name: "Speeches" },
    { id: "events", name: "Events" },
    { id: "programs", name: "Programs" },
    { id: "tutorials", name: "Tutorials" },
  ]

  const allVideos = [
    {
      id: 1,
      title: "Annual General Meeting Address 2025",
      category: "speeches",
      youtubeId: "dQw4w9WgXcQ",
      date: "January 15, 2025",
      duration: "12:34",
    },
    {
      id: 2,
      title: "Community Service Impact Report",
      category: "news",
      youtubeId: "dQw4w9WgXcQ",
      date: "January 12, 2025",
      duration: "8:45",
    },
    {
      id: 3,
      title: "Youth Leadership Training Highlights",
      category: "programs",
      youtubeId: "dQw4w9WgXcQ",
      date: "January 10, 2025",
      duration: "15:20",
    },
    {
      id: 4,
      title: "Women Empowerment Conference Summary",
      category: "events",
      youtubeId: "dQw4w9WgXcQ",
      date: "January 8, 2025",
      duration: "10:15",
    },
    {
      id: 5,
      title: "President's Speech on Social Justice",
      category: "speeches",
      youtubeId: "dQw4w9WgXcQ",
      date: "January 5, 2025",
      duration: "18:50",
    },
    {
      id: 6,
      title: "Charity Gala 2024 Recap",
      category: "events",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 28, 2024",
      duration: "14:30",
    },
    {
      id: 7,
      title: "How to Apply for Scholarships",
      category: "tutorials",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 25, 2024",
      duration: "6:45",
    },
    {
      id: 8,
      title: "Youth Morcha Sports Tournament",
      category: "events",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 20, 2024",
      duration: "9:20",
    },
    {
      id: 9,
      title: "Women's Skills Development Program",
      category: "programs",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 18, 2024",
      duration: "11:10",
    },
    {
      id: 10,
      title: "Cultural Festival Celebration Highlights",
      category: "events",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 15, 2024",
      duration: "7:55",
    },
    {
      id: 11,
      title: "Environmental Conservation Initiative",
      category: "news",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 12, 2024",
      duration: "13:25",
    },
    {
      id: 12,
      title: "Membership Benefits Explained",
      category: "tutorials",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 10, 2024",
      duration: "5:40",
    },
    {
      id: 13,
      title: "Regional Assembly 2024 Report",
      category: "news",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 8, 2024",
      duration: "16:20",
    },
    {
      id: 14,
      title: "Independence Day Message",
      category: "speeches",
      youtubeId: "dQw4w9WgXcQ",
      date: "December 1, 2024",
      duration: "8:10",
    },
    {
      id: 15,
      title: "Getting Started with MCC Programs",
      category: "tutorials",
      youtubeId: "dQw4w9WgXcQ",
      date: "November 28, 2024",
      duration: "7:30",
    },
  ]

  const filteredVideos =
    selectedCategory === "all" ? allVideos : allVideos.filter((video) => video.category === selectedCategory)

  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE)
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE
  const currentVideos = filteredVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Video Gallery</h1>
          <p className="text-lg opacity-90">Watch our latest videos and updates</p>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h3 className="text-sm font-bold text-[#003087] mb-4">FILTER BY CATEGORY</h3>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category.id
                      ? "bg-[#CE0000] text-white"
                      : "bg-gray-200 text-[#003087] hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentVideos.map((video) => (
              <Link
                key={video.id}
                href={`/media/videos/${video.id}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-48 bg-gray-800">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#CE0000] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-[#003087] text-sm group-hover:text-[#CE0000] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">{video.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-[#CE0000] text-[#CE0000] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#CE0000] hover:text-white transition-colors"
              >
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentPage === page
                        ? "bg-[#CE0000] text-white"
                        : "border border-[#CE0000] text-[#CE0000] hover:bg-[#CE0000] hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-[#CE0000] text-[#CE0000] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#CE0000] hover:text-white transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
