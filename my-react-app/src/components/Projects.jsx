import React from 'react'

function Projects() {
  const myprojects = [
    {
      title: "e-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and asmin dashboard",
      skills: ["React", "Node.js", "SQL"],
      code: "",
      demo: "",
    },
    {
      title: "Dictionary App",
      description: "Collaborative task management platform with real-time update, team features, and advanced filtering capabilities",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      code: "",
      demo: "",
    }
  ]

  return (
    <div className='h-screen'>
      <div>
        <h2>Projects</h2>
        <div className='w-20 h-1 bg-black mt-2 rounded-full'></div>
      </div>

      <div>
        <p>Here are some of my recent projects showcasing my skills and passion for web development</p>
      </div>

      <div>
        <div>
          {myprojects.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div>
                <ul>
                {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
                ))}</ul>
              </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
