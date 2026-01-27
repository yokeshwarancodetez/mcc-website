import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DocumentsPage() {
  const documents = [
    {
      title: "MCC Party Constitution",
      description: "The complete constitutional framework governing MCC operations and policies",
      date: "2024",
      icon: "📋",
      file: "/documents/mcc-constitution.pdf",
    },
    {
      title: "Election Manifesto 2024",
      description: "Our comprehensive manifesto outlining vision and policies for national development",
      date: "2024",
      icon: "🗳️",
      file: "/documents/election-manifesto-2024.pdf",
    },
    {
      title: "Annual Report 2023",
      description: "Comprehensive report of MCC activities, achievements, and financial statements",
      date: "2023",
      icon: "📊",
      file: "/documents/annual-report-2023.pdf",
    },
    {
      title: "Policy Documents",
      description: "Official policy papers on education, welfare, and community development",
      date: "2024",
      icon: "📄",
      file: "/documents/policy-documents.pdf",
    },
    {
      title: "Member Handbook",
      description: "Guidelines and information for MCC members and supporters",
      date: "2023",
      icon: "📖",
      file: "/documents/member-handbook.pdf",
    },
    {
      title: "Code of Ethics",
      description: "Ethical guidelines and conduct standards for all party members",
      date: "2024",
      icon: "⚖️",
      file: "/documents/code-of-ethics.pdf",
    },
  ]

  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Official Documents</h1>
          <p className="text-lg text-gray-100">
            Access MCC's official documents, policies, and constitutional framework
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-[#CE0000] flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <h3 className="text-xl font-bold text-[#003087] mb-2 group-hover:underline">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-semibold text-gray-500">{doc.date}</span>
                  <span className="text-sm font-bold text-[#CE0000] group-hover:text-[#003087] transition">
                    Download →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
