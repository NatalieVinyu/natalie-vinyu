import React from 'react'

function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: ["React", "Typescript", "Next.js", "TailwindCSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["SQL", "Node.js"]
    },
    {
      title: "Tools & Others",
      skills: ["VS Code", "Git"]
    }
  ]

  return (
    <div className='h-screen'>
      <div>
        <h2>Skills and Technologies</h2>
        <div className='w-20 h-1 mt-2 rounded-full bg-black'></div>
      </div>

      <div>
        {skills.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>

            <ul>
              {item.skills.map((skill, i) => (
              <div>
                <li key={i}>{skill}</li>
              </div>
              ))}</ul>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Skills
