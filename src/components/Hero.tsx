import { useState, useEffect } from 'react'

export default function Hero() {
  const words = ['Electronics Engineer', 'Software Developer', 'Problem Solver']
  const [wordIndex, setWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: number
    const currentWord = words[wordIndex]

    if (isDeleting) {
      // Deleting character
      timer = window.setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
      }, 60)
    } else {
      // Adding character
      timer = window.setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
      }, 100)
    }

    // Word complete states
    if (!isDeleting && currentText === currentWord) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, wordIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-gradient-to-tr from-accent-cyan/15 to-transparent rounded-full filter blur-[40px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10">
        <div className="flex flex-col items-start text-left">
          <span className="font-mono text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-4 px-3 py-1 bg-accent-cyan/8 border border-accent-cyan/20 rounded-full">
            Final-Year ECE &amp; Software Engineer
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold font-mono tracking-tight text-slate-100 leading-tight mb-3">
            Hi, I'm <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Vijayakumar M</span>
          </h1>
          <h2 className="text-xl sm:text-3xl font-semibold text-slate-300 mb-6 min-h-[40px]">
            I am a <span className="text-accent-cyan">{currentText}</span>
            <span className="text-accent-cyan animate-cursor-blink">|</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-[580px] mb-10 leading-relaxed">
            A Final-year Electronics and Communication Engineering student at Nandha Engineering College. I specialize in bridging the gap between hardware systems and software logic, designing responsive web apps, and solving programming challenges.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-accent-cyan to-accent-purple text-slate-950 shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/30 hover:scale-[1.02] transition-all"
            >
              <span>Explore Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-indigo-500/15 text-slate-200 hover:border-accent-cyan hover:bg-accent-cyan/5 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:vijaykumarvk8046672@gmail.com"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-indigo-500/15 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:-translate-y-1 transition-all shadow-md"
              title="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a
              href="https://github.com/vijaykumarvk8046672-rgb"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-indigo-500/15 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:-translate-y-1 transition-all shadow-md"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vijayakumar-m-a93b682a2/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-indigo-500/15 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:-translate-y-1 transition-all shadow-md"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-indigo-500/15 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:-translate-y-1 transition-all shadow-md"
              title="LeetCode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </a>
          </div>
        </div>

        {/* Floating ECE Tech Orb Visual */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-80 h-80">
            <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.05),0_0_50px_rgba(0,242,254,0.15)] animate-orb-float" />
            <div className="absolute top-0 left-0 w-full h-full border border-dashed border-accent-cyan/20 rounded-full [transform:rotateX(70deg)_rotateY(15deg)] animate-[spin_12s_linear_infinite]" />
            <div className="absolute top-0 left-0 w-full h-full border border-dashed border-accent-cyan/20 rounded-full [transform:rotateX(30deg)_rotateY(55deg)] animate-[spin_16s_linear_infinite]" />
            <div className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] border border-indigo-500/15 rounded-full border-t-accent-purple border-b-accent-cyan animate-[spin_8s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  )
}
