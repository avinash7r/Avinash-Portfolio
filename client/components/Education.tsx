"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import SectionHeading from "./SectionHeading"

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
      location: "Hyderabad",
      period: "Aug 2022 – May 2026",
      cgpa: "8.3 / 10",
    },
    {
      degree: "Intermediate in MPC (Maths, Physics, Chemistry)",
      institution: "Vidya Vikas Junior College",
      location: "Bodhan",
      period: "2020 – 2022",
      cgpa: null,
    },
  ]

  return (
    <section id="education" className="section-container bg-[#131009]">
      <div className="container mx-auto">
        <SectionHeading>Education</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1814] p-6 rounded-2xl border border-[#2A2018] hover:border-[#E07838]/25 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E07838]/10 text-[#E07838] shrink-0 mt-0.5">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#EDE4D6] leading-snug">{edu.degree}</h3>
                  <p className="text-[#E07838] text-sm mt-1.5 font-medium">{edu.institution}</p>
                  <p className="text-[#5A4C44] text-xs mt-0.5">{edu.location}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs text-[#8C7C6E]">{edu.period}</span>
                    {edu.cgpa && (
                      <span className="px-2 py-0.5 bg-[#E07838]/10 text-[#E07838] text-xs rounded-full border border-[#E07838]/20">
                        CGPA {edu.cgpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
