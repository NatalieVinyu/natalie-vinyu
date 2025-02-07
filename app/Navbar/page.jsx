import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed w-full bg-gray-100 bg-opacity-25 backdrop-blur-md shadow-lg p-4 z-10 top-0'>
      <nav className='container'>        
          <ul className='flex space-x-20 justify-end'>
            <li>
              <Link href='#about'>
                About
              </Link>
            </li>
            <li>
              <Link href='#mywork'>
                My Work
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                Contact
              </Link>
            </li>
          </ul>
        
      </nav>
    </div>
  )
}

export default Navbar