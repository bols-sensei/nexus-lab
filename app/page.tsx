'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import TransformationSection from '@/components/TransformationSection'
import ConceptSection from '@/components/ConceptSection'
import IntelligenceSection from '@/components/IntelligenceSection'
import FinalSection from '@/components/FinalSection'

export default function Home() {
  useSmoothScroll()

  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      {/* Atmospheric overlays */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />

      <Navigation />

      <main>
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <ConceptSection />
        <IntelligenceSection />
        <FinalSection />
      </main>
    </>
  )
}
