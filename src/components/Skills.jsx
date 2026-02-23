import React from 'react';

function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Next.js", "TailwindCSS", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["SQL", "Node.js", "APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["VS Code", "Git & GitHub", "Chrome DevTools"]
    }
  ]

  return (
    <div id='skills' className='dark:bg-slate-950 dark:text-white scroll-smooth '>

      {/* SKILLS SECTION */}
      <section className='max-w-7xl max-w-sm mx-auto px-8 py-24'>

        <div className='flex flex-col items-center '>
          <h2 className='md:text-3xl sm:text-2xl font-bold'>Skills and Technologies</h2>
          <div className='w-24 h-1 mt-2 rounded-full bg-fuchsia-200'></div>
        </div>

      {/* SKILLS GRID */}
       <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 mt-10'>
          {skills.map((item, index) => (
            <div className='border-2 border-fuchsia-300 rounded-xl m-10 p-2 shadow-lg' key={index}>
              <h3 className='text-2xl font-bold text-center pt-4'>{item.title}</h3>

              <ul className='flex flex-wrap justify-center p-4 dark:text-black'>
                {item.skills.map((skill, i) => (
                <div className='border border-fuchsia-300 bg-fuchsia-50 rounded-full m-2 p-3 transition duration-300 ease-in-out transform hover:scale-125 hover:border-fuchsia-400 hover:shadow-lg sm:text-sm' key={i}>
                <li key={i}>{skill}</li>
                </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      


    </div>
  )
}

export default Skills
