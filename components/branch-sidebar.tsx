"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface BranchSidebarProps {
  state: string
  activeSection: string
}

export default function BranchSidebar({ state, activeSection }: BranchSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "committees", label: "Committees", icon: "📋" },
    { id: "pressreleases", label: "Press Releases", icon: "📰" },
    { id: "speeches", label: "Speeches", icon: "🎤" },
    { id: "interviews", label: "Articles", icon: "📝" },
    { id: "photogallery", label: "Photo Gallery", icon: "📸" },
    { id: "videogallery", label: "Video Gallery", icon: "🎥" },
    { id: "documents", label: "Documents", icon: "📄" },
    { id: "leadership", label: "Leadership", icon: "👥" },
    { id: "members", label: "Members", icon: "👫" },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#CE0000] text-white p-3 rounded-full shadow-lg hover:bg-[#B00000] transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen lg:h-auto w-64 bg-[#003087] text-white shadow-lg transform transition-transform duration-300 lg:transform-none z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 lg:min-w-64 flex flex-col">
          <h3 className="text-xl font-bold mb-6 text-[#FCD116] uppercase">Branch Menu</h3>

          <nav className="space-y-2 flex-1">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`/branches/${state}/${section.id}`}
                className={`flex items-center justify-between w-full text-left px-4 py-3 rounded transition-all font-semibold group ${
                  activeSection === section.id
                    ? "bg-[#CE0000] text-white shadow-md"
                    : "bg-transparent text-gray-200 hover:bg-gradient-to-r hover:from-[#CE0000] hover:to-[#003087] hover:text-white"
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-3 text-lg">{section.icon}</span>
                  <span className="whitespace-nowrap">{section.label}</span>
                </span>
                <span className="w-1 h-0 group-hover:h-6 bg-[#FCD116] rounded transition-all duration-300 ml-2"></span>
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-xs text-gray-400 text-center">MCC Branch Portal</p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20" />
      )}
    </>
  )
}
