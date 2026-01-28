import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LeadershipPage() {
  const leaders = [
    { title: "President", name: "Dato' Dr NKS Tharmaseelan", image: "/public/nks-tharmaseelan-president.jpg" },
    { title: "Vice President", name: "Name", image: "/public/mcc-vice-president.jpg" },
    { title: "General Secretary", name: "Name", image: "/public/mcc-general-secretary.jpg" },
    { title: "Treasurer", name: "Name", image: "/public/mcc-treasurer.jpg" },
  ]

  return (
  <main className="flex flex-col w-full">
      <Header />

        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-12 text-center">Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dato' Dr. NKS Tharmaseelan",
                position: "Chief Election Commissioner",
                image: "/mcc-president.jpg",
                color: "from-[#CE0000] to-[#b20000]",
              },
              {
                name: "Mr. Vincent Kurup",
                position: "Deputy Commissioner",
                image: "/mcc-vice-president.jpg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Ms. Priya Sharma",
                position: "Secretary",
                image: "/mcc-general-secretary.jpg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Mr. Rajesh Nair",
                position: "Treasurer",
                image: "/mcc-treasurer.jpg",
                color: "from-[#CE0000] to-[#b20000]",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-full h-40 bg-gradient-to-br ${member.color}`}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold text-sm`}>
                    {member.position}
                  </p>
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
