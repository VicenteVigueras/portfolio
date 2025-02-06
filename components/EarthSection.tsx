import { Suspense } from "react"
import dynamic from "next/dynamic"
import Loader from "./Loader"

const DynamicCanvas = dynamic(() => import("./Canvas3D"), { ssr: false })

export default function EarthSection() {
  return (
    <section className="my-16">
      <h2 className="text-4xl font-semibold text-center">Explore My World</h2>
      <div className="w-full h-[50vh]">
        <Suspense fallback={<Loader />}>
          <DynamicCanvas />
        </Suspense>
      </div>
    </section>
  )
}

