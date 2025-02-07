import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='mx-auto min-h-screen flex flex-col justify-between'>
      <div className='flex justify-center items-center flex-grow'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='font-sans'>
            <h1>Let's work together!</h1>
          </div>
          <div className='hover:animate-slide-in-right'>
            <form className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg'>
              <div className='mb-4'>
                <label className='block text-grey-700'>Full Name:</label>
                <input
                  type='text'
                  id='name'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                /> 
              </div>

              <div className='mb-4'>
                <label className='block text-grey-700'>Email:</label>
                <input
                  type='email'
                  id='name'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                /> 
              </div>

              <div className='mb-4'>
                <label className='block text-grey-700'>Message:</label>
                <textarea 
                  id='message'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />         
              </div>

              <button className='w-full bg-blue-500 py-2 px-4 rounded hover:bg-blue-700' type='submit'>Submit</button>

            </form>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Contact;