'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    let lenis: any = null

    const init = async () => {
      try {
        const Lenis = (await import('lenis')).default
        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          touchMultiplier: 1.5,
        })

        const raf = (time: number) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Fallback if lenis not available
      }
    }

    init()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])
}
