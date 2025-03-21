"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./SectionHeading"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "VIVITSU",
      description:
        "Designed and deployed an interactive website for a 24-hour hackathon, centralizing event details, FAQs, and registration. Enhanced participant engagement by 35%, leading to improved event efficiency.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/vivitsu-24.png?height=300&width=500",
      github: "https://github.com/fsw-griet/vivitsu24.git",
      demo: "#",
    },
    {
      title: "ChatUp",
      description:
        "Developed a high-performance, full-stack real-time chat application using Node.js, Express, and MongoDB. Integrated Socket.IO for ultra-fast messaging, real-time updates, and online status tracking. Implemented Zustand for optimized state management, ensuring smooth and lag-free UX.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.IO", "Zustand"],
      image: "/free-chat-app.jpg?height=300&width=500",
      github: "https://github.com/avinash7r/full-chatApp.git",
      demo: "https://full-chatapp-s6f6.onrender.com",
    },
  ]

  return (
    <section id="projects" className="section-container">
      <div className="container mx-auto">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#261FB3]/10 rounded-lg overflow-hidden border border-[#261FB3]/30 backdrop-blur-sm hover:shadow-lg hover:shadow-[#261FB3]/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-[#FBE4D6]/10 text-[#FBE4D6] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#261FB3]/50 text-white rounded-full hover:bg-[#261FB3] transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#FBE4D6] text-[#0C0950] rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

