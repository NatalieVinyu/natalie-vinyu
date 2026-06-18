import React, { useState } from 'react'
import { CodeXml, Sparkles, Rocket, Copy, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

function About() {
  // ARRAY OF HIGHLIGHTS FOR ABOUT SECTION
  const highlights = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices',
      icon: <CodeXml size={22} />,
      accent: 'amber',
    },
    {
      title: 'Modern Design',
      description: 'Creating beautiful interfaces with attention to detail',
      icon: <Sparkles size={22} />,
      accent: 'teal',
    },
    {
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience',
      icon: <Rocket size={22} />,
      accent: 'amber',
    },
  ]

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const json = JSON.stringify(
      Object.fromEntries(skills.map(({ key, skills }) => [key, skills])),
      null,
      2
    )
    try {
      await navigator.clipboard.writeText(json)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard not available, fail silently
    }
  }

  return (
    <div className="scroll-smooth bg-[#EDEFE9] dark:bg-[#0B1220]">
      {/* ABOUT ME SECTION */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading index="02" file="about.md" title="About Me" />

        <div>

          {/* JSON FILE PANEL */}
          <div className="overflow-hidden rounded-md border border-[#1E2A3D] shadow-lg">
            {/* FILE HEADER BAR */}
            <div className="flex items-center gap-2 border-b border-[#1E2A3D] bg-[#0E1622] px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3FA9A0]" />
              <span className="font-[JetBrains_Mono,monospace] text-xs text-slate-400">
              about.jsx
            </span>
            </div>
          
          {/* CODE BODY */}
          <div className="flex bg-[#0B1220] px-2 py-6 font-[JetBrains_Mono,monospace] text-[13px] leading-[2.1] sm:text-sm">
            {/* GUTTER */}
            <div className="hidden select-none flex-col items-end px-3 text-right text-slate-600 sm:flex">
              <p>
                I'm an aspiring software and web developer currently working toward my certification, with a
                strong interest in frontend development. I genuinely enjoy learning how computers and software
                work and love turning ideas into interactive, user-friendly experiences.
              </p>
              <p>
                What started as curiosity has grown into a real passion for building things on the web. I'm
                always eager to learn new technologies, improve my skills, and gain hands-on experience, and I'm
                excited about opportunities that allow me to grow, collaborate, and continue learning as I move
                forward in my career.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default About