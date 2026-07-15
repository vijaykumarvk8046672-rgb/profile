import { useEffect } from 'react'
import BackgroundParticles from './components/BackgroundParticles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  // Simple scroll reveal logic using IntersectionObserver in React
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#070a13] text-slate-100 font-sans selection:bg-accent-cyan/30 overflow-x-hidden">
      {/* Dynamic Animated Node Background */}
      <BackgroundParticles />

      {/* Navigation menu */}
      <Navbar />

      <main className="w-full">
        {/* Hero Landing */}
        <Hero />

        {/* Biography & Academic Cards */}
        <About />

        {/* Technical Competencies Grid */}
        <Skills />

        {/* Internship Timeline */}
        <Experience />

        {/* Smart distribution transformer project & dashboard */}
        <Projects />

        {/* Co-curricular Certifications */}
        <Certifications />

        {/* Contact Form & details */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Vijayakumar M. All rights reserved.</p>
          <p>Designed and built for Vijayakumar's professional portfolio.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
