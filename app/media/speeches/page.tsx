import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SpeechesPage() {
  const speeches = [
    { speaker: "Dato' Dr NKS Tharmaseelan", title: "Nation Building and Community Unity", date: "2025-01-10" },
    { speaker: "General Secretary", title: "Education: The Path to Progress", date: "2025-01-05" },
    { speaker: "Youth Leader", title: "Youth Empowerment Initiative", date: "2024-12-28" },
  ]

  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Speeches</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {speeches.map((speech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <p className="text-sm text-[#CE0000] font-bold">{speech.speaker}</p>
                <h3 className="text-xl font-bold text-[#003087] my-2">{speech.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{speech.date}</p>
                <button className="px-4 py-2 bg-[#CE0000] text-white rounded hover:bg-[#B00000] transition-colors text-sm font-bold">
                  Listen/Read
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
