import Header from "@/components/header"
import Hero from "@/components/hero"
import History from "@/components/history"
import FoundersHistory from "@/components/founders-history"

import MissionPillars from "@/components/mission-pillars"
import Achievements from "@/components/achievements"
import Programs from "@/components/programs"
import Leadership from "@/components/leadership"
import Events from "@/components/events"
import Documents from "@/components/documents"
import Resources from "@/components/resources"
import Organization from "@/components/organization"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import MissionValues from "@/components/mission-values"
import MCCTimeline from "@/components/mcc-timeline"
import PurposeObjectives from "@/components/purpose-objectives"
import RepresentationRecognition from "@/components/representation-recognition"
import CoreValues from "@/components/core-values"

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero />
      <History />
      <FoundersHistory />
      <MCCTimeline />
      <PurposeObjectives />
      <RepresentationRecognition />
      <CoreValues />
      <MissionValues/>
      <MissionPillars />
      <Achievements />
      <Programs />
      {/* <Leadership /> */}
      <Events />
      <Documents />
      <Resources />
      <Organization />
      <CallToAction />
      <Footer />
    </main>
  )
}
