'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function SplineGlobe() {
  return (
    <div
      className="w-full h-full relative"
      style={{
        maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
      }}
    >
      <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
        <Spline scene="https://prod.spline.design/S6FngPEV2SNfSBPp/scene.splinecode" />
      </Suspense>

      {/* Watermark Cover */}
      <div className="absolute bottom-[16px] right-[16px] w-[140px] h-[36px] bg-[#0c0c0c] z-50 pointer-events-none" />
    </div>
  );
}
