import React from 'react'
import { CodeXml, Sparkles, Rocket } from 'lucide-react';

function About() {
  const highlights = [
    { 
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices",
      icon: <CodeXml />
    },
    {
      title: "Modern Design",
      description: "Creating beautiful interfaces with attention detail",
      icon: <Sparkles />
    },
    {
      title: "Performance",
      description: "Building fast, optimized applications for the best user experience",
      icon: <Rocket />
    }
  ]

  return (
    <div className='about-section scroll-smooth bg-fuchsia-50 dark:bg-gray-900 dark:text-white'>
      <section id='about' className='flex flex-col items-center max-w-7xl mx-auto px-8 py-24 '>
        
        <div className='flex flex-col items-center pb-6'>
          <h1 className='sm:text-2xl md:text-3xl font-bold pb-2'>About Me</h1>
          <div className='w-25 h-1 bg-fuchsia-200 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <div className='flex flex-col items-start space-y-4'>
            <p>I’m an aspiring software and web developer currently working toward my certification, with a strong interest in frontend development. I genuinely enjoy learning how computers and software work and love turning ideas into interactive, user-friendly experiences.</p>
            <p>What started as curiosity has grown into a real passion for building things on the web. I’m always eager to learn new technologies, improve my skills, and gain hands-on experience, and I’m excited about opportunities that allow me to grow, collaborate, and continue learning as I move forward in my career.</p>
            <p> When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
          </div>

          <div className='flex flex-col gap-6'>
            {highlights.map((item, index) => (
            <div className='flex border-2 border-fuchsia-300 rounded-xl p-5' key={index}>
              
              {/* LUCIDE REACT ICONS */}
              <div className=' dark:bg-slate-500 bg-fuchsia-100 rounded-xl content-center text-2xl p-4 mr-4'>
                <p>{item.icon}</p>
              </div>
                
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-400'>{item.description}</p>
              </div>
            </div>
            ))}
          </div>
          
        </div>
        
      </section>
    </div>
  )
}

export default About
