'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
          return 100
        }
        return p + Math.random() * 8 + 3
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-8 px-6">
            {/* Logo mark */}
            <motion.div
              className="relative w-16 h-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
              <div className="absolute inset-0 rounded-full border-t border-cyan-400/80" />
              <div className="absolute inset-3 rounded-full border border-blue-500/30" />
              <div className="absolute inset-3 rounded-full border-t border-blue-500" />
              <div className="absolute inset-6 rounded-full bg-cyan-400/80" style={{ boxShadow: '0 0 10px #22D3EE' }} />
            </motion.div>

            <div className="flex flex-col items-center gap-3 text-center">
              <motion.p
                className="font-display font-bold tracking-widest text-xl text-white"
                style={{ letterSpacing: '0.25em' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                NEXUS LAB
              </motion.p>
              <p className="font-mono text-[10px] tracking-widest text-gray-600 uppercase">
                Initializing neural network…
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-px bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #2563EB, #22D3EE)',
                  width: `${Math.min(progress, 100)}%`,
                  boxShadow: '0 0 8px rgba(34,211,238,0.6)',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="font-mono text-[10px] text-gray-700 tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
