import { useEffect, useRef } from 'react'

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    const maxParticles = 60
    const connectionDistance = 120

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Populate particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 242, 254, 0.4)'
        ctx.fill()
      })

      // Draw links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          )
          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(157, 78, 221, ${
              0.15 * (1 - dist / connectionDistance)
            })`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particles-bg"
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-70"
    />
  )
}
