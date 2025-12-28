import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import CasesSlider from './cases-slider';

const CasesContainer = () => {
  return (
    <section className="px-[20px] relative z-10 pt-[148px]">
      <Image
        src="/cases-radial-shadow.webp"
        alt="cases-red-decor-right"
        width={580}
        height={611}
        sizes="(max-width: 768px) 100vw, 580px"
        quality={60}
        className="h-auto max-w-none absolute top-[-180px] left-[-70px] right-0 pointer-events-none -z-10"
      />
      <h2 className="relative z-10 ml-auto max-w-[275px] mb-[24px] text-[40px] font-manrope font-light uppercase text-right text-white leading-[120%]">
        <span className="text-[#818181]">Cases</span> WebBond {'{ }'}{' '}
        CodeSite.Art
      </h2>
      <p className="font-monserat text-[14px] font-light text-white leading-[120%] max-w-[186px] mb-[32px]">
        Virksomheder, der har betroet os deres forretning
      </p>
      <CasesSlider />
      <GooeyWhiteButton
        text="Få et tilbud"
        className="mx-auto text-start w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
      <Image
        src="/case-red-decor-left.png"
        alt="case-red-decor-left"
        width={692}
        height={850}
        sizes="(max-width: 768px) 100vw, 692px"
        quality={60}
        className="h-auto max-w-none absolute bottom-[-510px] left-[-470px] scale-[1.65] pointer-events-none contrast-125 saturate-150 z-20 opacity-85"
      />
    </section>
  );
};

export default CasesContainer;
