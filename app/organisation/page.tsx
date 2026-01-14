"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OrganisationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">Organisation Structure</h1>
          <p className="text-sm md:text-base">Explore MCC's Governance and Administrative Framework</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Central Working Committee */}
          <Link href="/organisation/cwc">
            <div className="bg-gradient-to-br from-[#003087] to-[#001f52] text-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer h-full">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#FCD116] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">👥</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Central Working Committee</h2>
              </div>
              <p className="text-sm md:text-base mb-4 opacity-90">
                The decision-making body responsible for policy formulation, strategic planning, and overall governance
                of MCC. Learn about our leadership and organizational structure.
              </p>
              <div className="flex items-center text-[#FCD116] font-semibold text-sm">
                View Details <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </Link>

          {/* Central Election Committee */}
          <Link href="/organisation/cec">
            <div className="bg-gradient-to-br from-[#CE0000] to-[#9C0000] text-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer h-full">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#FCD116] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🗳️</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Central Election Committee</h2>
              </div>
              <p className="text-sm md:text-base mb-4 opacity-90">
                Responsible for conducting fair and transparent internal elections, managing democratic processes, and
                ensuring adherence to election guidelines and procedures.
              </p>
              <div className="flex items-center text-[#FCD116] font-semibold text-sm">
                View Details <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#003087] mb-4">About Our Organisation</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            MCC's organizational structure is designed to ensure democratic participation, transparent governance, and
            effective representation of all members. Our committees work together to advance the party's mission of
            empowering the Ceylonese community and promoting national unity.
          </p>
        </div>
      </div>
    </div>
  )
}
