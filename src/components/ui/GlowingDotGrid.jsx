"use client";

import { useEffect, useRef } from "react";

const STEP = 28;

/**
 * Full-coverage canvas that renders a dot grid where each dot
 * pulses independently at a random phase and speed.
 * Opacity range: ~0.04 (dim) → ~0.14 (subtle glow).
 */
export function GlowingDotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / STEP) + 1;
      const rows = Math.ceil(height / STEP) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * STEP + STEP / 2;
          const y = r * STEP + STEP / 2;

          // Deterministic per-dot random phase using position as seed
          const phase = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
          const phaseOffset = (phase - Math.floor(phase)) * Math.PI * 2;

          // Each dot pulses at its own random speed
          const speedSeed = Math.sin(c * 74.3 + r * 159.1) * 43758.5;
          const speed = 0.4 + ((speedSeed - Math.floor(speedSeed)) * 0.6);

          const glow = Math.sin(t * speed + phaseOffset) * 0.5 + 0.5; // 0–1

          const opacity = 0.04 + glow * 0.1;
          const radius = 1 + glow * 0.5;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${opacity.toFixed(3)})`;
          ctx.fill();
        }
      }

      t += 0.022;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
