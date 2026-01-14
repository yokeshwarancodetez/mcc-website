"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin, Building2, ChevronRight } from "lucide-react"

const branches = [
  {
    state: "Selangor",
    branches: 15,
    members: 2500,
    districts: ["Kuala Lumpur", "Petaling Jaya", "Shah Alam", "Subang"],
    headquarters: "Kuala Lumpur",
    established: 1965,
  },
  {
    state: "Kuala Lumpur",
    branches: 8,
    members: 1800,
    districts: ["Cheras", "Setapak", "Wangsa Maju", "Ampang"],
    headquarters: "Cheras",
    established: 1960,
  },
  {
    state: "Penang",
    branches: 6,
    members: 1200,
    districts: ["Georgetown", "Butterworth", "Taiping"],
    headquarters: "Georgetown",
    established: 1968,
  },
  {
    state: "Johor",
    branches: 5,
    members: 900,
    districts: ["Johor Bahru", "Kluang", "Muar"],
    headquarters: "Johor Bahru",
    established: 1970,
  },
  {
    state: "Perak",
    branches: 4,
    members: 700,
    districts: ["Ipoh", "Taiping", "Klang"],
    headquarters: "Ipoh",
    established: 1972,
  },
  {
    state: "Negeri Sembilan",
    branches: 3,
    members: 500,
    districts: ["Seremban", "Kuala Lumpur"],
    headquarters: "Seremban",
    established: 1975,
  },
]

export default function BranchesPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-red-700 via-blue-900 to-red-700 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white text-balance uppercase tracking-tight">
              MCC Branches
            </h1>
            <p className="text-lg sm:text-xl text-white/95 font-medium">State-wise organization and branch structure</p>
            <div className="w-20 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Branches Grid Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-red-700 responsive-card"
              >
                <div className="bg-gradient-to-r from-red-700 to-blue-900 px-6 py-5">
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide">{branch.state}</h3>
                  <p className="text-red-100 text-sm font-medium mt-1">Est. {branch.established}</p>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-5">
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-700">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Branches</p>
                      <p className="text-2xl font-black text-red-700 mt-1">{branch.branches}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-900">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Members</p>
                      <p className="text-2xl font-black text-blue-900 mt-1">{branch.members}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 border-t border-gray-200 pt-5">
                    <div className="flex items-start gap-3">
                      <Building2 size={18} className="text-red-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Headquarters</p>
                        <p className="text-sm font-medium text-gray-800">{branch.headquarters}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-red-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Key Districts</p>
                        <p className="text-sm font-medium text-gray-800">{branch.districts.join(", ")}</p>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link href={`/branches/${branch.state.toLowerCase().replace(/\s+/g, "-")}`}>
                    <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-red-700 to-blue-900 text-white rounded-lg hover:shadow-lg transition-all font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm">
                      View Details
                      <ChevronRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats Section */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border-2 border-red-700 p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-red-700">
                  {branches.reduce((sum, b) => sum + b.branches, 0)}
                </p>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">Total Branches Nationwide</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-blue-900">
                  {branches.reduce((sum, b) => sum + b.members, 0)}
                </p>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">Active Members</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-red-700">{branches.length}</p>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">States Represented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
