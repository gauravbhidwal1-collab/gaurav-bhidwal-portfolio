import { useEffect, useRef } from 'react'

export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/3 h-[480px] w-[480px] rounded-full bg-indigo-600/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[90px]" />
    </div>
  )
}

export function StarfieldBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let animationId
    let width = 0
    let height = 0
    let stars = []

    const createStars = () => {
      const count = Math.min(120, Math.max(60, Math.floor((width * height) / 14000)))
      stars = Array.from({ length: count }, () => {
        const shade = Math.floor(180 + Math.random() * 75)
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.35,
          vx: (Math.random() - 0.5) * 0.035,
          vy: 0.05 + Math.random() * 0.1,
          color: `rgba(${shade}, ${shade}, ${shade}, ${0.25 + Math.random() * 0.45})`,
        }
      })
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const { clientWidth, clientHeight } = canvas
      canvas.width = clientWidth * dpr
      canvas.height = clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      width = clientWidth
      height = clientHeight
      createStars()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        star.x += star.vx
        star.y += star.vy
        if (star.y > height + 5) {
          star.y = -5
          star.x = Math.random() * width
        }
        if (star.x > width + 5) star.x = -5
        if (star.x < -5) star.x = width + 5
        ctx.beginPath()
        ctx.fillStyle = star.color
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()
      }
      animationId = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
}
