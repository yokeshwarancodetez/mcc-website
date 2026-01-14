"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function AboutNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const aboutItems = [
    { label: "About Us", href: "/about" },
    { label: "Details About Founders", href: "/about/founders" },
    { label: "Life and History of Our Leaders", href: "/about/leaders" },
    { label: "Constitution", href: "/about/constitution" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-8 py-4">
          {/* {aboutItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-bold transition-colors py-2 px-3 rounded ${
                isActive(item.href) ? "text-[#FFD700] border-b-3 border-[#FFD700]" : "text-white hover:text-[#FFD700]"
              }`}
            >
              {item.label}
            </Link>
          ))} */}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {isOpen && (
            <div className="flex flex-col gap-2 pb-4 px-3">
              {aboutItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold py-2 px-3 rounded transition-colors ${
                    isActive(item.href)
                      ? "text-[#FFD700] bg-white/10"
                      : "text-white hover:text-[#FFD700] hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
