'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import ServiceDesktopSlider from './service-desktop-slider';
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const DesktopServicesContainer = () => {
  const t = useTranslations('Services');

  return (
    <section className="pt-[118px] pb-[168px] relative">
      <div className="flex justify-between mb-0 lg:mb-0">
        <div className="flex flex-col relative">
          <p className="max-w-[300px] md:mt-[15px] mb-[58px] font-montserrat font-light text-[12px] md:text-[13px] xl:text-[14px] text-white leading-[120%]">
            {t('description')}
          </p>
          <GooeyWhiteButton
            text={t('button')}
            className="text-center w-[200px] md:w-[236px] xl:w-full text-[12px] md:text-[14px] font-montserrat font-light text-black"
            width={236}
            height={52}
          />
          <div className="absolute top-[130px] md:top-[120px] lg:top-[70px] xl:top-[65px] left-[240px] md:left-[280px] lg:left-[320px] flex flex-row items-center transform rotate-90 text-[16px] md:text-[20px] uppercase font-montserrat text-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-[#939393] before:rounded-full before:mr-[14px] whitespace-nowrap">
            {t('verticalText')}
          </div>
        </div>
        <div>
          <h2 className="font-light font-manrope text-[32px] md:text-[40px] lg:text-[52px] xl:text-[64px] leading-[120%] text-white uppercase max-w-[607px] mb-[33px]">
            {t('title')}
          </h2>
          <p className="max-w-[290px] xl:max-w-[324px] ml-auto font-manrope font-light text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[120%] text-white uppercase text-right">
            {t('subtitle')}
          </p>
        </div>
      </div>
      <ServiceDesktopSlider />
      <LazyMotion features={domAnimation}>
        <Image
          src="/shadow-slider.webp"
          alt="shadow-slider"
          width={1050}
          height={900}
          sizes="(max-width: 1050px) 100vw, 1050px"
          quality={100}
          className="absolute left-0 lg:left-[10px] xl:left-[150px] top-[-50px] -z-10 pointer-events-none select-none blur-3xl"
        />

        <div className="absolute left-[-11%] right-[-11%] mx-auto w-[105%] max-w-none md:top-[310px] lg:top-[270px] xl:top-[260px] -z-20 pointer-events-none select-none h-auto">
          <Image
            src="/desktop-text-service.webp"
            alt="desktop-text-service"
            width={1280}
            height={322}
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={80}
            className="w-full h-auto"
          />
        </div>
      </LazyMotion>
    </section>
  );
};

export default DesktopServicesContainer;
