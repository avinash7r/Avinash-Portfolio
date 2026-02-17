"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, Terminal, GitBranch, Users, Cloud } from "lucide-react"
import SectionHeading from "./SectionHeading"

const skillCategories = [
  // {
  //   title: "Cloud & DevOps",
  //   icon: <Cloud className="h-6 w-6" />,
  //   skills: [
  //     "Linux",
  //     "Docker",
  //     "Kubernetes",
  //     "kubeadm (Cluster Bootstrap)",
  //     "Helm",
  //     "Ansible",
  //     "Terraform (IaC)",
  //     "AWS (EC2, S3, CloudFront, IAM basics)",
  //     "Nginx",
  //     "Grafana (Monitoring basics)",
  //   ],
  // },
  // {
  //   title: "Tools & Platforms",
  //   icon: <GitBranch className="h-6 w-6" />,
  //   skills: [
  //     "Git & GitHub",
  //     "GitHub Actions",
  //     "Argo CD",
  //     "Postman",
  //     "Ollama (Local LLMs)",
  //     "Gemini API",
  //   ],
  // },
  // {
  //   title: "Backend",
  //   icon: <Server className="h-6 w-6" />,
  //   skills: [
  //     "Node.js",
  //     "Express.js",
  //     "REST APIs",
  //     "WebSockets (Socket.IO)",
  //     "Authentication (JWT)",
  //     "Backend Performance Optimization",
  //   ],
  // },
  // {
  //   title: "Core Concepts",
  //   icon: <Terminal className="h-6 w-6" />,
  //   skills: [
  //     "System Design Basics",
  //     "Networking Fundamentals",
  //     "Containers & Orchestration",
  //     "Infrastructure as Code",
  //     "Cloud Architecture Basics",
  //     "Real-Time Systems",
  //   ],
  // },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      "AWS (EC2, S3, CloudFront, IAM basics)",
      "Linux",
      "Cloud Architecture Basics",
      "Networking Fundamentals",
      "Nginx",
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      "Docker",
      "Kubernetes",
      "kubeadm (Cluster Bootstrap)",
      "Helm",
      "Containers & Orchestration",
    ],
  },
  {
    title: "Infrastructure as Code & Automation",
    icon: <Code className="h-6 w-6" />,
    skills: [
      "Terraform (IaC)",
      "Ansible",
      "GitOps (Argo CD)",
      "Infrastructure as Code",
    ],
  },
  {
    title: "CI/CD & DevOps Tooling",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git & GitHub", "GitHub Actions", "Argo CD", "CI/CD Pipelines"],
  },
  {
    title: "Monitoring & Observability",
    icon: <Database className="h-6 w-6" />,
    skills: [
      "Grafana (Monitoring basics)",
      "Metrics & Dashboards",
      "System Health Monitoring",
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="h-6 w-6" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets (Socket.IO)",
      "Authentication (JWT)",
      "Backend Performance Optimization",
      "Real-Time Systems",
    ],
  },
  {
    title: "Developer & AI Tooling",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Postman", "Ollama (Local LLMs)", "Gemini API"],
  },
];


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
      y: 0, opacity: 1,
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

