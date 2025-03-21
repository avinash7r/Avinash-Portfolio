"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, Terminal, GitBranch, Users } from "lucide-react"
import SectionHeading from "./SectionHeading"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["C", "Java", "JavaScript", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout className="h-6 w-6" />,
    skills: ["ReactJS", "Bootstrap", "Tailwind CSS", "ExpressJS"],
  },
  {
    title: "Software Development",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming"],
  },
  {
    title: "APIs & Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["NodeJS", "RESTful APIs", "GraphQL", "WebRTC", "Socket.IO"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git & GitHub", "Figma", "Canva", "Postman"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: ["Leadership", "Communication", "Problem-Solving", "Critical Thinking", "Team Collaboration"],
  },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="section-container bg-[#0C0950]/80">
      <div className="container mx-auto">
        <SectionHeading>My Skills</SectionHeading>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#261FB3]/10 p-6 rounded-lg border border-[#261FB3]/30 backdrop-blur-sm hover:shadow-lg hover:shadow-[#261FB3]/10 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-[#FBE4D6]/10 text-[#FBE4D6] rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

