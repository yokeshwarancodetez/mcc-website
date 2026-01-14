"use client"

export default function Organization() {
  const departments = [
    {
      image: "/election-committee.jpg",
      title: "Central Election Committee",
      description: "Manages electoral processes and campaign coordination",
      members: 8,
    },
    {
      image: "/office-bearers.jpg",
      title: "National Office Bearers",
      description: "Core leadership team driving organizational initiatives",
      members: 5,
    },
    {
      image: "/state-chairmen.jpg",
      title: "State Chairmen",
      description: "Regional leadership ensuring statewide community engagement",
      members: 13,
    },
    {
      image: "/national-executive.jpg",
      title: "National Executive",
      description: "Strategic decision-making and policy implementation",
      members: 25,
    },
    {
      image: "/special-departments.jpg",
      title: "Special Departments",
      description: "Focused initiatives including Youth, Education, and Welfare",
      members: "Multiple",
    },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#003087]/5 to-[#CE0000]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-4">Organization Structure</h2>
          <p className="text-gray-600">Leadership and governance departments</p>
        </div>

        {/* Organization Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => {
            const isRed = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden ${
                  dept.isFeature ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={dept.image || "/placeholder.svg?height=200&width=400&query=organization"}
                    alt={dept.title}
                    className="w-full h-full object-cover"
                  />
                  {dept.isFeature && <div className="absolute inset-0 bg-black/30"></div>}
                </div>

                <div
                  className={`p-6 border-t-4 ${
                    isRed ? "border-[#CE0000] hover:bg-[#CE0000]/5" : "border-[#003087] hover:bg-[#003087]/5"
                  }`}
                >
                  <h3 className="text-lg font-bold text-[#003087] mb-2">{dept.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{dept.description}</p>
                  <div className="text-sm font-semibold text-[#CE0000]">
                    {typeof dept.members === "number" ? `${dept.members} Members` : dept.members}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
