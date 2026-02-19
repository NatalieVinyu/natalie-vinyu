import React from 'react'

function Navbar() {
  return (
     <div className='w-full bg-transparent backdrop-blur-md shadow-lg p-4 z-10 top-0'>
      <nav className='container'>        
          <ul className='flex space-x-10 justify-end'>
            <li>
              <a href='#home'>
                Home
              </a>
            </li>
            <li>
              <a href='#about'>
                About
              </a>
            </li>
            <li>
              <a href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a href='#projects'>
                Projects
              </a>
            </li>
            <li>
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
