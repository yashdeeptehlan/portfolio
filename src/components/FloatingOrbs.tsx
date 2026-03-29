import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const orbs = [
  { pos: [-4, 1.5, -1] as [number, number, number], scale: 0.22, speed: 0.6, label: 'RAG' },
  { pos: [4.5, -1, -0.5] as [number, number, number], scale: 0.18, speed: 0.9, label: 'LLM' },
  { pos: [-2, -2, 0.5] as [number, number, number], scale: 0.15, speed: 1.1, label: 'SQL' },
  { pos: [2.5, 2, -2] as [number, number, number], scale: 0.20, speed: 0.7, label: 'API' },
  { pos: [0.5, -1.5, 1] as [number, number, number], scale: 0.12, speed: 1.3, label: 'ML' },
  { pos: [-3.5, 0, 1.5] as [number, number, number], scale: 0.16, speed: 0.8, label: 'PG' },
];

function Orb({ pos, scale, speed, offset }: { pos: [number, number, number]; scale: number; speed: number; offset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (meshRef.current) {
      meshRef.current.position.y = pos[1] + Math.sin(t) * 0.3;
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.6;
    }
    if (glowRef.current) {
      glowRef.current.position.y = pos[1] + Math.sin(t) * 0.3;
      const pulse = 1 + Math.sin(t * 2) * 0.15;
      glowRef.current.scale.setScalar(scale * 2.5 * pulse);
    }
  });

  return (
    <group position={pos}>
      {/* Glow sphere */}
      <mesh ref={glowRef} scale={scale * 2.5}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
      {/* Core icosahedron */}
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

export default function FloatingOrbs() {
  return (
    <>
      {orbs.map((orb, i) => (
        <Orb key={i} pos={orb.pos} scale={orb.scale} speed={orb.speed} offset={(i * Math.PI) / 3} />
      ))}
    </>
  );
}
