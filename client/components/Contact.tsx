"use client"

import type React from "react"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    try {
      await axios.post("http://localhost:7777/api/contact", formData)
      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Error sending message. Please try again.")
    }
    setIsSending(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="section-container bg-[#0C0950]/80">
      <div className="container mx-auto">
        <SectionHeading>Contact Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions, project inquiries, or just to say hello. I'm always open
              to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a
                    href="mailto:rajureavinash7@gmail.com"
                    className="text-gray-300 hover:text-[#FBE4D6] transition-colors"
                  >
                    rajureavinash7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <a href="tel:+917558524923" className="text-gray-300 hover:text-[#FBE4D6] transition-colors">
                    +91 7558524923
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-[#261FB3]/30 text-[#FBE4D6] mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#261FB3]/10 p-6 rounded-lg border border-[#261FB3]/30 backdrop-blur-sm"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#261FB3]/20 border border-[#261FB3]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FBE4D6]/50"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#261FB3]/20 border border-[#261FB3]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FBE4D6]/50"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#261FB3]/20 border border-[#261FB3]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FBE4D6]/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-[#261FB3]/20 border border-[#261FB3]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FBE4D6]/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#FBE4D6] text-[#0C0950] font-medium rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center"
                disabled={isSending}
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
