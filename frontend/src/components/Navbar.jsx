import React, { useEffect, useState } from 'react'

const TABS = [
  { id: 'home', label: 'home', ext: 'jsx' },
  { id: 'about', label: 'about', ext: 'md' },
  { id: 'skills', label: 'skills', ext: 'json' },
  { id: 'projects', label: 'projects', ext: 'tsx' },
  { id: 'contact', label: 'contact', ext: 'sh' },
]

function Navbar() {
  const [active, setActive] = useState('home')

  // SCROLL-SPY: highlight the tab for whichever section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    TABS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-0 z-50 border-b border-slate-200 bg-[#EDEFE9]/90 backdrop-blur-sm dark:border-[#1E2A3D] dark:bg-[#0B1220]/90">
      {/* TAB BAR */}
      <nav className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-3 py-2 md:justify-center md:gap-2">
        {TABS.map(({ id, label, ext }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`group relative flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] ${
                isActive
                  ? 'bg-[#E8A33D]/10 text-[#0B1220] dark:text-[#F2C879]'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {/* file-type dot */}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#E8A33D]'
                    : 'bg-slate-300 group-hover:bg-[#3FA9A0] dark:bg-slate-600'
                }`}
              />
              <span className="font-[JetBrains_Mono,monospace] text-[13px]">
                {label}
                <span className="text-slate-400 dark:text-slate-500">.{ext}</span>
              </span>

              {/* active underline */}
              <span
                className={`absolute -bottom-[9px] left-2 right-2 h-[2px] rounded-full bg-[#E8A33D] transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar