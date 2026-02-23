import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import image from '../assets/natalie.jpg'

function Home() {
  //TRACK LIGHT/DARK MODE
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }, [theme]);

  return (
    <div id='home' className='scroll-smooth dark:bg-slate-950 text-white'>
      
      {/* LIGHTMODE/DARKMODE */}
      <div className='flex justify-end py-4 md:pr-4'>
        <button 
        type='button'
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          console.log("Toggling theme:", newTheme);
          setTheme(newTheme);
        }}
        className='rounded-full hover:bg-gray-200 dark:bg-gray-700 p-2'>
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>

      {/* HOME SECTION */}
      <section className='space-y-10 px-6 py-12 md:px-20 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
        <div className='col-span-2 flex flex-col justify-center'>
          <div className='space-y-6'>
            <div className='text-4xl sm:text-2xl md:text-7xl font-bold'>Hi, my name is <span className='text-fuchsia-300'>Natalie Vinyu</span></div>
            
            {/* TYPEWRITER EFFECT */}
            <span className='inline-flex gap-2 text-3xl md:text-5xl'>
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
            /></span>
          </div>

          <div className='flex md:flex-row gap-6 mt-6 dark:text-black'>
            <a 
              href='/assets/Natalie Vinyu CV.pdf'
              download
              className='px-6 py-3 bg-fuchsia-300 rounded-lg cursor-pointer'>
              Download CV
            </a>
            <a href="https://www.linkedin.com/in/natalie-vinyu" className='px-6 py-3 bg-fuchsia-100 border-2 border-fuchsia-300 rounded-lg cursor-pointer'>
              Let's Connect
            </a>
          </div>
        </div>

        <div className='col-span-1'>
          <img src={image} alt="" className='w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-lg' />
        </div>
        
      </section>
      
    </div>
  )
}

export default Home
