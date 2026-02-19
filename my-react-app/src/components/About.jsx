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
      icon: <Sparkles/>
    },
    {
      title: "Performance",
      description: "Building fast, optimized applications for the best user experience",
      icon: <Rocket/>
    }
  ]

  return (
    <div className='bg-fuchsia-50'>
      <section id='about' className='flex flex-col items-center max-w-7xl mx-auto px-8 py-24 '>
        <div></div>
        <div className='pb-6'>
          <h1 className='text-4xl font-bold pb-2'>About Me</h1>
          <div className='w-full h-1 bg-fuchsia-200 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <div className='flex flex-col items-start space-y-4'>
            <p>I'm a web developer with a passion for creating exceptional digital experiences. My journey in web development started with a curiosity about how things work on the web, and has evolved into a career focused on building impactful solutions.</p>
            <p>I specialize in modern web technologies and love staying up-to-date with the latest trends and best practices. Whether it's crafting pixel-perfect interfaces or architecting robust backend systems, I bring dedication and creativity to every project.</p>
            <p> When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
          </div>

          <div className='flex flex-col gap-6'>
            {highlights.map((item, index) => (
            <div className='flex border-2 border-fuchsia-300 rounded-xl p-5' key={index}>
              
              {/* LUCIDE REACT ICONS */}
              <div className='bg-fuchsia-100 rounded-xl content-center text-2xl p-4 mr-4'>
                <p>{item.icon}</p>
              </div>
                
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
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
