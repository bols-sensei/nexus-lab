'use client'

import { useCursor } from '@/hooks/useCursor'

export default function CustomCursor() {
  const { cursorRef, ringRef } = useCursor()

  return (
    <>
      <div ref={cursorRef} className="nx-cursor" aria-hidden="true" />
      <div ref={ringRef} className="nx-cursor-ring" aria-hidden="true" />
    </>
  )
}
