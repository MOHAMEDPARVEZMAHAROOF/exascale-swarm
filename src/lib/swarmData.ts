export const MODEL_SPECS = {
  glm5: {
    name: 'GLM-5',
    role: 'Structural Expert',
    index: '01',
    contextWindow: '512K TOKENS',
    architecture: 'BIDIRECTIONAL GLM + [MASK] FILL',
    deployment: 'GROQ LPU · 12.8TB/S BANDWIDTH',
    contribution: '38,420 TPS AVERAGE',
    tpsContribution: 38420,
    specialization: 'Logical structure, document skeleton, heading hierarchy',
  },
  minimaxM25: {
    name: 'MiniMax m2.5',
    role: 'Creative Expert',
    index: '02',
    contextWindow: '1,000,000 TOKENS',
    architecture: 'LINEAR ATTENTION MOE · 456B PARAMS',
    deployment: 'NVIDIA H100 SXM5 · 80GB HBM3',
    contribution: '41,203 TPS AVERAGE',
    tpsContribution: 41203,
    specialization: 'Prose generation, voice consistency, creative nuance',
  },
  kimik25: {
    name: 'Kimi k2.5',
    role: 'Retrieval Expert',
    index: '03',
    contextWindow: '200,000 TOKENS',
    architecture: 'MOE + RL-TUNED RETRIEVAL · 32B ACTIVE',
    deployment: 'HYBRID TPU V5E + A100',
    contribution: '24,234 TPS AVERAGE',
    tpsContribution: 24234,
    specialization: 'Deep retrieval, citation synthesis, long-form coherence',
  },
} as const;

export interface HardwareSpec {
  label: string;
  value: string;
  isHighlight?: boolean;
}

export const HARDWARE_SPECS: HardwareSpec[] = [
  { label: 'COMPUTE', value: '100× GROQ LPU RACKS + 40× NVIDIA H100 SXM5 PODS' },
  { label: 'INTERCONNECT', value: '800G INFINIBAND NDR — MELLANOX QUANTUM-2' },
  { label: 'AGGREGATE MEMORY', value: '3.2 PETABYTES HBM3e' },
  { label: 'HOT STORAGE', value: '48TB NVMe GEN5 — PROMPT CACHE' },
  { label: 'NETWORK EGRESS', value: '1.6 TBPS — BONDED 2× 800G' },
  { label: 'PEAK THROUGHPUT', value: '104,857 TOKENS / SECOND', isHighlight: true },
  { label: 'THEORETICAL MAXIMUM', value: '262,144 TOKENS / SECOND' },
  { label: 'POWER DRAW', value: '~18 MW @ PUE 1.08' },
  { label: 'COOLING', value: 'DIRECT LIQUID — 40°C DELTA-T' },
  { label: 'REDUNDANCY', value: 'N+2 CRITICAL PATHS — 99.999% SLA' },
];

export const SWARM_METRICS = {
  peakTPS: 104857,
  theoreticalMaxTPS: 262144,
  totalContextWindow: 913000,
  activeExperts: 3,
  routerLatency: '< 2ms',
  assemblyLatency: '< 5ms',
  e2eLatency: '< 12ms',
} as const;

export const ROUTER_STEPS = [
  {
    number: '01',
    title: 'Ingestion',
    description:
      'The prompt enters as a raw token stream. No preprocessing. No assumptions.',
  },
  {
    number: '02',
    title: 'Segmentation',
    description:
      'The router identifies structural boundaries, semantic clusters, and retrieval requirements.',
  },
  {
    number: '03',
    title: 'Dispatch',
    description:
      'Each segment is routed to its specialist model without blocking other dispatches.',
  },
  {
    number: '04',
    title: 'Assembly',
    description:
      'Outputs are merged in sequence order, not arrival order. Coherence is guaranteed.',
  },
] as const;

export const MARQUEE_ITEMS = [
  { value: '104,857', label: 'TPS' },
  { value: '913,000', label: 'COMBINED CONTEXT TOKENS' },
  { value: '< 12ms', label: 'END-TO-END LATENCY' },
  { value: '3', label: 'EXPERT MODELS' },
  { value: '100+', label: 'GROQ LPU RACKS' },
  { value: '800G', label: 'INFINIBAND NDR' },
  { value: '3.2PB', label: 'HBM3e' },
  { value: '99.999%', label: 'UPTIME SLA' },
  { value: 'N+2', label: 'REDUNDANCY' },
  { value: '18MW', label: 'PEAK POWER' },
] as const;
