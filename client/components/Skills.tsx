"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, Terminal, GitBranch, Users, Cloud } from "lucide-react"
import SectionHeading from "./SectionHeading"

const skillCategories = [
  {
    title: "AWS Services",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      "AWS EKS",
      "EC2",
      "VPC",
      "IAM",
      "OIDC / IRSA",
      "ALB",
      "RDS PostgreSQL",
      "S3",
      "NAT Gateway",
      "Elastic IP",
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "kind",
      "kubeadm",
      "containerd",
      "Calico CNI",
      "Kubernetes Gateway API",
      "Kustomize",
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: <Code className="h-6 w-6" />,
    skills: [
      "Terraform",
      "AWS Provider",
      "VPC Provisioning",
      "EKS Cluster Provisioning",
      "IAM Role & Policy Automation",
    ],
  },
  {
    title: "CI/CD & GitOps",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      "GitHub Actions",
      "Argo CD",
      "GitOps Workflows",
      "Docker Buildx",
      "Immutable Image Tagging",
      "Automated Deployment Pipelines",
    ],
  },
  {
    title: "Automation & Scripting",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      "Bash Scripting",
      "Ansible",
      "Ansible Playbooks",
      "Idempotent Infrastructure Automation",
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: <Database className="h-6 w-6" />,
    skills: [
      "Prometheus",
      "PromQL",
      "Application Instrumentation",
      "Metrics Collection",
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server className="h-6 w-6" />,
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "Nginx",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Languages & Methodologies",
    icon: <Users className="h-6 w-6" />,
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "Linux (Ubuntu)",
      "DevOps",
      "Platform Engineering",
      "SRE Principles",
      "Agile",
    ],
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

