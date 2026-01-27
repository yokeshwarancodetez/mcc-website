import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MediaPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Media Resources</h1>
          <p className="text-lg text-gray-100">Latest news, updates, and multimedia content from MCC</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Press Releases", icon: "📰", href: "/media/press-releases" },
              { title: "Gallery", icon: "🎤", href: "/media/photos" },
              { title: "Articles", icon: "📝", href: "/media/interviews" },
              { title: "Photo Gallery", icon: "📸", href: "/media/photos" },
              { title: "Video Gallery", icon: "🎥", href: "/media/videos" },
              { title: "News Archive", icon: "📚", href: "#" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[#CE0000]"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#003087] mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">Access MCC's comprehensive {item.title.toLowerCase()} resources</p>
                <a href={item.href} className="text-[#CE0000] font-bold hover:text-[#B00000] transition-colors">
                  View →
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
