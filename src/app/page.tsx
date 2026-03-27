'use client';

import dynamic from 'next/dynamic';
import MeshBackground from '@/components/layout/MeshBackground';
import Navigation from '@/components/shared/Navigation';
import HeroSection from '@/components/hero/HeroSection';
import MarqueeStrip from '@/components/shared/MarqueeStrip';

const ArchSection = dynamic(() => import('@/components/architecture/ArchSection'));
const ModelCard = dynamic(() => import('@/components/architecture/ModelCard'));
const RouterExplainer = dynamic(() => import('@/components/architecture/RouterExplainer'));
const ParallelDemo = dynamic(() => import('@/components/demo/ParallelDemo'), { ssr: false });
const HardwareSpecs = dynamic(() => import('@/components/specs/HardwareSpecs'));
const ClosingCTA = dynamic(() => import('@/components/shared/ClosingCTA'));

export default function Home() {
  return (
    <>
      <MeshBackground />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <MarqueeStrip />
        <ArchSection />
        <ModelCard />
        <RouterExplainer />
        <ParallelDemo />
        <HardwareSpecs />
        <ClosingCTA />
      </main>
    </>
  );
}
