import { useState, useEffect, useRef } from 'react'

export default function Projects() {
  // Telemetry state
  const [telemetry, setTelemetry] = useState({
    temp: 42.4,
    oil: 92.1,
    current: 4.5,
    voltage: 230.2,
  })
  const [isFaultActive, setIsFaultActive] = useState(false)
  const [btnText, setBtnText] = useState('Simulate Fault Trigger')

  // Graph state ref
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dataPointsRef = useRef<number[]>(Array(20).fill(60))

  // Wave telemetry animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.clientWidth * dpr
    canvas.height = canvas.clientHeight * dpr
    ctx.scale(dpr, dpr)

    const drawGraph = () => {
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      ctx.clearRect(0, 0, w, h)

      // Grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.lineWidth = 1
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Draw telemetry line
      ctx.beginPath()
      const dataPoints = dataPointsRef.current
      const step = w / (dataPoints.length - 1)
      ctx.moveTo(0, h - dataPoints[0])

      for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(i * step, h - dataPoints[i])
      }

      ctx.strokeStyle = isFaultActive ? '#ff3838' : '#00f2fe'
      ctx.shadowColor = isFaultActive ? 'rgba(255, 56, 56, 0.4)' : 'rgba(0, 242, 254, 0.4)'
      ctx.shadowBlur = 8
      ctx.lineWidth = 2.5
      ctx.stroke()
      ctx.shadowBlur = 0 // reset

      // Area fill gradient
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()

      const gradient = ctx.createLinearGradient(0, 0, 0, h)
      if (isFaultActive) {
        gradient.addColorStop(0, 'rgba(255, 56, 56, 0.15)')
        gradient.addColorStop(1, 'rgba(255, 56, 56, 0)')
      } else {
        gradient.addColorStop(0, 'rgba(0, 242, 254, 0.15)')
        gradient.addColorStop(1, 'rgba(0, 242, 254, 0)')
      }
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // Telemetry generation interval
    const interval = setInterval(() => {
      let nextTemp, nextOil, nextCurrent, nextVoltage, nextPoint

      if (!isFaultActive) {
        nextTemp = +(42 + Math.random() * 1.5).toFixed(1)
        nextOil = +(91.5 + Math.random() * 1.0).toFixed(1)
        nextCurrent = +(4.2 + Math.random() * 0.6).toFixed(1)
        nextVoltage = +(228 + Math.random() * 4).toFixed(1)
        nextPoint = 50 + Math.random() * 15
      } else {
        nextTemp = +(92 + Math.random() * 8.0).toFixed(1)
        nextOil = +(85 - Math.random() * 4.0).toFixed(1)
        nextCurrent = +(12.5 + Math.random() * 2.0).toFixed(1)
        nextVoltage = +(185 + Math.random() * 10).toFixed(1)
        nextPoint = 15 + Math.random() * 75
      }

      setTelemetry({
        temp: nextTemp,
        oil: nextOil,
        current: nextCurrent,
        voltage: nextVoltage,
      })

      // Shift graph data array
      const currentPoints = [...dataPointsRef.current]
      currentPoints.shift()
      currentPoints.push(nextPoint)
      dataPointsRef.current = currentPoints

      drawGraph()
    }, 200)

    drawGraph()

    return () => clearInterval(interval)
  }, [isFaultActive])

  // Trigger Anomaly
  const handleTriggerFault = () => {
    if (isFaultActive) return

    setIsFaultActive(true)
    setBtnText('Simulating Anomaly...')

    // Restore to normal after 5 seconds
    setTimeout(() => {
      setIsFaultActive(false)
      setBtnText('Simulate Fault Trigger')
    }, 5000)
  }

  return (
    <section id="projects" className="scroll-reveal py-24 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-3">
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Details */}
          <div className="flex flex-col justify-center bg-slate-900/60 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
            <span className="font-mono text-xs text-accent-cyan tracking-wider uppercase mb-3 font-semibold">
              Featured IoT &amp; ECE System
            </span>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Smart Transformer Fault Detection System</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Designed and built an end-to-end monitoring system for distribution transformers. This system integrates physical sensors to measure vital metrics (temperature, oil levels, voltage, current) and utilizes a cloud-connected controller to upload data in real-time. In case of an anomaly, the system sends instantaneous SMS alerts, enabling remote monitoring and improving electrical grid reliability.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['Embedded Systems', 'Cloud Monitoring', 'Sensors', 'SMS Gateways'].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-slate-950 border border-indigo-500/15 rounded-full text-xs text-slate-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-5 border-t border-indigo-500/15 pt-6">
              <div>
                <span className="text-lg font-bold text-slate-100 block">Cloud</span>
                <span className="text-xs text-slate-500 uppercase font-mono tracking-wider">Integration</span>
              </div>
              <div>
                <span className="text-lg font-bold text-slate-100 block">Real-time</span>
                <span className="text-xs text-slate-500 uppercase font-mono tracking-wider">Alerts</span>
              </div>
              <div>
                <span className="text-lg font-bold text-slate-100 block">Remote</span>
                <span className="text-xs text-slate-500 uppercase font-mono tracking-wider">Diagnosis</span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Dashboard */}
          <div className="bg-slate-950/80 border border-accent-cyan/20 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:shadow-accent-cyan/5 transition-all duration-300">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="font-mono text-xs text-slate-400 ml-2">Transformer IoT Telemetry Dashboard</span>
            </div>

            <div className="flex flex-col gap-5 grow justify-between">
              {/* Status Header */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-3.5 h-3.5">
                  <div
                    className={`absolute inset-0 rounded-full opacity-75 ${
                      isFaultActive ? 'bg-red-500 animate-pulse' : 'bg-green-500 animate-status-pulse'
                    }`}
                  />
                  <div
                    className={`absolute inset-[3px] rounded-full ${
                      isFaultActive ? 'bg-red-500' : 'bg-green-500'
                    }`}
                  />
                </div>
                <span
                  className={`font-mono text-xs font-semibold tracking-wider ${
                    isFaultActive ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {isFaultActive ? 'SYSTEM FAULT DETECTED' : 'LIVE SENSOR TELEMETRY'}
                </span>
              </div>

              {/* Telemetry metrics */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Core Temp', val: `${telemetry.temp} °C` },
                  { label: 'Oil Level', val: `${telemetry.oil} %` },
                  { label: 'Load Current', val: `${telemetry.current} A` },
                  { label: 'Voltage Output', val: `${telemetry.voltage} V` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-900/30 border border-slate-900 rounded-xl p-3.5"
                  >
                    <span className="text-[10px] text-slate-500 font-medium block mb-1">
                      {item.label}
                    </span>
                    <span className="font-mono text-base font-bold text-slate-100">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-3.5">
                <div className="flex justify-between font-mono text-[10px] text-slate-400 mb-2">
                  <span>Signal Telemetry Stream</span>
                  <span className="text-accent-cyan">200ms refresh</span>
                </div>
                <canvas ref={canvasRef} className="w-full h-24 block" />
              </div>

              {/* Trigger Actions */}
              <div className="flex items-center justify-between gap-4 min-h-[42px] mt-2">
                <button
                  onClick={handleTriggerFault}
                  disabled={isFaultActive}
                  className={`border border-accent-cyan text-accent-cyan text-xs font-semibold py-2 px-4 rounded-lg hover:bg-accent-cyan/10 hover:shadow-[0_0_10px_rgba(0,242,254,0.15)] transition-all cursor-pointer ${
                    isFaultActive ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {btnText}
                </button>

                {isFaultActive && (
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs bg-red-500/8 border border-red-500/20 px-3 py-1.5 rounded-lg animate-pulse-border">
                    <svg className="animate-bell-shake" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <span>ALERT sent: Overheat!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
