import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0950] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  )
}

