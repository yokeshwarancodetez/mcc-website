import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ProfessionalWingPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/morcha/professional" className="hover:opacity-90 transition-opacity">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Professional Wing</h1>
          </Link>
          <p className="text-lg text-gray-100">Networking and professional development for career-oriented members</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Corporate Leaders", image: "/corporate-leaders.jpg", slug: "corporate-leaders" },
              { title: "Technology & Innovation", image: "/technology-innovation.jpg", slug: "technology-innovation" },
              {
                title: "Healthcare Professionals",
                image: "/healthcare-professionals.jpg",
                slug: "healthcare-professionals",
              },
              { title: "Legal Experts", image: "/legal-experts.jpg", slug: "legal-experts" },
              { title: "Entrepreneurs", image: "/entrepreneurs.jpg", slug: "entrepreneurs" },
              { title: "Academics", image: "/academics.jpg", slug: "academics" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-40 bg-gray-200">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Link href={`/morcha/professional/${category.slug}`}>
                    <h3 className="text-xl font-bold text-[#003087] mb-2 hover:text-[#B00000] transition-colors cursor-pointer">
                      {category.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    Connect with professionals in the {category.title.toLowerCase()} sector and contribute your
                    expertise to MCC initiatives.
                  </p>
                  <Link
                    href={`/morcha/professional/${category.slug}`}
                    className="text-[#CE0000] font-bold hover:text-[#B00000] transition-colors"
                  >
                    Know More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
