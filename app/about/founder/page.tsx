"use client"

interface Founder {
  id: number
  name: string
  title: string
  description: string
  years: string
  image: string
}

const founders: Founder[] = [
  {
    id: 1,
    name: "M. W. Navaratnam",
    title: "Founder & President – Malaysian Ceylonese Congress",
    years: "1958 – 1969",
    image: "/founder-image.png",
    description: `M.W. Navaratnam was a key figure in the Malaysian Ceylonese community, serving as the president of the Malayan/Malaysian Ceylonese Congress (MCC) from 1958 to 1969. 
Role in MCC: He was the driving force behind the formation of the Malayan Ceylonese Congress in 1958.
Establishment: Under his leadership, MCC was transformed into a political party representing Malaysians of Sri Lankan descent.
Leadership Duration: He led the organization during its crucial formative years.`,
  },
  {
    id: 2,
    name: "Senator Tan Sri Dato’ Sri Dr. C. Sinnadurai",
    title: "President – Malaysian Ceylonese Congress",
    years: "1970 – 1983",
    image: "/2 founder image.jpeg",
    description: `Dr. Sinnadurai served as the second president of MCC. During his presidency, MCC strengthened its political engagement and national representation, consistently supporting Barisan Nasional.`,
  },
  {
    id: 3,
    name: "Tan Sri Dato’ Seri V. Jeyaratnam",
    title: "President – Malaysian Ceylonese Congress",
    years: "1983 – 1987",
    image: "/founder-3.png",
    description: `Tan Sri Dato' Seri V. Jeyaratnam served as the third President of MCC. He was conferred the title "Tan Sri" in 1983 by the Yang di-Pertuan Agong.`,
  },
  {
    id: 4,
    name: "Dato’ Dr. N. Arumugasamy",
    title: "President – Malaysian Ceylonese Congress",
    years: "1988 – 1995",
    image: "/4 founder image.jpeg",
    description: `Dato' Dr. N. Arumugasamy served as MCC’s fourth President, continuing the mission of political representation and community development.`,
  },
  {
    id: 5,
    name: "Prof. Datuk Dr. D. M. Thuraiappah",
    title: "President – Malaysian Ceylonese Congress",
    years: "1996 – 2003",
    image: "/5 founder image.jpeg",
    description: `Prof. Datuk Dr. Thuraiappah was a respected academic and leader, remembered for his visionary leadership and ethical standards.`,
  },
  {
    id: 6,
    name: "NKS Tharmaseelan",
    title: "President – Malaysian Ceylonese Congress",
    years: "2004 – 2017",
    image: "/founder-7.jpeg",
    description: `NKS Tharmaseelan served MCC into the modern era, focusing on unity, education, and national engagement.`,
  },
  {
    id: 7,
    name: "Mahendranathan Thuraiappah",
    title: "President – Malaysian Ceylonese Congress",
    years: "2018 – Present",
    image: "/Mahendranathan Thuraiappah.jpg",
    description: `Mahendranathan Thuraiappah is the current President of MCC. He has focused on revitalizing regional branches, political advocacy, and organizational reforms.`,
  },
]

export default function FoundersPage() {
  return (
    <section className="w-full bg-white">

      {/* ===== Header ===== */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Our Founders & Presidents
          </h1>
          <p className="text-base md:text-xl text-gray-100">
            Visionary leaders who shaped MCC since 1958
          </p>
        </div>
      </div>

      {/* ===== Vertical Founders List ===== */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">

        {founders.map((founder, index) => (
          <div
            key={founder.id}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >

            {/* Image */}
            <div
              className={`flex ${
                index % 2 === 1 ? "lg:order-2 justify-start" : "justify-start"
              }`}
            >
              <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-gray-100">
                <div className="relative w-full aspect-[3/4]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="bg-gray-900 py-4 text-center">
                  <h4 className="text-white text-xl font-bold">
                    {founder.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">

              <h3 className="text-3xl font-bold text-red-700 mb-2">
                {founder.title.split("–").map((part, index) => (
                  <span key={index} className="block">
                    {part.trim()}
                  </span>
                ))}
              </h3>

              <p className="text-blue-900 font-semibold text-xl mb-4">
                {founder.years}
              </p>

              <div className="bg-blue-50 px-8 py-6 rounded">
                <p className="text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {founder.description}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
