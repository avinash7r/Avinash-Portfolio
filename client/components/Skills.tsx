"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, Terminal, GitBranch, Users, Cloud } from "lucide-react"
import SectionHeading from "./SectionHeading"

const skillCategories = [
  {
    title: "AWS Services",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      "AWS EKS", "EC2", "VPC", "IAM", "OIDC / IRSA",
      "ALB", "RDS PostgreSQL", "S3", "NAT Gateway", "Elastic IP",
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: <Layout className="h-5 w-5" />,
    skills: [
      "Docker", "Kubernetes", "Amazon EKS", "kind", "kubeadm",
      "containerd", "Calico CNI", "Kubernetes Gateway API", "Kustomize",
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: <Code className="h-5 w-5" />,
    skills: [
      "Terraform", "AWS Provider", "VPC Provisioning",
      "EKS Cluster Provisioning", "IAM Role & Policy Automation",
    ],
  },
  {
    title: "CI/CD & GitOps",
    icon: <GitBranch className="h-5 w-5" />,
    skills: [
      "GitHub Actions", "Argo CD", "GitOps Workflows",
      "Docker Buildx", "Immutable Image Tagging", "Automated Deployment Pipelines",
    ],
  },
  {
    title: "Automation & Scripting",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      "Bash Scripting", "Ansible", "Ansible Playbooks",
      "Idempotent Infrastructure Automation",
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: <Database className="h-5 w-5" />,
    skills: [
      "Prometheus", "PromQL", "Application Instrumentation", "Metrics Collection",
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "Node.js", "Express.js", "Django", "Spring Boot", "REST APIs",
      "JWT Authentication", "Nginx", "PostgreSQL", "MongoDB", "MySQL",
    ],
  },
  {
    title: "Languages & Methodologies",
    icon: <Users className="h-5 w-5" />,
    skills: [
      "Python", "JavaScript", "Java", "Linux (Ubuntu)",
      "DevOps", "Platform Engineering", "SRE Principles", "Agile",
    ],
  },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  }

  return (
    <section id="skills" className="section-container bg-[#0E0B08]">
      <div className="container mx-auto">
        <SectionHeading>My Skills</SectionHeading>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1814] p-4 sm:p-6 rounded-2xl border border-[#2A2018] hover:border-[#E07838]/30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4 gap-3">
                <div className="p-2.5 rounded-xl bg-[#E07838]/10 text-[#E07838]">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#EDE4D6]">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-[#2A2018] text-[#8C7C6E] rounded-lg text-xs"
                  >
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
