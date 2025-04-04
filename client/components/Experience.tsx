"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import SectionHeading from "./SectionHeading"

const Experience = () => {
  const experiences = [
    {
      title: "Technical Lead",
      company: "Free Software Wing",
      location: "Hyderabad",
      period: "Nov 2023 - Present",
      achievements: [
        "Led a 24-hour hackathon and FOSSFest, driving participation and promoting open-source technologies.",
        "Designed and maintained the club's website using the MERN stack, automating event registrations and updates.",
        "Mentored students in open-source development, fostering collaboration and engagement.",
        "Managed large-scale technical events, enhancing the club's visibility in the tech community.",
      ],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <div className="container mx-auto">
        <SectionHeading>Work Experience</SectionHeading>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-[#261FB3]/50"></div>

          {experiences.map((exp, index) => (
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

              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                <div className="bg-[#261FB3]/10 p-6 rounded-lg border border-[#261FB3]/30 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-3">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-[#FBE4D6]">
                        {exp.company}, {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#FBE4D6]/10 text-[#FBE4D6] rounded-full text-sm">{exp.period}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">Key Achievements:</h4>
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
      </div>
    </section>
  )
}

export default Experience

