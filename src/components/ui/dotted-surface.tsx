import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, children, ...props }: DottedSurfaceProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  const containerRef = useRef<HTMLDivElement>(null);
  const hasChildren = children != null;

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;
    const fogColor = isDark ? 0x0a0d12 : 0xffffff;

    const scene = new THREE.Scene();
    const fog = new THREE.Fog(fogColor, 2000, 10000);
    scene.fog = fog;

    const getSize = () => {
      const el = containerRef.current;
      if (!el) {
        return { width: window.innerWidth, height: window.innerHeight };
      }
      const { width, height } = el.getBoundingClientRect();
      if (width < 2 || height < 2) {
        return { width: window.innerWidth, height: window.innerHeight };
      }
      return { width, height };
    };

    let { width, height } = getSize();

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(fog.color, 0);

    mountEl.appendChild(renderer.domElement);

    const positions: number[] = [];
    const colors: number[] = [];
    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        if (isDark) {
          colors.push(200, 200, 200);
        } else {
          colors.push(0, 0, 0);
        }
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    const rafRef = { current: 0 };

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const positionAttribute = geometry.attributes.position;
      const posArr = positionAttribute.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3;
          posArr[index + 1] =
            Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      positionAttribute.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.1;
    };

    const handleResize = () => {
      const s = getSize();
      width = s.width;
      height = s.height;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(mountEl);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      scene.remove(points);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div
      className={cn(
        hasChildren ? 'relative' : 'pointer-events-none fixed inset-0 z-0',
        className,
      )}
      {...props}
    >
      <div
        ref={containerRef}
        className={cn(
          'pointer-events-none',
          hasChildren ? 'absolute inset-0 z-0 min-h-full w-full' : 'h-full w-full',
        )}
      />
      {hasChildren ? <div className="relative z-[1]">{children}</div> : null}
    </div>
  );
}
