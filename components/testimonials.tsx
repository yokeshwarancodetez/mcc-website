export default function Testimonials() {
  const testimonials = [
    {
      quote: "MCC's scholarship changed my life and enabled me to pursue my dreams at university.",
      author: "Aravind Kumar",
      role: "Scholar 2015 | Software Engineer",
      image: "/testimonial-1.jpg",
      color: "from-[#CE0000]",
    },
    {
      quote: "As a youth leader, MCC mentorship program shaped my understanding of social responsibility.",
      author: "Divya Sethu",
      role: "Youth Leader | Community Activist",
      image: "/testimonial-2.jpg",
      color: "from-[#003087]",
    },
    {
      quote: "MCC's cultural programs have helped our family connect with our heritage and identity.",
      author: "Rajith & Revathy",
      role: "Parents & Community Members",
      image: "/testimonial-3.jpg",
      color: "from-[#CE0000]",
    },
    {
      quote: "Working with MCC on welfare initiatives has been the most fulfilling aspect of my career.",
      author: "Pradeep Singh",
      role: "Program Director | Social Worker",
      image: "/testimonial-4.jpg",
      color: "from-[#003087]",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#003087]/10 to-[#CE0000]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Community Voices</h2>
          <p className="text-lg text-gray-700">Real stories from people touched by MCC's mission</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${testimonial.color} to-[#b20000]`}></div>

              <div className="p-6 lg:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#CE0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-lg font-semibold mb-6 italic">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  ></div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
