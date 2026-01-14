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
        { label: "Our History", href: "/about/founders" },
        { label: "Our Leaders", href: "/about/leaders" },
        { label: "Leadership Team", href: "/about/leadership" },
      ],
    },
    {
      label: "Documents",
      href: "/documents",
      submenu: [{ label: "Official Documents", href: "/documents" }],
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
    {
      label: "Media",
      href: "/media",
      submenu: [
        { label: "Press Releases", href: "/media/press-releases" },
        { label: "Speeches", href: "/media/speeches" },
        { label: "Articles", href: "/media/interviews" },
        { label: "Gallery", href: "/media/photos" },
        { label: "Videos", href: "/media/videos" },
      ],
    },
    {
      label: "Organization",
      href: "/organisation",
      submenu: [
        { label: "Central Working Committee", href: "/organisation/cwc" },
        { label: "Central Election Committee", href: "/organisation/cec" },
      ],
    },
    { label: "Branches", href: "/branches" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-blue-900">
      <div className="w-full">
        {/* Top Bar - Premium white background */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-auto sm:h-auto py-3 sm:py-4">
              <Link href="/" className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                  <Image
                    src="/mcc-logo1.jpeg"
                    alt="Malaysian Ceylonese Congress Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:flex flex-col">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">MCC</h1>
                  <p className="text-xs sm:text-sm text-blue-900 font-semibold">Malaysian Ceylonese Congress</p>
                </div>
              </Link>

              {/* Desktop Navigation - reduced padding and gaps to prevent overflow */}
              <nav className="hidden lg:flex items-center flex-1 ml-6 xl:ml-8 gap-0">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-2 xl:px-3 py-6 text-xs font-medium text-gray-800 hover:text-red-700 border-b-4 border-transparent hover:border-red-700 transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform flex-shrink-0" />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {item.submenu && (
                      <div className="absolute left-0 top-full pt-0 hidden group-hover:block bg-gradient-to-b from-gray-50 to-white border-l-4 border-blue-900 border border-gray-200 rounded-b-lg shadow-2xl z-50 min-w-52">
                        {item.submenu.map((sub, idx) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`block px-4 py-2.5 text-sm text-gray-700 font-medium hover:text-red-700 hover:bg-red-50 transition-all duration-150 ${idx !== item.submenu!.length - 1 ? "border-b border-gray-100" : "rounded-b-lg"}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Actions - reduced gaps and button size */}
              <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors hidden sm:flex items-center justify-center">
                  <Search size={18} className="text-gray-700" />
                </button>
                <Link href="/membership" className="hidden md:block">
                  <button className="px-2.5 lg:px-3 xl:px-4 py-2 bg-gradient-to-r from-red-700 to-blue-900 text-white font-medium text-xs rounded-lg hover:shadow-lg transition-all uppercase tracking-wider whitespace-nowrap flex-shrink-0">
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
          <nav className="lg:hidden bg-white border-t-4 border-blue-900 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between text-left py-3 px-4 text-sm font-medium text-gray-800 hover:text-red-700 hover:bg-red-50 rounded transition-all uppercase tracking-wider"
                  >
                    <Link href={item.href} onClick={() => !item.submenu && setIsOpen(false)} className="flex-1">
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform flex-shrink-0 ml-2 ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && mobileDropdown === item.label && (
                    <div className="pl-4 space-y-1 bg-red-50 rounded">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block text-sm text-gray-700 hover:text-red-700 px-4 py-2.5 rounded transition-all font-medium"
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
                <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-red-700 to-blue-900 text-white font-medium rounded-lg hover:shadow-lg transition-all text-sm uppercase tracking-wider">
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
