'use client';
import { Suspense, useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function SplineGlobe({
  isVisible = true,
}: {
  isVisible?: boolean;
}) {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [isSplineReady, setIsSplineReady] = useState(false);
  const splineRef = useRef<any>(null);

  useEffect(() => {
    // Delay loading of Spline to prioritize LCP
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 1000); // 1.0s delay after mount

    return () => clearTimeout(timer);
  }, []);

  // Strict visibility control: Unmount/Reset when not visible
  useEffect(() => {
    if (!isVisible) {
      setIsSplineReady(false);
    }
  }, [isVisible]);

  const handleOnLoad = (splineApp: any) => {
    splineRef.current = splineApp;
    setIsSplineReady(true);
  };

  return (
    <div
      className="w-full h-full relative"
      style={{
        maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
      }}
    >
      {/* Fallback Image (Mobile) */}
      <div
        className={`absolute right-[40%] top-[50px] w-[360px] h-[813px] transition-opacity duration-1000 md:hidden ${
          shouldLoadSpline && isVisible && isSplineReady
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100'
        }`}
      >
        <Image
          src="/mobile-globus.webp"
          alt="Globe placeholder"
          width={360}
          height={813}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fallback Image (Desktop) */}
      <div
        className={`absolute inset-0 top-[40px] w-full h-full transition-opacity duration-1000 hidden md:flex items-center justify-center ${
          shouldLoadSpline && isVisible && isSplineReady
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100'
        }`}
      >
        <div className="relative w-[80%] h-[80%]">
          <Image
            src="/desktop-globus.webp"
            alt="Globe placeholder desktop"
            fill
            quality={100}
            className="object-contain object-center"
          />
        </div>
      </div>

      {shouldLoadSpline && isVisible && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isSplineReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
            <Spline
              scene="https://prod.spline.design/S6FngPEV2SNfSBPp/scene.splinecode"
              onLoad={handleOnLoad}
            />
          </Suspense>
        </div>
      )}

      {/* Watermark Cover */}
      <div className="absolute bottom-[16px] right-[16px] w-[140px] h-[36px] bg-[#0c0c0c] z-50 pointer-events-none" />
    </div>
  );
}
