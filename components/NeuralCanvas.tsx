'use client'

import { useNeuralCanvas } from '@/hooks/useNeuralCanvas'

interface NeuralCanvasProps {
  colorMode?: 'standard' | 'fragmented' | 'syncing'
  nodeCount?: number
  className?: string
  connectionDistance?: number
  mouseInfluence?: number
}

export default function NeuralCanvas({
  colorMode = 'standard',
  nodeCount = 80,
  className = '',
  connectionDistance = 130,
  mouseInfluence = 180,
}: NeuralCanvasProps) {
  const { canvasRef } = useNeuralCanvas({
    colorMode,
    nodeCount,
    connectionDistance,
    mouseInfluence,
  })

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  )
}
