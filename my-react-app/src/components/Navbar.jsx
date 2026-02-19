import React from 'react'

function Navbar() {
  return (
     <div className='fixed w-full bg-gray-100 bg-transparent bg-opacity-25 backdrop-blur-md shadow-lg p-8 z-10 top-0'>
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
