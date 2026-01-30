"use client"

const cards = [
  {
    title: "Message from the President",
    content: `"On occasions one is asked 'Why the M.C.C.? It is widely known that majority of our people do not belong to any political group and that we lack a single strong organisation. Our past weaknesses are now beginning to tell on us and our children. Hitherto, we had been fortunate to obtain places in the various institutions of Higher learning. To many parents this has now become a real nightmare and they are faced with other problems too! It is the community as a whole that is to be blamed for the situation we are in today."`,
    color: "red",
    name: "Aravind Kumar",
    role: "Scholar 2015 | Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "On the Need for Unity and Organisation",
    content: `"You know these are very hard times for us. They are times that require the closest co-operation. They also require the dedication of every one of us to our common National interest."

"The Governments recognition of the M.C.C. has already re-awakened our faith and hope."`,
    color: "blue",
    name: "Divya Sethu",
    role: "Youth Leader | Community Activist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "On Responsibility and Participation",
    content: `"The M.C.C. could look into your problems and prospects, but to be effective there should be strong basic support. This is why the Malaysian Ceylonese Congress has set up Divisional branches all over the country and we would once again appeal to our community to enroll themselves as members for herein lies our strength and solidarity. We need your active participation at all levels."`,
    color: "red",
    name: "Rajith & Revathy",
    role: "Parents & Community Members",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    title: "On the Future of the Community",
    content: `"We have the capability to overcome the hard realities of our times, if only we have the will and if our past mistrust and recrimination give way to mutual understanding, respect for each other, and a meaningful co-operation and operate beyond the narrow circle of self-interest."

"Much remains to be done. It is through our enterprise and diligence only we can hope to provide our children with wider opportunities for education and economic security."`,
    color: "blue",
    name: "Pradeep Singh",
    role: "Program Director | Social Worker",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    title: "On National Commitment",
    content: `"Our beloved Prime Minister has assured us the Government will continue to safeguard the rights of the minorities, hence our choice is clear and our responsibility compelling. We have a pledge to honour."

"Let us join hands and demonstrate to future generations that our vision was equal to our children."`,
    color: "red",
    name: "MCC Leadership",
    role: "Malaysian Ceylonese Congress",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
]

export default function PresidentsMessages() {
  const [firstCard, ...otherCards] = cards

  return (
    <section className="w-full bg-white">

      {/* ================= Header ================= */}
      <div className="w-full bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            President Messages
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-100 max-w-3xl">
            Reflections, guidance, and vision from MCC leadership through the years
          </p>
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="bg-gradient-to-b from-[#f4f6fb] to-white py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {/* ===== FULL WIDTH: Message from the President ===== */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#CE0000] to-[#a00000]" />

            <div className="p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {firstCard.title}
                </h3>
                <p className="whitespace-pre-line text-gray-700 leading-relaxed text-base md:text-lg">
                  {firstCard.content}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <img
                  src={firstCard.image}
                  alt={firstCard.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {firstCard.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {firstCard.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TWO COLUMN GRID: Remaining Cards ===== */}
          <div className="grid gap-12 md:grid-cols-2">
            {otherCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div
                  className={`h-2 ${
                    card.color === "red"
                      ? "bg-gradient-to-r from-[#CE0000] to-[#a00000]"
                      : "bg-gradient-to-r from-[#003087] to-[#001f5f]"
                  }`}
                />

                <div className="p-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {card.title}
                    </h3>
                    <p className="whitespace-pre-line text-gray-700 leading-relaxed text-base md:text-lg">
                      {card.content}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {card.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {card.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
