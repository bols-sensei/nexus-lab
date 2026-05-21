'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

const introLines = [
  { text: 'Every isolated intelligence holds potential.', delay: 1.2 },
  { text: 'When connected…', delay: 2.8 },
  { text: 'They become something greater.', delay: 4.2, highlight: true },
]

export default function HeroSection() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(4), 5600),
      setTimeout(() => setPhase(5), 6800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const scrollDown = () => {
    document.querySelector('#problem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Neural background */}
      <NeuralCanvas nodeCount={90} colorMode="standard" />

      {/* Ambient orbs */}
      <div
        className="ambient-orb"
        style={{
          width: '500px', height: '500px',
          background: '#2563EB',
          top: '10%', left: '-10%',
          opacity: 0.06,
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: '400px', height: '400px',
          background: '#7C3AED',
          bottom: '10%', right: '-5%',
          opacity: 0.07,
          animationDelay: '4s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 max-w-4xl mx-auto">
        {/* Intro lines */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4 min-h-[100px] md:min-h-[120px] flex flex-col justify-center">
          {introLines.map((line, i) => (
            <AnimatePresence key={i}>
              {phase >= i + 1 && (
                <motion.p
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-body text-base md:text-xl lg:text-2xl leading-relaxed ${
                    line.highlight
                      ? 'text-glow-cyan text-cyan-300'
                      : 'text-gray-400'
                  }`}
                >
                  {line.text}
                </motion.p>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Logo */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 md:mb-6"
            >
              <h1
                className="gradient-text font-display font-extrabold leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(56px, 12vw, 120px)',
                  letterSpacing: '-0.02em',
                }}
              >
                NEXUS LAB
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline */}
        <AnimatePresence>
          {phase >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 md:gap-6"
            >
              <p
                className="font-mono text-cyan-400/80 tracking-widest uppercase text-xs md:text-sm"
                style={{ letterSpacing: '0.35em' }}
              >
                Connect Intelligence. Build Innovation.
              </p>

              <hr className="nx-rule w-24 md:w-32" />

              {/* Scroll cue */}
              <motion.button
                onClick={scrollDown}
                className="mt-8 md:mt-12 flex flex-col items-center gap-2 group"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-label="Scroll down"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-500 group-hover:text-cyan-400 transition-colors">
                  Explore
                </span>
                <div className="w-5 h-5 border-r border-b border-cyan-400/60 group-hover:border-cyan-400 transition-colors rotate-45" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #050816, transparent)' }}
      />
    </section>
  )
}
