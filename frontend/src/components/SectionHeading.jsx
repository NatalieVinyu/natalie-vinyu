import React from 'react'

function SectionHeading({ index, file, title }) {
  return (
    <div className="flex flex-col items-center pb-12 text-center">
      <span className="font-[JetBrains_Mono,monospace] text-xs text-slate-400 dark:text-slate-500">
        {index} — {file}
      </span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B1220] sm:text-3xl dark:text-[#E7E9EE]">
        {title}
      </h2>
      <span className="mt-3 h-[2px] w-8 rounded-sm bg-[#E8A33D]" />
    </div>
  )
}

export default SectionHeading