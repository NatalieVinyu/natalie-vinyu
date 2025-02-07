import React from 'react'
//  

const Homepage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>

        <div className='container'>
          <div class="grid grid-flow-col grid-rows-2 gap-4">
            <div class="row-span-3 ...">
              <img src="/IMG_2575.jpeg" alt="Natalie Vinyu" className='rounded-lg shadow-lg w-80 max-w-sm' />
            </div>

            <div class="col-span-2 ...">
              <h1 className='text-9xl'>Natalie Vinyu</h1>
            </div>

            <div class="col-span-2 row-span-2 ...">
              <h2 className='text-7xl'>Front-end developer</h2>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Homepage