import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import NeuralBackground from './NeuralBackground';
import ErrorBoundary from './ErrorBoundary';

export default function HeroScene() {
  return (
    <ErrorBoundary fallback={null}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1.0} color="#22d3ee" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#34d399" />
        <Suspense fallback={null}>
          <NeuralBackground />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
}
