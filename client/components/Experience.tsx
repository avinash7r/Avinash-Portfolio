"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Experience = () => {
const experiences = [
  {
    title: "Software Development Intern",
    company: "Will2Care (IGENWILL Pvt. Ltd.)",
    location: "Hyderabad",
    period: "Jul 2025 – Oct 2025",
    achievements: [
      "Developed and maintained production-grade web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Optimized backend APIs for scalability and reliability, implementing authentication, file handling, and secure communication layers.",
      "Worked with GitHub Actions and Docker to support deployment workflows targeting AWS EC2 environments.",
      "Collaborated in Agile sprints to deliver responsive, feature-rich interfaces, improving overall system performance and usability.",
      "Applied containerized development and automation practices to improve release consistency and deployment stability.",
    ],
  },
  {
    title: "Technical Lead",
    company: "Free Software Wing (FSW), GRIET",
    location: "Hyderabad",
    period: "Nov 2023 – Mar 2025",
    achievements: [
      "Led a technical team of 10–15 developers to build and maintain MERN-based platforms for large-scale college events.",
      "Designed and deployed full-stack applications using AWS and Docker, focusing on reliability and maintainability.",
      "Organized and managed national-level events including FOSSFest and 24-hour hackathons with 400+ participants.",
      "Mentored 50+ students in web development fundamentals, Git workflows and backend design.",
      "Promoted free and open-source software through workshops, collaborative projects, and community-driven initiatives.",
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
      </div>
    </section>
  );
};

export default Experience;
