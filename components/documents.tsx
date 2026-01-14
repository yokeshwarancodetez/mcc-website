import { FileText, Download } from "lucide-react"

export default function Documents() {
  const documents = [
    { title: "National Executive Resolution", category: "Resolution" },
    { title: "Budget", category: "Financial" },
    { title: "Manifesto", category: "Political" },
    { title: "Election Format", category: "Election" },
    { title: "Election Handbook", category: "Election" },
    { title: "Party Constitution", category: "Legal" },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#003087]/5 to-[#CE0000]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-[#003087] mb-4">Official Documents</h2>
          <p className="text-gray-600">Access important party documents and resources</p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-[#CE0000] hover:translate-y-[-4px]"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="text-[#003087]" size={28} />
                <span className="text-xs font-semibold text-[#CE0000] bg-[#CE0000]/10 px-3 py-1 rounded-full">
                  {doc.category}
                </span>
              </div>
              <h4 className="font-medium text-[#003087] mb-4">{doc.title}</h4>
              <button className="flex items-center gap-2 text-[#003087] hover:text-[#CE0000] font-semibold text-sm transition-colors">
                <Download size={16} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
