import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CWCPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <section className="bg-gradient-to-r from-[#003087] to-[#CE0000] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Central Working Committee</h1>
          <p className="text-lg text-gray-100">The primary decision-making body of MCC</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003087] mb-4">Role & Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                The Central Working Committee (CWC) is the apex decision-making body of MCC, responsible for:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Strategic planning and policy formulation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Resource allocation and financial management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Approval of major party initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Oversight of party administration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CE0000] font-bold">✓</span>
                  <span>Ensuring party discipline and conduct</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#003087] to-[#CE0000] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Committee Overview</h3>
              <div className="space-y-3">
                <p className="font-bold text-lg">Dato' Dr NKS Tharmaseelan</p>
                <p className="text-sm text-gray-200 mb-4">President & Chairperson</p>
                <hr className="border-white border-opacity-30" />
                <p className="text-sm mt-4">
                  The CWC comprises senior party officials, state representatives, and wing leaders ensuring broad
                  representation of party interests. For detailed leadership information, visit the{" "}
                  <a href="/about/leadership" className="underline hover:text-gray-100">
                    Leadership page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003087] mb-12 text-center">CWC Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Policy Making", desc: "Formulate party policies and programs aligned with MCC objectives" },
              { title: "Budget Approval", desc: "Review and approve annual budgets and financial allocations" },
              { title: "Member Discipline", desc: "Address party member grievances and enforce party discipline" },
              { title: "Electoral Strategy", desc: "Plan electoral campaigns and candidate selection" },
              { title: "Inter-party Relations", desc: "Manage relationships with allied political organizations" },
              { title: "Community Outreach", desc: "Oversee community engagement and welfare programs" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#003087]/10 to-[#CE0000]/10 border-l-4 border-[#CE0000] p-6 rounded-lg"
              >
                <h3 className="font-bold text-[#003087] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
