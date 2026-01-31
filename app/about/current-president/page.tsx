'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

interface OfficeBearer {
  id: number
  name: string
  position: string
  image: string
  bio: string
  email?: string
}

const officeBarers: OfficeBearer[] = [
  {
    id: 1,
    name: 'Mahendranathan a/l Thuraiappah',
    position: 'PENGERUSI (President)',
    image: '/founder-1.jpeg',
    bio: 'Visionary leader guiding MCC through strategic initiatives and community development programs.',
    email: 'pengerusi@mcc.com',
  },
  {
    id: 2,
    name: 'Dato Dr. Parameshwaran a/l Kasipillai',
    position: 'TIMBALAN PENGERUSI (Vice President)',
    image: '/Dato Dr. Parameshwaran  Kasipillai.webp',
    bio: 'Supporting leadership in organizational governance and policy implementation.',
    email: 'timbalpengerusi@mcc.com',
  },
  {
    id: 3,
    name: 'Amaravathi a/p Navaratnam P.M.C',
    position: 'SETIAUSAHA (Secretary)',
    image: '/founder-6.jpeg',
    bio: 'Managing administrative operations and organizational communications.',
    email: 'setiausaha@mcc.com',
  },


  {
    id: 4,
    name: 'Lavindran a/l Vigneshwaran',
    position: 'PENOLONG SETIAUSAHA (Assistant Secretary)',
    image: '/founder-5.jpeg',
    bio: 'Supporting secretarial functions and administrative procedures.',
    email: 'penolong.setiausaha@mcc.com',
  },
  {
    id: 5,
    name: 'Vijayaraj a/l C. Vijayasingam',
    position: 'BENDAHARI (Treasurer)',
    image: '/founder-7.jpeg',
    bio: 'Overseeing financial management and organizational resources.',
    email: 'bendahari@mcc.com',
  },
  {
    id: 6,
    name: 'Prof. Dr. Barathalinagam a/l S.Sinniah',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/founder-3.jpeg',
    bio: 'Contributing expertise in educational and professional development initiatives.',
    email: 'committee@mcc.com',
  },
  {
    id: 7,
    name: 'Rajeswari a/p Kandiah',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/rajeshweri.jpeg',
    bio: 'Advocating for women empowerment and community welfare programs.',
    email: 'committee@mcc.com',
  },
  {
    id: 8,
    name: 'Sivamalar a/p Sivasubramaniam',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/sivamalar.jpeg',
    bio: 'Supporting cultural preservation and heritage initiatives.',
    email: 'committee@mcc.com',
  },
  {
    id: 9,
    name: 'Gunarasa a/l Sinnathurai',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/office-bearer-9.jpg',
    bio: 'Leading youth engagement and community development projects.',
    email: 'committee@mcc.com',
  },
  {
    id: 10,
    name: 'Paramaraj a/l Kanthaswamy',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/paramar.jpeg',
    bio: 'Contributing to organizational strategic planning and growth.',
    email: 'committee@mcc.com',
  },
  {
    id: 11,
    name: 'Kunamony a/p Supper Kandiah',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/kandiah.jpeg',
    bio: 'Supporting social welfare and community outreach programs.',
    email: 'committee@mcc.com',
  },
  {
    id: 12,
    name: 'Dato Dr. Sivasampoh a/l Kannikuddy DIMP',
    position: 'AHLI JAWATANKUASA (Committee Member)',
    image: '/president2.png',
    bio: 'Bringing professional expertise to healthcare and community service initiatives.',
    email: 'committee@mcc.com',
  },
]

export default function CurrentOfficeBarersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Current President</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            SENARAI AHLI-AHLI JAWATANKUASA 2025-2026
          </p>
          <p className="text-base text-white/80 mt-4 max-w-3xl mx-auto">
            Meet the dedicated office bearers and committee members leading the Malaysian Ceylonese Congress with integrity, unity, service, and excellence.
          </p>
        </div>
      </div>

      {/* All Office Bearers - 4 Column Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">AHLI-AHLI JAWATANKUASA</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Senarai Ahli-Ahli Jawatankuasa 2025-2026 - The dedicated office bearers and committee members leading the Malaysian Ceylonese Congress with integrity, unity, service, and excellence.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeBarers.map((bearer) => (
              <div
                key={bearer.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 flex flex-col h-full"
              >
                {/* Image Container - Medium Height h-44 */}
                <div className="relative w-full h-84 bg-gradient-to-br from-[#003087] to-[#CE0000] overflow-hidden flex-shrink-0">
                  <img
                    src={bearer.image || '/placeholder.svg'}
                    alt={bearer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Info Container */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Position badge */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-[#CE0000]/10 text-[#CE0000] text-xs font-bold rounded-full">
                      {bearer.position.includes('PENGERUSI') && 'President'}
                      {bearer.position.includes('TIMBALAN') && 'Vice President'}
                      {bearer.position.includes('SETIAUSAHA') && bearer.position.includes('PENOLONG') && 'Asst. Secretary'}
                      {bearer.position.includes('SETIAUSAHA') && !bearer.position.includes('PENOLONG') && 'Secretary'}
                      {bearer.position.includes('BENDAHARI') && 'Treasurer'}
                      {bearer.position.includes('AHLI JAWATANKUASA') && 'Committee'}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 flex-grow">{bearer.name}</h3>

                  {/* Position */}
                  <p className="text-xs text-[#003087] font-semibold mb-3 line-clamp-2">{bearer.position}</p>

                  {/* Bio */}
                  {/* <p className="text-xs text-gray-700 leading-relaxed mb-3 line-clamp-3 flex-grow">{bearer.bio}</p> */}

                  {/* Email if available */}
                  {bearer.email && (
                    <div className="pt-3 border-t border-gray-200 flex items-center gap-2 text-gray-600">
                      {/* <Mail size={14} className="text-[#CE0000] flex-shrink-0" />
                      <span className="text-xs truncate">{bearer.email}</span> */}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
    </div>
  )
}
