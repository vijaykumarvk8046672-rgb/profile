import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
        isScrolled
          ? 'h-16 bg-slate-950/85 backdrop-blur-md border-b border-indigo-500/15'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono text-lg">
          <span className="font-bold text-accent-cyan">&lt;VK/&gt;</span>
          <span className="font-bold text-slate-100 tracking-tight">Vijayakumar M</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['about', 'skills', 'experience', 'projects', 'certifications'].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="text-slate-400 font-medium text-sm capitalize hover:text-slate-100 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple hover:after:w-full after:transition-all after:duration-200"
            >
              {sec}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-accent-cyan text-accent-cyan font-medium text-sm py-2 px-5 rounded-lg hover:bg-accent-cyan/10 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden flex-col gap-1.5 cursor-pointer z-50 p-1"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-100 transition-transform ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-100 transition-opacity ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-100 transition-transform ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Navigation Drawer */}
        <nav
          className={`fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-slate-950/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 md:hidden transition-all duration-300 border-t border-indigo-500/15 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {['about', 'skills', 'experience', 'projects', 'certifications'].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 font-medium text-xl capitalize hover:text-slate-100"
            >
              {sec}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="border border-accent-cyan text-accent-cyan font-medium text-lg py-2.5 px-8 rounded-lg hover:bg-accent-cyan/10 transition-colors"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}
