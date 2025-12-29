'use client';
import { useState } from 'react';
import { servicesData } from './services-data';
import Image from 'next/image';
import GlassGooeyButton from '../ui/glass-gooey-button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceDesktopSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + servicesData.length) % servicesData.length,
    );
  };

  const getSlideStyles = (index: number) => {
    // Calculate distance accounting for wrap-around
    const total = servicesData.length;
    let diff = (index - activeIndex) % total;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;

    if (diff === 0) {
      // Center (Active)
      return {
        x: '0%',
        y: '0%',
        zIndex: 40,
        scale: 1,
        opacity: 1,
        rotateX: 0.01,
        z: 1,
      };
    } else if (diff === -1 || (activeIndex === 0 && index === total - 1)) {
      // Previous (Left)
      return {
        x: '-73%',
        y: '14%',
        zIndex: 20,
        scale: 1, // Keep scale consistent to avoid blur flicker
        opacity: 1, // Keep opacity consistent
        rotateX: 0.01,
        z: 0,
      };
    } else if (diff === 1 || (activeIndex === total - 1 && index === 0)) {
      // Next (Right)
      return {
        x: '73%',
        y: '14%',
        zIndex: 20,
        scale: 1, // Keep scale consistent to avoid blur flicker
        opacity: 1, // Keep opacity consistent
        rotateX: 0.01,
        z: 0,
      };
    } else {
      // Hidden
      return {
        x: diff < 0 ? '-120%' : '120%',
        y: '0%',
        zIndex: 10,
        scale: 1, // Keep scale 1 to avoid jumps and blur drops
        opacity: 0,
        rotateX: 0.01,
        z: 0,
      };
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[500px]">
      <div className="relative w-full h-[450px] flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode="wait">
          <div className="absolute left-[200px] top-[-90px] flex items-center justify-center z-10 pointer-events-none ">
            <Image
              src="/ellipse-shadow-slider.webp"
              alt="slider-shadow"
              width={800}
              height={430}
              quality={100}
              sizes="100vw"
              className="select-none pointer-events-none"
            />
          </div>
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {servicesData.map((service, index) => {
            const styles = getSlideStyles(index);

            // Determine click handler based on position relative to active index
            const total = servicesData.length;
            let diff = (index - activeIndex) % total;
            if (diff < -total / 2) diff += total;
            if (diff > total / 2) diff -= total;

            let handleSlideClick = undefined;
            if (diff === -1 || (activeIndex === 0 && index === total - 1)) {
              handleSlideClick = handlePrev;
            } else if (
              diff === 1 ||
              (activeIndex === total - 1 && index === 0)
            ) {
              handleSlideClick = handleNext;
            }

            return (
              <motion.div
                key={service.id}
                className="absolute left-0 right-0 mx-auto pointer-events-none"
                initial={false}
                animate={{
                  x: styles.x,
                  y: styles.y,
                  zIndex: styles.zIndex,
                  scale: styles.scale,
                  opacity: styles.opacity,
                  rotateX: styles.rotateX,
                  z: styles.z,
                  width: '495px', // Match card width to minimize overlap
                }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                {/** PRESERVED CARD CONTENT START */}
                <div
                  onClick={handleSlideClick}
                  className={`mx-auto w-[495px] relative pt-[10px] pr-[10px] pb-[10px] pl-[24px] flex gap-6 backdrop-blur-2xl bg-white/3 rounded-[20px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden isolation-isolate transform-gpu backface-visibility-hidden pointer-events-auto ${
                    handleSlideClick ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="mt-[10px]">
                    <h2 className="font-manrope font-light text-[32px] leading-[120%] text-white uppercase mb-[20px]">
                      {service.title}
                    </h2>
                    <p className="font-montserrat font-light text-[12px] leading-[120%] text-[#bebebe] max-w-[189px] mb-[24px]">
                      {service.description}
                    </p>
                    <div className="font-montserrat font-light text-[14px] text-white uppercase mb-[24px]">
                      {service.price}
                    </div>
                    <GlassGooeyButton
                      text="Se mere"
                      width={149}
                      height={43}
                      blur="36px"
                      boxShadow="inset 3px -1px 11px -1px rgba(255, 255, 255, 0.12)"
                      className="relative z-10 text-white text-[12px] font-montserrat font-light leading-[167%] mt-auto cursor-pointer"
                    />
                  </div>
                  <div className="relative rounded-[6px] w-full min-h-full bg-[linear-gradient(168deg,#e63b44_0%,#1b0000_100%)]">
                    <div className="relative overflow-hidden w-full h-full rounded-[6px]">
                      <Image
                        src={service.imageDesktop}
                        alt="services-slider-image"
                        width={530}
                        height={610}
                        sizes="(max-width: 768px) 100vw, 530px"
                        quality={80}
                        className="absolute max-w-none w-[530px] h-auto right-[-170px] bottom-[-70%]"
                      />
                    </div>
                  </div>
                  <Image
                    src={service.imageMobile}
                    alt="services-slider-image"
                    width={600}
                    height={261}
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={80}
                    className="absolute left-0 bottom-[-370px] max-w-none w-[600px] h-auto pointer-events-none"
                  />
                </div>
                {/** PRESERVED CARD CONTENT END */}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[54px] left-[50%] translate-x-[-50%] flex justify-center gap-[24px] z-50">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-[44px] h-[44px] rounded-full border-2 border-white text-white transition-colors hover:bg-white/10 cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white text-black transition-colors hover:bg-gray-200 cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default ServiceDesktopSlider;
