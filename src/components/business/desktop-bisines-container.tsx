
'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';

const DesktopBisinesContainer = () => {
  const t = useTranslations('Business');

  return (
    <section className="relative pt-[303px] pb-[176px]">
      <Image
        src="/Business-phone.png"
        alt="business-left-decor"
        width={500}
        height={700}
        sizes="33vw"
        quality={100}
        className="absolute max-w-none top-1/2 left-[-210px] -translate-y-1/2 origin-top-left scale-[1.1] rotate-10 object-contain pointer-events-none select-none"
      />
      {/* right decor */}
      <Image
        src="/busines-desktop-decor.webp"
        alt="business-desktop-decor"
        width={1600}
        height={1600}
        sizes="100vw"
        quality={100}
        className="absolute top-[-150px] right-[-900px] 2xl:right-[-1000px] max-w-none pointer-events-none -z-10 contrast-110 saturate-170"
      />
      {/* shadow dark on decor */}
      <Image
        src="/desktop-busines-shadow-ellipse-for-decor.webp"
        alt="business-desktop-shadow"
        width={1300}
        height={900}
        sizes="33vw"
        quality={100}
        className="absolute bottom-[-550px] right-[-900px] max-w-none pointer-events-none -z-10 blur-[44px]"
      />
      {/* radial light shadow */}
      <Image
        src="/desktop-busines-radial-light-shadow.webp"
        alt="business-desktop-radial-light-shadow"
        width={1380}
        height={1340}
        sizes="33vw"
        quality={80}
        className="absolute bottom-[-350px] right-[-900px] max-w-none pointer-events-none -z-30 blur-[44px]"
      />
      <div className="flex flex-col max-w-[841px] mx-auto">
        <h2 className="font-manrope text-[64px] font-light uppercase text-white text-center leading-[120%] mb-[60px]">
          {t.rich('title', {
            gray: (chunks) => <span className="text-[#999]">{chunks}</span>,
          })}
        </h2>
        <div className="flex justify-between items-center">
          <div className="relative">
            <Image
              src="/hero-mobile-description-vetical-lie.png"
              alt="hero-mobile-description-vetical-lie"
              width={2}
              height={81}
              className="absolute bottom-0 left-0 w-[2px] h-[81px]"
            />
            <p className="pl-[20px] max-w-[350px] font-montserrat font-light text-[20px] text-white leading-[120%]">
              {t('description')}
            </p>
          </div>
          <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={93}
              height={50}
              quality={80}
            />
          </div>
          <GooeyWhiteButton
            text={t('button')}
            className="text-[14px] text-center font-montserrat font-light text-black"
            width={236}
            height={52}
          />
        </div>
      </div>
    </section>
  );
};

export default DesktopBisinesContainer;
