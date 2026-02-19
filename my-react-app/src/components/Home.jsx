import React from 'react'

function Home() {
  return (
    <div className='h-screen bg-fuchsia-50 flex flex-col justify-center items-center space-y-10'>
      <div className='space-y-8'>
        <h1 className='text-6xl md:text-8xl font-bold'>Natalie Vinyu</h1>
        <p className='text-3xl md:text-4xl text-center'>Software Engineer</p>
      </div>

      <div className='flex md:flex-row gap-6 mt-12'>
        <button className='px-6 py-3 bg-fuchsia-200 rounded-lg cursor-pointer'>Download CV</button>
        <button className='px-6 py-3 bg-fuchsia-100 rounded-lg cursor-pointer'>Let's Connect</button>
      </div>
    </div>
  )
}

export default Home
