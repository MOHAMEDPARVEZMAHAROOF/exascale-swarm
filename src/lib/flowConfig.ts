import type { Node, Edge } from 'reactflow';

export const flowNodes: Node[] = [
  {
    id: 'prompt-input',
    type: 'default',
    position: { x: 300, y: 0 },
    data: {
      label: 'PROMPT INPUT',
      subtitle: 'Raw token stream ingestion',
      nodeType: 'input',
    },
  },
  {
    id: 'skeleton-router',
    type: 'default',
    position: { x: 250, y: 150 },
    data: {
      label: 'SKELETON ROUTER',
      subtitle: 'Tokenise → Segment → Dispatch',
      nodeType: 'router',
    },
  },
  {
    id: 'glm5',
    type: 'default',
    position: { x: 0, y: 340 },
    data: {
      label: 'GLM-5',
      subtitle: 'STRUCTURAL EXPERT',
      spec: '512K CTX · BIDIRECTIONAL',
      nodeType: 'model',
    },
  },
  {
    id: 'minimax',
    type: 'default',
    position: { x: 280, y: 340 },
    data: {
      label: 'MiniMax m2.5',
      subtitle: 'CREATIVE EXPERT',
      spec: '1M CTX · LINEAR MoE',
      nodeType: 'model',
    },
  },
  {
    id: 'kimi',
    type: 'default',
    position: { x: 560, y: 340 },
    data: {
      label: 'Kimi k2.5',
      subtitle: 'RETRIEVAL EXPERT',
      spec: '200K CTX · RL-TUNED',
      nodeType: 'model',
    },
  },
  {
    id: 'assembled-output',
    type: 'default',
    position: { x: 215, y: 520 },
    data: {
      label: 'ASSEMBLED OUTPUT',
      subtitle: 'Merged token stream · 104,857 TPS',
      nodeType: 'output',
    },
  },
];

export const flowEdges: Edge[] = [
  {
    id: 'e-prompt-router',
    source: 'prompt-input',
    target: 'skeleton-router',
    type: 'default',
    animated: true,
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
  {
    id: 'e-router-glm',
    source: 'skeleton-router',
    target: 'glm5',
    type: 'default',
    animated: true,
    label: 'Structural segments',
    labelStyle: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      fill: 'var(--ash)',
      letterSpacing: '1px',
    },
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
  {
    id: 'e-router-minimax',
    source: 'skeleton-router',
    target: 'minimax',
    type: 'default',
    animated: true,
    label: 'Creative segments',
    labelStyle: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      fill: 'var(--ash)',
      letterSpacing: '1px',
    },
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
  {
    id: 'e-router-kimi',
    source: 'skeleton-router',
    target: 'kimi',
    type: 'default',
    animated: true,
    label: 'Retrieval segments',
    labelStyle: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      fill: 'var(--ash)',
      letterSpacing: '1px',
    },
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
  {
    id: 'e-glm-output',
    source: 'glm5',
    target: 'assembled-output',
    type: 'default',
    animated: true,
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
  {
    id: 'e-minimax-output',
    source: 'minimax',
    target: 'assembled-output',
    type: 'default',
    animated: true,
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
  {
    id: 'e-kimi-output',
    source: 'kimi',
    target: 'assembled-output',
    type: 'default',
    animated: true,
    style: { stroke: 'var(--steel)', strokeWidth: 1, strokeDasharray: '4 4' },
  },
];
