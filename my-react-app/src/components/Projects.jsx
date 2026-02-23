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
      codeLink: "https://github.com/NatalieVinyu/River-View-Spa",
      demoLink: "https://riverviewspa.netlify.app/",
    },
    {
      image: project2,
      title: "Quiz Hub",
      description: "A team-developed quiz application showcasing collaborative problem-solving, clean UI design, and interactive JavaScript-driven gameplay.",
      skills: ["HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/NatalieVinyu/Quiz",
      demoLink: "https://quizprj.netlify.app/",
    },
    {
      image: project3,
      title: "Dictionary App",
      description: "A simple and user-friendly dictionary application that allows users to search for word definitions in real time using an external API.",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      codeLink: "https://github.com/NatalieVinyu/Dictionary-App",
      demoLink: "https://jocular-trifle-574e97.netlify.app/",
    },
  ]

  return (
    <div id='projects' className='dark:bg-gray-700 dark:text-white scroll-smooth bg-fuchsia-50'>
      <section className='max-w-7xl mx-auto px-8 py-24'>
        <div className='flex flex-col items-center pb-4 '>
          <h2 className='text-2xl'>Projects</h2>
          <div className='w-20 h-1 bg-fuchsia-300 rounded-full'></div>
        </div>

        <div className='text-center pb-10'>
          <p className='text-gray-700'>Here are some of my recent projects showcasing my skills and passion for web development</p>
        </div>

        <div className='pt-6'>
          <div className='grid md:grid-cols-3 gap-4'>
            {myprojects.map((item, index) => (
              <div className='border-2 border-fuchsia-300 rounded-xl p-8 shadow-lg' key={index}>
                <img src={item.image} alt={item.title} className='transition duration-700 ease-in-out transform hover:scale-105 shadow-lg rounded-lg' />

                <h3 className='text-2xl font-bold pt-4'>{item.title}</h3>
                <p className='pt-4 text-gray-700'>{item.description}</p>

                <div className='pt-6'>
                  <ul className='flex gap-4'>
                  {item.skills.map((skill, i) => (
                  <li className='rounded-xl bg-fuchsia-100 p-2 text-sm text-gray-700' key={i}>{skill}</li>
                  ))}</ul>
                </div>

                <div className='flex gap-4 pt-8 dark:text-black'>
                  <a 
                    href={item.codeLink} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full flex items-center justify-center gap-2 border-2 border-fuchsia-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                    <Code />
                    <span>Code</span>
                  </a>
                  <a 
                    href={item.demoLink}
                    target='_blank'
                    rel='noopener noreferrer' 
                    className='w-full flex items-center justify-center gap-2 border-2 border-fuchsia-300 bg-fuchsia-200 rounded-xl py-2 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                    <ExternalLink />
                    <span>Demo</span>
                  </a>
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
