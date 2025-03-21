import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0C0950] py-10 border-t border-[#261FB3]/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white font-poppins">
              <span className="text-[#FBE4D6]">Avinash</span>
              <span>.dev</span>
            </a>
            <p className="text-gray-400 mt-2">Building digital experiences with innovative solutions.</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/avinash7r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] hover:bg-[#261FB3] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/avinash-rajure"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] hover:bg-[#261FB3] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rrajureavinash7@gmail.com"
              className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] hover:bg-[#261FB3] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#261FB3]/30 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Avinash Rajure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

