
export default function Experience() {
  return (
    <section id="experience" className="scroll-reveal py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-3">
            Internships &amp; Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-gradient-to-b border-accent-cyan to-transparent">
          {/* Timeline Dot Decorator */}
          <div className="absolute left-[-9px] top-0 h-full w-[2px] bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent pointer-events-none" />

          {/* Exp Item 1 */}
          <div className="relative mb-12 group">
            {/* Pulsing indicator dot */}
            <div className="absolute left-[-41px] top-6 w-4.5 h-4.5 rounded-full bg-slate-950 border-3 border-accent-cyan shadow-[0_0_10px_rgba(0,242,254,0.4)] group-hover:border-accent-purple group-hover:shadow-[0_0_12px_rgba(157,78,221,0.5)] group-hover:scale-110 transition-all duration-300 z-10" />

            <span className="font-mono text-accent-cyan text-xs font-semibold">12 Days</span>
            <div className="mt-2 bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 group-hover:border-indigo-500/35 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-100">Industrial Automation and Monitoring Systems Intern</h3>
              <h4 className="text-accent-cyan font-medium text-sm mt-1">Nuclear Power Corporation</h4>
              <span className="text-slate-500 text-xs mt-0.5 block">Kudankulam Nuclear Power Project</span>
              <ul className="list-disc pl-5 mt-4 text-slate-400 text-sm leading-relaxed flex flex-col gap-2">
                <li>Studied industrial automation architectures, PLC/SCADA configurations, and industrial monitoring protocols used in large scale nuclear power plants.</li>
                <li>Analyzed the integration of hardware telemetry networks with fail-safe control systems.</li>
              </ul>
            </div>
          </div>

          {/* Exp Item 2 */}
          <div className="relative group">
            {/* Pulsing indicator dot */}
            <div className="absolute left-[-41px] top-6 w-4.5 h-4.5 rounded-full bg-slate-950 border-3 border-accent-cyan shadow-[0_0_10px_rgba(0,242,254,0.4)] group-hover:border-accent-purple group-hover:shadow-[0_0_12px_rgba(157,78,221,0.5)] group-hover:scale-110 transition-all duration-300 z-10" />

            <span className="font-mono text-accent-cyan text-xs font-semibold">14 Days</span>
            <div className="mt-2 bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 group-hover:border-indigo-500/35 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-100">Embedded Systems Intern</h3>
              <h4 className="text-accent-cyan font-medium text-sm mt-1">Brainery Spot</h4>
              <span className="text-slate-500 text-xs mt-0.5 block">Coimbatore</span>
              <ul className="list-disc pl-5 mt-4 text-slate-400 text-sm leading-relaxed flex flex-col gap-2">
                <li>Learned hardware interfacing principles using microcontrollers, sensors, and basic communication interfaces (UART, I2C).</li>
                <li>Programmed embedded systems and implemented custom sensor reading applications.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
