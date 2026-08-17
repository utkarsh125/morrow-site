'use client';

import { useEffect, useRef } from 'react';

/**
 * 4×4 Bayer ordered-dither matrix.
 * Each value is the threshold (0–15); compare against density × 16.
 * Produces structured cross-hatch patterns at intermediate densities —
 * reads as deliberate rasterization, not random noise.
 */
const BAYER4: readonly number[][] = [
  [ 0,  8,  2, 10],
  [12,  4, 14,  6],
  [ 3, 11,  1,  9],
  [15,  7, 13,  5],
];

export default function DitherHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function getDotColor(): string {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-fd-foreground')
        .trim();
      return v || '#ebdbb2';
    }

    function draw() {
      if (!canvas) return;

      // Draw at 1/3 CSS-pixel resolution, scaled up via image-rendering:pixelated
      // — gives the "low-res framebuffer / raster" look.
      const SCALE = 3;
      const W = Math.max(1, Math.ceil(canvas.offsetWidth  / SCALE));
      const H = Math.max(1, Math.ceil(canvas.offsetHeight / SCALE));

      canvas.width  = W;
      canvas.height = H;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = getDotColor();

      // Focal point: slightly left-of-center horizontally (content is
      // left-aligned), a little above mid-height — where the headline
      // visual weight falls.
      const fx = W * 0.36;
      const fy = H * 0.42;

      // maxR: enough to reach every corner from the focal point.
      const maxR = Math.sqrt(
        Math.max(fx, W - fx) ** 2 + Math.max(fy, H - fy) ** 2
      ) * 1.1;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const dx = x - fx;
          const dy = y - fy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Quadratic falloff: tight dense core, very gradual outer fade.
          const density = Math.pow(Math.max(0, 1 - dist / maxR), 2.4);
          const threshold = BAYER4[y & 3][x & 3] / 16;

          if (density > threshold) {
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }

    draw();

    const ro = new ResizeObserver(draw);
    ro.observe(canvas);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', draw);

    return () => {
      ro.disconnect();
      mq.removeEventListener('change', draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        imageRendering: 'pixelated',
        opacity: 0.13,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
