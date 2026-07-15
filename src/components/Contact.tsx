import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate standard network submit (1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSuccess(false)
  }

  return (
    <section id="contact" className="scroll-reveal py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-3">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          {/* Info panel */}
          <div className="flex flex-col text-left">
            <h3 className="text-xl font-bold text-slate-100 mb-4">Interested in collaborating?</h3>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">
              I am seeking software development internships and project collaborations. Feel free to reach out via the form, or direct contact details below.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-cyan/8 border border-accent-cyan/20 text-accent-cyan shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono">Email Me</span>
                  <a
                    href="mailto:vijaykumarvk8046672@gmail.com"
                    className="text-slate-200 font-bold hover:text-accent-cyan transition-colors"
                  >
                    vijaykumarvk8046672@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-cyan/8 border border-accent-cyan/20 text-accent-cyan shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono">Call Me</span>
                  <a
                    href="tel:+919843471596"
                    className="text-slate-200 font-bold hover:text-accent-cyan transition-colors"
                  >
                    +91 9843471596
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-4">Social Profiles</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/vijayakumar-m-a93b682a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-indigo-500/15 bg-slate-900/30 hover:border-[#0a66c2] hover:text-[#0a66c2] hover:bg-[#0a66c2]/8 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/vijaykumarvk8046672-rgb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-indigo-500/15 bg-slate-900/30 hover:border-slate-100 hover:text-slate-100 hover:bg-slate-100/8 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-indigo-500/15 bg-slate-900/30 hover:border-[#ffa116] hover:text-[#ffa116] hover:bg-[#ffa116]/8 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:border-indigo-500/25 transition-all duration-300 flex flex-col justify-center min-h-[460px]">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 bg-slate-950/80 border border-indigo-500/15 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.1)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 bg-slate-950/80 border border-indigo-500/15 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.1)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Opportunity"
                    className="w-full px-4 py-3 bg-slate-950/80 border border-indigo-500/15 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.1)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Let me know how we can work together..."
                    className="w-full px-4 py-3 bg-slate-950/80 border border-indigo-500/15 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.1)] transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-accent-cyan to-accent-purple text-slate-950 font-bold rounded-xl shadow-md hover:shadow-accent-cyan/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                  {!isSubmitting ? (
                    <span>Send Message</span>
                  ) : (
                    <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center flex flex-col items-center gap-4 py-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 text-green-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-[320px]">
                  Thank you for reaching out. Vijayakumar will get back to you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold rounded-lg border border-indigo-500/15 text-slate-300 hover:border-accent-cyan hover:bg-accent-cyan/5 transition-all"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
