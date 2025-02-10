import React from 'react'

const Services = ({ title, imageUrl, list}) => {
  return (
    <div id='services' className='container mx-auto pt-16'>
        {/* Grid container to create a responsive layout */}
      <div className='flex flex-col align-center items-center'>

        {/* Card Wrapper */}
        <div className='max-w-sm rounded shadow-lg bg-white m-4 flex flex-col'>

            {/* Title */}
            <div className='text-center font-bold text-2xl mb-2 px-6 py-4'>
              {title}
            </div>

            {/* Image */}
            <div className="w-full h-auto">
              <img src={imageUrl} alt={title} />
            </div>

            {/* List */}
            <div className='px-8 py-8'>
              <ul className='list-disc list-inside'>
                {Array.isArray(list) && list.length > 0 ? (list.map((item, index) => (<li key={index} className='text-lg'>{item}</li>
                ))
              ) : (
                <p>No services listed</p>
              )}
              </ul>
            </div>

          
        </div>

      </div>

    </div>
  )
}

export default Services

