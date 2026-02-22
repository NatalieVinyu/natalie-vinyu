import React from 'react'
import { Mail, MapPin, Send} from 'lucide-react'

function Contact() {
  return (
    <div className='max-w-4xl mx-auto px-8 py-16'>
      <section id="contact">
        <div className='flex flex-col items-center'>
          <div className='text-2xl'>Get In Touch</div>
          <div className='w-20 h-1 bg-fuchsia-200 mt-2 rounded-full'></div>
        </div>

        <div className='text-center pt-6'>
          <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 my-12'>
          <div className='flex items-start gap-6 border-2 border-fuchsia-300 rounded shadow-lg p-4'>
            <Mail className='mt-4'/>
            <div>
              <h3 className='font-semibold text-2xl'>Email</h3>
              <a href="mailto:natalievinyu@gmail.com" className='text-sm text-gray-600'>natalievinyu@gmail.com</a>
            </div>
          </div>

          <div className='flex items-start gap-6 border-2 border-fuchsia-300 rounded shadow-lg p-4'>
            <MapPin className='mt-4'/>
            <div>
              <h3 className='font-semibold text-2xl'>Location</h3>
              <p className='text-sm text-gray-600'>Available for remote work</p>
            </div>            
          </div>

          <div className='flex items-start gap-6 border-2 border-fuchsia-300 rounded shadow-lg p-4'>
            <Send className='mt-4'/>
            <div>
              <h3 className='font-semibold text-2xl'>Response time</h3>
              <p className='text-sm text-gray-600'>Within 24 Hours</p>
            </div>            
          </div>
        </div>

        {/* Form */}
        <form id='' className='border-2 border-fuchsia-200 rounded-xl shadow-lg p-8 mb-12'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='mb-6'>
              <label htmlFor="" className='text-sm font-medium mb-2'>Name</label>
              <input type="text" className='w-full px-4 py-3 bg-fuchsia-100 rounded-lg shadow-sm' placeholder='Full Name' />
            </div>

            <div className='mb-6'>
              <label htmlFor="email" className='text-sm font-medium mb-2'>Email</label>
              <input type="text" className='w-full px-4 py-3 bg-fuchsia-100 rounded-lg shadow-sm' placeholder='your.email@example.com' />
            </div>
          </div>

          <div className='mb-2'>
            <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
            <textarea name="message" placeholder='How can I help you?' className='w-full bg-fuchsia-100 rounded-lg shadow-sm px-4 py-3' id="message" rows={5}></textarea>
          </div>
          <button type='submit' className='w-full bg-fuchsia-300 rounded shadow-lg p-2 cursor-pointer'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
