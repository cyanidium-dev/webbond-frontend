'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, useAnimate } from 'framer-motion';
import { WEBSITE_TYPES_MOCK } from './choose-website-mock';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';

const DesktopChooseWebsiteContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const isAnimatingRef = useRef(false);
  const t = useTranslations('ChooseWebsite');

  const activeContent = WEBSITE_TYPES_MOCK[activeIndex];

  const handleToggle = async (index: number) => {
    if (index === activeIndex || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // Animate out content
    await animate(
      '.animate-content',
      { opacity: 0, y: 10, filter: 'blur(5px)' },
      { duration: 0.3, ease: 'easeInOut' },
    );

    setActiveIndex(index);

    // Animate in content
    await animate(
      '.animate-content',
      { opacity: 1, y: 0, filter: 'blur(0px)' },
      { duration: 0.3, ease: 'easeInOut' },
    );

    isAnimatingRef.current = false;
  };

  return (
    <LazyMotion features={domAnimation}>
      <section ref={scope} className="relative">
        <div className="mb-[55px]">
          <h2 className="max-w-[990px] font-manrope font-light text-[64px] leading-[120%] text-white uppercase">
            {t.rich('title', {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </h2>
          <p className="font-montserrat font-light text-[14px] xl:mt-[-70px] leading-[120%] text-white max-w-[343px] ml-auto">
            {t('subtitle')}
          </p>
        </div>

        <ul className="flex gap-[20px] mb-[55px]">
          {WEBSITE_TYPES_MOCK.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li
                key={item.id}
                onClick={() => handleToggle(index)}
                className={`font-manrope font-light text-[24px] uppercase leading-[120%] rounded-[56px] flex items-center justify-center w-full h-[83px] backdrop-blur-md shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] cursor-pointer transition-all duration-300 ease-in-out active:scale-[0.95] ${
                  isActive ? 'bg-white text-[#0a0705]' : 'bg-white/3 text-white'
                }`}
              >
                {t(`types.${item.id}.label`)}
              </li>
            );
          })}
        </ul>

        <div className="relative min-h-[646px] mb-[44px]">
          <div className="flex flex-col xl:flex-row gap-[20px]">
            {/* Phone Card - Static Container */}
            <div className="relative w-[392px] h-[646px] bg-white/6 rounded-[14px] shrink-0">
              <div className="animate-content w-full h-full">
                <p className="absolute z-10 top-[32px] right-[27px] max-w-[189px] leading-[120%] font-montserrat font-light text-[14px] text-white">
                  {t(`types.${activeContent.id}.description`)}
                </p>
                <div className="relative w-full h-full">
                  <Image
                    src={activeContent.fonImageDesktop}
                    alt="choosefon"
                    fill
                    sizes="(max-width: 768px) 100vw, 392px"
                    quality={80}
                    className="object-cover rounded-[14px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.9)_0%,transparent_40%)] pointer-events-none" />
                  <Image
                    src={activeContent.phoneImage}
                    alt="choosefon"
                    width={500}
                    height={946}
                    sizes="(max-width: 768px) 100vw, 500px"
                    quality={80}
                    className="absolute top-[160px] left-[70px] select-none pointer-events-none max-w-none h-auto w-[500px] origin-top-left z-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[20px]">
                {/* First Info Card - Static Container */}
                <div className="flex-1 xl:flex-none xl:w-[35vw] rounded-[14px] py-[28px] px-[24px] bg-white/3 backdrop-blur-md shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                  <div className="animate-content h-full flex flex-col">
                    <h2 className="mb-[35px] font-manrope font-light text-[32px] text-white uppercase leading-[120%]">
                      {t(`types.${activeContent.id}.firstSection.title`)}
                    </h2>
                    <ul className="flex flex-col gap-[12px] max-w-[330px] mt-auto">
                      {['0', '1', '2'].map((key) => (
                        <li
                          className="relative w-full min-h-[61px] py-[15px] pl-[60px] pr-[20px] rounded-[40px] bg-[#0a0705] flex items-center font-montserrat font-light text-[14px] text-white leading-[120%] before:content-[''] before:absolute before:left-[24px] before:w-[18px] before:h-[18px] before:bg-white before:rounded-full"
                          key={`list-1-${key}`}
                        >
                          {t(
                            `types.${activeContent.id}.firstSection.items.${key}`,
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Second Info Card - Static Container */}
                <div className="flex-1 xl:flex-none xl:w-[25vw] rounded-[14px] py-[28px] px-[24px] bg-white/3 backdrop-blur-md shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                  <div className="animate-content h-full flex flex-col">
                    <h2 className="mb-[35px] font-manrope font-light text-[32px] text-white uppercase leading-[120%]">
                      {t(`types.${activeContent.id}.secondSection.title`)}
                    </h2>
                    <ul className="flex flex-col gap-[12px] mt-auto">
                      {['0', '1', '2'].map((key) => (
                        <li
                          className="relative w-full min-h-[61px] py-[15px] pl-[60px] pr-[20px] rounded-[40px] bg-[#0a0705] flex items-center font-montserrat font-light text-[14px] text-white leading-[120%] before:content-[''] before:absolute before:left-[24px] before:w-[18px] before:h-[18px] before:bg-white before:rounded-full"
                          key={`list-2-${key}`}
                        >
                          {t(
                            `types.${activeContent.id}.secondSection.items.${key}`,
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Banner - Static Container */}
              <div className="relative w-[600px] h-[298px] rounded-[14px] overflow-hidden ml-auto">
                <div className="animate-content w-full h-full relative">
                  <Image
                    src={activeContent.bannerImage}
                    alt="choosebanner"
                    fill
                    sizes="(max-width: 1280px) 100vw, 600px"
                    quality={75}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={93}
              height={50}
              quality={80}
            />
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-[#FFFFFF] to-[#0A0704]"></div>
          <GooeyWhiteButton
            text={t('buttonStart')}
            className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
            width={267}
            height={52}
          />
        </div>
        <Image
          src="/decor-chosse-desktop.webp"
          alt="mobile-title-banner badge"
          width={1200}
          height={1200}
          quality={75}
          sizes="100vw"
          className="absolute bottom-[450px] xl:bottom-[-35px] left-[115px] -z-10 max-w-none pointer-events-none select-none contrast-300"
        />
      </section>
    </LazyMotion>
  );
};

export default DesktopChooseWebsiteContainer;
