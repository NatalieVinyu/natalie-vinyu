import React, { useEffect, useState } from 'react'
import { Sun, Moon, Download, ArrowUpRight } from 'lucide-react'
import Typewriter from 'typewriter-effect'
import image from '../assets/natalie.jpg'

function Home() {
  // TRACK LIGHT/DARK MODE
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) setTheme(storedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // LOAD DISPLAY + MONO TYPEFACES ONCE
  useEffect(() => {
    if (document.getElementById('portfolio-fonts')) return
    const link = document.createElement('link')
    link.id = 'portfolio-fonts'
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&display=swap'
    document.head.appendChild(link)
  }, [])

  return (
    <div
      id="home"
      className="scroll-smooth bg-[#EDEFE9] font-[Space_Grotesk,sans-serif] text-[#0B1220] dark:bg-[#0B1220] dark:text-[#E7E9EE]"
    >
      {/* faint graph-paper grid */}
      <section
        className="bg-[radial-gradient(circle,rgba(11,18,32,0.12)_1px,transparent_1px)] bg-[size:22px_22px] dark:bg-[radial-gradient(circle,rgba(231,233,238,0.08)_1px,transparent_1px)]"
      >
        <div className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-16">
          {/* UTILITY ROW */}
          <div className="mb-10 flex items-center justify-between font-[JetBrains_Mono,monospace] text-xs text-slate-500 dark:text-slate-400">
            <span>~/portfolio/home.jsx</span>
            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle color theme"
              className="rounded-md border border-slate-300 p-1.5 text-slate-600 transition-colors hover:border-[#E8A33D] hover:text-[#0B1220] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] dark:border-[#1E2A3D] dark:text-slate-300 dark:hover:text-white"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* HERO */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-center">
            {/* CODE-STYLED INTRO */}
            <div className="col-span-2 flex flex-col gap-8">
              <div className="flex font-[JetBrains_Mono,monospace] text-[13px] leading-[2.05] md:text-sm md:leading-[2.3]">
                {/* gutter */}
                <div className="hidden select-none flex-col items-end pr-4 text-right text-slate-400/70 sm:flex dark:text-slate-600">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i}>{String(i + 1).padStart(2, '0')}</span>
                  ))}
                </div>

                <div className="border-l border-slate-300 pl-4 dark:border-[#1E2A3D]">
                  <p className="text-slate-400 dark:text-slate-500">// Software Engineer</p>
                  <p>
                    <span className="text-[#3FA9A0]">const</span> developer = {'{'}
                  </p>
                  <p className="pl-4">
                    name: <span className="text-[#E8A33D]">'Natalie Vinyu'</span>,
                  </p>
                  <p className="pl-4">
                    role:{' '}
                    <span className="text-[#E8A33D]">
                      '
                      <Typewriter
                        options={{
                          strings: ['Software Engineer', 'Web Developer', 'Frontend Developer'],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 50,
                          cursor: '|',
                          delay: 60,
                        }}
                      />
                      '
                    </span>
                    ,
                  </p>
                  <p className="pl-4 flex items-center gap-1.5">
                    status: <span className="text-[#3FA9A0]">'open to work'</span>
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Building clean, considered interfaces.
              </h1>

              <div className="flex items-center gap-2 font-[JetBrains_Mono,monospace] text-xs text-slate-500 dark:text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FA9A0] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3FA9A0]" />
                </span>
                available for new projects
              </div>

              {/* COMMAND-STYLE CTAS */}
              <div className="flex flex-wrap gap-4 font-[JetBrains_Mono,monospace] text-sm">
                <a
                  href="/assets/Natalie Vinyu CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-[#E8A33D] px-5 py-2.5 font-medium text-[#0B1220] transition-colors hover:bg-[#d6922f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1220] dark:focus-visible:ring-white"
                >
                  <Download size={15} />
                  download_cv.pdf
                </a>
                <a
                  href="https://www.linkedin.com/in/natalie-vinyu"
                  className="inline-flex items-center gap-2 rounded-md border border-[#3FA9A0] px-5 py-2.5 font-medium text-[#0B1220] transition-colors hover:bg-[#3FA9A0]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9A0] dark:text-[#E7E9EE]"
                >
                  lets_connect()
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* PORTRAIT AS A "FILE PREVIEW" */}
            <div className="col-span-1">
              <div className="relative mx-auto w-full max-w-sm md:max-w-md">
                <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[#E8A33D]" />
                <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-[#E8A33D]" />
                <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-[#E8A33D]" />
                <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-[#E8A33D]" />

                <div className="overflow-hidden rounded-md border border-slate-300 dark:border-[#1E2A3D]">
                  <img
                    src={image}
                    alt="Portrait of Natalie Vinyu"
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between font-[JetBrains_Mono,monospace] text-[11px] text-slate-500 dark:text-slate-400">
                  <span>natalie.jpg</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3FA9A0]" />
                    available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home