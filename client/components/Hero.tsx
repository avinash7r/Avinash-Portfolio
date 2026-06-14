"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import FloatingElements from "./FloatingElements";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0E0B08]"
    >
      <FloatingElements />

      <div className="container mx-auto px-4 sm:px-6 pt-28 pb-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content */}
          <motion.div
            className="md:w-3/5 text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-[#E07838] font-semibold tracking-widest text-sm uppercase mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              DevOps · Platform Engineering · Cloud
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#EDE4D6] mb-6 leading-[1.1] font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Avinash
              <br />
              <span className="text-[#E07838]">Rajure</span>
            </motion.h1>

            <motion.p
              className="text-[#8C7C6E] text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Building and operating cloud-native infrastructure on AWS -
              Kubernetes, Terraform, GitOps, and CI/CD pipelines that are
              automated, reproducible, and production-ready.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <a
                href="#about"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#E07838] text-[#0E0B08] font-semibold rounded-full hover:bg-[#F08848] transition-all duration-300"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/Avinash-resume.pdf"
                className="flex items-center gap-2 px-7 py-3.5 border border-[#2A2018] text-[#8C7C6E] font-medium rounded-full hover:border-[#E07838] hover:text-[#E07838] transition-all duration-300"
                download
              >
                Resume <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="md:w-2/5 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-[#E07838] via-[#9A4A1C] to-[#1C1814] shadow-2xl shadow-[#E07838]/10">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1C1814]">
                  <Image
                    src="/profile.jpg"
                    alt="Avinash Rajure"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-[#E07838] opacity-[0.07] blur-3xl -z-10 scale-125" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
