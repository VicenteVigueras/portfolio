"use client"

import Header from "@/components/Header"
import BioSection from "@/components/BioSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import EarthSection from "@/components/EarthSection"


export default function Home() {
  return (
    <main className="bg-texture bg-repeat min-h-screen text-[#2c2c2c]">
      <Header />
      <div className="container mx-auto px-4 py-16">
      <section id="hero" className="flex flex-col items-center">
  {/* <h1 className="text-5xl font-bold mt-8" >Vicente Vigueras</h1> */}
  <div className="w-full">
    <BioSection />
  </div>
</section>

  <EarthSection />
  <ProjectsSection />
  <ExperienceSection />

      </div>
    </main>
  )
}
