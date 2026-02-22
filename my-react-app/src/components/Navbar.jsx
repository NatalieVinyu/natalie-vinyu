import React from 'react'

function Navbar() {
  return (
     <div className='w-full bg-transparent backdrop-blur-md shadow-sm p-4 z-10 top-0'>
      {/* NAVIGATION CONTAINER */}
      <nav className='container'>

          {/* NAVIGATION LINKS */}
          <ul className='flex space-x-14 justify-center'>
            <li className='duration-500 transition-all hover:text-fuchsia-300 transform hover:scale-130'>
              <a href='#home'>
                Home
              </a>
            </li>
            <li className='duration-500 transition-all hover:text-fuchsia-300 transform hover:scale-130'>
              <a href='#about'>
                About
              </a>
            </li>
            <li className='duration-500 transition-all hover:text-fuchsia-300 transform hover:scale-130'>
              <a href='#skills'>
                Skills
              </a>
            </li>
            <li className='duration-500 transition-all hover:text-fuchsia-300 transform hover:scale-130'>
              <a href='#projects'>
                Projects
              </a>
            </li>
            <li className='duration-500 transition-all hover:text-fuchsia-300 transform hover:scale-130'>
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
