import React from 'react'
import { Code, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

function Projects() {
  // ARRAY OF PROJECTS FOR PROJECTS SECTION
  const myprojects = [
    {
      image: project1,
      title: 'RiverView Spa',
      description:
        'A fully responsive spa website redesign built with Bootstrap to enhance usability, aesthetics, and cross-device performance.',
      skills: ['HTML', 'CSS', 'Bootstrap'],
      codeLink: 'https://github.com/NatalieVinyu/River-View-Spa',
      demoLink: 'https://riverviewspa.netlify.app/',
    },
    {
      image: project2,
      title: 'Quiz Hub',
      description:
        'A team-developed quiz application showcasing collaborative problem-solving, clean UI design, and interactive JavaScript-driven gameplay.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/NatalieVinyu/Quiz',
      demoLink: 'https://quizprj.netlify.app/',
    },
    {
      image: project3,
      title: 'Dictionary App',
      description:
        'A simple and user-friendly dictionary application that allows users to search for word definitions in real time using an external API.',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
      codeLink: 'https://github.com/NatalieVinyu/Dictionary-App',
      demoLink: 'https://jocular-trifle-574e97.netlify.app/',
    },
  ]

  // turn a title into a plausible filename, e.g. "RiverView Spa" -> "RiverViewSpa.tsx"
  const toFilename = (title) => `${title.replace(/[^a-zA-Z0-9]/g, '')}.tsx`

  return (
    <div id="projects" className="scroll-smooth bg-[#EDEFE9] dark:bg-[#0B1220]">
      {/* PROJECTS SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading index="04" file="projects.tsx" title="Projects" />

        <p className="mx-auto max-w-xl pb-14 text-center text-slate-500 dark:text-slate-400">
          A few recent builds that show how I think through structure, interaction, and detail.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {myprojects.map((item, index) => (
            <div
              className="group flex flex-col overflow-hidden rounded-md border border-slate-300 transition-colors duration-300 hover:border-[#E8A33D] dark:border-[#1E2A3D]"
              key={index}
            >
              {/* file header bar */}
              <div className="flex items-center gap-2 border-b border-slate-300 bg-slate-100 px-4 py-2.5 dark:border-[#1E2A3D] dark:bg-[#0E1622]">
                <Code size={13} className="text-slate-400 dark:text-slate-500" />
                <span className="font-[JetBrains_Mono,monospace] text-xs text-slate-500 dark:text-slate-400">
                  {toFilename(item.title)}
                </span>
              </div>

              {/* preview */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0B1220] dark:text-[#E7E9EE]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>

                <ul className="flex flex-wrap gap-2 font-[JetBrains_Mono,monospace] text-xs">
                  {item.skills.map((skill, i) => (
                    <li
                      className="rounded-sm bg-slate-200 px-2 py-1 text-slate-600 dark:bg-[#1E2A3D] dark:text-slate-300"
                      key={i}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-2 font-[JetBrains_Mono,monospace] text-sm">
                  <a
                    href={item.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-[#3FA9A0] py-2 text-[#0B1220] transition-colors hover:bg-[#3FA9A0]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9A0] dark:text-[#E7E9EE]"
                  >
                    <Code size={15} />
                    view_code
                  </a>
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-[#E8A33D] py-2 font-medium text-[#0B1220] transition-colors hover:bg-[#d6922f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1220] dark:focus-visible:ring-white"
                  >
                    <ExternalLink size={15} />
                    live_demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects