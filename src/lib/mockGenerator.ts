// Mulberry32 seeded PRNG — deterministic fake text generation
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// GLM-5 structural chunks — headings, numbered lists, chapter patterns
const GLM_CHUNKS = [
  'Chapter 1: Foundations of Quantum Error Correction\n',
  '1.1 The Threshold Theorem — Overview\n',
  '§ Abstract: We present a unified framework for\n',
  'Definition 2.3: A stabilizer code S ⊂ Pn is\n',
  'Heading: Topological Codes and Surface Lattices\n',
  'Property 4.1: For any [n,k,d] code, the bound\n',
  '2. Methodology\n  2.1 Syndrome extraction\n  2.2 Decoder',
  'Table 1: Comparison of code distances across\n',
  '│ Code │ Distance │ Rate │ Threshold │\n',
  'Theorem 3.7: The minimum weight of a logical\n',
  '§5 Results and Analysis\n',
  'Figure 2: Lattice surgery operations on the\n',
  'Algorithm 1: Minimum-weight perfect matching\n',
  'Proof: By induction on the number of qubits n,\n',
  'Corollary: The transversal gate set for the\n',
  '3.4 Fault-tolerant gadgets\n',
  'Appendix A: Pauli group representations\n',
  'Index: stabilizer · syndrome · toric · planar\n',
];

// MiniMax m2.5 creative chunks — flowing prose, transitions
const MINIMAX_CHUNKS = [
  'The elegance of quantum error correction lies not\n',
  'in its mathematical formalism alone, but in the\n',
  'profound insight that information can be protected\n',
  'Consider, for a moment, the fragility of a qubit—\n',
  'suspended between states, vulnerable to the\n',
  'slightest thermal whisper from its environment.\n',
  'What makes this remarkable is the counterintuitive\n',
  'nature of the solution: redundancy without\n',
  'duplication, protection without observation.\n',
  'The surface code, perhaps the most promising\n',
  'candidate for practical quantum computing, maps\n',
  'logical qubits onto a two-dimensional lattice of\n',
  'To understand why this matters, we must first\n',
  'appreciate the scale of the challenge: a single\n',
  'logical qubit may require thousands of physical\n',
  'Yet this overhead is not merely computational—\n',
  'it represents a fundamental negotiation between\n',
  'precision and the thermodynamic cost of certainty.\n',
];

// Kimi k2.5 retrieval chunks — citations, facts, sources
const KIMI_CHUNKS = [
  '[Source: arXiv:2401.15823] Fowler et al. (2024)\n',
  'demonstrate a 0.3% logical error rate per round\n',
  'of syndrome extraction on a distance-7 surface\n',
  '[Ref: Nature 614, 676–681 (2023)] Google Quantum\n',
  'AI achieved below-threshold error correction\n',
  'using 72 physical qubits encoding 1 logical qubit.\n',
  '[Source: PRX Quantum 5, 010102] The decoder\n',
  'latency must remain below the coherence time T2\n',
  'of the physical qubits, typically 50–100μs for\n',
  '[DOI: 10.1126/science.abi8378] IBM reported\n',
  'a distance-3 heavy-hex code with 99.4% average\n',
  'gate fidelity across 127 superconducting qubits.\n',
  '[arXiv:2312.04421] Recent advances in Union-Find\n',
  'decoding achieve near-MWPM performance with\n',
  'O(n·α(n)) time complexity per syndrome round.\n',
  '[Ref: PRL 129, 030501] Error mitigation via\n',
  'probabilistic error cancellation reduces logical\n',
  'error rates by 2.4× at the cost of 3.1× sampling.\n',
];

const CHUNK_SETS = [GLM_CHUNKS, MINIMAX_CHUNKS, KIMI_CHUNKS];

export function createMockStream(panelIndex: number): string[] {
  const rng = mulberry32(panelIndex * 7919 + 42);
  const modelType = panelIndex % 3;
  const chunks = CHUNK_SETS[modelType];
  const result: string[] = [];
  const numChunks = 6 + Math.floor(rng() * 6);

  const usedIndices = new Set<number>();
  for (let i = 0; i < numChunks; i++) {
    let idx: number;
    do {
      idx = Math.floor(rng() * chunks.length);
    } while (usedIndices.has(idx) && usedIndices.size < chunks.length);
    usedIndices.add(idx);
    result.push(chunks[idx]);
  }

  return result;
}

export function getModelTypeForPanel(panelIndex: number): 'glm5' | 'minimaxM25' | 'kimik25' {
  const mod = panelIndex % 3;
  if (mod === 0) return 'glm5';
  if (mod === 1) return 'minimaxM25';
  return 'kimik25';
}

export function generateBlocks(count: number): string[] {
  const blocks: string[] = [];
  for (let i = 0; i < count; i++) {
    const stream = createMockStream(i);
    blocks.push(stream.join(' '));
  }
  return blocks;
}
