import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LeadershipPage() {
  return (
    <main className="flex flex-col w-full">

      {/* ================= Hero + Breadcrumb ================= */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Leadership
          </h1>
          <p className="mt-2 text-gray-100 max-w-2xl">
            Meet the dedicated leaders guiding the Malaysian Ceylonese Congress toward progress, unity, and service.
          </p>
        </div>
      </section>

      {/* ================= Leadership Section ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-[#003087] mb-12 text-center">
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dato' Dr. NKS Tharmaseelan",
                position: "Chief Election Commissioner",
                image: "/founder-1.jpeg",
                color: "from-[#CE0000] to-[#b20000]",
              },
              {
                name: "Mr. Vincent Kurup",
                position: "Deputy Commissioner",
                image: "/founder-3.jpeg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Ms. Priya Sharma",
                position: "Secretary",
                image: "/founder-6.jpeg",
                color: "from-[#003087] to-[#001f52]",
              },
              {
                name: "Mr. Rajesh Nair",
                position: "Treasurer",
                image: "/founder-4.jpeg",
                color: "from-[#CE0000] to-[#b20000]",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* IMAGE BOX */}
                <div className="w-full h-56 bg-gray-100 flex items-center justify-center p-3">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {member.name}
                  </h3>
                  <p
                    className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold text-sm mt-1`}
                  >
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
