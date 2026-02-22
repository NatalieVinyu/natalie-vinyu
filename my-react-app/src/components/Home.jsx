import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import image from '../assets/natalie.jpg'

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

      <section className='h-screen text-black dark:bg-black dark:text-white  space-y-10 px-6 py-12 md:px-20 md:py-24 grid grid-cols-3'>
        <div className='col-span-2 flex flex-col justify-center'>
          <div className='space-y-6'>
            <div className='text-4xl md:text-7xl font-bold'>Hi, my name is <span className='text-fuchsia-300'>Natalie Vinyu</span></div>
            <p className='flex gap-4 text-3xl md:text-5xl'>
              I'm a{""}
              <Typewriter
              options={{
              strings: ['Software Engineerer', 'Web Developer', 'Frontend Developer'],
              autoStart: true,
              loop: true,
              deleteSpeed: 90,
              cursor: '|',
              delay: 75,
            }}
            /></p>
          </div>

          <div className='flex md:flex-row gap-6 mt-6'>
            <button className='px-6 py-3 bg-fuchsia-200 rounded-lg cursor-pointer'>
              <a href="">Download CV</a>
            </button>
            <button className='px-6 py-3 bg-fuchsia-100 rounded-lg cursor-pointer'>
              <a href="https://www.linkedin.com/in/natalie-vinyu">Let's Connect</a>
            </button>
          </div>
        </div>

        <div className='col-span-1'>
          <img src={image} alt="" className='w-85 h-110 rounded-lg shadow-lg' />
        </div>
        
      </section>
      
    </div>
  )
}

export default Home
