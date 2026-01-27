import { Newspaper, Zap, Users2 } from "lucide-react"

export default function Resources() {
  const resourceCategories = [
    {
      icon: Newspaper,
      title: "Media Resources",
      items: ["Press Releases", "Gallery", "Events", "Make Donation"],
      color: "from-[#CE0000] to-[#B00000]",
      link: "/media",
    },
    {
      icon: Zap,
      title: "Our Wings",
      items: ["Youth Morcha", "Women's Wing", "Professional Wing", "Cultural Wing"],
      color: "from-[#003087] to-[#001f52]",
      link: "/morcha",
    },
    {
      icon: Users2,
      title: "Organization",
      items: ["Branches", "Central Working Committee", "Central Election Committee", "Media", "Speeches"],
      color: "from-[#CE0000] to-[#A00000]",
      link: "/organisation",
    },
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-4">Resources & Information</h2>
          <p className="text-gray-600">Comprehensive access to party resources and parliamentary information</p>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <Icon size={32} className="mb-2" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Items */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-[#CE0000] transition-colors font-medium"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
