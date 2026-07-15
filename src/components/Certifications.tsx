
export default function Certifications() {
  return (
    <section id="certifications" className="scroll-reveal py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-3">
            Certifications &amp; Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cert 1 */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 group hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple mb-5 group-hover:text-accent-cyan group-hover:border-accent-cyan group-hover:bg-accent-cyan/8 group-hover:rotate-[360deg] transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">Hackathon Participation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Collaborated in fast-paced software hackathons. Developed and pitched prototypes matching hardware interfaces with high-level software services.
            </p>
          </div>

          {/* Cert 2 */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 group hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple mb-5 group-hover:text-accent-cyan group-hover:border-accent-cyan group-hover:bg-accent-cyan/8 group-hover:rotate-[360deg] transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">Paper Presentation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Authored and presented technical papers on innovative electronics and cloud telemetry paradigms at state-level college technical symposiums.
            </p>
          </div>

          {/* Cert 3 */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 group hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-purple/8 border border-accent-purple/20 text-accent-purple mb-5 group-hover:text-accent-cyan group-hover:border-accent-cyan group-hover:bg-accent-cyan/8 group-hover:rotate-[360deg] transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">Workshop Participation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Attended specialized industry workshops focusing on embedded systems firmware, cloud deployment paradigms, and electrical circuit designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
