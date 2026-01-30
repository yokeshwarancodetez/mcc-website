import Header from "@/components/header"
import Footer from "@/components/footer"
import BranchesMap from "@/components/branches-map"

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-12 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-100">Get in touch with Malaysian Ceylonese Congress</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#003087] mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#003087] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CE0000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003087] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CE0000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003087] mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CE0000]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#CE0000] text-white rounded-lg font-bold hover:bg-[#B00000] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#003087] to-[#CE0000] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Head Office</h3>
                <p className="text-sm text-gray-100 mb-4">
                  Malaysian Ceylonese Congress
                  <br />
                  Kuala Lumpur, Malaysia
                </p>
               
                <p className="text-sm">
                  <span className="font-bold">Email:</span> info@mcc1958.com
                </p>
              </div>

      

              <div>
                <h3 className="text-xl font-bold text-[#003087] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                    <button
                      key={social}
                      className="w-12 h-12 bg-[#CE0000] text-white rounded-full flex items-center justify-center hover:bg-[#B00000] transition-colors font-bold"
                    >
                      {social[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations Map */}
      <BranchesMap />

      <Footer />
    </main>
  )
}
