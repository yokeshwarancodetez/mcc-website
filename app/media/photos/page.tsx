"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const PHOTOS_PER_PAGE = 12

export default function PhotoGalleryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Events" },
    { id: "annual-meet", name: "Annual General Meeting" },
    { id: "community", name: "Community Service" },
    { id: "youth", name: "Youth Programs" },
    { id: "women", name: "Women Empowerment" },
    { id: "cultural", name: "Cultural Events" },
  ]

  const allPhotos = [
    {
      id: 1,
      title: "Pongal Villa 2026",
      category: "annual-meet",
      image: "/pongal-event1.jpeg",
      date: "25-01-2026",
    },
    {
      id: 2,
      title: "Pongal Villa 2026",
      category: "community",
      image: "/pongal-event2.jpeg",
      date: "25-01-2026",
    },
    {
      id: 3,
      title: "Pongal Villa 2026",
      category: "youth",
      image: "/pongal-event3.jpeg",
      date: "25-01-2026",
    },
   
  ]

  const filteredPhotos =
    selectedCategory === "all" ? allPhotos : allPhotos.filter((photo) => photo.category === selectedCategory)

  const totalPages = Math.ceil(filteredPhotos.length / PHOTOS_PER_PAGE)
  const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE
  const currentPhotos = filteredPhotos.slice(startIndex, startIndex + PHOTOS_PER_PAGE)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg opacity-90">Browse our collection of memorable moments and events</p>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h3 className="text-sm font-bold text-[#003087] mb-4">FILTER BY EVENT</h3>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category.id
                      ? "bg-[#003087] text-white"
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
            {currentPhotos.map((photo) => (
              <Link
                key={photo.id}
                href={`/media/photos/${photo.id}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-64 bg-gray-200">
                  <img
                    src={photo.image || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-[#003087] text-[#003087] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#003087] hover:text-white transition-colors"
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
                        ? "bg-[#003087] text-white"
                        : "border border-[#003087] text-[#003087] hover:bg-[#003087] hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-[#003087] text-[#003087] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#003087] hover:text-white transition-colors"
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
