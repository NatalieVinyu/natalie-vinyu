import React, { useState } from 'react'
import { Mail, MapPin, Send, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    setFormData({ name: '', email: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const cards = [
    { icon: <Mail size={20} />, title: 'Email', value: 'natalievinyu@gmail.com', href: 'mailto:natalievinyu@gmail.com', accent: 'amber' },
    { icon: <MapPin size={20} />, title: 'Location', value: 'Available for remote work', accent: 'teal' },
    { icon: <Send size={20} />, title: 'Response time', value: 'Within 24 hours', accent: 'amber' },
  ]

  return (
    <div id="contact" className="scroll-smooth bg-[#EDEFE9] dark:bg-[#0B1220]">
      <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <SectionHeading index="05" file="contact.sh" title="Get In Touch" />

        <p className="mx-auto max-w-md pb-12 text-center text-slate-500 dark:text-slate-400">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        {/* INFO CARDS */}
        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((item, index) => {
            const accentClasses =
              item.accent === 'amber'
                ? 'text-[#0B1220] bg-[#E8A33D]/15 dark:text-[#F2C879] dark:bg-[#E8A33D]/10'
                : 'text-[#0B1220] bg-[#3FA9A0]/15 dark:text-[#7FD9D0] dark:bg-[#3FA9A0]/10'
            const hoverBorder = item.accent === 'amber' ? 'hover:border-[#E8A33D]' : 'hover:border-[#3FA9A0]'

            return (
              <div
                key={index}
                className={`flex items-start gap-4 rounded-md border border-slate-300 p-5 transition-all duration-300 hover:-translate-y-0.5 dark:border-[#1E2A3D] ${hoverBorder}`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${accentClasses}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1220] dark:text-[#E7E9EE]">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-slate-500 hover:text-[#E8A33D] dark:text-slate-400">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.value}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* FORM AS A SHELL PANEL */}
        <div className="overflow-hidden rounded-md border border-[#1E2A3D] shadow-lg">
          {/* FILE HEADER BAR */}
          <div className="flex items-center gap-2 border-b border-[#1E2A3D] bg-[#0E1622] px-4 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3FA9A0]" />
            <span className="font-[JetBrains_Mono,monospace] text-xs text-slate-400">contact.sh</span>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-[#0B1220] px-6 py-8 font-[JetBrains_Mono,monospace] text-sm sm:px-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-slate-500"># name</label>
                <div className="flex items-baseline gap-2 border-b border-[#1E2A3D] focus-within:border-[#E8A33D]">
                  <span className="text-[#3FA9A0]">$</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="full name"
                    className="w-full bg-transparent py-2 text-[#E7E9EE] placeholder-slate-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-slate-500"># email</label>
                <div className="flex items-baseline gap-2 border-b border-[#1E2A3D] focus-within:border-[#E8A33D]">
                  <span className="text-[#3FA9A0]">$</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-transparent py-2 text-[#E7E9EE] placeholder-slate-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-xs text-slate-500"># message</label>
              <div className="flex gap-2 border-b border-[#1E2A3D] focus-within:border-[#E8A33D]">
                <span className="pt-2 text-[#3FA9A0]">$</span>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="how can I help you?"
                  rows={4}
                  className="w-full resize-none bg-transparent py-2 text-[#E7E9EE] placeholder-slate-600 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-[#E8A33D] py-3 font-medium text-[#0B1220] transition-colors hover:bg-[#d6922f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Send size={15} />
              ./send_message
            </button>

            {submitted && (
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#7FD9D0]">
                <Check size={13} />
                message sent — I'll get back to you soon
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact