
export default function About() {
  return (
    <section id="about" className="scroll-reveal py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-100 mb-6">Background &amp; Aspirations</h3>
            <p className="text-slate-400 mb-4 text-base sm:text-lg leading-relaxed">
              I am a highly motivated final-year Electronics and Communication Engineering student at <strong>Nandha Engineering College</strong>. Combining my knowledge of hardware architectures with software developer skills, I am uniquely positioned to build solutions that integrate embedded devices, cloud systems, and elegant web interfaces.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              I thrive on programming problems and creating solutions for real-world issues. My immediate goal is to secure a software development internship where I can learn industry workflows, contribute to meaningful projects, and grow as a software engineer.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Education entry 1 */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 flex gap-5 items-start hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-cyan/8 border border-accent-cyan/20 text-accent-cyan shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
              </div>
              <div>
                <span className="font-mono text-xs text-accent-cyan font-semibold">2023 – 2027</span>
                <h4 className="text-lg font-bold text-slate-100 mt-1">Bachelor of Engineering</h4>
                <p className="text-slate-400 text-sm mt-0.5">Electronics &amp; Communication Engineering (Current: Final Year)</p>
                <p className="text-slate-500 text-xs mt-1">Nandha Engineering College</p>
              </div>
            </div>

            {/* Education entry 2 */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 flex gap-5 items-start hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-cyan/8 border border-accent-cyan/20 text-accent-cyan shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
              </div>
              <div>
                <span className="font-mono text-xs text-accent-cyan font-semibold">Completed</span>
                <h4 className="text-lg font-bold text-slate-100 mt-1">Higher Secondary Education (12th Grade)</h4>
                <p className="text-slate-400 text-sm mt-0.5">Grade Score: 65%</p>
                <p className="text-slate-500 text-xs mt-1">Malar Matric Higher School</p>
              </div>
            </div>

            {/* Academic CGPA gauge */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 flex gap-6 items-center flex-col sm:flex-row text-center sm:text-left hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300">
              <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                <svg className="-rotate-90" width="112" height="112">
                  <circle className="fill-none stroke-slate-800" strokeWidth="8" cx="56" cy="56" r="48" />
                  <circle
                    className="fill-none stroke-accent-cyan"
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="56"
                    cy="56"
                    r="48"
                    style={{
                      strokeDasharray: '301.6',
                      strokeDashoffset: '87.46', // (7.1/10) * 301.6 = 214.14; offset = 301.6 - 214.14 = 87.46
                    }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold text-slate-100 leading-none">7.1</span>
                  <span className="font-mono text-[9px] text-accent-cyan tracking-wider uppercase mt-1">CGPA</span>
                </div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-100">Academic Standing</h4>
                <p className="text-slate-400 text-sm mt-1">
                  Final-year standing with stable academic performance and active participation in engineering seminars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
