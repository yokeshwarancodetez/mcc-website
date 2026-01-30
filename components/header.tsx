

"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Heart } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpen(false)
    setMobileDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActiveDropdown(null)
        setMobileDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "Founders & President", href: "/about/founder" },
        { label: "President's Message", href: "/about/president-message" },
        { label: "Our History", href: "/about/our-history" },
        { label: "Dairy of events", href: "/about/dairy-of-events" },
        { label: "Achievements", href: "/about/achievements" },
        { label: "Highlights", href: "/about/highlights" },
      ],
    },
    { label: "CWC", href: "/organisation/central-working-committee" },
    { label: "CEC", href: "/organisation/central-election-committee" },
    {
      label: "Wings",
      href: "#",
      submenu: [
        { label: "Women's Wing", href: "/morcha/women" },
        { label: "Youth Wing", href: "/morcha/youth" },
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
    <header ref={menuRef} className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[#003087]">

      <div className="w-full px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/mcc-logo1.jpeg" alt="Logo" width={70} height={70} className="w-11 sm:w-12 lg:w-14 h-auto" />
            <p className="font-black text-[11px] sm:text-sm lg:text-base text-[#003087]">
              Malaysian Ceylonese Congress
            </p>
          </Link>

          {/* ✅ Desktop Nav FIXED */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-[#CE0000] border-b-4 border-transparent hover:border-[#CE0000] transition uppercase tracking-wider cursor-pointer">
                  <Link href={item.href}>{item.label}</Link>
                  {item.submenu && <ChevronDown size={14} />}
                </div>

                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full bg-white border-l-4 border-[#003087] rounded-xl shadow-2xl min-w-56 overflow-hidden">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-[#CE0000]/5 hover:text-[#CE0000]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/donate">
              <button className="px-3 py-2 border-2 border-[#CE0000] text-[#CE0000] font-semibold text-xs rounded-lg hover:bg-[#CE0000] hover:text-white transition uppercase flex items-center gap-1">
                <Heart size={14} /> Donate
              </button>
            </Link>
            <Link href="/membership">
              <button className="px-3 py-2 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-semibold text-xs rounded-lg">
                Join MCC
              </button>
            </Link>
          </div>

          {/* Mobile button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* (mobile menu unchanged) */}
      {/* keep your existing mobile menu here */}
       {isOpen && (
          <div className="lg:hidden fixed top-[84px] left-0 w-full h-[calc(100vh-84px)] bg-white border-t-4 border-[#003087] shadow-xl z-50 flex flex-col">

            {/* Scroll container */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 space-y-2">

              {/* Mobile Donate + Join */}
              <div className="flex gap-3 pb-3">
                <Link href="/donate" className="flex-1">
                  <button className="w-full py-3 border-2 border-[#CE0000] text-[#CE0000] font-bold rounded-lg uppercase flex justify-center gap-2">
                    <Heart size={16} /> Donate
                  </button>
                </Link>

                <Link href="/membership" className="flex-1">
                  <button className="w-full py-3 bg-gradient-to-r from-[#CE0000] to-[#003087] text-white font-bold rounded-lg uppercase">
                    Join MCC
                  </button>
                </Link>
              </div>

              {navItems.map((item) => (
                <div key={item.label}>
                  <div
                    onClick={() =>
                      item.submenu
                        ? setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                        : setIsOpen(false)
                    }
                    className="flex justify-between items-center px-4 py-3 font-semibold text-sm rounded-lg hover:bg-[#CE0000]/5"
                  >
                    <Link href={item.href} className="flex-1">
                      {item.label}
                    </Link>

                    {item.submenu && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {item.submenu && mobileDropdown === item.label && (
                    <div className="ml-4 mt-1 rounded-lg bg-[#CE0000]/5 overflow-hidden">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-3 text-sm font-semibold hover:text-[#CE0000]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

    </header>
  )
}
