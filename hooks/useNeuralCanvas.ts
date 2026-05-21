'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
  energy: number
}

interface UseNeuralCanvasOptions {
  nodeCount?: number
  connectionDistance?: number
  mouseInfluence?: number
  colorMode?: 'standard' | 'fragmented' | 'syncing'
}

export function useNeuralCanvas(options: UseNeuralCanvasOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const nodesRef = useRef<Node[]>([])
  const rafRef = useRef<number>(0)
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let W = 0, H = 0

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      initNodes()
    }

    const {
      nodeCount = 80,
      connectionDistance = 130,
      mouseInfluence = 180,
      colorMode = 'standard'
    } = optionsRef.current

    const initNodes = () => {
      const count = window.innerWidth < 768 ? Math.floor(nodeCount * 0.55) : nodeCount
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.3 : 0.5),
        vy: (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.3 : 0.5),
        r: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
        energy: Math.random(),
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const t = Date.now() * 0.001
      const nodes = nodesRef.current
      const { x: mx, y: my } = mouseRef.current
      const mode = optionsRef.current.colorMode || 'standard'
      const dist = optionsRef.current.connectionDistance || connectionDistance
      const mDist = optionsRef.current.mouseInfluence || mouseInfluence

      // Update nodes
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        n.phase += 0.015
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
        // Mouse repulsion
        const dx = n.x - mx, dy = n.y - my
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 80) {
          n.vx += (dx / d) * 0.3
          n.vy += (dy / d) * 0.3
        }
        // Damping
        n.vx *= 0.99
        n.vy *= 0.99
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < dist) {
            const alpha = (1 - d / dist) * (mode === 'fragmented' ? 0.12 : 0.2)
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            if (mode === 'fragmented') {
              grad.addColorStop(0, `rgba(107,114,128,${alpha})`)
              grad.addColorStop(1, `rgba(75,85,99,${alpha * 0.5})`)
            } else if (mode === 'syncing') {
              const sync = (Math.sin(t * 2 + i * 0.3) + 1) * 0.5
              grad.addColorStop(0, `rgba(37,99,235,${alpha * sync})`)
              grad.addColorStop(0.5, `rgba(34,211,238,${alpha})`)
              grad.addColorStop(1, `rgba(124,58,237,${alpha * sync})`)
            } else {
              grad.addColorStop(0, `rgba(37,99,235,${alpha})`)
              grad.addColorStop(0.5, `rgba(34,211,238,${alpha * 0.8})`)
              grad.addColorStop(1, `rgba(124,58,237,${alpha})`)
            }
            ctx.beginPath()
            ctx.strokeStyle = grad
            ctx.lineWidth = mode === 'fragmented' ? 0.4 : 0.6
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Mouse connections
      nodes.forEach(n => {
        const dx = n.x - mx, dy = n.y - my
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < mDist && mode !== 'fragmented') {
          const alpha = (1 - d / mDist) * 0.6
          ctx.beginPath()
          ctx.strokeStyle = `rgba(34,211,238,${alpha})`
          ctx.lineWidth = 0.8
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mx, my)
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach((n, i) => {
        const pulse = 0.6 + Math.sin(n.phase) * 0.4
        const r = n.r * pulse

        if (mode === 'fragmented') {
          ctx.beginPath()
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(75,85,99,${0.3 + pulse * 0.2})`
          ctx.fill()
        } else {
          // Glow
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4)
          if (mode === 'syncing') {
            const s = (Math.sin(t * 1.5 + i * 0.5) + 1) * 0.5
            grd.addColorStop(0, `rgba(34,211,238,${0.7 * s + 0.2})`)
            grd.addColorStop(0.5, `rgba(37,99,235,${0.3 * s})`)
            grd.addColorStop(1, 'rgba(37,99,235,0)')
          } else {
            grd.addColorStop(0, `rgba(34,211,238,${0.8 * pulse})`)
            grd.addColorStop(0.5, `rgba(37,99,235,${0.3 * pulse})`)
            grd.addColorStop(1, 'rgba(37,99,235,0)')
          }
          ctx.beginPath()
          ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()

          ctx.beginPath()
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(34,211,238,${0.9 * pulse})`
          ctx.fill()
        }
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      }
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    draw()

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  const updateOptions = (newOptions: Partial<UseNeuralCanvasOptions>) => {
    optionsRef.current = { ...optionsRef.current, ...newOptions }
  }

  return { canvasRef, updateOptions }
}
