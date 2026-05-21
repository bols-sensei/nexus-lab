'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

const pillars = [
  {
    icon: '⬡',
    title: 'Neural Coworking',
    body: 'Every student is a node. Every collaboration, a synapse firing toward shared discovery.',
    color: '#2563EB',
  },
  {
    icon: '◈',
    title: 'Experimentation',
    body: 'A living laboratory where ideas are tested, broken, rebuilt, and transformed into breakthroughs.',
    color: '#22D3EE',
  },
  {
    icon: '⊕',
    title: 'Collective Intelligence',
    body: 'When minds connect, knowledge evolves beyond what any individual neuron could hold alone.',
    color: '#7C3AED',
  },
  {
    icon: '◉',
    title: 'Applied Learning',
    body: 'Theory meets practice in a continuous loop of creation, iteration, and scientific discovery.',
    color: '#22D3EE',
  },
  {
    icon: '⟁',
    title: 'Innovation Culture',
    body: 'A mindset that transforms every challenge into a synaptic opportunity for growth.',
    color: '#2563EB',
  },
  {
    icon: '⌬',
    title: 'Technological Evolution',
    body: 'Building the future requires systems that learn, adapt, and evolve with each connection made.',
    color: '#7C3AED',
  },
]

export default function ConceptSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="concept"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      <NeuralCanvas nodeCount={55} colorMode="standard" connectionDistance={110} />

      {/* Purple ambient */}
      <div
        className="ambient-orb"
        style={{
          width: '500px', height: '500px',
          background: '#7C3AED',
          top: '20%', right: '-10%',
          opacity: 0.06,
          filter: 'blur(100px)',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: '400px', height: '400px',
          background: '#2563EB',
          bottom: '10%', left: '-8%',
          opacity: 0.07,
          filter: 'blur(80px)',
          animationDelay: '3s',
        }}
      />

      {/* Dim overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(5,8,22,0.55)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            className="overline mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            The concept
          </motion.p>

          <motion.h2
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(30px, 5.5vw, 60px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Collective Intelligence.
            <br />
            <span
              className="font-display font-bold"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Living Architecture.
            </span>
          </motion.h2>

          <motion.p
            className="font-body text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Not a classroom. Not a program. An organism of interconnected minds, constantly evolving, creating, discovering.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="glass-card p-6 md:p-8 group cursor-default"
              style={{
                borderColor: `${pillar.color}20`,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              whileHover={{
                borderColor: `${pillar.color}50`,
                background: `rgba(${pillar.color === '#2563EB' ? '37,99,235' : pillar.color === '#22D3EE' ? '34,211,238' : '124,58,237'},0.07)`,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="text-2xl mb-4 font-mono"
                style={{ color: pillar.color }}
                aria-hidden="true"
              >
                {pillar.icon}
              </div>
              <h3
                className="font-display font-bold text-sm tracking-widest uppercase mb-3"
                style={{ color: '#E5E7EB' }}
              >
                {pillar.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tag */}
        <motion.div
          className="flex justify-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex items-center gap-4">
            <hr className="nx-rule w-16" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-gray-600">
              Not a classroom — an organism
            </span>
            <hr className="nx-rule w-16" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #050816, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #050816, transparent)' }} />
    </section>
  )
}
