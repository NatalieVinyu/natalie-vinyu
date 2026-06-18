import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

function Skills() {
  // ARRAY OF SKILLS FOR SKILLS SECTION
  const skills = [
    {
      key: 'frontend',
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      key: 'backend',
      title: 'Backend',
      skills: ['SQL', 'Node.js', 'APIs'],
    },
    {
      key: 'tools',
      title: 'Tools & Others',
      skills: ['VS Code', 'Git & GitHub', 'Chrome DevTools'],
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
    <div id="skills" className="scroll-smooth bg-[#EDEFE9] dark:bg-[#0B1220]">
      {/* SKILLS SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <SectionHeading index="03" file="skills.json" title="Skills & Technologies" />

        {/* JSON FILE PANEL */}
        <div className="overflow-hidden rounded-md border border-[#1E2A3D] shadow-lg">
          {/* file header bar */}
          <div className="flex items-center justify-between border-b border-[#1E2A3D] bg-[#0E1622] px-4 py-2.5">
            <span className="flex items-center gap-2 font-[JetBrains_Mono,monospace] text-xs text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8A33D]" />
              skills.json
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 font-[JetBrains_Mono,monospace] text-xs text-slate-400 transition-colors hover:text-[#E7E9EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D]"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'copied' : 'copy'}
            </button>
          </div>

          {/* CODE BODY */}
          <div className="flex bg-[#0B1220] px-2 py-6 font-[JetBrains_Mono,monospace] text-[13px] leading-[2.1] sm:text-sm">
            {/* GUTTER */}
            <div className="hidden select-none flex-col items-end px-3 text-right text-slate-600 sm:flex">
              {Array.from({ length: skills.length + 2 }).map((_, i) => (
                <span key={i}>{String(i + 1).padStart(2, '0')}</span>
              ))}
            </div>

            <div className="flex-1 border-l border-[#1E2A3D] px-4 text-[#E7E9EE]">
              <p>{'{'}</p>
              {skills.map(({ key, skills: items }, index) => (
                <p key={key} className="pl-4">
                  <span className="text-[#3FA9A0]">"{key}"</span>: [
                  <span className="inline-flex flex-wrap gap-x-1">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="cursor-default text-[#E8A33D] decoration-[#E8A33D] underline-offset-2 transition-colors hover:underline"
                      >
                        "{skill}"{i < items.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </span>
                  ]{index < skills.length - 1 ? ',' : ''}
                </p>
              ))}
              <p>{'}'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills