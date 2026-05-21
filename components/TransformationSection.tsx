'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

const syncingNodes = [
  { label: 'Vision', delay: 0 },
  { label: 'Collab', delay: 0.3 },
  { label: 'Core', delay: 0.6, center: true },
  { label: 'Innov.', delay: 0.9 },
  { label: 'Impact', delay: 1.2 },
]

export default function TransformationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="transformation"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 md:py-32"
    >
      <NeuralCanvas colorMode="syncing" nodeCount={65} />

      {/* Blue glow center */}
      <div
        className="ambient-orb"
        style={{
          width: '600px', height: '600px',
          background: '#2563EB',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          filter: 'blur(120px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          className="overline mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          The shift
        </motion.p>

        <motion.h2
          className="font-display font-bold leading-tight mb-6 md:mb-8"
          style={{ fontSize: 'clamp(26px, 4.5vw, 48px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          What if a promotion could function{' '}
          <br className="hidden md:block" />
          like a{' '}
          <span
            className="text-glow-cyan"
            style={{ color: '#22D3EE' }}
          >
            neural network
          </span>
          ?
        </motion.h2>

        {/* Syncing nodes */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 my-14 md:my-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          role="img"
          aria-label="Nodes syncing together"
        >
          {syncingNodes.map((n, i) => (
            <motion.div
              key={n.label}
              className={`relative flex items-center justify-center rounded-full font-mono text-xs text-blue-300`}
              style={{
                width: n.center ? 88 : 72,
                height: n.center ? 88 : 72,
                border: `1px solid ${n.center ? '#22D3EE' : '#2563EB'}`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + n.delay }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, delay: n.delay, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-[-2px] rounded-full"
                style={{
                  boxShadow: n.center
                    ? '0 0 20px rgba(34,211,238,0.5), 0 0 40px rgba(34,211,238,0.2)'
                    : '0 0 12px rgba(37,99,235,0.4)',
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, delay: n.delay, repeat: Infinity }}
              />
              <span className="tracking-wider text-[11px]">{n.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Energy flow lines */}
        <motion.div
          className="flex items-center justify-center gap-1 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="h-px rounded-full"
              style={{ width: i === 10 ? '32px' : '8px' }}
              animate={{
                background: [
                  'rgba(34,211,238,0.2)',
                  'rgba(34,211,238,0.8)',
                  'rgba(34,211,238,0.2)',
                ],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.05,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
          <span className="font-mono text-[10px] text-cyan-400/60 tracking-widest ml-3">
            SYNC
          </span>
        </motion.div>

        <motion.p
          className="font-body text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Connections begin forming. Energy starts flowing. The system becomes alive.
        </motion.p>
      </div>

      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #050816, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #050816, transparent)' }} />
    </section>
  )
}
