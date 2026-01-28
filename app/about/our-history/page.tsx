export default function FoundersPage() {
  const historyEvents = [
    {
      period: "1900",
      title: "Early Community Organisations",
      description:
        "The first organised Society which looked after the interests of the Ceylonese as a whole was the Selangor Ceylon Tamils Association founded in 1900. The impetus for the growth of such associations was to provide for the social, cultural, religious needs and sporting activities for the Ceylonese. In the major towns where the Ceylon Tamils settled, associations were formed, motivated essentially by the desire to preserve the cultural distinctiveness of their group.",
    },
    {
      period: "1900–1902",
      title: "Office-bearers and Committee Members",
      description:
        "The Office-bearers and Committee members for 1900 — 1902 were: President – Mr. Visuvanathan, Vice-President – Mr. S. Saravanamuthu, Hon. Secretary – Mr. Kanagasabapathy, Hon. Treasurer – Mr. V. Sinnappah, and Committee Members: Mr. C. Thambapillai, Mr. S. T. Pillay, Mr. Seenivasagam, Mr. V. Sanmugam, Mr. Sittampalam, Mr. S. Chellathamby, Mr. S. Thambyrajah, Mr. W. Wijaiaratnam, Mr. V. Eliathamby, Mr. R. Arumugam, and Rev. S. Abraham.",
    },
    {
      period: "1912",
      title: "A New Body With Justifiable Ambition",
      description:
        "The Ceylon Association of Selangor was formed with the intention of bringing together the various communities of Ceylonese residents in Malaya. The Association showed every sign of becoming a very active and useful institution, fulfilling a long-felt want in the community.",
    },
    {
      period: "Post-1912",
      title: "Towards Unity and Representation",
      description:
        "As years went by and the Ceylonese population increased, the need for an organisation to represent all Ceylonese interests was keenly felt. Several discussions were conducted to form an Association to include all Ceylonese i.e. Tamils, Singhalese, Burghers, Moors and Ceylon Malays.",
    },
    {
      period: "1958",
      title: "Birth of the Malayan Ceylonese Congress",
      description:
        "The formation of the Malayan Ceylonese Congress in 1958 is the climax to the public life of Ceylonese in Malaya. Mr. M. W. Navaratnam announced the birth of the Malayan Ceylonese Congress (M.C.C.) on the 24th day of February 1958. MCC was the brainchild of the late Mr. M.W. Navaratnam.",
    },
    {
      period: "1958",
      title: "Purpose of Formation",
      description:
        "The purpose for which M.C.C. was created is to promote and safeguard the Political, Educational, Social and Cultural interests of the Malaysian Ceylonese Community.",
    },
    {
      period: "1966",
      title: "Legal Recognition and Growth",
      description:
        "In 1966, when the new Societies Act was brought into effect, the constitution of the Congress was revised and registration was obtained on the 6th of June 1966. Under the leadership of Dato' Dr. C. Sinnadurai, the organization grew to seventeen Branches. The President was appointed to the Senate and represented the M.C.C. and its situation in the Senate.",
    },
    {
      period: "2009",
      title: "National Political Recognition",
      description:
        "On 27 February 2009 MCC was registered with the Malaysian Elections Commission (SPR). On 20 April 2009, after 50 years, MCC was registered with the Suruhanjaya Pilihan Raya Malaysia and is listed in the SPR website as one of the registered political parties in Malaysia.",
    },
    {
      period: "1958–Present",
      title: "Continuity of Leadership",
      description:
        "To date, six (6) presidents have held office since 1958: Mr. M.W Navaratnam (1958–1969), Senator Tan Sri Dr. C. Sinnadurai (1970–1983), Tan Sri Dato' Seri V. Jeyaratnam (1983–1987), Dato Dr N. Arumugasamy (1988–1995), Datuk Dr. D.M. Thuraiapah (1996–2003), and Dato' Dr NKS Tharmaseelan (2004–Present).",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our History</h1>
          <p className="text-lg text-gray-100">
            From 1900 to Present: The Journey of the Malaysian Ceylonese Congress
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003087] mb-16">
          Founding Timeline
        </h2>

        <div className="relative">

          {/* Center vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-[#CE0000] via-[#003087] to-[#CE0000]" />

          <div className="space-y-20">
            {historyEvents.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 top-2">
                    <div
                      className={`w-5 h-5 rounded-full shadow-lg ${
                        index % 2 === 0 ? "bg-[#CE0000]" : "bg-[#003087]"
                      }`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="w-full md:w-1/2 bg-white border-l-4 border-[#003087] p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all ml-10 md:ml-0">
                    <span className="inline-block mb-2 text-sm font-bold text-[#CE0000]">
                      {event.period}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-[#003087] mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-24 bg-gradient-to-r from-[#003087]/10 to-[#CE0000]/10 p-8 md:p-12 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-6 text-center">
            Our Legacy
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto text-center">
            "Through six decades of unwavering service, MCC continues to be the voice of the Malaysian Ceylonese community, championing unity, and the spirit of Seva that defines our heritage."
          </p>
        </div>
      </div>
    </div>
  )
}
