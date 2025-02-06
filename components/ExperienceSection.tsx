import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer Learning Success Coach",
    company: "Code Differently",
    period: "September 2024 - Present",
    description: [
      "• Managing classrooms of emerging software engineers in Code Differently’s Adult Program, creating opportunities and sparking transformation by equipping individuals with the key habits, skills, and life lessons needed to succeed in a rapidly changing tech landscape.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Sika Box",
    period: "May 2024 - September 2024",
    description: [
      "• Developed a financial service delivery system from the ground up to serve underserved communities in Nigeria by integrating the Tellerpoint API. This involved understanding of the TCP/IP stack, Transport Layer Security (TLS) protocols, RESTful web services, and JSON, as well as handling technical documentation, authentication, and Data Transfer Objects (DTOs) for a Spring Boot service.",
      "• Increased unit test coverage from 0% to 50% for a 1,200-line transaction service and 10% to 90% for a 400-line authentication service."
    ]
  },
  {
    title: "Software Engineer Apprentice",
    company: "Code Differently",
    period: "February 2024 - July 2024",
    description: [
      "• Applied key programming concepts by writing over 4,400 lines of production-quality code for Java SpringBoot and TypeScript using ReactJS and NextJS. Gained a wide understanding of data structures, design patterns, and clean, maintainable code."
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-semibold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-medium">{exp.title}</h3>
              <p className="text-gray-600">
                {exp.company} | {exp.period}
              </p>
              <div className="mt-2">
                {/* Check if description is an array, then map over it */}
                {Array.isArray(exp.description) ? (
                  exp.description.map((line, idx) => (
                    <p key={idx} className="mb-2">{line}</p>
                  ))
                ) : (
                  <p>{exp.description}</p> // If description is not an array, just display it as a single string
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
