'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { createMockStream } from '@/lib/mockGenerator';

export type SwarmPhase =
  | 'IDLE'
  | 'ROUTING'
  | 'DISPATCHING'
  | 'GENERATING'
  | 'ASSEMBLING'
  | 'COMPLETE';

interface PanelState {
  text: string;
  done: boolean;
}

export function useSwarmSim() {
  const [phase, setPhase] = useState<SwarmPhase>('IDLE');
  const [panels, setPanels] = useState<PanelState[]>([]);
  const [routerText, setRouterText] = useState('');
  const [assembledText, setAssembledText] = useState('');
  const [elapsed, setElapsed] = useState('0.00');
  const intervalsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllIntervals = useCallback(() => {
    intervalsRef.current.forEach(clearTimeout);
    intervalsRef.current = [];
  }, []);

  const execute = useCallback(() => {
    clearAllIntervals();
    setPhase('ROUTING');
    setRouterText('Skeleton Router analysing prompt structure...');
    setPanels([]);
    setAssembledText('');

    const startTime = performance.now();

    // Phase: ROUTING → DISPATCHING
    const t1 = setTimeout(() => {
      setPhase('DISPATCHING');
      setRouterText('Dispatching segments to expert models...');

      // Create 100 empty panels with stagger
      const emptyPanels: PanelState[] = Array.from({ length: 100 }, () => ({
        text: '',
        done: false,
      }));
      setPanels(emptyPanels);

      // Phase: DISPATCHING → GENERATING
      const t2 = setTimeout(() => {
        setPhase('GENERATING');
        setRouterText('');

        // Each panel fills independently
        for (let i = 0; i < 100; i++) {
          const chunks = createMockStream(i);
          const delay = 80 + (i % 7) * 25; // 80-230ms per chunk
          let chunkIndex = 0;

          const fillPanel = () => {
            if (chunkIndex < chunks.length) {
              setPanels((prev) => {
                const newPanels = [...prev];
                newPanels[i] = {
                  text: newPanels[i].text + chunks[chunkIndex],
                  done: chunkIndex === chunks.length - 1,
                };
                return newPanels;
              });
              chunkIndex++;
              const t = setTimeout(fillPanel, delay);
              intervalsRef.current.push(t);
            }
          };

          const startDelay = Math.floor(i / 10) * 15 + (i % 10) * 8;
          const t = setTimeout(fillPanel, startDelay);
          intervalsRef.current.push(t);
        }

        // Phase: GENERATING → ASSEMBLING → COMPLETE
        const t3 = setTimeout(() => {
          setPhase('ASSEMBLING');

          const t4 = setTimeout(() => {
            const totalElapsed = ((performance.now() - startTime) / 1000).toFixed(2);
            setElapsed(totalElapsed);
            setAssembledText(
              'Chapter 1: Foundations of Quantum Error Correction\n\n' +
              'The elegance of quantum error correction lies not in its mathematical formalism alone, ' +
              'but in the profound insight that information can be protected from decoherence through ' +
              'clever encoding across entangled qubits. [Source: arXiv:2401.15823] Fowler et al. demonstrate ' +
              'a 0.3% logical error rate per round of syndrome extraction on a distance-7 surface code.\n\n' +
              'Definition 2.3: A stabilizer code S ⊂ Pn defines the codespace as the simultaneous +1 eigenspace ' +
              'of all elements in S. The surface code, perhaps the most promising candidate for practical quantum ' +
              'computing, maps logical qubits onto a two-dimensional lattice...\n\n' +
              '[Assembled from 100 parallel expert streams across GLM-5, MiniMax m2.5, and Kimi k2.5]'
            );
            setPhase('COMPLETE');
          }, 400);
          intervalsRef.current.push(t4);
        }, 1800);
        intervalsRef.current.push(t3);
      }, 300);
      intervalsRef.current.push(t2);
    }, 200);
    intervalsRef.current.push(t1);
  }, [clearAllIntervals]);

  const reset = useCallback(() => {
    clearAllIntervals();
    setPhase('IDLE');
    setPanels([]);
    setRouterText('');
    setAssembledText('');
    setElapsed('0.00');
  }, [clearAllIntervals]);

  useEffect(() => {
    return () => clearAllIntervals();
  }, [clearAllIntervals]);

  return {
    phase,
    panels,
    routerText,
    assembledText,
    elapsed,
    execute,
    reset,
  };
}
