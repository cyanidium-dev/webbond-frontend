'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import ServiceDesktopSlider from './service-desktop-slider';
import { useTranslations } from 'next-intl';

const DesktopServicesContainer = () => {
  const t = useTranslations('Services');

  return (
    <section className="pt-[118px] pb-[200px] relative">
      <div className="flex justify-between mb-0 lg:mb-[100px]">
        <div className="flex flex-col relative">
          <p className="max-w-[300px] md:mt-[15px] mb-[58px] font-montserrat font-light text-[14px] text-white leading-[120%]">
            {t('description')}
          </p>
          <GooeyWhiteButton
            text={t('button')}
            className="text-center w-full text-[14px] font-montserrat font-light text-black"
            width={236}
            height={52}
          />
          <div className="absolute md:top-[120px] lg:top-[150px] xl:top-[65px] left-[280px] lg:left-[320px] flex flex-row items-center transform rotate-90 text-[20px] uppercase font-montserrat text-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-[#939393] before:rounded-full before:mr-[14px]">
            {t('verticalText')}
          </div>
        </div>
        <div>
          <h2 className="font-light font-manrope text-[40px] lg:text-[64px] leading-[120%] text-white uppercase max-w-[607px] mb-[33px]">
            {t('title')}
          </h2>
          <p className="max-w-[324px] ml-auto font-manrope font-light text-[20px] leading-[120%] text-white uppercase text-right">
            {t('subtitle')}
          </p>
        </div>
      </div>
      <ServiceDesktopSlider />
      <Image
        src="/shadow-slider.webp"
        alt="shadow-slider"
        width={1050}
        height={900}
        sizes="33vw"
        quality={60}
        className="absolute left-[150px] top-[-50px] -z-10 pointer-events-none select-none blur-[44px]"
      />
      <Image
        src="/desktop-text-service.webp"
        alt="shadow-slider"
        width={1280}
        height={322}
        sizes="(max-width: 1280px) 100vw, 1280px"
        quality={80}
        className="absolute left-[-10%] right-[-10%] mx-auto w-[105%] max-w-none md:top-[480px] lg:top-[380px] -z-20 pointer-events-none select-none h-auto"
      />
    </section>
  );
};

export default DesktopServicesContainer;
