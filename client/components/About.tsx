"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-container bg-[#131009]">
      <div className="container mx-auto">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-5 text-[#EDE4D6]">
              DevOps Engineer & Platform Engineer
            </h3>
            <p className="text-[#8C7C6E] mb-4 leading-relaxed">
              I'm Avinash Rajure, a final-year B.Tech student at GRIET, Hyderabad, focused on DevOps
              and cloud engineering. I build automated, scalable infrastructure using Kubernetes,
              Terraform, and Docker on Linux-based systems.
            </p>
            <p className="text-[#8C7C6E] mb-8 leading-relaxed">
              Currently interning as a{" "}
              <span className="text-[#EDE4D6] font-medium">Software Development Engineer Intern at Alemeno</span>
              , where I provision production-grade AWS infrastructure using Terraform, operate
              containerized workloads on Amazon EKS, and build GitHub Actions CI/CD pipelines with
              GitOps delivery via Argo CD. I previously interned at{" "}
              <span className="text-[#EDE4D6] font-medium">Will2Care (IGENWILL Pvt. Ltd.)</span>
              , working on Node.js/Express backend APIs and AWS deployments. As{" "}
              <span className="text-[#EDE4D6] font-medium">Technical Lead at the Free Software Wing (FSW)</span>
              , I led student developer teams, built event platforms, and mentored 50+ students.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:rajureavinash7@gmail.com"
                className="flex items-center gap-3 text-[#8C7C6E] hover:text-[#E07838] transition-colors group"
              >
                <Mail className="h-4 w-4 text-[#E07838] shrink-0" />
                rajureavinash7@gmail.com
              </a>
              <a
                href="tel:+917558524923"
                className="flex items-center gap-3 text-[#8C7C6E] hover:text-[#E07838] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#E07838] shrink-0" />
                +91 7558524923
              </a>
              <a
                href="https://github.com/avinash7r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8C7C6E] hover:text-[#E07838] transition-colors"
              >
                <Github className="h-4 w-4 text-[#E07838] shrink-0" />
                avinash7r
              </a>
              <a
                href="https://linkedin.com/in/avinash-rajure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8C7C6E] hover:text-[#E07838] transition-colors"
              >
                <Linkedin className="h-4 w-4 text-[#E07838] shrink-0" />
                avinash-rajure
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#1C1814] p-5 sm:p-7 rounded-2xl border border-[#2A2018] flex flex-col justify-center"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#5A4C44] mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-[#E07838] pl-5">
                <p className="text-[#EDE4D6] font-semibold">B.Tech in Artificial Intelligence & Machine Learning</p>
                <p className="text-[#E07838] text-sm mt-1">Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)</p>
                <p className="text-[#8C7C6E] text-sm mt-0.5">Hyderabad · Aug 2022 – May 2026</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-[#E07838]/10 text-[#E07838] text-xs rounded-full border border-[#E07838]/20">CGPA 8.3 / 10</span>
              </div>
              <div className="border-l-2 border-[#2A2018] pl-5">
                <p className="text-[#EDE4D6] font-semibold">Intermediate in MPC</p>
                <p className="text-[#8C7C6E] text-sm mt-1">Vidya Vikas Junior College</p>
                <p className="text-[#8C7C6E] text-sm">Bodhan · 2020 – 2022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
