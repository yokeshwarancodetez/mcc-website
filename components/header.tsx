"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Heart } from "lucide-react"
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
        { label: "Founders", href: "/about/founder" },
        { label: "President's Message", href: "/about/president-message" },
        { label: "Our History", href: "/about/our-history" },
        { label: "Our Leaders", href: "/about/our-leaders" },
      ],
    },
    { label: "CEC", href: "/organisation/central-election-committee" },
    { label: "CWC", href: "/organisation/central-working-committee" },
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
    { label: "Documents", href: "/documents" },
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

        {/* Top Bar */}
        <div className="bg-white">
          <div className="w-full px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center py-3 sm:py-4 lg:py-4">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex-shrink-0">
                  <Image
                    src="/mcc-logo1.jpeg"
                    alt="Malaysian Ceylonese Congress Logo"
                    width={76}
                    height={66}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="leading-tight">
                  <p className="font-black text-[11px] sm:text-sm lg:text-base text-[#003087] tracking-tight">
                    Malaysian Ceylonese Congress
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center flex-1 ml-10 gap-3">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-[#CE0000] border-b-4 border-transparent hover:border-[#CE0000] transition-all uppercase tracking-wider whitespace-nowrap"
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                      )}
                    </Link>

                    {item.submenu && (
                      <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white border-l-4 border-[#003087] rounded-lg shadow-2xl z-50 min-w-56">
                        {item.submenu.map((sub, idx) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`block px-5 py-3 text-sm text-gray-700 font-semibold hover:text-[#CE0000] hover:bg-[#CE0000]/5 transition-all ${
                              idx !== item.submenu!.length - 1 ? "border-b border-gray-100" : "rounded-b-lg"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right buttons */}
              <div className="flex items-center gap-2 flex-shrink-0 lg:mr-[80px]">

                {/* Donate - Desktop */}
                <Link href="/donate" className="hidden lg:block">
                  <button className="px-3.5 py-2 border-2 border-[#CE0000] text-[#CE0000] font-semibold text-xs rounded-lg hover:bg-[#CE0000] hover:text-white transition-all uppercase tracking-wider flex items-center gap-1.5">
                    <Heart size={14} /> Donate
                  </button>
                </Link>

                {/* Join MCC - Desktop */}
                <Link href="/membership" className="hidden lg:block">
                  <button className="px-3.5 py-2 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-semibold text-xs rounded-lg hover:shadow-lg transition-all uppercase tracking-wider">
                    Join MCC
                  </button>
                </Link>

                {/* Mobile menu icon */}
                <button
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden bg-white border-t-4 border-[#003087] shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-2">

              {/* Mobile Donate + Join */}
              <div className="flex gap-3 pb-4">
                <Link href="/donate" className="flex-1">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 border-2 border-[#CE0000] text-[#CE0000] font-bold rounded-lg uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Heart size={16} /> Donate
                  </button>
                </Link>

                <Link href="/membership" className="flex-1">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-bold rounded-lg uppercase tracking-wider"
                  >
                    Join MCC
                  </button>
                </Link>
              </div>

              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 px-4 text-sm font-semibold text-gray-800 hover:text-[#CE0000] hover:bg-[#CE0000]/5 rounded uppercase tracking-wider"
                  >
                    <Link href={item.href} onClick={() => !item.submenu && setIsOpen(false)} className="flex-1 text-left">
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {item.submenu && mobileDropdown === item.label && (
                    <div className="pl-4 space-y-1.5 bg-[#CE0000]/5 rounded">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block text-sm text-gray-700 hover:text-[#CE0000] px-4 py-3 rounded font-semibold"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
