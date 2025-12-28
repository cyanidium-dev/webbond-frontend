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
      <h2 className="max-w-[320px] font-manrope text-[40px] font-light uppercase text-white leading-[120%] mb-[32px]">
        Tag din virksomhed <span className="text-[#999]">til</span> næste{' '}
        <span className="text-[#999]">niveau med</span> WebBond
        <span className="text-[#999]">
          <span className="inline-block">{'{ }'}</span> CodeSite.
        </span>
        Art
      </h2>
      <p className="ml-auto max-w-[234px] mb-[44px] font-montserrat font-light text-[14px] text-white leading-[120%]">
        Din ambition, vores ekspertise — sammen gør vi din virksomhed synlig,
        effektiv og profitabel
      </p>
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
