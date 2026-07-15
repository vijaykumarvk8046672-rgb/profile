import { useState, useEffect } from 'react'

export default function Skills() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="scroll-reveal py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-3">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-100">Programming</h3>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>Java</span>
                  <span className="font-mono text-accent-cyan text-xs">Advanced</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '85%' : '0%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>HTML &amp; CSS</span>
                  <span className="font-mono text-accent-cyan text-xs">Expert</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '90%' : '0%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>JavaScript</span>
                  <span className="font-mono text-accent-cyan text-xs">Intermediate</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '75%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-100">Database</h3>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>SQL</span>
                  <span className="font-mono text-accent-cyan text-xs">Intermediate</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '80%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-100">Tools</h3>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>VS Code</span>
                  <span className="font-mono text-accent-cyan text-xs">Proficient</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '88%' : '0%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>MS Excel</span>
                  <span className="font-mono text-accent-cyan text-xs">Advanced</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '80%' : '0%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-400 font-medium mb-1.5">
                  <span>Canva</span>
                  <span className="font-mono text-accent-cyan text-xs">Creative</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: animate ? '85%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-100">Soft Skills &amp; Languages</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-mono text-xs text-slate-500 font-semibold tracking-wider uppercase mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['Problem Solving', 'Communication', 'Teamwork', 'Time Management'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium text-slate-400 bg-slate-950 border border-indigo-500/15 rounded-full hover:border-accent-cyan hover:text-accent-cyan hover:scale-[1.02] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-slate-500 font-semibold tracking-wider uppercase mb-3">Languages Spoken</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['Tamil', 'English'].map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 text-sm font-medium text-slate-400 bg-slate-950 border border-accent-purple/20 rounded-full hover:border-accent-purple hover:text-slate-100 hover:scale-[1.02] transition-all duration-300 cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
