import type { Metadata } from 'next';
import { plusJakartaSans, dmSans, jetBrainsMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exascale MoE Swarm — 100,000 Tokens Per Second',
  description:
    'The world\'s first parallel Mixture-of-Experts inference engine. Three expert models. One router. Zero latency bottleneck. Achieving 100,000+ tokens per second through distributed architecture.',
  openGraph: {
    title: 'Exascale MoE Swarm',
    description: 'Distributed AI inference at 100,000+ TPS.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
