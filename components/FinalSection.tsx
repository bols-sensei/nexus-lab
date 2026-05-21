'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

export default function FinalSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="final"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24"
    >
      <NeuralCanvas nodeCount={100} colorMode="syncing" connectionDistance={150} />

      {/* Central glow burst */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <motion.div
          className="rounded-full"
          style={{ width: '700px', height: '700px', background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <motion.div
          className="rounded-full"
          style={{ width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(5,8,22,0.3)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          className="overline mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Final vision
        </motion.p>

        <motion.p
          className="font-body text-gray-400 text-xl md:text-2xl italic mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          "NEXUS LAB is not a group."
        </motion.p>

        <motion.p
          className="font-body text-gray-300 text-xl md:text-2xl italic mb-12 md:mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          "It is a living system of connected intelligence."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <hr className="nx-rule max-w-xs mx-auto mb-12 md:mb-16" />
        </motion.div>

        <motion.h2
          className="font-display font-extrabold leading-tight"
          style={{
            fontSize: 'clamp(22px, 4vw, 44px)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.05em',
            background: 'linear-gradient(135deg, #22D3EE 0%, #2563EB 40%, #7C3AED 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 2.6 }}
        >
          Connect Intelligence.
          <br />
          Build Innovation.
        </motion.h2>

        {/* Neural sync ring */}
        <motion.div
          className="flex justify-center mt-16 md:mt-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 3.2 }}
        >
          <div className="relative w-20 h-20">
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-400/60"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500/40"
              animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-purple-500/30"
              animate={{ scale: [1, 2.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400/80" style={{ boxShadow: '0 0 12px #22D3EE, 0 0 24px rgba(34,211,238,0.4)' }} />
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 md:mt-24 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 4 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 relative">
              <div className="absolute inset-0 rounded-full border border-cyan-400/40" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 opacity-70" />
              <div className="absolute inset-1.5 rounded-full bg-nx-bg" />
              <div className="absolute inset-[7px] rounded-full bg-cyan-400" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-gray-600 uppercase">
              NEXUS LAB — Connect Intelligence. Build Innovation.
            </span>
          </div>
          <p className="font-mono text-[9px] text-gray-700 tracking-widest uppercase">
            Faculté d'Informatique · Système vivant d'intelligences connectées
          </p>
        </motion.div>
      </div>

      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #050816, transparent)' }} />
    </section>
  )
}
