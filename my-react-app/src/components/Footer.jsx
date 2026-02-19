import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='py-12 px-6 border-t border-gray-800 overflow-hidden bg-gray-100'>
        <div>
          <div>
            <div>
              <h3>Natalie Vinyu</h3>
              <p>Building digital experiences</p>
            </div>

            <div>
              <a href="">Github</a>
              <a href="">Linkedin</a>
              <a href="">Mail</a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p>
              {new Date().getFullYear()} Natalie Vinyu - Made with lots of coffee ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
