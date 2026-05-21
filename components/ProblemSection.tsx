'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

const problems = [
  {
    label: 'Passive',
    sub: 'Learning without action',
    icon: '◯',
  },
  {
    label: 'Isolated',
    sub: 'Talents without connection',
    icon: '◯',
  },
  {
    label: 'Fragmented',
    sub: 'Knowledge without system',
    icon: '◯',
  },
  {
    label: 'Stagnant',
    sub: 'Potential without expression',
    icon: '◯',
  },
]

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="problem"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 md:py-32"
    >
      <NeuralCanvas colorMode="fragmented" nodeCount={50} connectionDistance={100} />

      {/* Dim overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(5,8,22,0.5)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          className="overline mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          The problem
        </motion.p>

        <motion.h2
          className="font-display font-bold text-white leading-tight mb-6 md:mb-8"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Traditional learning{' '}
          <span className="text-gray-500">isolates</span>{' '}
          the mind.
        </motion.h2>

        <motion.p
          className="font-body text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-16 md:mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Neurons without synapses. Potential without circuit. The signal never reaches its destination.
        </motion.p>

        {/* Disconnected node grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              className="relative flex flex-col items-center gap-3 p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
            >
              {/* Disconnected node */}
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                style={{
                  border: '1px solid rgba(107,114,128,0.4)',
                }}
              >
                {/* Broken connection lines */}
                <div
                  className="absolute left-full top-1/2 h-px w-4 md:w-8"
                  style={{
                    background: 'linear-gradient(90deg, rgba(107,114,128,0.3), transparent)',
                  }}
                />
                <div
                  className="absolute right-full top-1/2 h-px w-4 md:w-8"
                  style={{
                    background: 'linear-gradient(270deg, rgba(107,114,128,0.3), transparent)',
                  }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: 'rgba(107,114,128,0.5)' }}
                />
              </div>

              <p className="font-display font-bold text-sm text-gray-500 tracking-widest uppercase">
                {p.label}
              </p>
              <p className="font-body text-xs text-gray-600 leading-snug text-center">
                {p.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Broken signal visualization */}
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-px"
              style={{
                width: i % 3 === 0 ? '24px' : i % 3 === 1 ? '8px' : '4px',
                background: i % 4 === 0
                  ? 'rgba(107,114,128,0.6)'
                  : 'rgba(107,114,128,0.15)',
              }}
            />
          ))}
          <span className="font-mono text-[10px] text-gray-600 tracking-widest ml-2">
            SIGNAL LOST
          </span>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-px"
              style={{
                width: i % 3 === 0 ? '24px' : i % 3 === 1 ? '8px' : '4px',
                background: i % 4 === 0
                  ? 'rgba(107,114,128,0.6)'
                  : 'rgba(107,114,128,0.15)',
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Fades */}
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #050816, transparent)' }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #050816, transparent)' }}
      />
    </section>
  )
}
