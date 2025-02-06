import { motion } from "framer-motion"

export default function BioSection() {
  return (
    <section id="bio" className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mb-12 text-center">About Me</h2>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full border border-gray-200" // Matches ProjectsSection styling
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Software Engineer and coaching instructor with over a year of experience working with full stack software development tools and languages. Worked on cross-functional teams to design, develop, and maintain organizational solutions. Expanded knowledge of technology to help the community excel in technology-driven workplaces.
        </p>
      </motion.div>
    </section>
  )
}
