import React from 'react'

const Services = () => {
  return (
    <div id='services' className='container mx-auto pt-16'>
      <h1 className='text-5xl'>Services I offer</h1>

      <div className='flex align-center items-center'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white m-4'>

          <div>
            <div className='text-center font-bold text-2xl mb-2 px-6 py-4'>
              Calender Management
            </div>

            <div>
              <img src="/Calendar-management-800x440.webp" alt="Calender Management"/>
            </div>

            <div className='px-8 py-8'>
              <ul className='list-disc list-inside'>
                <li>
                  Scheduling Appointments
                </li>
                <li>
                  Managing Multiple Calenders
                </li>
                <li>
                  Setting Reminders
                </li>
                <li>
                  Organizing Meetings
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Services

