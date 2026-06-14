"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Alemeno",
    location: "Hyderabad",
    period: "April 2025 – Present",
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
    achievements: [
      "Led a 10–15 member team to build and operate a MERN-stack event platform handling 1,000+ registrations with real-time features using Docker deployments on AWS.",
      "Owned backend architecture, CI/CD pipelines, and incident response for national-level events including 24-hour hackathons and FOSSFest.",
      "Mentored 50+ students on full-stack development, code reviews, and DevOps practices.",
    ],
  },
];



  return (
    <section id="experience" className="section-container bg-[#0C0950]/80">
      <div className="container mx-auto">
        <SectionHeading>Work Experience</SectionHeading>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-[#261FB3]/50"></div>

          {(showAll ? experiences : experiences.slice(0, 1)).map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-[#FBE4D6] border-4 border-[#0C0950] z-10"></div>

              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                }`}
              >
                <div className="bg-[#261FB3]/10 p-6 rounded-lg border border-[#261FB3]/30 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-3">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-[#FBE4D6]">
                        {exp.company}, {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#FBE4D6]/10 text-[#FBE4D6] rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {experiences.length > 1 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 border border-[#FBE4D6] text-[#FBE4D6] font-medium rounded-full hover:bg-[#FBE4D6]/10 transition-all duration-300"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Show More <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
