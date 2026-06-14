"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "AWS EKS GitOps Infrastructure Platform",
      description:
        "Provisioned production-style AWS infrastructure using Terraform: custom VPC, public/private/isolated subnets, NAT Gateway, ALB, Amazon EKS cluster, and RDS PostgreSQL in isolated database subnets. Implemented IAM/OIDC/IRSA for secure Kubernetes-to-AWS authentication without static credentials. Built GitHub Actions CI/CD with Docker Buildx caching, SHA-tagged immutable images, and Argo CD for full GitOps delivery from Git commit to automated EKS rolling update.",
      technologies: [
        "Terraform",
        "AWS EKS",
        "RDS PostgreSQL",
        "GitHub Actions",
        "Argo CD",
        "Docker",
        "Kubernetes",
      ],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/avinash7r/aws-eks-gitops",
      demo: "https://github.com/avinash7r/aws-eks-gitops",
    },
    {
      title: "Cloud-Native Kubernetes GitOps Platform",
      description:
        "Deployed frontend (Nginx) and backend (Node.js) as separate Kubernetes deployments on a local kind cluster with ingress-based path routing. Instrumented backend with Prometheus metrics (request count, HTTP status codes, latency histograms) and validated observability via PromQL. Implemented full GitOps pipeline: GitHub Actions CI → Kustomize image update → Argo CD reconciliation → cluster convergence, using immutable SHA-based image tagging.",
      technologies: [
        "Kubernetes",
        "kind",
        "Argo CD",
        "Kustomize",
        "Prometheus",
        "GitHub Actions",
        "Docker",
      ],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/avinash7r/k8s-gitops-platform",
      demo: "https://github.com/avinash7r/k8s-gitops-platform",
    },
    {
      title: "AutoKube – Automated Kubernetes Cluster with Ansible",
      description:
        "An automated multi-node Kubernetes cluster orchestration project using Ansible and kubeadm. Provisions a production-style control plane and worker nodes on AWS EC2 with fully idempotent, role-based automation. The entire cluster lifecycle is managed through a single master playbook, ensuring safe execution order and dynamic worker node joining.",
      technologies: [
        "Ansible",
        "Kubernetes (kubeadm)",
        "containerd",
        "Calico CNI",
        "Linux",
        "AWS EC2",
      ],
      image: "/AutoKube.png?height=300&width=500",
      github: "https://github.com/avinash7r/AutoKube",
      demo: "https://github.com/avinash7r/AutoKube",
    },
    {
      title: "DevOps Local Lab Platform",
      description:
        "A fully automated local DevOps platform that provisions a production-like Kubernetes environment on a laptop. Built using Docker, kind, a local container registry, and Argo CD, with a single CLI to manage the entire lifecycle (up, down, status, destroy). Designed to understand real-world DevOps concepts like registry mirrors, GitOps, idempotency, and infrastructure automation.",
      technologies: [
        "Docker",
        "Kubernetes (kind)",
        "Local Container Registry",
        "Argo CD",
        "Bash Scripting",
        "GitOps",
      ],
      image: "/LocalLab.png?height=300&width=500",
      github: "https://github.com/avinash7r/Devops-Local-Lab",
      demo: "https://github.com/avinash7r/Devops-Local-Lab",
    },

    {
      title: "WhatsApp → Notion AI Bridge",
      description:
        "A smart placement message parser that uses whatsapp-web.js and a local LLM (Mistral via Ollama) to extract structured data from WhatsApp and sync it to a Notion dashboard. Designed for campus placement automation - built in a day, runs fully offline.",
      technologies: [
        "Node.js",
        "Express",
        "Ollama",
        "Mistral",
        "whatsapp-web.js",
        "Notion SDK",
      ],
      image: "/whatsapp-notion-bridge.png?height=300&width=500",
      github: "https://github.com/avinash7r/WhatsApp-Notion-sync",
      demo: "https://github.com/avinash7r/WhatsApp-Notion-sync",
    },
    {
      title: "ChatUp",
      description:
        "Real-time chat platform built with MERN, Zustand, and Socket.IO. Containerized via Docker and deployed on AWS EC2 and Render with optimized low latency.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Zustand",
        "Docker",
        "AWS EC2",
      ],
      image: "/free-chat-app.jpg?height=300&width=500",
      github: "https://github.com/avinash7r/full-chatApp.git",
      demo: "https://chat-app.avinashrajure.live/",
    },
    {
      title: "NIDS",
      description:
        "Real-time Network Intrusion Detection System using Scapy and XGBoost with a live React dashboard. Captures live network packets, classifies them as normal or malicious, and visualizes results instantly. Fully containerized and deployable using Docker.",
      technologies: [
        "Python",
        "Scapy",
        "XGBoost",
        "React",
        "WebSocket",
        "Docker",
      ],
      image: "/Real-Time Network Intrusion Detection.png?height=300&width=500",
      github: "https://github.com/avinash7r/NIDS-MINI-PROJECT",
      demo: "https://github.com/avinash7r/NIDS-MINI-PROJECT",
    },
    {
      title: "VIVITSU",
      description:
        "Designed and deployed an interactive website for a 24-hour hackathon, centralizing event details, FAQs, and registration. Enhanced participant engagement by 35%, leading to improved event efficiency.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/vivitsu-24.png?height=300&width=500",
      github: "https://github.com/fsw-griet/vivitsu24.git",
      demo: "https://vivitsu-25-2tcz0s1x6-avinash7rs-projects.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="section-container bg-[#0C0950]/80">
      <div className="container mx-auto">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
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
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#FBE4D6]/10 text-[#FBE4D6] rounded-full text-sm"
                    >
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

        {projects.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 border border-[#FBE4D6] text-[#FBE4D6] font-medium rounded-full hover:bg-[#FBE4D6]/10 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
