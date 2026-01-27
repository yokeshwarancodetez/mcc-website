"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "President's Message", href: "/about/president-message" },
        { label: "Our History", href: "/about/founders" },
        { label: "Our Leadership", href: "/about/leadership" },
      ],
    },
    {
      label: "CEC",
      href: "/organisation/cec",
    },
    {
      label: "CWC",
      href: "/organisation/cwc",
    },
    {
      label: "Wings",
      href: "/morcha",
      submenu: [
        { label: "Youth Wing", href: "/morcha/youth" },
        { label: "Women's Wing", href: "/morcha/women" },
        { label: "Professional Wing", href: "/morcha/professional" },
        { label: "Cultural Committee", href: "/morcha/cultural" },
      ],
    },
    { label: "Branches", href: "/branches" },
    {
      label: "Documents",
      href: "/documents",
    },
    {
      label: "Media",
      href: "/media",
      submenu: [
        { label: "Press Releases", href: "/media/press-releases" },
        { label: "Gallery", href: "/media/photos" },
        { label: "Events", href: "/media" },
        { label: "Articles", href: "/media/interviews" },
        { label: "Speeches", href: "/media/speeches" },
        { label: "Videos", href: "/media/videos" },
      ],
    },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[#003087]">
      <div className="w-full">
        {/* Top Bar - Premium white background */}
        <div className="bg-white">
          <div className="w-full px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center py-5 sm:py-6 lg:py-6">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
                  <Image
                    src="/mcc-logo.jpg"
                    alt="Malaysian Ceylonese Congress Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="font-black text-sm sm:text-base lg:text-lg text-[#003087] leading-tight tracking-tight">
                    Malaysian Ceylonese
                  </p>
                  <p className="text-xs lg:text-sm text-[#CE0000] font-black uppercase tracking-wider">Congress</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center flex-1 ml-6 xl:ml-8 gap-3">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3 lg:px-3.5 py-3 text-xs lg:text-sm font-semibold text-gray-800 hover:text-[#CE0000] border-b-4 border-transparent hover:border-[#CE0000] transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform flex-shrink-0" />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {item.submenu && (
                      <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-gradient-to-b from-gray-50 to-white border-l-4 border-[#003087] border border-gray-200 rounded-lg shadow-2xl z-50 min-w-56">
                        {item.submenu.map((sub, idx) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`block px-5 py-3 text-sm text-gray-700 font-semibold hover:text-[#CE0000] hover:bg-[#CE0000]/5 transition-all duration-150 ${idx !== item.submenu!.length - 1 ? "border-b border-gray-100" : "rounded-b-lg"}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
                {/* <button className="p-2 hover:bg-[#CE0000]/10 rounded-lg transition-colors hidden sm:flex items-center justify-center flex-shrink-0">
                  <Search size={18} className="text-gray-700" />
                </button> */}
                <Link href="/membership" className="hidden lg:block flex-shrink-0">
                  <button className="px-3.5 py-2.5 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-semibold text-xs rounded-lg hover:shadow-lg transition-all uppercase tracking-wider whitespace-nowrap flex-shrink-0">
                    Join MCC
                  </button>
                </Link>
                <button
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden bg-white border-t-4 border-[#003087] shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between text-left py-3.5 px-4 text-sm font-semibold text-gray-800 hover:text-[#CE0000] hover:bg-[#CE0000]/5 rounded transition-all uppercase tracking-wider"
                  >
                    <Link href={item.href} onClick={() => !item.submenu && setIsOpen(false)} className="flex-1">
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform flex-shrink-0 ml-2 ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && mobileDropdown === item.label && (
                    <div className="pl-4 space-y-1.5 bg-[#CE0000]/5 rounded">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block text-sm text-gray-700 hover:text-[#CE0000] px-4 py-3 rounded transition-all font-semibold"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/membership" className="w-full">
                <button className="w-full mt-5 px-4 py-3.5 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm uppercase tracking-wider">
                  Join MCC
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
