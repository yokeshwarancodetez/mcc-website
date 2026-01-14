"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BranchSidebar from "@/components/branch-sidebar"
import Link from "next/link"

const branchContent: Record<string, Record<string, { title: string; items: any[] }>> = {
  selangor: {
    committees: {
      title: "State Committees",
      items: [
        { name: "Selangor State Committee", members: 25, established: "1985" },
        { name: "District Committees (15)", members: 120, established: "Various" },
      ],
    },
    pressreleases: {
      title: "Press Releases",
      items: [
        {
          date: "2025-01-15",
          title: "MCC Selangor Inaugurates New Community Center",
          description: "A grand inauguration event was held...",
          link: "https://example.com/selangor-community",
          type: "link",
        },
        {
          date: "2025-01-10",
          title: "Selangor Branch Hosts Educational Scholarship Program",
          description: "Over 500 students benefited from the annual scholarship...",
          link: "https://youtube.com/embed/example1",
          type: "video",
        },
        {
          date: "2025-01-05",
          title: "Community Development Initiative Launched",
          description: "Selangor branch launched new community support program...",
          link: "https://example.com/community-initiative",
          type: "link",
        },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        {
          speaker: "State Chairman",
          event: "Annual State Conference 2024",
          date: "2024-12-15",
          link: "#",
          description: "Key address on community development",
        },
        {
          speaker: "Treasurer",
          event: "Fundraising Event",
          date: "2024-12-10",
          link: "#",
          description: "Financial initiatives for 2025",
        },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "MCC Selangor's Role in Community Development",
          author: "Sarah Lee",
          publication: "The Star",
          date: "2024-12-20",
          excerpt:
            "In an exclusive interview, the state chairman discusses the party's commitment to grassroots development and community empowerment initiatives...",
          image: "/mcc-selangor-interview.jpg",
        },
        {
          title: "Interview with State Leadership",
          author: "Raj Kumar",
          publication: "Local News",
          date: "2024-12-15",
          excerpt: "Our leadership shares vision for inclusive growth and sustainable development in the state...",
          image: "/leadership-interview.jpg",
        },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [
        { image: "/selangor-community-events.jpg", caption: "Community Events 2024", date: "2024-12-10" },
        { image: "/scholarship-distribution-ceremony.jpg", caption: "Scholarship Distribution", date: "2024-11-20" },
        { image: "/selangor-heritage-festival.jpg", caption: "Heritage Festival", date: "2024-10-15" },
        { image: "/youth-engagement-selangor.jpg", caption: "Youth Engagement Program", date: "2024-09-05" },
        { image: "/selangor-cultural-event.jpg", caption: "Cultural Event Celebration", date: "2024-08-20" },
        { image: "/selangor-community-service.jpg", caption: "Community Service Drive", date: "2024-07-30" },
      ],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        {
          title: "Heritage Festival Highlights",
          duration: "5:30",
          link: "#",
          thumbnail: "/heritage-festival-video.jpg",
        },
        { title: "Community Outreach Program", duration: "8:15", link: "#", thumbnail: "/community-outreach.png" },
        { title: "Educational Initiative", duration: "6:45", link: "#", thumbnail: "/educational-initiative.jpg" },
      ],
    },
    documents: {
      title: "Documents",
      items: [
        { name: "Selangor Branch Constitution", year: 2023, fileSize: "2.5 MB", link: "#", fileType: "PDF" },
        { name: "Annual Report 2024", year: 2024, fileSize: "3.8 MB", link: "#", fileType: "PDF" },
        { name: "Financial Statement 2024", year: 2024, fileSize: "1.2 MB", link: "#", fileType: "PDF" },
      ],
    },
    leadership: {
      title: "Leadership",
      items: [
        {
          name: "Ramesh Kumar",
          position: "State Chairman",
          contact: "ramesh@mcc.org",
          image: "/mcc-president.jpg",
          bio: "Experienced leader with 20+ years in community service and political engagement. Dedicated to grassroots development and youth empowerment programs.",
          experience: "20+ years",
          specialty: "Community Development",
        },
        {
          name: "Priya Sethu",
          position: "State Secretary",
          contact: "priya@mcc.org",
          image: "/mcc-general-secretary.jpg",
          bio: "Passionate administrator focused on organizational excellence and transparent governance. Strong advocate for member engagement and institutional growth.",
          experience: "15+ years",
          specialty: "Organization Management",
        },
        {
          name: "Arjun Nair",
          position: "State Treasurer",
          contact: "arjun@mcc.org",
          image: "/mcc-treasurer.jpg",
          bio: "Financial expert with proven track record in sustainable fiscal management. Committed to ensuring transparent and accountable use of party resources.",
          experience: "18+ years",
          specialty: "Financial Management",
        },
      ],
    },
    members: {
      title: "Branch Members",
      items: [
        {
          name: "Ramesh Kumar",
          title: "President",
          qualification: "B.A., M.A.",
          expertise: "Political Science",
          image: "/mcc-president.jpg",
        },
        {
          name: "Priya Sethu",
          title: "Secretary",
          qualification: "B.Com., M.B.A.",
          expertise: "Administration",
          image: "/mcc-general-secretary.jpg",
        },
        {
          name: "Arjun Nair",
          title: "Treasurer",
          qualification: "B.Sc., C.A.",
          expertise: "Finance",
          image: "/mcc-treasurer.jpg",
        },
        {
          name: "Rajesh Kumar",
          title: "Joint Secretary",
          qualification: "B.A., M.A.",
          expertise: "Community Service",
          image: "/mcc-vice-president.jpg",
        },
      ],
    },
  },
  "kuala-lumpur": {
    committees: {
      title: "Federal Territory Committees",
      items: [
        { name: "KL Federal Territory Committee", members: 18, established: "1990" },
        { name: "District Committees (8)", members: 85, established: "Various" },
      ],
    },
    pressreleases: {
      title: "Press Releases",
      items: [
        {
          date: "2025-01-12",
          title: "KL Branch Celebrates Heritage Month",
          description: "A month-long celebration of cultural traditions...",
          link: "#",
          type: "article",
          image: "/kuala-lumpur-heritage.jpg",
        },
        {
          date: "2025-01-08",
          title: "Youth Program Launch in Kuala Lumpur",
          description: "New initiatives for youth empowerment announced...",
          link: "#",
          type: "video",
          image: "/youth-program-kl.jpg",
        },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        {
          speaker: "Federal Territory Chairman",
          event: "General Assembly 2024",
          date: "2024-12-18",
          link: "#",
          description: "Vision for urban development",
        },
        {
          speaker: "Deputy Chairman",
          event: "Economic Forum",
          date: "2024-12-05",
          link: "#",
          description: "Economic opportunities in federal territories",
        },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "Urban Community Building",
          author: "David Tan",
          publication: "KL Times",
          date: "2024-12-18",
          excerpt: "How MCC is transforming urban communities with inclusive policies and modern governance...",
          image: "/urban-community-kl.jpg",
        },
        {
          title: "Federal Territory Development Initiative",
          author: "Maya Singh",
          publication: "City Weekly",
          date: "2024-12-10",
          excerpt: "Comprehensive strategy for sustainable development in KL...",
          image: "/development-initiative.jpg",
        },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [
        { image: "/kl-city-events.jpg", caption: "City Events 2024", date: "2024-12-01" },
        { image: "/placeholder.svg?height=250&width=300", caption: "Community Engagement", date: "2024-11-10" },
        { image: "/placeholder.svg?height=250&width=300", caption: "FT Projects", date: "2024-10-20" },
        { image: "/placeholder.svg?height=250&width=300", caption: "Youth Initiative", date: "2024-09-15" },
      ],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        {
          title: "KL Community Projects",
          duration: "6:45",
          link: "#",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Urban Development Tour",
          duration: "7:20",
          link: "#",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    documents: {
      title: "Documents",
      items: [
        { name: "KL Branch Guidelines", year: 2023, fileSize: "1.8 MB", link: "#", fileType: "PDF" },
        { name: "Federal Territory Development Plan", year: 2024, fileSize: "4.2 MB", link: "#", fileType: "PDF" },
      ],
    },
    leadership: {
      title: "Leadership",
      items: [
        {
          name: "David Tan",
          position: "Federal Territory Chairman",
          contact: "david@mcc.org",
          image: "/mcc-president.jpg",
          bio: "Urban development expert with extensive experience",
        },
        {
          name: "Kavya Menon",
          position: "Deputy Chairman",
          contact: "kavya@mcc.org",
          image: "/mcc-general-secretary.jpg",
          bio: "Focused on community welfare and social initiatives",
        },
      ],
    },
    members: {
      title: "Branch Members",
      items: [
        {
          name: "David Tan",
          title: "Chairman",
          qualification: "B.A., M.P.A.",
          expertise: "Urban Planning",
          image: "/mcc-president.jpg",
        },
        {
          name: "Kavya Menon",
          title: "Deputy",
          qualification: "B.Sc., M.Sc.",
          expertise: "Community Welfare",
          image: "/mcc-general-secretary.jpg",
        },
        {
          name: "Lin Wei",
          title: "Secretary",
          qualification: "B.Com., C.A.",
          expertise: "Finance",
          image: "/mcc-treasurer.jpg",
        },
      ],
    },
  },
  penang: {
    committees: {
      title: "State Committees",
      items: [
        { name: "Penang State Committee", members: 20, established: "1980" },
        { name: "District Committees (4)", members: 75, established: "Various" },
      ],
    },
    pressreleases: {
      title: "Press Releases",
      items: [
        {
          date: "2025-01-18",
          title: "Penang Heritage Conservation Initiative",
          description: "New program to preserve cultural landmarks...",
          link: "#",
          type: "article",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          date: "2025-01-05",
          title: "Penang Coastal Cleanup Drive",
          description: "Community participation in environmental conservation...",
          link: "#",
          type: "video",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        {
          speaker: "State Chairman",
          event: "Heritage Summit 2024",
          date: "2024-12-20",
          link: "#",
          description: "Preserving Penang's cultural legacy",
        },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "Penang's Cultural Renaissance",
          author: "Chua Ming",
          publication: "Penang Gazette",
          date: "2024-12-22",
          excerpt: "MCC's vision for heritage preservation and cultural tourism in Penang...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [
        { image: "/placeholder.svg?height=250&width=300", caption: "Heritage Sites", date: "2024-12-15" },
        { image: "/placeholder.svg?height=250&width=300", caption: "Community Events", date: "2024-11-20" },
      ],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        {
          title: "Penang Cultural Tour",
          duration: "9:30",
          link: "#",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    documents: {
      title: "Documents",
      items: [{ name: "Penang Branch Report", year: 2024, fileSize: "2.1 MB", link: "#", fileType: "PDF" }],
    },
    leadership: {
      title: "Leadership",
      items: [
        {
          name: "Chua Ming",
          position: "State Chairman",
          contact: "chuaming@mcc.org",
          image: "/mcc-president.jpg",
          bio: "Heritage conservation advocate",
        },
      ],
    },
    members: {
      title: "Branch Members",
      items: [
        {
          name: "Chua Ming",
          title: "Chairman",
          qualification: "B.A., M.A.",
          expertise: "Heritage Studies",
          image: "/mcc-president.jpg",
        },
        {
          name: "Nurul Aisyah",
          title: "Secretary",
          qualification: "B.A.",
          expertise: "Community Engagement",
          image: "/mcc-general-secretary.jpg",
        },
      ],
    },
  },
  johor: {
    committees: {
      title: "State Committees",
      items: [
        { name: "Johor State Committee", members: 22, established: "1982" },
        { name: "District Committees (10)", members: 110, established: "Various" },
      ],
    },
    pressreleases: {
      title: "Press Releases",
      items: [
        {
          date: "2025-01-14",
          title: "Johor Economic Development Program",
          description: "New initiatives for job creation and economic growth...",
          link: "#",
          type: "article",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        {
          speaker: "State Chairman",
          event: "Business Forum",
          date: "2024-12-16",
          link: "#",
          description: "Economic opportunities in Johor",
        },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "Johor's Economic Transformation",
          author: "Hassan Ali",
          publication: "Johor Times",
          date: "2024-12-16",
          excerpt: "MCC's roadmap for economic prosperity in Johor...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [{ image: "/placeholder.svg?height=250&width=300", caption: "Economic Initiatives", date: "2024-12-05" }],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        {
          title: "Johor Development Projects",
          duration: "7:15",
          link: "#",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    documents: {
      title: "Documents",
      items: [{ name: "Johor Branch Plan", year: 2024, fileSize: "2.6 MB", link: "#", fileType: "PDF" }],
    },
    leadership: {
      title: "Leadership",
      items: [
        {
          name: "Hassan Ali",
          position: "State Chairman",
          contact: "hassan@mcc.org",
          image: "/mcc-president.jpg",
          bio: "Economic development specialist",
        },
      ],
    },
    members: {
      title: "Branch Members",
      items: [
        {
          name: "Hassan Ali",
          title: "Chairman",
          qualification: "B.Sc., M.B.A.",
          expertise: "Economics",
          image: "/mcc-president.jpg",
        },
      ],
    },
  },
  perak: {
    committees: {
      title: "State Committees",
      items: [{ name: "Perak State Committee", members: 19, established: "1983" }],
    },
    pressreleases: {
      title: "Press Releases",
      items: [
        {
          date: "2025-01-10",
          title: "Perak Tin Mining Heritage Project",
          description: "Reviving historical tin mining legacy...",
          link: "#",
          type: "article",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        {
          speaker: "State Chairman",
          event: "Heritage Symposium",
          date: "2024-12-14",
          link: "#",
          description: "Perak's historical significance",
        },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "Preserving Perak's Mining Legacy",
          author: "Mohan Pillai",
          publication: "Perak Chronicle",
          date: "2024-12-14",
          excerpt: "Initiatives to preserve Perak's industrial heritage...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [{ image: "/placeholder.svg?height=250&width=300", caption: "Mining Heritage", date: "2024-11-30" }],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        {
          title: "Perak Heritage Documentary",
          duration: "12:45",
          link: "#",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    documents: {
      title: "Documents",
      items: [{ name: "Perak Heritage Documentation", year: 2024, fileSize: "3.5 MB", link: "#", fileType: "PDF" }],
    },
    leadership: {
      title: "Leadership",
      items: [
        {
          name: "Mohan Pillai",
          position: "State Chairman",
          contact: "mohan@mcc.org",
          image: "/mcc-president.jpg",
          bio: "Heritage preservation champion",
        },
      ],
    },
    members: {
      title: "Branch Members",
      items: [
        {
          name: "Mohan Pillai",
          title: "Chairman",
          qualification: "B.A., M.A.",
          expertise: "History",
          image: "/mcc-president.jpg",
        },
      ],
    },
  },
  "negeri-sembilan": {
    committees: {
      title: "State Committees",
      items: [{ name: "Negeri Sembilan State Committee", members: 16, established: "1981" }],
    },
    pressreleases: {
      title: "Press Releases",
      items: [
        {
          date: "2025-01-11",
          title: "Negeri Sembilan Development Initiative",
          description: "New programs for sustainable development...",
          link: "#",
          type: "article",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        {
          speaker: "State Chairman",
          event: "State Convention 2024",
          date: "2024-12-12",
          link: "#",
          description: "Vision for Negeri Sembilan",
        },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "Negeri Sembilan's Growth Strategy",
          author: "Ravi Shankar",
          publication: "NS News",
          date: "2024-12-12",
          excerpt: "MCC's comprehensive development plan for Negeri Sembilan...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [{ image: "/placeholder.svg?height=250&width=300", caption: "Development Projects", date: "2024-11-25" }],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        {
          title: "Negeri Sembilan Overview",
          duration: "8:00",
          link: "#",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    documents: {
      title: "Documents",
      items: [{ name: "NS Development Plan", year: 2024, fileSize: "2.3 MB", link: "#", fileType: "PDF" }],
    },
    leadership: {
      title: "Leadership",
      items: [
        {
          name: "Ravi Shankar",
          position: "State Chairman",
          contact: "ravi@mcc.org",
          image: "/mcc-president.jpg",
          bio: "Development visionary",
        },
      ],
    },
    members: {
      title: "Branch Members",
      items: [
        {
          name: "Ravi Shankar",
          title: "Chairman",
          qualification: "B.A., M.B.A.",
          expertise: "Development",
          image: "/mcc-president.jpg",
        },
      ],
    },
  },
}

export default async function BranchSectionPage({ params }: { params: Promise<{ state: string; section: string }> }) {
  const { state, section } = await params
  const normalizedState = state.toLowerCase()
  const content = branchContent[normalizedState] || branchContent.selangor
  const currentContent = content[section]

  const isMembers = section === "members"
  const isPhotogallery = section === "photogallery"
  const isVideogallery = section === "videogallery"
  const isDocuments = section === "documents"
  const isInterviews = section === "interviews"
  const isPressreleases = section === "pressreleases"

  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
            {state} - {currentContent?.title}
          </h1>
          <Link href={`/branches`}>
            <p className="text-sm text-gray-200 mt-2 hover:text-white cursor-pointer">← Back to Branches</p>
          </Link>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 py-8 sm:py-12 lg:py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex gap-6">
          <BranchSidebar state={state} activeSection={section} />

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003087] mb-8">{currentContent?.title}</h2>

            {isMembers ? (
              <div className="grid grid-cols-1 gap-6">
                {currentContent?.items?.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#003087] rounded-lg overflow-hidden hover:shadow-xl transition-all flex flex-col sm:flex-row"
                  >
                    {/* Member Image - Reduced size */}
                    <div className="relative bg-gray-200 w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Member Details */}
                    <div className="p-4 sm:p-6 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#003087]">{member.name}</h3>
                      <p className="text-[#CE0000] font-semibold text-sm">{member.title}</p>

                      <div className="space-y-2 mt-3 text-sm">
                        {member.qualification && (
                          <div>
                            <p className="text-xs uppercase text-gray-500 font-semibold">Qualification</p>
                            <p className="text-gray-700">{member.qualification}</p>
                          </div>
                        )}
                        {member.expertise && (
                          <div>
                            <p className="text-xs uppercase text-gray-500 font-semibold">Expertise</p>
                            <p className="text-gray-700">{member.expertise}</p>
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-gray-200 mt-3">
                        {member.contact ? (
                          <a
                            href={`mailto:${member.contact}`}
                            className="inline-block bg-[#CE0000] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-[#003087] transition-colors"
                          >
                            Contact
                          </a>
                        ) : (
                          <span className="inline-block bg-gray-400 text-white px-3 py-1 rounded text-xs font-semibold">
                            No Contact
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : isPhotogallery ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {currentContent?.items?.map((photo: any, index: number) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-lg h-48 sm:h-56">
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex flex-col justify-end p-3">
                        <h3 className="text-white font-bold text-sm">{photo.caption}</h3>
                        <p className="text-gray-200 text-xs">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : isVideogallery ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentContent?.items?.map((video: any, index: number) => (
                  <a key={index} href={video.link} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-lg h-48 bg-gray-900">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all flex items-center justify-center">
                        <div className="text-white text-center">
                          <svg
                            className="w-16 h-16 mx-auto mb-2 group-hover:scale-125 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                          <p className="text-sm font-semibold">{video.duration}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#003087] mt-3 group-hover:text-[#CE0000]">{video.title}</h3>
                  </a>
                ))}
              </div>
            ) : isDocuments ? (
              <div className="space-y-4">
                {currentContent?.items?.map((doc: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 border-l-4 border-[#CE0000] p-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#CE0000] text-white p-3 rounded">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1 1 0 11-2 0 1 1 0 012 0zM15 16.5a1 1 0 11-2 0 1 1 0 012 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0015.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#003087]">{doc.name}</h3>
                        <p className="text-sm text-gray-600">
                          {doc.fileType} • {doc.fileSize} • {doc.year}
                        </p>
                      </div>
                    </div>
                    <a
                      href={doc.link}
                      download
                      className="bg-[#CE0000] text-white px-6 py-2 rounded-lg hover:bg-[#003087] transition-colors font-semibold text-sm"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            ) : isInterviews ? (
              <div className="space-y-8">
                {currentContent?.items?.map((interview: any, index: number) => (
                  <article key={index} className="border-b border-gray-200 pb-8 last:border-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-[#003087] mb-2">{interview.title}</h3>
                        <div className="flex gap-4 mb-4 text-sm text-gray-600">
                          <span>By {interview.author}</span>
                          <span>•</span>
                          <span>{interview.publication}</span>
                          <span>•</span>
                          <span>{interview.date}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{interview.excerpt}</p>
                        <a
                          href={interview.link || "#"}
                          className="inline-block bg-[#CE0000] text-white px-6 py-2 rounded-lg hover:bg-[#003087] transition-colors font-semibold"
                        >
                          Read Full Article
                        </a>
                      </div>
                      <div className="order-1 md:order-2">
                        <img
                          src={interview.image || "/placeholder.svg"}
                          alt={interview.title}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : isPressreleases ? (
              <div className="space-y-6">
                {currentContent?.items?.map((release: any, index: number) => (
                  <div key={index} className="border-l-4 border-[#CE0000] pl-6 py-4 hover:bg-gray-50 transition-colors">
                    <p className="text-sm text-gray-500 font-semibold">{release.date}</p>
                    <h3 className="text-xl font-bold text-[#003087] mt-1">{release.title}</h3>
                    <p className="text-gray-700 mt-2">{release.description}</p>
                    <div className="mt-4">
                      <a
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#CE0000] text-white px-6 py-2 rounded hover:bg-[#003087] transition-colors text-sm font-semibold"
                      >
                        {release.type === "video" ? (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                            Watch Video
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM16.364 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM12 18a1 1 0 110-2v1a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 001 1zM5.343 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 12a1 1 0 01-1-1V9a1 1 0 112 0v2a1 1 0 01-1 1zM5.343 5.343a1 1 0 001.414-1.414L6.05 3.222a1 1 0 10-1.414 1.414l.707.707z" />
                            </svg>
                            Open Link
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : currentContent?.title?.includes("Leadership") ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentContent?.items?.map((leader: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#003087] rounded-lg overflow-hidden hover:shadow-2xl transition-all"
                  >
                    {/* Leader Image */}
                    <div className="relative bg-gray-200 h-64 overflow-hidden">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                        <p className="text-[#CE0000] font-semibold">{leader.position}</p>
                      </div>
                    </div>

                    {/* Leader Details */}
                    <div className="p-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{leader.bio}</p>

                      <div className="space-y-3 text-sm mb-4">
                        {leader.experience && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#CE0000] font-bold">•</span>
                            <div>
                              <p className="text-gray-500 text-xs font-semibold">Experience</p>
                              <p className="text-gray-700">{leader.experience}</p>
                            </div>
                          </div>
                        )}
                        {leader.specialty && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#003087] font-bold">•</span>
                            <div>
                              <p className="text-gray-500 text-xs font-semibold">Specialty</p>
                              <p className="text-gray-700">{leader.specialty}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <a
                        href={`mailto:${leader.contact}`}
                        className="w-full block text-center bg-[#CE0000] text-white px-4 py-2 rounded hover:bg-[#003087] transition-colors font-semibold text-sm"
                      >
                        Contact Leader
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {currentContent?.items?.map((item: any, index: number) => (
                  <div key={index} className="border-l-4 border-[#CE0000] pl-4 py-3 hover:bg-gray-50 transition-colors">
                    {item.name && (
                      <>
                        <h3 className="font-bold text-lg text-[#003087]">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.position && `Position: ${item.position}`}</p>
                        <p className="text-sm text-gray-600">{item.members && `Members: ${item.members}`}</p>
                        <p className="text-sm text-gray-600">{item.contact && `Email: ${item.contact}`}</p>
                        {item.bio && <p className="text-sm text-gray-600">Bio: {item.bio}</p>}
                      </>
                    )}
                    {item.date && (
                      <>
                        <p className="text-sm text-gray-500">{item.date}</p>
                        <h3 className="font-bold text-[#003087] mt-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">
                          {item.publication && `Publication: ${item.publication}`}
                        </p>
                        <p className="text-sm text-gray-600">{item.speaker && `Speaker: ${item.speaker}`}</p>
                        <p className="text-sm text-gray-600">{item.event && `Event: ${item.event}`}</p>
                        <p className="text-sm text-gray-700">{item.description && item.description}</p>
                      </>
                    )}
                    {item.album && (
                      <>
                        <h3 className="font-bold text-[#003087]">{item.album}</h3>
                        <p className="text-sm text-gray-600">{item.photos} photos</p>
                      </>
                    )}
                    {item.duration && (
                      <>
                        <h3 className="font-bold text-[#003087]">{item.title}</h3>
                        <p className="text-sm text-gray-600">Duration: {item.duration}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
