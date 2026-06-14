import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0E0B08] py-12 border-t border-[#2A2018]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#home" className="text-xl font-bold font-poppins">
              <span className="text-[#E07838]">Avinash</span>
            </a>
            <p className="text-[#5A4C44] text-sm mt-1.5">
              Building cloud-native infrastructure that scales.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/avinash7r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1814] border border-[#2A2018] text-[#8C7C6E] hover:text-[#E07838] hover:border-[#E07838]/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/avinash-rajure"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1814] border border-[#2A2018] text-[#8C7C6E] hover:text-[#E07838] hover:border-[#E07838]/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:rajureavinash7@gmail.com"
              className="p-2.5 rounded-xl bg-[#1C1814] border border-[#2A2018] text-[#8C7C6E] hover:text-[#E07838] hover:border-[#E07838]/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#2A2018] mt-8 pt-6 text-center">
          <p className="text-[#5A4C44] text-sm">
            &copy; {new Date().getFullYear()} Avinash Rajure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
