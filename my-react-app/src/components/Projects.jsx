import React from 'react'
import { Code, ExternalLink } from 'lucide-react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

function Projects() {
  const myprojects = [
    {
      image: project1,
      title: "RiverView Spa",
      description: "A fully responsive spa website redesign built with Bootstrap to enhance usability, aesthetics, and cross-device performance.",
      skills: ["HTML", "CSS", "Bootstrap"],
    },
    {
      image: project2,
      title: "Quiz Hub",
      description: "A team-developed quiz application showcasing collaborative problem-solving, clean UI design, and interactive JavaScript-driven gameplay.",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: project3,
      title: "Dictionary App",
      description: "Collaborative task management platform with real-time update, team features, and advanced filtering capabilities",
      skills: ["HTML", "CSS", "JavaScript", "API"],
    },
  ]

  return (
    <div className='bg-fuchsia-50'>
      <section id='about' className='max-w-7xl mx-auto px-8 py-24'>
        <div className='flex flex-col items-center '>
          <h2 className='text-2xl'>Projects</h2>
          <div className='w-20 h-1 bg-black mt-2 rounded-full'></div>
        </div>

        <div className='text-center p-10'>
          <p>Here are some of my recent projects showcasing my skills and passion for web development</p>
        </div>

        <div className='pt-6'>
          <div className='grid md:grid-cols-3 gap-4'>
            {myprojects.map((item, index) => (
              <div className='border-2 border-fuchsia-300 rounded-xl p-8' key={index}>
                <img src={item.image} alt={item.title} className='transition duration-700 ease-in-out transform hover:scale-105' />

                <h3 className='text-2xl font-bold pt-4'>{item.title}</h3>
                <p className='pt-4'>{item.description}</p>

                <div className='pt-6'>
                  <ul className='flex gap-4'>
                  {item.skills.map((skill, i) => (
                  <li className='rounded-xl bg-fuchsia-100 p-2' key={i}>{skill}</li>
                  ))}</ul>
                </div>

                <div className='flex gap-4 pt-8'>
                  <button className='w-full flex items-center justify-center gap-2 border-2 border-fuchsia-300 rounded-xl py-2'>
                    <Code />
                    <span>Code</span>
                  </button>
                  <button className='w-full flex items-center justify-center gap-2 border-2 border-fuchsia-300 rounded-xl py-2'>
                    <ExternalLink />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Projects
