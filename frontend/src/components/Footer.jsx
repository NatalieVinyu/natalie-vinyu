import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

function Footer() {
  const links = [
    { icon: <Github size={16} />, href: 'https://github.com/NatalieVinyu', label: 'GitHub' },
    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/natalie-vinyu', label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: 'mailto:natalievinyu@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-slate-300 bg-[#EDEFE9] px-6 py-12 dark:border-[#1E2A3D] dark:bg-[#0B1220] dark:text-[#E7E9EE]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Natalie Vinyu</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Building digital experiences</p>
          </div>

          <div className="flex gap-3">
            {links.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-500 transition-colors duration-300 hover:border-[#E8A33D] hover:text-[#0B1220] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] dark:border-[#1E2A3D] dark:text-slate-400 dark:hover:text-[#F2C879]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-slate-300 pt-6 text-center dark:border-[#1E2A3D]">
          <p className="font-[JetBrains_Mono,monospace] text-xs text-slate-400 dark:text-slate-500">
            ~/portfolio <span className="motion-safe:animate-pulse">_</span>
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Natalie Vinyu — made with lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer