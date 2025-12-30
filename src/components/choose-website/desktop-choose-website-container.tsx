'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  LazyMotion,
  domAnimation,
  m,
  useAnimate,
  useInView,
} from 'framer-motion';
import { WEBSITE_TYPES_MOCK } from './choose-website-mock';

const DesktopChooseWebsiteContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const currentIndexRef = useRef(0);
  const isInView = useInView(scope);
  const isAnimatingRef = useRef(false);

  const handleToggle = async (index: number) => {
    if (
      index === currentIndexRef.current ||
      !isInView ||
      isAnimatingRef.current
    )
      return;

    isAnimatingRef.current = true;
    const prevIndex = currentIndexRef.current;

    // Animate out previous
    const animationOut = animate(
      `.content-${prevIndex}`,
      { opacity: 0, y: 10, pointerEvents: 'none' },
      { duration: 0.4 },
    );

    // Animate in next
    const animationIn = animate(
      `.content-${index}`,
      { opacity: 1, y: 0, pointerEvents: 'auto' },
      { duration: 0.4, delay: 0.1 },
    );

    await Promise.all([animationOut, animationIn]);

    currentIndexRef.current = index;
    setActiveIndex(index);
    isAnimatingRef.current = false;
  };

  return (
    <LazyMotion features={domAnimation}>
      <section ref={scope}>
        <div className="mb-[55px]">
          <h2 className="max-w-[990px] font-manrope font-light text-[64px] leading-[120%] text-white uppercase">
            <span className="text-[#818181]">Vælg et website,</span> der
            arbejder for din virksomhed
          </h2>
          <p className="font-montserrat font-light text-[14px] mt-[-70px] leading-[120%] text-white max-w-[343px] ml-auto">
            Landingpages, hjemmesider eller webshops — et værktøj, der
            tiltrækker kunder, øger indtjeningen og frigør tid til at udvikle
            din virksomhed
          </p>
        </div>

        <ul className="flex gap-[20px] mb-[55px]">
          {WEBSITE_TYPES_MOCK.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li
                key={item.id}
                onClick={() => handleToggle(index)}
                className={`font-manrope font-light text-[24px] uppercase leading-[120%] rounded-[56px] flex items-center justify-center w-full h-[83px] backdrop-blur-xl shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] cursor-pointer transition-all duration-300 ease-in-out active:scale-[0.95] ${
                  isActive ? 'bg-white text-[#0a0705]' : 'bg-white/3 text-white'
                }`}
              >
                {item.type}
              </li>
            );
          })}
        </ul>

        <div className="relative min-h-[646px]">
          {WEBSITE_TYPES_MOCK.map((type, typeIndex) => (
            <m.div
              key={type.id}
              initial={false}
              style={{
                opacity: typeIndex === 0 ? 1 : 0,
                y: typeIndex === 0 ? 0 : 10,
                pointerEvents: typeIndex === 0 ? 'auto' : 'none',
              }}
              className={`absolute inset-0 flex gap-[20px] content-${typeIndex}`}
            >
              <div className="relative w-[392px] h-[646px] bg-white/6 rounded-[14px]">
                <p className="absolute z-10 top-[32px] right-[27px] max-w-[189px] leading-[120%] font-montserrat font-light text-[14px] text-white">
                  {type.description}
                </p>
                <Image
                  src={type.fonImageDesktop}
                  alt="choosefon"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  quality={100}
                  className="rounded-[14px]"
                />
                <Image
                  src={type.phoneImage}
                  alt="choosefon"
                  width={500}
                  height={646}
                  sizes="(max-width: 768px) 100vw, 500px"
                  quality={100}
                  className="absolute top-[-10px] left-[25px] select-none pointer-events-none max-w-none h-auto w-[500px] scale-[1.11] origin-top-left z-10"
                />
              </div>

              <div className="flex gap-[20px]">
                <div className="w-[35vw] h-fit rounded-[14px] py-[28px] px-[24px] bg-white/3 backdrop-blur-xl shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                  <h2 className="mb-[35px] font-manrope font-light text-[32px] text-white uppercase leading-[120%]">
                    {type.firstTitle}
                  </h2>
                  <ul className="flex flex-col gap-[12px] max-w-[330px]">
                    {type.firstTitleList.map((item) => (
                      <li
                        className="relative w-full min-h-[61px] py-[15px] pl-[60px] pr-[20px] rounded-[40px] bg-[#0a0705] flex items-center font-montserrat font-light text-[14px] text-white leading-[120%] before:content-[''] before:absolute before:left-[24px] before:w-[18px] before:h-[18px] before:bg-white before:rounded-full"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-[25vw] h-fit rounded-[14px] py-[28px] px-[24px] bg-white/3 backdrop-blur-xl shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                  <h2 className="mb-[35px] font-manrope font-light text-[32px] text-white uppercase leading-[120%]">
                    {type.secondTitle}
                  </h2>
                  <ul className="flex flex-col gap-[12px]">
                    {type.secondTitleList.map((item) => (
                      <li
                        className="relative w-full min-h-[61px] py-[15px] pl-[60px] pr-[20px] rounded-[40px] bg-[#0a0705] flex items-center font-montserrat font-light text-[14px] text-white leading-[120%] before:content-[''] before:absolute before:left-[24px] before:w-[18px] before:h-[18px] before:bg-white before:rounded-full"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
};

export default DesktopChooseWebsiteContainer;
