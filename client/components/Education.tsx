"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import SectionHeading from "./SectionHeading"

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
      location: "Hyderabad",
      period: "Nov 2022 - Present",
    },
    {
      degree: "Intermediate in MPC (Maths, Physics, Chemistry)",
      institution: "Vidya Vikas Junior College",
      location: "Bodhan",
      period: "2020 - 2022",
    },
  ]

  return (
    <section id="education" className="section-container bg-[#0C0950]/80">
      <div className="container mx-auto">
        <SectionHeading>Education</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#261FB3]/10 p-6 rounded-lg border border-[#261FB3]/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-4 mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-[#FBE4D6] mt-1">{edu.institution}</p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
              </div>

              <div className="ml-16">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-[#FBE4D6] mr-2" />
                  <span className="text-gray-300">{edu.period}</span>
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

