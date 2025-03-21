import type React from "react"

interface SectionHeadingProps {
  children: React.ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="flex justify-center mb-12">
      <h2 className="section-heading">{children}</h2>
    </div>
  )
}

export default SectionHeading

