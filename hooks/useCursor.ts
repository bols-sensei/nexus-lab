'use client'

import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (window.innerWidth < 768) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const animate = () => {
      targetRef.current.x += (posRef.current.x - targetRef.current.x) * 0.12
      targetRef.current.y += (posRef.current.y - targetRef.current.y) * 0.12
      ring.style.left = `${targetRef.current.x}px`
      ring.style.top = `${targetRef.current.y}px`
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => ring.classList.add('hover')
    const onLeaveLink = () => ring.classList.remove('hover')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return { cursorRef, ringRef }
}
