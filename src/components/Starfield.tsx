import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; radius: number; phase: number; speed: number }

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let frame = 0
    let pointerX = 0
    let pointerY = 0
    let stars: Star[] = []
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = Math.min(width < 640 ? 55 : 110, Math.floor((width * height) / (width < 640 ? 10500 : 8500)))
      stars = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.3 + .25, phase: Math.random() * Math.PI * 2, speed: Math.random() * .018 + .006 }))
      draw(0)
    }
    const draw = (time: number) => {
      context.clearRect(0, 0, width, height)
      for (const star of stars) {
        const alpha = reducedMotion ? .55 : .35 + (Math.sin(time * star.speed + star.phase) + 1) * .3
        context.beginPath()
        context.arc(star.x + pointerX * .012, star.y + pointerY * .012, star.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(184, 218, 255, ${alpha})`
        context.fill()
      }
      if (!reducedMotion) frame = window.requestAnimationFrame(draw)
    }
    const onPointer = (event: PointerEvent) => { pointerX = event.clientX - width / 2; pointerY = event.clientY - height / 2 }
    resize()
    if (!reducedMotion) frame = window.requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', onPointer) }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}
