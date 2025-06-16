"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import FloatingElements from "./FloatingElements";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="h-full min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Floating elements in background */}
      <FloatingElements />

      <div className="container h-full mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing circular background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#261FB3] to-[#0C0950] blur-3xl opacity-30"></div>

              {/* Profile image or placeholder */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#261FB3] to-[#0C0950] p-1 shadow-xl shadow-[#261FB3]/20">
                  <div className="w-full h-full rounded-full bg-[#0C0950] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/profile.jpg?height=320&width=320"
                      alt="Avinash Rajure"
                      width={320}
                      height={320}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Orbit elements */}
                <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                  <div className="absolute top-0 translate-x-1/2 w-8 h-8 rounded-full bg-[#FBE4D6]/80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0C0950]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2a1 1 0 0 1 .894.553l2.991 5.657 6.615.96a1 1 0 0 1 .553 1.706l-4.803 4.674 1.133 6.596a1 1 0 0 1-1.45 1.054L12 20.058l-5.933 3.142a1 1 0 0 1-1.45-1.054l1.132-6.596-4.803-4.674a1 1 0 0 1 .553-1.706l6.615-.96 2.991-5.657A1 1 0 0 1 12 2z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full animate-spin-slow-reverse">
                  <div className="absolute bottom-0 translate-x-1/2 w-10 h-10 rounded-full bg-[#261FB3]/80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-3/5 text-center md:text-left md:mt-0 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="text-[#FBE4D6] inline-block relative">
                Avinash
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FBE4D6]"></span>
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center justify-center md:justify-start text-3xl font-bold text-white mb-2">
                I'm a
                <div className="ml-3 h-12 overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -120, -240, -360, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                      times: [0, 0.2, 0.4, 0.6, 1],
                    }}
                    className="flex flex-col gap-3 text-[#FBE4D6]"
                  >
                    <span>Developer</span>
                    <span>Tech Lead</span>
                    <span>ML Enthusiast</span>
                    <span>Problem Solver</span>
                  </motion.div>
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-lg">
                Building digital experiences with innovative solutions. Specializing in full-stack development,
                artificial intelligence, and machine learning.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a
                href="#about"
                className="px-6 py-3 bg-[#FBE4D6] text-[#0C0950] font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:bg-white"
              >
                Contact Me
              </a>

              <a
                href="/Avinash-resume.pdf"
                className="px-6 py-3 border border-[#FBE4D6] text-[#FBE4D6] font-medium rounded-full hover:bg-[#FBE4D6]/10 transition-all duration-300 flex items-center"
                download
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
