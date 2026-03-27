'use client';

import { ReactFlow, Background, BackgroundVariant } from 'reactflow';
import 'reactflow/dist/style.css';
import { flowNodes, flowEdges } from '@/lib/flowConfig';

const nodeColor = (type: string) => {
  switch (type) {
    case 'input': return 'rgba(43, 92, 230, 0.12)';
    case 'default': return 'rgba(147, 51, 234, 0.08)';
    case 'output': return 'rgba(5, 150, 105, 0.08)';
    default: return 'rgba(255, 255, 255, 0.72)';
  }
};

export default function SwarmFlowMap() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={flowNodes.map((n) => ({
          ...n,
          style: {
            background: 'rgba(255, 255, 255, 0.80)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 8px 32px rgba(43,92,230,0.12), 0 2px 8px rgba(43,92,230,0.08), inset 0 1px 0 rgba(255,255,255,1)',
            borderRadius: '16px',
            padding: '16px',
            fontFamily: 'var(--font-label)',
            fontSize: '12px',
            color: 'var(--text-primary)',
          },
        }))}
        edges={flowEdges.map((e) => ({
          ...e,
          style: {
            stroke: 'rgba(43, 92, 230, 0.40)',
            strokeWidth: 2,
          },
          animated: true,
        }))}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} color="rgba(200,195,220,0.40)" gap={24} size={1.5} />
      </ReactFlow>
    </div>
  );
}
