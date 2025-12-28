'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';

import SplineGlobe from '../ui/spline-globe';

const HeroMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 });

  return (
    <section
      ref={containerRef}
      className="px-[20px] pt-[106px] pb-[148px] relative overflow-hidden"
    >
      {/* Используем scale, чтобы "зумировать" сцену */}
      <div className="absolute top-[-10%] -right-[77%] w-[150%] h-[120%] z-0 pointer-events-none scale-[1.1] origin-top-right">
        {isInView && <SplineGlobe />}
      </div>
      <div className="relative z-10">
        <p className="mb-[74px] max-w-[206px] ml-auto text-[12px] leading-[120%] font-light font-montserrat text-right text-white">
          Vi forvandler jeres hjemmesider til kunde-genererende maskiner
        </p>
        <p className="font-light font-manrope text-[14px] leading-[120%] text-white uppercase mb-[12px]">
          Alt til din virksomhed:
        </p>
        <div className="relative">
          <h1 className="max-w-[261px] font-manrope text-[40px] leading-[120%] text-white uppercase font-light">
            hjemmeside, SEO, logo og annoncer
          </h1>
          <div className="absolute bottom-[10px] right-[12px] flex items-center justify-center rounded-[20px] w-[67px] py-1 ppx-[7px] backdrop-blur-[17.71900749206543px] bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)]">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={51}
              height={27}
            />
          </div>
        </div>
        <div className="relative mt-[80px] mb-[73px]">
          <p className="absolute top-[-10px] left-[-48px] transform max-w-[112px] -rotate-90 text-[14px] uppercase font-light font-manrope text-[#9a9a9a]">
            Digitalt bureau
          </p>
          <div className="relative pl-[20px] max-w-[264px] ml-auto">
            <Image
              src="/hero-mobile-description-vetical-lie.png"
              alt="hero-mobile-description-vetical-lie"
              width={2}
              height={88}
              className="absolute bottom-[-5px] left-0 w-[2px] h-[97px]"
            />
            <p className="font-montserrat font-light text-[14px] leading-[120%] text-white max-w-[244px] ml-auto">
              <span className="text-[#818181]">
                Med vores komplette løsning på ét sted sparer
              </span>{' '}
              I både tid og penge, <span className="text-[#818181]">mens</span>{' '}
              vi skaber resultater for hele jeres forretning
            </p>
          </div>
        </div>
        <GooeyWhiteButton
          text="Bestil din hjemmeside"
          className="mx-auto text-start w-full text-[14px] font-montserrat font-light text-black"
          width={310}
          height={52}
        />
      </div>
    </section>
  );
};

export default HeroMobile;
