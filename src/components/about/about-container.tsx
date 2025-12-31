'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';

const AboutContainer = () => {
  const t = useTranslations('About');

  return (
    <section className="relative z-20 px-[20px] pt-[150px] pb-[68px]">
      <h2 className="mb-[28px] text-[40px] font-manrope font-light uppercase text-white leading-[120%]">
        {t('title')}
      </h2>
      <div className="relative pl-[20px]">
        <Image
          src="/hero-mobile-description-vetical-lie.png"
          alt="hero-mobile-description-vetical-lie"
          width={2}
          height={88}
          className="absolute bottom-0 left-0 w-[2px] h-[88px]"
        />

        <p className="font-monserat text-base text-white leading-[120%] mb-[66px] max-w-[275px]">
          {t.rich('description', {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </p>
      </div>
      <p className="relative font-manrope text-[20px] font-light uppercase text-white leading-[120%] ml-auto mb-[58px] max-w-[171px] after:content-[''] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[-36px] after:w-[20px] after:h-[20px] after:bg-white after:rounded-full after:z-20">
        {t('resultsTitle')}
      </p>
      <ul className="flex flex-col gap-4 w-full relative z-30 mb-[28px]">
        <li className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
          <p className="w-full max-w-[183px] font-manrope font-light text-base text-white leading-[120%] uppercase break-words">
            {t('growth')}
          </p>
          <div className="absolute top-[-15px] right-[17px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-30 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            1
          </div>
          {/* bg-linear-to-b from-white/25 to-white/0  */}
        </li>
        <li className="relative flex items-center justify-end w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
          <p className="w-full max-w-[191px] font-manrope font-light text-base text-white leading-[120%] uppercase break-words">
            {t('visibility')}
          </p>
          <div className="absolute top-[-25px] left-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            2
          </div>
        </li>
        <li className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
          <p className="w-full max-w-[210px] font-manrope font-light text-base text-white leading-[120%] uppercase break-words">
            {t('efficiency')}
          </p>
          <div className="absolute top-[-20px] right-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            3
          </div>
        </li>
      </ul>
      <GooeyWhiteButton
        text={t('button')}
        className="mx-auto relative z-30 text-center w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
      <Image
        src="/about-radial-shadow.png"
        alt="about-radial-shadow"
        width={1158}
        height={1131}
        sizes="(max-width: 768px) 100vw, 1158px"
        quality={100}
        className="absolute top-[30%] left-[-840px] h-auto max-w-none z-20 pointer-events-none"
      />
      <Image
        src="/about-red-decor-right.webp"
        alt="about-red-decor-right"
        width={1300}
        height={1300}
        sizes="(max-width: 768px) 100vw, 1300px"
        quality={100}
        className="absolute top-[150px] right-[-840px] h-auto max-w-none z-20 pointer-events-none contrast-125 saturate-150"
      />
    </section>
  );
};

export default AboutContainer;
