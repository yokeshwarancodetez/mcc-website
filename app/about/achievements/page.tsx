import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      category: "Political Leadership",
      icon: "🏛️",
      title: "E. E. C. Thuraisingham (1904–1979)",
      description: "Minister of Education, Malaya (1955–1957) — First Indian to hold this post",
      highlights: [
        "Strong advocate of multilingual education",
        "Pioneered equal educational opportunities",
        "Played key role in shaping early national education policy before independence",
        "Continued contributing to public and educational institutions after independence",
      ],
      significance:
        "Widely regarded as the most prominent Ceylonese Malaysian national figure, especially in education and public service.",
    },
    {
      id: 2,
      category: "Infrastructure & Transportation",
      icon: "🚂",
      title: "Ceylonese Officers in Federated Malay States Railways (FMSR)",
      description: "Late 19th – Early 20th Century",
      highlights: [
        "Railway inspectors and senior supervisory roles",
        "Senior clerks and accounts officers",
        "Traffic supervisors and administrators",
        "Helped establish and manage critical infrastructure systems",
      ],
      significance:
        "Ensured efficiency, safety, and administration of rail services connecting Kuala Lumpur, Ipoh, Taiping, and Penang, establishing one of the most important infrastructure systems in colonial Malaya.",
    },
    {
      id: 3,
      category: "Community Organization",
      icon: "🤝",
      title: "Ceylon Tamil Association of Malaya",
      description: "Established 1918",
      highlights: [
        "Provided comprehensive welfare assistance",
        "Offered educational support and scholarships",
        "Facilitated employment networking",
        "Preserved distinct Ceylonese identity and heritage",
        "Represented Ceylonese interests to colonial government",
      ],
      significance:
        "One of the earliest organised South Asian community associations in Malaya, serving as a model for community organization and advocacy.",
    },
    {
      id: 4,
      category: "Education",
      icon: "📚",
      title: "Ceylonese Educators and Headmasters",
      description: "Early 1900s–1950s",
      highlights: [
        "Served as headmasters of English-medium schools",
        "Held positions as senior teachers and education officers",
        "Raised educational standards in urban schools",
        "Promoted English literacy and discipline",
      ],
      significance:
        "Trained future Malayan civil servants and professionals. Their students became teachers, lawyers, doctors, and government officers, establishing a legacy of educational excellence.",
    },
    {
      id: 5,
      category: "Healthcare",
      icon: "⚕️",
      title: "Ceylonese Medical and Health Officers",
      description: "Colonial Period",
      highlights: [
        "Served as hospital assistants and nurses",
        "Held positions as medical administrators",
        "Worked in hospitals across Kuala Lumpur, Penang, and Perak",
        "Improved access to basic healthcare services",
      ],
      significance:
        "Pioneered healthcare infrastructure and services before independence, establishing foundations for modern medical practice in Malaysia.",
    },
    {
      id: 6,
      category: "Administration & Law",
      icon: "⚖️",
      title: "Ceylonese Legal and Administrative Officers",
      description: "Throughout Colonial Period",
      highlights: [
        "Served in courts and survey departments",
        "Worked in postal and telegraph services",
        "Known for strong command of English",
        "Renowned for administrative accuracy and professional conduct",
      ],
      significance:
        "Helped establish a reliable civil service system later inherited by the Malayan government, laying groundwork for modern administration.",
    },
  ]

  return (
    <main className="flex flex-col w-full mb-30">
   

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Achievements & Contributions</h1>
          <p className="text-lg sm:text-xl text-gray-100">
            The Remarkable Legacy of Ceylonese Contributions to Malaysia
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notable Ceylonese Individuals and Their Achievements in Malaya / Malaysia
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              From education and infrastructure to healthcare and administration, the Ceylonese community has made
              significant contributions to Malaysia's development, playing pivotal roles across multiple sectors and
              establishing enduring legacies that continue to influence the nation today.
            </p>
          </div>

          {/* Category Stats */}
      
        </div>
      </section>

      {/* Achievements Cards */}
      <section className="py-12 sm:py-16 lg:py-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10"
              >
                {/* Content Section */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl sm:text-4xl">{achievement.icon}</span>
                    <div>
                      <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-red-700">
                        {achievement.category}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">{achievement.description}</p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{achievement.title}</h3>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {achievement.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-sm sm:text-base text-gray-700">
                          <span className="text-red-700 font-bold flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Significance */}
                  <div className="bg-gradient-to-r from-red-50 to-blue-50 border-l-4 border-red-700 p-4 rounded-lg">
                    <p className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">Significance:</p>
                    <p className="text-sm sm:text-base text-gray-700">{achievement.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Collective Legacy</h2>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-4">
                The achievements of notable Ceylonese individuals and organizations represent more than personal
                successes—they embody the contributions of an entire community to Malaysia's nation-building journey.
              </p>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                From pioneering infrastructure development to establishing educational excellence and healthcare
                services, the Ceylonese community played crucial roles across multiple sectors, helping shape the modern
                Malaysian nation.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6">
                <p className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">125+</p>
                <p className="text-sm text-blue-200">Years of Community Service</p>
              </div>
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6">
                <p className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">6</p>
                <p className="text-sm text-blue-200">Major Contribution Categories</p>
              </div>
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6">
                <p className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">Countless</p>
                <p className="text-sm text-blue-200">Lives Impacted and Transformed</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

   
    </main>
  )
}
