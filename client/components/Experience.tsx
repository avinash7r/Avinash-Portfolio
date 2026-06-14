"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Alemeno",
      location: "Hyderabad",
      period: "April 2025 – Present",
      current: true,
      achievements: [
        "Provisioned production-grade AWS infrastructure using Terraform, including custom VPCs, public/private/isolated subnets, NAT Gateway, EKS clusters, RDS PostgreSQL, IAM roles, and OIDC/IRSA integration for Kubernetes workload identity.",
        "Deployed and operated containerized applications on Amazon EKS using Kubernetes deployments, services, secrets, configmaps, and rolling update strategies.",
        "Configured Kubernetes Gateway API with AWS Load Balancer Controller (ALB) to manage scalable HTTP routing for cloud-native microservices.",
        "Implemented IRSA (IAM Roles for Service Accounts) enabling Kubernetes workloads to authenticate with AWS services without static credentials.",
        "Built GitHub Actions CI/CD pipelines with Docker Buildx layer caching, path-based selective builds, immutable SHA-based image tagging, and automated Docker Hub publishing.",
        "Configured Argo CD for GitOps-based continuous delivery, automated Kubernetes reconciliation, and rolling deployments on EKS clusters.",
        "Developed secure Django backend systems with authentication workflows for high-reliability verification pipelines.",
      ],
    },
    {
      title: "Software Development Intern",
      company: "Will2Care (IGENWILL Pvt. Ltd.)",
      location: "Hyderabad",
      period: "Jul 2025 – Oct 2025",
      current: false,
      achievements: [
        "Built and optimized backend services using Node.js and Express.js for healthcare platform APIs serving production users.",
        "Deployed and managed applications on AWS EC2; configured S3 for secure file storage and content distribution.",
        "Developed frontend components using React within an Agile team, delivering scalable features with security best practices.",
      ],
    },
    {
      title: "Technical Lead",
      company: "Free Software Wing (FSW), GRIET",
      location: "Hyderabad",
      period: "Nov 2023 – Mar 2025",
      current: false,
      achievements: [
        "Led a 10–15 member team to build and operate a MERN-stack event platform handling 1,000+ registrations with real-time features using Docker deployments on AWS.",
        "Owned backend architecture, CI/CD pipelines, and incident response for national-level events including 24-hour hackathons and FOSSFest.",
        "Mentored 50+ students on full-stack development, code reviews, and DevOps practices.",
      ],
    },
  ];

  const visible = showAll ? experiences : experiences.slice(0, 1);

  return (
    <section id="experience" className="section-container bg-[#131009]">
      <div className="container mx-auto">
        <SectionHeading>Work Experience</SectionHeading>

        <div className="relative mt-8 md:mt-12 max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#2A2018]" />

          {visible.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 sm:pl-10 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#131009] z-10 ${
                  exp.current ? "bg-[#E07838]" : "bg-[#2A2018]"
                }`}
              />

              <div className="bg-[#1C1814] p-4 sm:p-6 rounded-2xl border border-[#2A2018] hover:border-[#E07838]/25 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-[#EDE4D6]">{exp.title}</h3>
                    <p className="text-[#E07838] text-sm font-medium mt-0.5">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#5A4C44]">{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-[#E07838]/10 text-[#E07838] text-xs rounded-full border border-[#E07838]/20">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-[#8C7C6E] leading-relaxed">
                      <span className="text-[#E07838] mt-[3px] shrink-0 text-xs">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {experiences.length > 1 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-2.5 border border-[#2A2018] text-[#8C7C6E] text-sm font-medium rounded-full hover:border-[#E07838] hover:text-[#E07838] transition-all duration-300"
            >
              {showAll ? <>Show Less <ChevronUp className="h-4 w-4" /></> : <>Show More <ChevronDown className="h-4 w-4" /></>}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
