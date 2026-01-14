"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const RELEASES_PER_PAGE = 5

export default function PressReleasesPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const allReleases = [
    {
      id: 1,
      date: "2025-01-15",
      title: "MCC Launches New Scholarship Program",
      excerpt: "Expanded education initiative targeting 500 beneficiaries",
      content:
        "Malaysian Ceylonese Congress is pleased to announce the launch of its expanded scholarship program for 2025. This initiative aims to support 500 deserving students from underprivileged backgrounds. The program covers full tuition fees, books, and living allowances for the duration of their studies. Applications are now open and will be accepted until February 28, 2025.",
    },
    {
      id: 2,
      date: "2025-01-10",
      title: "MCC President Addresses National Assembly",
      excerpt: "Advocating for community welfare and social justice",
      content:
        "In a powerful speech delivered to the National Assembly, MCC President highlighted the organization's commitment to community welfare and social justice. The address focused on key issues including education accessibility, healthcare equity, and economic empowerment for marginalized communities. The President called for stronger legislative support for grassroots development programs.",
    },
    {
      id: 3,
      date: "2025-01-05",
      title: "Youth Morcha Organizes Community Service Drive",
      excerpt: "Over 200 volunteers participate in nationwide initiative",
      content:
        "The Youth Morcha successfully organized a nationwide community service drive with participation from over 200 volunteers across 15 states. The initiative focused on tree planting, environmental conservation, and community cleanup drives. Participants also conducted awareness campaigns on sustainable living and climate action. The drive resulted in planting 5,000 trees and cleaning 20 community spaces.",
    },
    {
      id: 4,
      date: "2024-12-28",
      title: "Women's Wing Launches Empowerment Workshop Series",
      excerpt: "Skills development and leadership training for 300 women",
      content:
        "The Women's Wing has launched a comprehensive empowerment workshop series aimed at developing skills and leadership capabilities. The program covers financial literacy, entrepreneurship, digital skills, and personal development. With participation from 300 women across different regions, this initiative aims to create economic opportunities and enhance social participation.",
    },
    {
      id: 5,
      date: "2024-12-20",
      title: "MCC Announces Community Healthcare Initiative",
      excerpt: "Free medical camps organized across 10 districts",
      content:
        "MCC announces the launch of its community healthcare initiative with free medical camps organized across 10 districts. Over 5,000 people are expected to benefit from this program in its first phase. The camps will provide general health checkups, preventive care awareness, and treatment for common ailments. Specialized camps for maternal health and child welfare are also planned.",
    },
    {
      id: 6,
      date: "2024-12-15",
      title: "Election Results: New Leadership Takes Office",
      excerpt: "Newly elected board members sworn in for 2025 term",
      content:
        "Following successful elections, newly elected board members have been sworn in for the 2025 term. The new leadership brings fresh perspectives and renewed commitment to the organization's mission. Key priorities for the coming year include digital transformation, youth engagement, and expansion of community programs in rural areas.",
    },
    {
      id: 7,
      date: "2024-12-10",
      title: "Annual Charity Gala Raises Funds for Education",
      excerpt: "Record-breaking fundraiser supports student scholarships",
      content:
        "The annual charity gala hosted by MCC set a new fundraising record, raising over RM 2 million for education scholarships. The event brought together community leaders, business owners, and supporters of the organization. Live performances, silent auctions, and cultural presentations made it a memorable evening celebrating community values.",
    },
    {
      id: 8,
      date: "2024-12-05",
      title: "MCC Signs Partnership with Education Ministry",
      excerpt: "Collaborative program to enhance vocational training",
      content:
        "MCC has signed a partnership agreement with the Education Ministry to develop and implement vocational training programs. The collaboration aims to provide skill-based education to 2,000 youth annually. Programs will focus on trades that have high employment demand including IT, hospitality, and skilled trades.",
    },
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const totalPages = Math.ceil(allReleases.length / RELEASES_PER_PAGE)
  const startIndex = (currentPage - 1) * RELEASES_PER_PAGE
  const currentReleases = allReleases.slice(startIndex, startIndex + RELEASES_PER_PAGE)

  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Press Releases</h1>
          <p className="text-lg opacity-90">Latest news and announcements from MCC</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {currentReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#CE0000]">
                <p className="text-sm text-gray-500">
                  {new Date(release.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-2xl font-bold text-[#003087] my-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <Link
                  href={`/media/press-releases/${release.id}`}
                  className="inline-block text-[#CE0000] font-bold hover:text-[#B00000] transition-colors"
                >
                  Read Full Release →
                </Link>
              </div>
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
