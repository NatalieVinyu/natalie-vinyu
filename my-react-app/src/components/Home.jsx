import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

function Home() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

  return (
    <div>
      {/* LIGHTMODE/DARKMODE */}
      <div className='flex justify-end'>
        <button 
        type='button'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
        className='rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 p-2'>
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>

      <section className='h-screen text-black dark:bg-black dark:text-white flex flex-col justify-center space-y-10 px-6 py-12 md:px-20 md:py-24'>
        <div className='space-y-8'>
          <div className='text-4xl md:text-7xl font-bold'>Hi, my name is Natalie Vinyu</div>
          <p className='text-3xl md:text-5xl'>i'm a Software Engineer</p>
        </div>

        <div className='flex md:flex-row gap-6 mt-6'>
          <button className='px-6 py-3 bg-fuchsia-200 rounded-lg cursor-pointer'>Download CV</button>
          <button className='px-6 py-3 bg-fuchsia-100 rounded-lg cursor-pointer'>Let's Connect</button>
        </div>
      </section>
      
    </div>
  )
}

export default Home
