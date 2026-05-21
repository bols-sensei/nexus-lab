'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

const dataFlows = [
  'Intelligence.flow() → 0.97',
  'Synapse.connect(nodeA, nodeB)',
  'Knowledge.evolve(collective)',
  'Innovation.init(minds: 847)',
  'Neural.pulse(freq: 40Hz)',
  'Collective.IQ = 9712',
  'Discovery.rate → ∞',
]

const stats = [
  { value: '847', label: 'Connected Minds', unit: 'neurons' },
  { value: '12.4K', label: 'Synaptic Links', unit: 'connections' },
  { value: '99.7%', label: 'System Uptime', unit: 'active' },
  { value: '∞', label: 'Innovation Potential', unit: 'ideas/sec' },
]

export default function IntelligenceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      id="intelligence"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      <NeuralCanvas nodeCount={70} colorMode="syncing" connectionDistance={140} />

      {/* Cyan + blue orbs */}
      <div className="ambient-orb" style={{
        width: '600px', height: '600px', background: '#22D3EE',
        top: '30%', left: '-15%', opacity: 0.04, filter: 'blur(100px)',
      }} />
      <div className="ambient-orb" style={{
        width: '400px', height: '400px', background: '#7C3AED',
        top: '60%', right: '-10%', opacity: 0.06, filter: 'blur(80px)',
        animationDelay: '5s',
      }} />

      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(5,8,22,0.45)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Floating data terminal */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-24 md:mb-32"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Left: text */}
          <div>
            <motion.p
              className="overline mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Neural evolution
            </motion.p>
            <motion.h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              A living system of
              <br />
              <span style={{ color: '#22D3EE' }} className="text-glow-cyan">
                synchronized intelligence.
              </span>
            </motion.h2>
            <motion.p
              className="font-body text-gray-400 text-base md:text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Data flows. Knowledge pulses. Every mind connected to every other, forming a network more powerful than the sum of its neurons.
            </motion.p>
          </div>

          {/* Right: terminal */}
          <motion.div
            className="glass-card p-5 md:p-6 font-mono text-xs"
            style={{ y: y1, borderColor: 'rgba(34,211,238,0.15)' }}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-gray-600 text-[10px] ml-2 tracking-widest">NEXUS.terminal v2.4.1</span>
            </div>
            <div className="space-y-2">
              {dataFlows.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                >
                  <span className="text-cyan-500/50 shrink-0">›</span>
                  <span className={i % 3 === 0 ? 'text-cyan-400' : i % 3 === 1 ? 'text-blue-400' : 'text-purple-400'}>
                    {line}
                  </span>
                </motion.div>
              ))}
              <motion.div
                className="flex items-center gap-1 mt-3"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-cyan-500/50">›</span>
                <span className="w-2 h-4 bg-cyan-400/70 inline-block" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-card p-5 md:p-7 text-center"
              style={{ borderColor: 'rgba(37,99,235,0.2)', y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <div
                className="font-display font-extrabold mb-1"
                style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  background: 'linear-gradient(135deg, #22D3EE, #2563EB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="font-body text-xs text-gray-400 mb-1">{s.label}</div>
              <div className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">
                {s.unit}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal signal bar */}
        <motion.div
          className="mt-16 md:mt-20 flex items-center gap-3 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="shrink-0 rounded-full"
              style={{
                width: '3px',
                height: `${Math.sin(i * 0.6) * 12 + 16}px`,
              }}
              animate={{
                background: [
                  `rgba(34,211,238,${0.1 + Math.sin(i * 0.4) * 0.4})`,
                  `rgba(37,99,235,${0.3 + Math.cos(i * 0.4) * 0.4})`,
                  `rgba(124,58,237,${0.2 + Math.sin(i * 0.8) * 0.3})`,
                  `rgba(34,211,238,${0.1 + Math.sin(i * 0.4) * 0.4})`,
                ],
              }}
              transition={{ duration: 2, delay: i * 0.04, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #050816, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #050816, transparent)' }} />
    </section>
  )
}
