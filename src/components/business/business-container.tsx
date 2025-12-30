import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';

const BusinessContainer = () => {
  return (
    <section className="relative px-[20px] pt-[190px] pb-[148px]">
      <div className="relative w-full h-[437px]">
        <Image
          src="/Business-phone.png"
          alt="business-left-decor"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          quality={100}
          className="object-contain pointer-events-none"
        />
      </div>
      <div className="relative">
        <h2 className="max-w-[320px] font-manrope text-[40px] font-light uppercase text-white leading-[120%] mb-[32px]">
          Tag din virksomhed <span className="text-[#999]">til</span> næste{' '}
          <span className="text-[#999]">niveau med</span> WebBond
          <span className="text-[#999]">
            <span className="inline-block">{'{ }'}</span> CodeSite.
          </span>
          Art
        </h2>
        <div className="absolute right-0 top-0 flex items-center justify-center rounded-[37px] w-[84px] py-[6px] px-[9px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={64}
            height={34}
            quality={80}
          />
        </div>
      </div>
      <div className="relative">
        <p className="ml-auto pr-[20px] max-w-[254px] mb-[44px] font-montserrat font-light text-[14px] text-white leading-[120%]">
          Din ambition, vores ekspertise — sammen gør vi din virksomhed synlig,
          effektiv og profitabel
        </p>
        <Image
          src="/hero-mobile-description-vetical-lie.png"
          alt="hero-mobile-description-vetical-lie"
          width={2}
          height={51}
          className="absolute bottom-0 right-0 w-[2px] h-[51px]"
        />
      </div>
      <GooeyWhiteButton
        text="Start samarbejdet"
        className="mx-auto text-start w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
      <Image
        src="/business-right-decor.png"
        alt="business-left-decor"
        width={1257}
        height={1257}
        sizes="(max-width: 768px) 100vw, 1257px"
        quality={100}
        className="absolute top-[-30px] right-[-750px] max-w-none pointer-events-none -z-20 contrast-125 saturate-150"
      />

      <Image
        src="/business-shadow.webp"
        alt="business-shadow"
        width={520}
        height={1637}
        sizes="(max-width: 768px) 100vw, 520px"
        quality={60}
        className="absolute w-[520px] h-[1637px] top-[150px] left-0 max-w-none pointer-events-none -z-20"
      />
    </section>
  );
};

export default BusinessContainer;
