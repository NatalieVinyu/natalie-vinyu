import React from 'react'
import { Mail } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className='py-12 px-6 border-fuchsia-200 bg-fuchsia-50 dark:bg-slate-900 dark:text-white'>

        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div className='text-center md:text-left'>
              <h3 className='text-2xl font-bold mb-2'>Natalie Vinyu</h3>
              <p className='text-sm text-gray-400'>Building digital experiences</p>
            </div>

            <div className='flex gap-4'>
              <a 
                href="https://github.com/NatalieVinyu"
                target='_blank'
                className='border border-fuchsia-300 p-2 rounded flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 hover:border-fuchsia-400 hover:text-fuchsia-400 hover:border-2'
               >
                <FiGithub className='w-4 h-4' />
              </a>
              <a 
                href="https://www.linkedin.com/in/natalie-vinyu"
                target='_blank'
                className='border border-fuchsia-300 p-2 rounded flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 hover:border-fuchsia-400 hover:text-fuchsia-400 hover:border-2'
               >
                <FiLinkedin className='w-4 h-4' />
              </a>
              <a 
                href="mailto:natalievinyu@gmail.com"
                target='_blank'
                className='border border-fuchsia-300 p-2 rounded flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 hover:border-fuchsia-400 hover:text-fuchsia-400 hover:border-2'
               >
                <Mail className='w-4 h-4'/>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className='mt-8 pt-8 border-t border-fuchsia-200 text-center w-full'>
            <p className='text-sm'>
             © {new Date().getFullYear()} Natalie Vinyu - Made with lots of coffee ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
