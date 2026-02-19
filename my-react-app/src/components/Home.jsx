import React from 'react'

function Home() {
  return (
    <div className='h-screen bg-fuchsia-50 flex flex-col justify-center items-center space-y-10'>
      <div>
        <h1 className='text-6xl font-bold'>Natalie Vinyu</h1>
        <p className='text-3xl text-center'>Software Engineer</p>
      </div>

      <div className='gap-6'>
        <button>Download CV</button>
        <button>Let's Connect</button>
      </div>
    </div>
  )
}

export default Home
