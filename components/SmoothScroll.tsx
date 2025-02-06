"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-100%"])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      document.body.style.height = `${container.scrollHeight}px`
    }
    return () => {
      document.body.style.height = ""
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

