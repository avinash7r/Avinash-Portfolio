"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
      image: "/AWS EKS GitOps Infrastructure Platform.png?height=300&width=500",
      github: "https://github.com/avinash7r/aws-eks-gitops",
      demo: "https://github.com/avinash7r/aws-eks-gitops",
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

  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-container bg-[#0E0B08]">
      <div className="container mx-auto">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:mt-12">
          {visible.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1814] rounded-2xl overflow-hidden border border-[#2A2018] hover:border-[#E07838]/25 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="relative h-44 sm:h-52 overflow-hidden bg-[#13100C] cursor-zoom-in"
                onClick={() =>
                  setLightbox({
                    src: project.image || "/placeholder.svg",
                    alt: project.title,
                  })
                }
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105 opacity-90"
                />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#EDE4D6] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#8C7C6E] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-[#2A2018] text-[#8C7C6E] rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 border border-[#2A2018] text-[#8C7C6E] text-sm rounded-full hover:border-[#E07838] hover:text-[#E07838] transition-all duration-300"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#E07838] text-[#0E0B08] text-sm font-semibold rounded-full hover:bg-[#F08848] transition-all duration-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo
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
              className="flex items-center gap-2 px-6 py-2.5 border border-[#2A2018] text-[#8C7C6E] text-sm font-medium rounded-full hover:border-[#E07838] hover:text-[#E07838] transition-all duration-300"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-9 right-0 text-[#8C7C6E] hover:text-[#EDE4D6] transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full rounded-xl overflow-hidden border border-[#2A2018]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto max-h-[80vh]"
                />
              </div>
              <p className="text-center text-[#5A4C44] text-sm mt-3">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
