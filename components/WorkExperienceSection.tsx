"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Creative Developer",
    company: "ArtTech Studios",
    period: "2020 - Present",
    description:
      "Lead developer for innovative web and mobile applications, focusing on the intersection of art technology.",
  },
  {
    title: "UI/UX Designer",
    company: "DesignCraft",
    period: "2017 - 2020",
    description:
      "Designed user interfaces and experiences for various digital products, emphasizing aesthetics usability.",
  },
  {
    title: "Junior Web Developer",
    company: "WebWizards",
    period: "2015 - 2017",
    description: "Developed and maintained websites web applications using modern front-end technologies.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="relative">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white bg-opacity-80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-sm">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#a67c52] rounded-full opacity-20 blur-2xl"></div>
    </section>
  )
}

