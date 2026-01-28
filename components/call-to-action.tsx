"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#003087] via-[#003087] to-[#003087]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Become a Member of MCC</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join us to amplify our impact and strengthen our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Join */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-colors text-center space-y-4 group cursor-pointer">
            <div className="text-5xl">🤝</div>
            <h3 className="text-2xl font-bold text-white">Join Now</h3>
            <p className="text-white/80">Become part of our thriving community network</p>
            <button className="inline-flex items-center gap-2 mt-4 text-white font-semibold group-hover:gap-3 transition-all">
              <Link href="/membership" className="flex items-center gap-2">
                Membership <ArrowRight size={20} />
              </Link>
            </button>
          </div>

          {/* Volunteer */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-colors text-center space-y-4 group cursor-pointer">
            <div className="text-5xl">🌟</div>
            <h3 className="text-2xl font-bold text-white">Volunteer</h3>
            <p className="text-white/80">Make a difference in our community today</p>
            <button className="inline-flex items-center gap-2 mt-4 text-white font-semibold group-hover:gap-3 transition-all">
              Get Involved <ArrowRight size={20} />
            </button>
          </div>

          {/* Donate */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-colors text-center space-y-4 group cursor-pointer">
            <div className="text-5xl">💝</div>
            <h3 className="text-2xl font-bold text-white">Donate</h3>
            <p className="text-white/80">Support our community initiatives and programs</p>
              <Link href="/donate" className="inline-flex items-center gap-2 mt-4 text-white font-semibold group-hover:gap-3 transition-all">
              Contribute <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
