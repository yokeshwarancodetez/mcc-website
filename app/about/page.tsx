export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">About MCC</h1>
          <p className="text-lg md:text-xl text-gray-100">Footprints of Seva - Over 60 Years of Community Leadership</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#003087] mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Malaysian Ceylonese Congress (MCC) is a progressive political party dedicated to serving the Malaysian
              Ceylonese community since 1958. We represent the political, educational, social, and cultural interests of
              Malaysians of Ceylonese origin.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With over six decades of community service, MCC continues to uphold the legacy established by our founding
              members. We are committed to empower youth, preserve cultural heritage, build unity, and contribute
              meaningfully to Malaysian society.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our organization operates on the principles of integrity, unity, service (Seva), and excellence, ensuring
              that every initiative benefits the community we serve.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#CE0000] text-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">60+</p>
                <p className="text-sm">Years Active</p>
              </div>
              <div className="bg-[#003087] text-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">2000+</p>
                <p className="text-sm">Scholarships</p>
              </div>
              <div className="bg-[#CE0000] text-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">5000+</p>
                <p className="text-sm">Families Served</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/images/attachments-gen-images-public-hero-banner-2.jpg"
              alt="MCC Community"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-medium text-[#003087] mb-8 text-center">Our Mission & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#CE0000] to-[#B00000] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>
                To uphold the Constitution and promote the political, educational, social and cultural interests of
                Malaysians of Ceylonese origin, fostering unity, service, and excellence within our community and the
                nation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#003087] to-[#001f52] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <p>
                From humble beginnings with 50 founding members in 1958 to over 5,000 families today, our growth
                reflects the trust our community places in us. We continue to deliver quality programs and initiatives
                that empower, educate, and unite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
