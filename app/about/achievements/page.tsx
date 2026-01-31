import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      category: "Public Administration",
      icon: "🏛️",
      title: "Contributions to Public Administration",
      description: "Late 1800s – 1950s",
      highlights: [
        "Served extensively in the British colonial civil service",
        "Held roles as senior clerks, court officers, survey department staff, and railway administrators",
        "Highly trusted by British authorities due to strong English education",
        "Provided an essential administrative bridge between colonial officials and local communities",
      ],
      significance:
        "Ceylonese professionalism, discipline, and administrative expertise laid the foundations for efficient governance structures in Malaya, ensuring continuity and institutional stability.",
    },
    {
      id: 2,
      category: "Infrastructure & Transportation",
      icon: "🚂",
      title: "Development of Railways and Infrastructure",
      description: "1890s – 1930s",
      highlights: [
        "Held key positions in the Federated Malay States Railways (FMSR)",
        "Served as inspectors, accountants, technical officers, and traffic supervisors",
        "Contributed to railway expansion supporting tin mining and trade",
        "Connected Kuala Lumpur, Ipoh, Taiping, and George Town",
      ],
      significance:
        "Their expertise ensured administrative efficiency and operational safety, making railways the backbone of Malaya’s colonial economy and national development.",
    },
    {
      id: 3,
      category: "Education",
      icon: "📚",
      title: "Contributions to Education",
      description: "Early 1900s – Present",
      highlights: [
        "Served as teachers, headmasters, and education officers",
        "Championed English-medium education",
        "Raised literacy levels and academic discipline",
        "Produced generations of academics, lecturers, and school leaders",
      ],
      significance:
        "Education became a core cultural value of the Ceylonese community, aligning closely with MCC’s objectives and shaping Malaysia’s professional and intellectual landscape.",
    },
    {
      id: 4,
      category: "Healthcare",
      icon: "⚕️",
      title: "Contributions to Healthcare",
      description: "Early – Mid 1900s",
      highlights: [
        "Served in government hospitals and colonial medical services",
        "Worked as medical assistants, nurses, and hospital administrators",
        "Expanded access to healthcare in Penang, Kuala Lumpur, and Perak",
      ],
      significance:
        "Ceylonese healthcare workers strengthened colonial medical infrastructure and improved access to essential health services in urban centres.",
    },
    {
      id: 5,
      category: "Law & Judiciary",
      icon: "⚖️",
      title: "Legal and Judicial Contributions",
      description: "1900s – 1960s",
      highlights: [
        "Served in courts and legal offices",
        "Worked as lawyers, court registrars, and legal administrators",
        "Maintained high standards of English proficiency and legal accuracy",
      ],
      significance:
        "Their contributions strengthened judicial continuity and reinforced the rule of law during both colonial administration and early independence.",
    },
    {
      id: 6,
      category: "Community Leadership",
      icon: "🤝",
      title: "Community Leadership and Social Organisations",
      description: "1910s – Present",
      highlights: [
        "Formation of the Ceylon Tamil Association of Malaya in 1918",
        "Provided welfare assistance and educational support",
        "Established cultural and social programmes",
        "Created early social security mechanisms",
      ],
      significance:
        "These organisations preserved Ceylonese identity, safeguarded community welfare, and laid the foundation for representation under the Malaysian Ceylonese Congress (MCC).",
    },
    {
      id: 7,
      category: "Post-Independence Contributions",
      icon: "🇲🇾",
      title: "Contributions After Independence",
      description: "Post-1957",
      highlights: [
        "Became Malaysian citizens",
        "Served as senior civil servants",
        "Entered professions such as law, engineering, and education",
      ],
      significance:
        "Ceylonese Malaysians integrated fully into national life and played a key role in building Malaysia’s public service, education sector, and professional workforce.",
    },
    {
      id: 8,
      category: "Culture & Intellect",
      icon: "🌏",
      title: "Cultural and Intellectual Contributions",
      description: "Across Generations",
      highlights: [
        "Maintained high standards of English usage",
        "Promoted multilingual abilities",
        "Encouraged inter-ethnic harmony and multicultural understanding",
      ],
      significance:
        "Their influence shaped Malaysia’s urban professional culture and demonstrated social mobility through education—values later institutionalised by the MCC.",
    },
    {
      id: 9,
      category: "National Leadership",
      icon: "🎓",
      title: "E. E. C. Thuraisingham (1904–1979)",
      description: "Minister of Education, Malaya (1955–1957)",
      highlights: [
        "First Indian to serve as Minister of Education",
        "Advocate of multilingual education",
        "Promoted equal educational opportunities",
        "Helped shape national education policy before independence",
        "Continued public service after independence",
      ],
      significance:
        "Widely regarded as the most prominent Ceylonese national figure in Malaysia, particularly for his lasting impact on education and public service.",
    },
  ]

  return (
    <main className="flex flex-col w-full mb-30">
  
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Achievements & Contributions
          </h1>
          <p className="text-lg sm:text-xl text-gray-100">
            The Enduring Legacy of the Malaysian Ceylonese Congress (MCC)
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl sm:text-4xl">{achievement.icon}</span>
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-red-700">
                    {achievement.category}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {achievement.title}
              </h3>

              <ul className="space-y-2 mb-6">
                {achievement.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-red-700 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-red-50 to-blue-50 border-l-4 border-red-700 p-4 rounded-lg">
                <p className="text-sm font-bold text-red-700 mb-2 uppercase">
                  Significance
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  {achievement.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </main>
  )
}
