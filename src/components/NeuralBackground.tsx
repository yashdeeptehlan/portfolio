import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 60;
const CONNECTION_DISTANCE = 3.0;
const DECEL = 0.97; // velocity multiplier per frame when mouse is still
const MOUSE_IMPULSE = 0.0015;

function generateNodes(count: number) {
  return Array.from({ length: count }, () => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6
    ),
    velocity: new THREE.Vector3(0, 0, 0), // start still
    baseVelocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.004,
      (Math.random() - 0.5) * 0.004,
      (Math.random() - 0.5) * 0.002
    )
  }));
}

export default function NeuralBackground() {
  const { mouse } = useThree();
  const nodesRef = useRef(generateNodes(NODE_COUNT));
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const mouseMoveRef = useRef(0); // magnitude of mouse movement this frame

  const [pointsGeo, linesGeo] = useMemo(() => {
    const pg = new THREE.BufferGeometry();
    const positions = new Float32Array(NODE_COUNT * 3);
    pg.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const lg = new THREE.BufferGeometry();
    const linePositions = new Float32Array(NODE_COUNT * NODE_COUNT * 6);
    lg.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    return [pg, lg];
  }, []);

  const pointsMat = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: new THREE.Color('#22d3ee'),
        size: 0.055,
        transparent: true,
        opacity: 0.75,
        sizeAttenuation: true
      }),
    []
  );

  const lineMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color('#0891b2'),
        transparent: true,
        opacity: 0.14
      }),
    []
  );

  useFrame(() => {
    const nodes = nodesRef.current;
    const mx = mouse.x;
    const my = mouse.y;

    // Detect mouse movement magnitude
    const dx = mx - prevMouseRef.current.x;
    const dy = my - prevMouseRef.current.y;
    const moveMag = Math.sqrt(dx * dx + dy * dy);
    mouseMoveRef.current = moveMag;
    prevMouseRef.current = { x: mx, y: my };

    // Convert mouse to world-ish space
    const worldMx = mx * 10;
    const worldMy = my * 6;

    for (const node of nodes) {
      if (moveMag > 0.001) {
        // Mouse is moving — add impulse toward mouse
        const toMouseX = worldMx - node.position.x;
        const toMouseY = worldMy - node.position.y;
        node.velocity.x += toMouseX * MOUSE_IMPULSE;
        node.velocity.y += toMouseY * MOUSE_IMPULSE;
        node.velocity.z += node.baseVelocity.z * 0.5;
      }

      // Decelerate
      node.velocity.multiplyScalar(DECEL);

      // Update position
      node.position.add(node.velocity);

      // Soft bounds
      if (Math.abs(node.position.x) > 10) node.velocity.x *= -0.8;
      if (Math.abs(node.position.y) > 6) node.velocity.y *= -0.8;
      if (Math.abs(node.position.z) > 3) node.velocity.z *= -0.8;
    }

    // Update points geometry
    const pPos = pointsGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < NODE_COUNT; i++) {
      pPos[i * 3] = nodes[i].position.x;
      pPos[i * 3 + 1] = nodes[i].position.y;
      pPos[i * 3 + 2] = nodes[i].position.z;
    }
    pointsGeo.attributes.position.needsUpdate = true;

    // Update connections
    const lPos = linesGeo.attributes.position.array as Float32Array;
    let idx = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < CONNECTION_DISTANCE) {
          lPos[idx++] = nodes[i].position.x;
          lPos[idx++] = nodes[i].position.y;
          lPos[idx++] = nodes[i].position.z;
          lPos[idx++] = nodes[j].position.x;
          lPos[idx++] = nodes[j].position.y;
          lPos[idx++] = nodes[j].position.z;
        }
      }
    }
    for (let i = idx; i < lPos.length; i++) lPos[i] = 0;
    linesGeo.attributes.position.needsUpdate = true;
    linesGeo.setDrawRange(0, idx / 3);

    // Group tilt follows mouse
    if (groupRef.current) {
      groupRef.current.rotation.y += (mx * 0.06 - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (-my * 0.04 - groupRef.current.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={pointsGeo} material={pointsMat} />
      <lineSegments ref={linesRef} geometry={linesGeo} material={lineMat} />
    </group>
  );
}
