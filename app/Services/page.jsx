import React from 'react'

const Services = ({ title, imageUrl, list}) => {
  return (
    <div id='services' className='container mx-auto pt-16'>
      <h1 className='text-5xl'>Services I offer</h1>

      <div className='flex align-center items-center'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white m-4'>

          <div>
            <div className='text-center font-bold text-2xl mb-2 px-6 py-4'>
              {title}
            </div>

            <div>
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

    </div>
  )
}

export default Services

