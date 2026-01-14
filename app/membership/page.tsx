import Header from "@/components/header"
import Footer from "@/components/footer"
import MemberRegistrationForm from "@/components/member-registration-form"

export default function MemberRegisterPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#CE0000] to-[#003087] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Member Registration</h1>
          <p className="text-lg text-gray-100">Join the Malaysian Ceylonese Congress Community</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MemberRegistrationForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
