import React from 'react'

function Navbar() {
  return (
     <div className='dark:bg-slate-900 text-white shadow-sm p-4 z-10'>
      {/* NAVIGATION CONTAINER */}
      <nav>

          {/* NAVIGATION LINKS */}
          <ul className='flex flex-col items-center space-y-4 md:flex-row md:justify-center md:gap-14'>
            <li className='duration-500 transition hover:text-fuchsia-300 transform hover:scale-125'>
              <a href='#home'>
                Home
              </a>
            </li>
            <li className='duration-500 transition hover:text-fuchsia-300 transform hover:scale-125'>
              <a href='#about'>
                About
              </a>
            </li>
            <li className='duration-500 transition hover:text-fuchsia-300 transform hover:scale-125'>
              <a href='#skills'>
                Skills
              </a>
            </li>
            <li className='duration-500 transition hover:text-fuchsia-300 transform hover:scale-125'>
              <a href='#projects'>
                Projects
              </a>
            </li>
            <li className='duration-500 transition hover:text-fuchsia-300 transform hover:scale-125'>
              <a href='#contact'>
                Contact
              </a>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
