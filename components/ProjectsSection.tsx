import { motion } from "framer-motion";

const projects = [
  { title: "WhiteBoard AI Tutor", description: "Drexel University Hackathon, Notebook w/ whitebook centered around LeetCode style coding questions where a fine tuned OpenAI tutor helps students (in teams) work through problems." },
  { title: "MachineLearning HelloWorld", description: "For many full-stack engineers, ML remains an abstract concept rather than a practical tool, often feeling too complex due to the mathematical nature of it. I am exploring models that make ML more accessible and actionable for engineers beyond the data science field."},
  {
    title: "Code Differently 2024 Q4 Cohort",
    description: "Assisting the lead instructor in managing a GitHub repository with 500+ merged pull requests by providing feedback on learner submissions, grading, and identifying areas for improvement in the curriculum.",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen p-8">
      <h2 className="text-4xl font-semibold mb-12 text-center">Projects</h2>
      <div className="flex flex-col space-y-8 items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full border border-gray-200 text-center sm:text-left" // Added border for consistency
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-2 break-words"> {/* Prevents overflow */}
              {project.title}
            </h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
