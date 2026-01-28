"use client"

import type React from "react"

import { useState } from "react"

type MembershipType = "associate" | "ordinary"

interface FormData {
  fullName: string
  dateOfBirth: string
  gender: string
  icNumber: string
  icFile: File | null
  mobileNumber: string
  email: string
  homeAddress: string
  hasParty: string
  partyName: string
  branch: string
  membershipType: MembershipType
  pdpaConsent: boolean
  constitutionConsent: boolean
}

export default function MemberRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    icNumber: "",
    icFile: null,
    mobileNumber: "",
    email: "",
    homeAddress: "",
    hasParty: "no",
    partyName: "",
    branch: "",
    membershipType: "associate",
    pdpaConsent: false,
    constitutionConsent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const branches = [
    "Kuala Lumpur",
    "Selangor",
    "Penang",
    "Johor",
    "Kedah",
    "Kelantan",
    "Pahang",
    "Perak",
    "Perlis",
    "Terengganu",
    "Negeri Sembilan",
    "Melaka",
    "Sabah",
    "Sarawak",
    "Labuan",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).files?.[0] || null,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.icNumber.trim()) newErrors.icNumber = "IC Number is required"
    if (!formData.icFile) newErrors.icFile = "IC/MyKad copy is required"
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required"
    if (!formData.homeAddress.trim()) newErrors.homeAddress = "Home address is required"
    if (!formData.branch) newErrors.branch = "Branch selection is required"
    if (formData.hasParty === "yes" && !formData.partyName.trim()) {
      newErrors.partyName = "Political party name is required"
    }
    if (!formData.pdpaConsent) newErrors.pdpaConsent = "PDPA consent is required"
    if (!formData.constitutionConsent) newErrors.constitutionConsent = "Constitution consent is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    console.log("Form submitted:", formData)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        icNumber: "",
        icFile: null,
        mobileNumber: "",
        email: "",
        homeAddress: "",
        hasParty: "no",
        partyName: "",
        branch: "",
        membershipType: "associate",
        pdpaConsent: false,
        constitutionConsent: false,
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#003087] mb-2">Registration Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for joining the Malaysian Ceylonese Congress. We will review your application and contact you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-[#CE0000] text-white rounded-lg font-bold hover:bg-[#B00000] transition-colors"
        >
          Submit Another Registration
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      {/* A. PERSONAL PARTICULARS */}
      <section className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#003087] mb-6 flex items-center">
          <span className="bg-[#CE0000] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
            A
          </span>
          Personal Particulars
        </h2>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              Full Name<span className="text-[#CE0000]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              Date of Birth<span className="text-[#CE0000]">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.dateOfBirth ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              Gender<span className="text-[#CE0000]">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.gender ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          {/* IC Number */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              IC Number (MyKad)<span className="text-[#CE0000]">*</span>
            </label>
            <input
              type="text"
              name="icNumber"
              value={formData.icNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.icNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="XXXXXX-XX-XXXX"
            />
            {errors.icNumber && <p className="text-red-500 text-sm mt-1">{errors.icNumber}</p>}
          </div>

          {/* IC File Upload */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              IC / MyKad Copy (JPG, PNG, PDF)<span className="text-[#CE0000]">*</span>
            </label>
            <input
              type="file"
              name="icFile"
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.pdf"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.icFile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.icFile && <p className="text-red-500 text-sm mt-1">{errors.icFile}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              Mobile Number<span className="text-[#CE0000]">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.mobileNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="012-3456789"
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CE0000]"
              placeholder="your@email.com"
            />
          </div>

          {/* Home Address */}
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              Home Permanent Address<span className="text-[#CE0000]">*</span>
            </label>
            <textarea
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleChange}
              rows={3}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                errors.homeAddress ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your home address"
            />
            {errors.homeAddress && <p className="text-red-500 text-sm mt-1">{errors.homeAddress}</p>}
          </div>
        </div>
      </section>

      {/* C. BRANCH SELECTION - Moved above Membership Type */}
      <section className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#003087] mb-6 flex items-center">
          <span className="bg-[#CE0000] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
            C
          </span>
          Branch Selection
        </h2>

        <div>
          <label className="block text-sm font-bold text-[#003087] mb-2">
            Select Branch<span className="text-[#CE0000]">*</span>
          </label>
          <p className="text-sm text-gray-600 mb-3">Please select the branch you wish to join</p>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
              errors.branch ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
        </div>
      </section>

      {/* B. POLITICAL AFFILIATION */}
      <section className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#003087] mb-6 flex items-center">
          <span className="bg-[#CE0000] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
            B
          </span>
          Political Affiliation
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-[#003087] mb-2">
              Are you currently affiliated with a political party?<span className="text-[#CE0000]">*</span>
            </label>
            <select
              name="hasParty"
              value={formData.hasParty}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CE0000]"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {formData.hasParty === "yes" && (
            <div>
              <label className="block text-sm font-bold text-[#003087] mb-2">
                Please Specify Political Party Name<span className="text-[#CE0000]">*</span>
              </label>
              <input
                type="text"
                name="partyName"
                value={formData.partyName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#CE0000] ${
                  errors.partyName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter political party name"
              />
              {errors.partyName && <p className="text-red-500 text-sm mt-1">{errors.partyName}</p>}
            </div>
          )}
        </div>
      </section>

      {/* E. MEMBERSHIP DETAILS */}
      <section className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#003087] mb-6 flex items-center">
          <span className="bg-[#CE0000] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
            E
          </span>
          Membership Details
        </h2>

        <div>
          <label className="block text-sm font-bold text-[#003087] mb-4">
            Membership Type<span className="text-[#CE0000]">*</span>
          </label>
          <div className="space-y-3">
  <div
    className="border border-gray-300 rounded-lg p-4 hover:border-[#CE0000] cursor-pointer"
    onClick={() => setFormData((prev) => ({ ...prev, membershipType: "associate" }))}
  >
    <div className="flex items-start">
      <input
        type="radio"
        name="membershipType"
        value="associate"
        checked={formData.membershipType === "associate"}
        onChange={handleChange}
        className="mt-1 mr-3"
      />
      <div className="flex-1">
        <label className="font-bold text-[#003087] cursor-pointer">Associate Member</label>
        <p className="text-sm text-gray-600">Fee: RM 50 | Duration: 5 Years (Fixed)</p>
      </div>
    </div>
  </div>

  <div
    className="border border-gray-300 rounded-lg p-4 hover:border-[#CE0000] cursor-pointer"
    onClick={() => setFormData((prev) => ({ ...prev, membershipType: "ordinary" }))}
  >
    <div className="flex items-start">
      <input
        type="radio"
        name="membershipType"
        value="ordinary"
        checked={formData.membershipType === "ordinary"}
        onChange={handleChange}
        className="mt-1 mr-3"
      />
      <div className="flex-1">
        <label className="font-bold text-[#003087] cursor-pointer">Ordinary Member</label>
        <p className="text-sm text-gray-600">Fee: RM 10 per year</p>
      </div>
    </div>
  </div>

  <div
    className="border border-gray-300 rounded-lg p-4 hover:border-[#CE0000] cursor-pointer"
    onClick={() => setFormData((prev) => ({ ...prev, membershipType: "lifetime" }))}
  >
    <div className="flex items-start">
      <input
        type="radio"
        name="membershipType"
        value="lifetime"
        checked={formData.membershipType === "lifetime"}
        onChange={handleChange}
        className="mt-1 mr-3"
      />
      <div className="flex-1">
        <label className="font-bold text-[#003087] cursor-pointer">Lifetime Member</label>
        <p className="text-sm text-gray-600">Fee: RM 100 | Duration: Lifetime (Fixed)</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* D. DECLARATION & MEMBERSHIP DUES */}
      <section className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#003087] mb-6 flex items-center">
          <span className="bg-[#CE0000] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
            D
          </span>
          Declaration Statement
        </h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            I hereby declare that the information provided in this registration form is true and correct. I understand
            that providing false information may result in the rejection of my application or termination of membership.
            I commit to abiding by all rules and regulations of the Malaysian Ceylonese Congress.
          </p>
        </div>
      </section>

      {/* F. DATA PROTECTION & CONSENT */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#003087] mb-6 flex items-center">
          <span className="bg-[#CE0000] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
            F
          </span>
          Data Protection & Consent
        </h2>

        <div className="space-y-4">
          {/* PDPA Consent */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="pdpaConsent"
              name="pdpaConsent"
              checked={formData.pdpaConsent}
              onChange={handleChange}
              className="mt-1 mr-3 w-4 h-4 text-[#CE0000] rounded"
            />
            <label htmlFor="pdpaConsent" className="text-sm text-gray-700">
              <span className="text-[#CE0000] font-bold">*</span> I consent to the collection and processing of my
              personal data as described above in accordance with the Personal Data Protection Act (PDPA) 2010.
            </label>
          </div>
          {errors.pdpaConsent && <p className="text-red-500 text-sm ml-7">{errors.pdpaConsent}</p>}

          {/* Constitution Consent */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="constitutionConsent"
              name="constitutionConsent"
              checked={formData.constitutionConsent}
              onChange={handleChange}
              className="mt-1 mr-3 w-4 h-4 text-[#CE0000] rounded"
            />
            <label htmlFor="constitutionConsent" className="text-sm text-gray-700">
              <span className="text-[#CE0000] font-bold">*</span> I agree to abide by the Constitution and rules of the
              Malaysian Ceylonese Congress.
            </label>
          </div>
          {errors.constitutionConsent && <p className="text-red-500 text-sm ml-7">{errors.constitutionConsent}</p>}
        </div>
      </section>

      {/* Submit Button */}
     <div className="flex gap-4 justify-end">
  <button
    type="reset"
    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-400 transition-colors text-center"
  >
    Clear Form
  </button>
  <button
    type="submit"
    className="px-6 py-3 bg-[#CE0000] text-white rounded-lg font-bold hover:bg-[#B00000] transition-colors text-center"
  >
    Submit Registration
  </button>
</div>

    </form>
  )
}
