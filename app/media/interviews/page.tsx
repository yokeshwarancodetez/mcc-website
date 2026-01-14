import Header from "@/components/header"
import Footer from "@/components/footer"

export default function InterviewsPage() {
  const articles = [
    { title: "MCC's Vision for Malaysia's Future", source: "National Times", date: "2025-01-12" },
    { title: "Community Welfare: Making Real Impact", source: "Social Magazine", date: "2025-01-08" },
    { title: "Youth Leadership and Political Engagement", source: "Youth Tribune", date: "2025-01-01" },
  ]

  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Articles</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#003087]">
                <p className="text-sm text-[#CE0000] font-bold">{article.source}</p>
                <h3 className="text-2xl font-bold text-[#003087] my-2">{article.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                <a href="#" className="text-[#CE0000] font-bold hover:text-[#B00000] transition-colors">
                  Read Full Article →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
