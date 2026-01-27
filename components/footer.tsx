"use client"

import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                Subscribe for Updates
              </h3>
              <p className="text-blue-100 mt-2 font-medium text-sm">Get latest news and announcements directly</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 w-full md:max-w-xl">
              <input
                type="email"
                placeholder="Enter your Email ID or Mobile Number"
                className="flex-1 px-4 py-3 rounded border border-blue-500 bg-white/10 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 text-white font-black rounded hover:bg-orange-600 transition-colors whitespace-nowrap uppercase tracking-wide text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4 lg:col-span-1">
            <h4 className="text-lg font-black text-amber-400 uppercase tracking-wide">About MCC</h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Malaysian Ceylonese Congress - Serving the community with integrity, unity, and excellence since 1958.
            </p>
            <div className="space-y-3 pt-4 border-t border-gray-700">
              
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <span className="font-medium">info@mcc1998.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-amber-400 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About Us", "Documents", "Leadership", "Join MCC"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Wings */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-amber-400 uppercase tracking-wide">Our Wings</h4>
            <ul className="space-y-2.5">
              {["Youth Wing", "Women's Wing", "Professional Wing", "Cultural Committee"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-amber-400 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2.5">
              {["Press Releases", "Gallery", "Events", "Contact Us", "Make Donation"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches - New section for organization */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-amber-400 uppercase tracking-wide">Organization</h4>
            <ul className="space-y-2.5">
              {["Branches", "Central Working Committee", "Central Election Committee", "Media", "Speeches"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-700 pt-10 space-y-8">
          <div>
            <h4 className="text-lg font-black text-amber-400 mb-4 uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Youtube, label: "YouTube", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-11 h-11 rounded-full bg-gray-800 hover:bg-amber-700 flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:scale-110"
                  title={label}
                  aria-label={label}
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="border-t border-gray-700 pt-8 space-y-4 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <p className="font-medium">&copy; 2026 Malaysian Ceylonese Congress. All rights reserved.</p>
              <p className="text-xs text-gray-400 font-medium">
    Created by <span className="text-gray-400 font-medium">CodeTez Technologies</span>
  </p>
              <div className="flex gap-6 flex-wsrap">
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors font-medium hover:translate-y-[-2px] inline-block"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors font-medium hover:translate-y-[-2px] inline-block"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors font-medium hover:translate-y-[-2px] inline-block"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
