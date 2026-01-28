"use client"

import { useState } from "react"
import { Heart, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

/* ---------------- COUNTRY DATA WITH ISO FOR FLAGS ---------------- */

const countryCodes = [
  { code: "+60", country: "Malaysia", iso: "my" },
  { code: "+65", country: "Singapore", iso: "sg" },
  { code: "+91", country: "India", iso: "in" },
  { code: "+44", country: "United Kingdom", iso: "gb" },
  { code: "+1", country: "United States", iso: "us" },
  { code: "+1", country: "Canada", iso: "ca" },
  { code: "+61", country: "Australia", iso: "au" },
  { code: "+64", country: "New Zealand", iso: "nz" },
  { code: "+33", country: "France", iso: "fr" },
  { code: "+49", country: "Germany", iso: "de" },
  { code: "+39", country: "Italy", iso: "it" },
  { code: "+34", country: "Spain", iso: "es" },
  { code: "+31", country: "Netherlands", iso: "nl" },
  { code: "+46", country: "Sweden", iso: "se" },
  { code: "+886", country: "Taiwan", iso: "tw" },
  { code: "+852", country: "Hong Kong", iso: "hk" },
]

const currencies = [
  { code: "MYR", symbol: "RM" },
  { code: "SGD", symbol: "S$" },
  { code: "INR", symbol: "₹" },
  { code: "GBP", symbol: "£" },
  { code: "USD", symbol: "$" },
  { code: "AUD", symbol: "A$" },
  { code: "NZD", symbol: "NZ$" },
  { code: "CAD", symbol: "C$" },
  { code: "EUR", symbol: "€" },
]

const donationNeeds = [
  { id: 1, title: "Education & Scholarships", description: "Support students pursuing higher education", icon: "📚" },
  { id: 2, title: "Community Healthcare", description: "Medical camps and health awareness programs", icon: "🏥" },
  { id: 3, title: "Cultural Preservation", description: "Heritage and cultural programs", icon: "🎭" },
  { id: 4, title: "Youth Development", description: "Youth leadership and training programs", icon: "👥" },
  { id: 5, title: "Welfare & Relief", description: "Community welfare and emergency relief", icon: "🤝" },
  { id: 6, title: "General Fund", description: "Support all MCC initiatives", icon: "💝" },
]

/* ---------------- COMPONENT ---------------- */

export default function DonatePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    countryCode: "+60",
    currency: "MYR",
    donationAmount: "",
    message: "",
  })

  const [selectedNeeds, setSelectedNeeds] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  const selectedCountry =
    countryCodes.find((c) => c.code === formData.countryCode) || countryCodes[0]

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNeedSelect = (id: number) => {
    setSelectedNeeds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Donation submitted:", { ...formData, selectedNeeds })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-14">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 mb-10 text-center">
        <Link href="/" className="inline-block text-red-700 font-semibold mb-6">
          ← Back to Home
        </Link>

        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 bg-red-700/10 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-red-700" />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Support Our Mission
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your contribution empowers education, healthcare, welfare, and cultural preservation initiatives.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-red-700/20 rounded-2xl p-8 shadow-xl"
        >
          {/* Personal Info */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-red-700 mb-5">Personal Information</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="input"
              />

              {/* PHONE WITH FLAG DROPDOWN */}
              <div className="flex gap-3 md:col-span-2 relative">
                {/* Selector */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="input w-44 flex items-center justify-between gap-2"
                >
                  <span className="flex items-center gap-2">
                    <Image
                      src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                      alt={selectedCountry.country}
                      width={26}
                      height={18}
                      className="rounded-sm"
                    />
                    <span className="font-semibold">{selectedCountry.code}</span>
                  </span>
                  <ChevronDown size={18} />
                </button>

                {/* Dropdown */}
                {open && (
                  <div className="absolute top-14 left-0 w-72 max-h-72 overflow-y-auto bg-white border rounded-xl shadow-xl z-50">
                    {countryCodes.map((c, i) => (
                      <button
                        type="button"
                        key={c.iso + i}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, countryCode: c.code }))
                          setOpen(false)
                        }}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 text-left"
                      >
                        <Image
                          src={`https://flagcdn.com/w40/${c.iso}.png`}
                          alt={c.country}
                          width={28}
                          height={20}
                          className="rounded-sm"
                        />
                        <span className="font-semibold">{c.code}</span>
                        <span className="text-gray-600 text-sm">{c.country}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Mobile input */}
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Mobile Number"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="input flex-1"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="input md:col-span-2"
              />
            </div>
          </div>

          {/* Donation Info */}
          <div className="mb-10 border-t pt-8">
            <h2 className="text-xl font-bold text-red-700 mb-5">Donation Details</h2>

            <div className="flex gap-3 mb-6">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="input w-32"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.symbol}
                  </option>
                ))}
              </select>

              <input
                type="number"
                name="donationAmount"
                placeholder="Donation Amount"
                required
                value={formData.donationAmount}
                onChange={handleInputChange}
                className="input flex-1"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {donationNeeds.map((need) => (
                <button
                  type="button"
                  key={need.id}
                  onClick={() => handleNeedSelect(need.id)}
                  className={`p-4 border-2 rounded-lg text-left transition ${
                    selectedNeeds.includes(need.id)
                      ? "border-red-700 bg-red-50"
                      : "border-gray-300 hover:border-red-400"
                  }`}
                >
                  <h3 className="font-bold">
                    {need.icon} {need.title}
                  </h3>
                  <p className="text-sm text-gray-600">{need.description}</p>
                </button>
              ))}
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Special message (optional)"
              value={formData.message}
              onChange={handleInputChange}
              className="input w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-700 to-red-900 text-white font-bold rounded-xl shadow-lg hover:scale-[1.01] transition"
          >
            ❤️ Donate Now
          </button>

          {submitted && (
            <div className="mt-5 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-semibold">
              ✓ Thank you for your generous donation. We will contact you shortly.
            </div>
          )}
        </form>
      </div>

      {/* Global input helper */}
      <style jsx global>{`
        .input {
          @apply px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-900
          focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/20;
        }
      `}</style>
    </main>
  )
}
