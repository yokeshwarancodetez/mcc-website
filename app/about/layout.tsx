import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "About MCC - Malaysian Ceylonese Congress",
  description: "Learn about the Malaysian Ceylonese Congress, our founders, leaders, and constitution.",
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-white">
        <AboutNavigation />
        {children}
      </div>
      <Footer />
    </div>
  )
}
