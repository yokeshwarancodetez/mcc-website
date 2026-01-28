'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"

/* ---------------- DATA ---------------- */

const president = {
  position: "President",
  name: "Dato' Dr. NKS Tharmaseelan",
  image: "/cwc-president.png",
}

const officeBearers = [
  { position: "Deputy President", name: "Dr. S. Sundralingam", image: "/deputy-president.jpg" },
  { position: "Secretary General", name: "G. Rasamalar", image: "/secretary.jpg" },
  { position: "Treasurer General", name: "Shamini Kandasamy", image: "/treasurer.jpg" },
]

const viceChairmen = [
  { name: "S. Kamalanathan", image: "/vice1.jpg" },
  { name: "S. Mahalingam", image: "/vice2.htm" },
  { name: "Ericc Ganapathy", image: "/vice3.jpg" },
  { name: "Rasamani Kandiah", image: "/vice4.jpg" },
]

const councilMembers = [
  { name: "Rajeswari Kandiah", image: "/councilmember3.htm" },
  { name: "Sivamalar Kandiah", image: "/council1.jpg" },
  { name: "Saraswathy Rajagopal", image: "/councilmember.jpg" },
  { name: "Mahendranathan T", image: "/council-member2.jpg" },
]

/* ---------------- PAGE ---------------- */

export default function CWCPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Central Working Committee (CWC)
          </h1>
          <p className="text-lg text-gray-100">
            Leadership & Governance of Malaysian Ceylonese Congress
          </p>
        </div>
      </section>

      {/* ================= PRESIDENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-10">President</h2>

          <div className="inline-block bg-gradient-to-br from-red-700 to-blue-900 p-1 rounded-[2.5rem] shadow-2xl">
            <div className="bg-white rounded-[2.3rem] p-12">
              <div className="flex flex-col items-center">

                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-red-700 shadow-xl mb-6">
                  <img src={president.image} alt={president.name} className="w-full h-full object-cover" />
                </div>

                <p className="text-sm uppercase tracking-widest font-bold text-red-700">
                  {president.position}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  {president.name}
                </h3>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFICE BEARERS ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">Office Bearers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeBearers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">

                <div className="h-32 bg-gradient-to-r from-red-700 to-blue-900" />

                <div className="relative -mt-16 flex justify-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <p className="text-xs uppercase tracking-widest font-bold text-red-700">
                    {member.position}
                  </p>
                  <p className="text-lg font-bold text-gray-900 mt-2">
                    {member.name}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VICE CHAIRMEN (NEW GLASS STYLE) ================= */}
    
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-12">Vice Chairmen</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {viceChairmen.map((member, idx) => (
        <div
          key={idx}
          className="flex items-center rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border-[4px] border-gradient-to-r from-[#003087] to-[#CE0000]"
          style={{
            background: "linear-gradient(to right, #003087, #CE0000)", // Outer gradient
          }}
        >
          <div className="flex items-center w-full bg-white p-6 rounded-[calc(2xl-4px)]">
            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#003087] shadow-xl">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>

            <div className="ml-6">
              <p className="text-xs uppercase tracking-widest font-bold text-[#003087]">
                Vice Chairman
              </p>
              <p className="text-xl font-bold text-gray-900 mt-1">
                {member.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* ================= COUNCIL MEMBERS (NEW HORIZONTAL CARDS) ================= */}
   <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-12">Council Members</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {councilMembers.map((member, idx) => (
        <div
          key={idx}
          className="flex items-center rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border-[4px] border-gradient-to-r from-[#003087] to-[#CE0000]"
          style={{
            background: "linear-gradient(to right, #003087, #CE0000)", // Outer gradient
          }}
        >
          <div className="flex items-center w-full bg-white p-6 rounded-[calc(2xl-4px)]">
            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#CE0000] shadow-xl">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>

            <div className="ml-6">
              <p className="text-xs uppercase tracking-widest font-bold text-[#CE0000]">
                Council Member
              </p>
              <p className="text-xl font-bold text-gray-900 mt-1">
                {member.name}
              </p>
            </div>
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
