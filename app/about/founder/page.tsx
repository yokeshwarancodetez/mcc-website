'use client'

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
Role in MCC: He was the driving force behind the formation of the Malayan Ceylonese Congress (now Malaysian Ceylonese Congress) in 1958.
Establishment: In January 1958, under his leadership, members of the Selangor Ceylonese Association (founded in 1900) met and decided to transform the association into a political party to represent the interests of Malaysians of Sri Lankan descent.
Leadership Duration: He led the organization during its crucial, early developmental years, from its inception in 1958 until 1969, at which point he was succeeded by Senator Tan Sri Dato' Sri Dr. C. Sinnadurai.
`,
  },
  {
    id: 2,
    name: "Senator Tan Sri Dato’ Sri Dr. C. Sinnadurai",
    title: "President – Malaysian Ceylonese Congress",
    years: "1970 – 1983",
    image: "/2 founder image.jpeg",
    description: `C. Sinnadurai was Senator Tan Sri Dato' Sri Dr. C. Sinnadurai, the second president of the Malaysian Ceylonese Congress (MCC) from 1970 to 1983, a political party representing the interests of the Ceylonese community in Malaysia. He was not a cricket player for Sri Lanka or any other international team.
President: Dr. Sinnadurai served as the second president of the Malaysian Ceylonese Congress (MCC) for 13 years, succeeding Mr. M.W. Navaratnam.
Political Engagement: The MCC was established as a political party in 1958 (initially as the Malayan Ceylonese Congress) to promote the political, educational, social, and cultural aspects of the Malaysian Ceylonese community and consistently supported the ruling Barisan Nasional coalition and the government.
`,
  },
  {
    id: 3,
    name: "Tan Sri Dato’ Seri V. Jeyaratnam",
    title: "President – Malaysian Ceylonese Congress",
    years: "1983 – 1987",
    image: "/founder-3.png",
    description: `Tan Sri Dato' Seri V. Jeyaratnam (PSM, SPM, STP, JP) served as the third President of the Malaysian Ceylonese Congress (MCC) from 1983 to 1987. 
Role: President of the Malaysian Ceylonese Congress (MCC).
Term: 1983–1987.
Recognition: In June 1983, he was conferred the title of Darjah Panglima Setia Mahkota (P.S.M.), which carries the title "Tan Sri", by the Yang di-Pertuan Agong.
`,
  },
  {
    id: 4,
    name: "Dato’ Dr. N. Arumugasamy",
    title: "President – Malaysian Ceylonese Congress",
    years: "1988 – 1995",
    image: "/4 founder image.jpeg",
    description: `Dato' Dr. N. Arumugasamy was the fourth President of the Malaysian Ceylonese Congress (MCC), serving from 1988 to 1995. 
The Malaysian Ceylonese Congress (MCC) is a political party in Malaysia that represents the interests of the Malaysian Ceylonese (Sri Lankan Tamil) community. 
Other key information about his tenure and the organization:
He succeeded Tan Sri Dato' Seri V. Jeyaratnam, who served from 1983 to 1988.
He was followed by Dato' Seri Dr. D.M. Thuraiappah, who was President from 1996 to 2003.
During his time as President, he held the titles of Dato' Dr., DSIJ, and JSM. 
`,
  },
  {
    id: 5,
    name: "Prof. Datuk Dr. D. M. Thuraiappah",
    title: "President – Malaysian Ceylonese Congress",
    years: "1996 – 2003",
    image: "/5 founder image.jpeg",
    description: `Prof. Datuk Dr. Daniel Mahendran Thuraiappah was a distinguished leader and respected figure known for his visionary leadership, commitment to community, and dedicated service to education and public life.
Renowned academic and professional with a career marked by leadership in organizational development and mentoring.
Recognized for contributions that bridged education, public service, and community engagement.
Remembered as a visionary leader who championed ethical standards and strategic thinking. His work continues to inspire peers across civic, educational, and political communities.
`,
  },
  {
    id: 6,
    name: "NKS Tharmaseelan",
    title: "President – Malaysian Ceylonese Congress",
    years: "2004 – 2017",
    image: "/founder-7.jpeg",
    description: `NKS Tharmaseelan was the sixth President of the Malaysian Ceylonese Congress (MCC), serving from 2004 to 2017. He was also a prominent figure in the medical field as a professor and doctor. 
His tenure and affiliation with the MCC, a political party established to promote and preserve the political, educational, social, and cultural aspects of the Malaysian Ceylonese community, are widely documented. He was succeeded as President by Mahendranathan Thuraiappah in 2018
`,
  },
  {
    id: 7,
    name: "Mahendranathan Thuraiappah",
    title: "President – Malaysian Ceylonese Congress",
    years: "2018 – Present",
    image: "/founder-1.jpeg",
    description: `Mahendranathan Thuraiappah is the President of the Malaysian Ceylonese Congress (MCC). He assumed the leadership role in 2018. He has led the party through multiple terms, recently chairing the 23rd Biennial Central General Assembly in March 2025 and the Annual General Meeting in late 2025.
Professional Background: Outside of politics, he is a Tax Consultant and a retired senior officer from the Inland Revenue Board of Malaysia, where he served for over 30 years.
Political Advocacy: Under his presidency, the MCC has focused on reactivating regional branches and advocating for the Malaysian Ceylonese community's representation in the mainstream political landscape. In June 2025, he met with the Director-General of the Registry of Societies (ROS) to discuss party constitutional amendments and financial statement submissions. 
.`,
  },
]

export default function FoundersPage() {
  return (
    <section className="w-full bg-white">

      {/* Header */}
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

      {/* Founders List */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">

        {founders.map((founder) => (
          <div
            key={founder.id}
            className="flex flex-col lg:flex-row gap-12 items-start"
          >

            {/* LEFT — IMAGE (Smaller, fixed width) */}
            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="rounded-xl overflow-hidden shadow-xl bg-gray-100">
                <div className="relative w-full aspect-[3/4]">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="bg-gray-900 py-4 text-center">
                  <h4 className="text-white text-base font-bold">
                    {founder.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* RIGHT — CONTENT (Equal width on desktop) */}
            <div className="flex-1 flex flex-col justify-start">

              <h3 className="text-3xl font-bold text-red-700 mb-2">
                {founder.title.split("–").map((part, idx) => (
                  <span key={idx} className="block">
                    {part.trim()}
                  </span>
                ))}
              </h3>

              <p className="text-blue-900 font-semibold text-xl mb-4">
                {founder.years}
              </p>

              <div className="bg-blue-50 px-8 py-6 rounded h-112">
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
