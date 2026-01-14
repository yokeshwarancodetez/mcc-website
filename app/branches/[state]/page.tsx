"use client"
import { redirect } from "next/navigation"

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
        { date: "2025-01-15", title: "MCC Selangor Inaugurates New Community Center", link: "#" },
        { date: "2025-01-10", title: "Selangor Branch Hosts Educational Scholarship Program", link: "#" },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [
        { speaker: "State Chairman", event: "Annual State Conference 2024", date: "2024-12-15", link: "#" },
        { speaker: "Treasurer", event: "Fundraising Event", date: "2024-12-10", link: "#" },
      ],
    },
    interviews: {
      title: "Articles",
      items: [
        {
          title: "MCC Selangor's Role in Community Development",
          publication: "The Star",
          date: "2024-12-20",
          link: "#",
        },
        { title: "Interview with State Leadership", publication: "Local News", date: "2024-12-15", link: "#" },
      ],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [
        { album: "Community Events 2024", photos: 45, link: "#" },
        { album: "Scholarship Distribution", photos: 32, link: "#" },
      ],
    },
    videogallery: {
      title: "Video Gallery",
      items: [
        { title: "Heritage Festival Highlights", duration: "5:30", link: "#" },
        { title: "Community Outreach Program", duration: "8:15", link: "#" },
      ],
    },
    documents: {
      title: "Documents",
      items: [
        { name: "Selangor Branch Constitution", year: 2023, link: "#" },
        { name: "Annual Report 2024", year: 2024, link: "#" },
      ],
    },
    leadership: {
      title: "Leadership",
      items: [
        { name: "Ramesh Kumar", position: "State Chairman", contact: "ramesh@mcc.org" },
        { name: "Priya Sethu", position: "State Secretary", contact: "priya@mcc.org" },
        { name: "Arjun Nair", position: "State Treasurer", contact: "arjun@mcc.org" },
      ],
    },
    members: {
      title: "Members",
      items: [
        { category: "Active Members", count: 2500, status: "verified" },
        { category: "Life Members", count: 450, status: "premium" },
        { category: "Student Members", count: 380, status: "student" },
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
        { date: "2025-01-12", title: "KL Branch Celebrates Heritage Month", link: "#" },
        { date: "2025-01-08", title: "Youth Program Launch in Kuala Lumpur", link: "#" },
      ],
    },
    speeches: {
      title: "Speeches",
      items: [{ speaker: "Federal Territory Chairman", event: "General Assembly 2024", date: "2024-12-18", link: "#" }],
    },
    interviews: {
      title: "Articles",
      items: [{ title: "Urban Community Building", publication: "KL Times", date: "2024-12-18", link: "#" }],
    },
    photogallery: {
      title: "Photo Gallery",
      items: [{ album: "City Events 2024", photos: 38, link: "#" }],
    },
    videogallery: {
      title: "Video Gallery",
      items: [{ title: "KL Community Projects", duration: "6:45", link: "#" }],
    },
    documents: {
      title: "Documents",
      items: [{ name: "KL Branch Guidelines", year: 2023, link: "#" }],
    },
    leadership: {
      title: "Leadership",
      items: [{ name: "David Tan", position: "Federal Territory Chairman", contact: "david@mcc.org" }],
    },
    members: {
      title: "Members",
      items: [{ category: "Active Members", count: 1800, status: "verified" }],
    },
  },
}

export default async function BranchDetailsPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params

  if (!state) {
    redirect("/branches")
  }

  const stateName = state
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  redirect(`/branches/${state}/committees`)
}
