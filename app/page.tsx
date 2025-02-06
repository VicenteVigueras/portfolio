"use client"

import dynamic from "next/dynamic"
import Header from "@/components/Header"
import BioSection from "@/components/BioSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import EarthSection from "@/components/EarthSection"

const DynamicCanvas = dynamic(() => import("@/components/Canvas3D"), { ssr: false })

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



// "use client"

// import { Suspense } from "react"
// import dynamic from "next/dynamic"
// import Header from "@/components/Header"
// import Loader from "@/components/Loader"
// import BioSection from "@/components/BioSection"
// import ProjectsSection from "@/components/ProjectsSection"
// import ExperienceSection from "@/components/ExperienceSection"
// import EarthSection from "@/components/EarthSection"

// const DynamicCanvas = dynamic(() => import("@/components/Canvas3D"), { ssr: false })

// export default function Home() {
//   return (
//     <main className="bg-texture bg-repeat min-h-screen text-[#2c2c2c]">
//       <Header />
//       <div className="container mx-auto px-4 py-16">
//         <section id="hero" className="flex flex-col items-center space-y-4">
//           <h1 className="text-5xl font-bold">Vicente Vigueras</h1>
//           <div className="w-full">
//             <BioSection />
//           </div>
//         </section>

//         {/* Use flex-row to place EarthSection and ProjectsSection side-by-side */}
//         <section className="flex flex-col md:flex-row gap-8">
//           <div className="w-full md:w-1/2">
//             <EarthSection />
//           </div>
//           <div className="w-full md:w-1/2">
//             <ProjectsSection />
//           </div>
//         </section>

//         <ExperienceSection />
//       </div>
//     </main>
//   )
// }
