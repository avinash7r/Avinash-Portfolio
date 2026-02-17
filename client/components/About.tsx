"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-container bg-[#0C0950]/80">
      <div className="container mx-auto">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#FBE4D6]">
              DevOps Engineer & Cloud Developer
            </h3>
            <p className="text-gray-300 mb-4">
              I'm Avinash Rajure, a final-year B.Tech student at GRIET,
              Hyderabad, with a strong interest in DevOps and cloud engineering.
              I focus on understanding and building automated, scalable
              infrastructure using Docker, Kubernetes, and Terraform on
              Linux-based systems.
            </p>

            <p className="text-gray-300 mb-6">
              I previously interned as a
              <span className="text-[#FBE4D6]">
                {" "}
                Software Development Intern at Will2Care (IGENWILL Pvt. Ltd.)
              </span>
              , where I worked on full-stack applications, backend performance
              improvements, and cloud deployments on AWS. As the
              <span className="text-[#FBE4D6]">
                {" "}
                Technical Lead at the Free Software Wing (FSW)
              </span>
              , I led student developer teams, built event platforms, and
              handled deployment and hosting responsibilities while promoting
              open-source software.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#FBE4D6] mr-3" />
                <a
                  href="mailto:rajureavinash7@gmail.com"
                  className="text-gray-300 hover:text-[#FBE4D6] transition-colors"
                >
                  rajureavinash7@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#FBE4D6] mr-3" />
                <a
                  href="tel:+917558524923"
                  className="text-gray-300 hover:text-[#FBE4D6] transition-colors"
                >
                  +91 7558524923
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 text-[#FBE4D6] mr-3" />
                <a
                  href="https://github.com/avinash7r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FBE4D6] transition-colors"
                >
                  avinash7r
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-[#FBE4D6] mr-3" />
                <a
                  href="https://linkedin.com/in/avinash-rajure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FBE4D6] transition-colors"
                >
                  avinash-rajure
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#261FB3]/10 p-6 rounded-lg border border-[#261FB3]/30 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-4 text-[#FBE4D6]">Languages</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-white font-medium">English</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="bg-[#FBE4D6] h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Hindi</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="bg-[#FBE4D6] h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Telugu</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="bg-[#FBE4D6] h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Marathi</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="bg-[#FBE4D6] h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-[#FBE4D6]">Education</h3>
            <div className="mb-4">
              <p className="text-white font-medium">
                B.Tech in AI and Machine Learning
              </p>
              <p className="text-gray-300">
                Gokaraju Rangaraju Institute of Engineering and Technology
                (2022–2026)
              </p>
            </div>
            <div>
              <p className="text-white font-medium">Intermediate in MPC</p>
              <p className="text-gray-300">
                Vidya Vikas Junior College, Bodhan
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
