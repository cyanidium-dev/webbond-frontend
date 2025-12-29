'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import GlassGooeyButton from '../ui/glass-gooey-button';
import { HERO_SLIDER_DATA } from './hero-slider-data';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDER_DATA.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = HERO_SLIDER_DATA[currentIndex];

  return (
    <LazyMotion features={domAnimation}>
      <div
        className="w-full relative flex mt-auto ml-auto max-w-[474px] rounded-[20px] py-[16px] pr-[16px] pl-[24px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_6px_-1px_rgba(255,255,255,0.12)] min-h-[313px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="popLayout">
          <m.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 flex p-[16px] pl-[24px]"
          >
            <div className="flex flex-col z-10">
              <h2 className="mb-[18px] max-w-[170px] font-manrope font-light text-[28px] leading-[120%] text-white uppercase">
                {currentSlide.title}
              </h2>
              <p className="max-w-[147px] font-montserrat font-light text-[10px] leading-[120%] text-[#888]">
                {currentSlide.description}
              </p>
              <GlassGooeyButton
                text="Se mere"
                width={149}
                height={42}
                className="text-white text-[12px] font-montserrat font-light leading-[167%] mt-auto cursor-pointer"
              />
            </div>
            <div className="relative ml-auto rounded-[10px] w-full max-w-[204px] h-[281px] bg-[linear-gradient(168deg,#e63b44_0%,#1b0000_100%)]">
              <div className="relative overflow-hidden w-full h-full rounded-[10px]">
                <Image
                  src={currentSlide.imageDesktop}
                  alt={currentSlide.title}
                  width={408}
                  height={562}
                  sizes="(max-width: 768px) 100vw, 408px"
                  quality={80}
                  className="absolute right-0 bottom-0"
                />
              </div>
            </div>
            <Image
              src={currentSlide.imageMobile}
              alt={currentSlide.title}
              width={470}
              height={314}
              sizes="(max-width: 768px) 100vw, 470px"
              quality={80}
              className="absolute left-[100px] bottom-0 scale-[0.8] origin-bottom-left"
            />
          </m.div>
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default HeroSlider;
