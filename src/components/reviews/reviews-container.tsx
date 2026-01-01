'use client';
import Image from 'next/image';
import ReviewsSlider from './reviews-slider';
import SkobkiUI from './skobki-ui';
import SkobkiDesktop from './skobki-desktop';
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const ReviewsContainer = () => {
  const t = useTranslations('Reviews');

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative px-[20px] md:px-0 pt-[148px]">
        {/* decor elements (shadows) - static */}
        <div>
          {/* center decor */}
          <Image
            src="/review-desktop-centr-decor.webp"
            alt="review-desktop-centr-decor"
            width={1500}
            height={1500}
            sizes="100vw"
            quality={100}
            className="hidden md:block absolute max-w-none top-[-155px] left-[50%] translate-x-[-50%] pointer-events-none select-none contrast-125 saturate-150 -z-30"
          />
          {/* shadow on center decor */}
          <Image
            src="/review-desktop-shadow-on.webp"
            alt="review-desktop-shadow-on"
            width={1000}
            height={800}
            sizes="33vw"
            quality={100}
            className="hidden md:block absolute w-[1150px] 2xl:w-[1000px] top-[320px] left-0 2xl:top-[420px] 2xl:left-[150px] h-auto max-w-none -z-20 pointer-events-none"
          />
        </div>

        <div className="md:flex md:justify-between md:mb-[75px]">
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:order-1 max-w-[307px] md:max-w-full mb-[24px] md:mb-0 md:mt-[-10px] font-manrope font-light text-[40px] md:text-[64px] leading-[120%] text-white uppercase"
          >
            {t('title')}
          </m.h2>
          <m.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:order-0 max-w-[191px] font-montserrat font-light text-[14px] leading-[120%] text-white mb-[44px] md:mb-0"
          >
            {t('subtitle')}
          </m.p>
        </div>
        <ReviewsSlider />

        {/* Brackets and shadows (bottom/side decor) - static */}
        <div>
          <SkobkiUI className="md:hidden absolute top-[308px] right-[-40px] -z-10 pointer-events-none select-none" />
          <SkobkiDesktop className="hidden md:block absolute top-[508px] right-[-30px] -z-10 pointer-events-none select-none" />
          <Image
            src="/reviews-shadow.webp"
            alt="reviews-shadow"
            width={1176}
            height={1106}
            sizes="(max-width: 768px) 100vw, 1176px"
            quality={100}
            className="md:hidden absolute max-w-none top-[-80px] right-[-680px] pointer-events-none select-none -z-20"
          />
        </div>
      </section>
    </LazyMotion>
  );
};

export default ReviewsContainer;
