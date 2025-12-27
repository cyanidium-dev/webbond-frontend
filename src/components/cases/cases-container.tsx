import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import CasesSlider from './cases-slider';

const CasesContainer = () => {
  return (
    <section className="px-[20px] relative z-10 pt-[148px]">
      <h2 className="ml-auto max-w-[275px] mb-[24px] text-[40px] font-manrope font-light uppercase text-right text-white leading-[120%]">
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
        width={1192}
        height={1192}
        quality={100}
        className="h-auto max-w-none absolute bottom-[-765px] left-[-730px] pointer-events-none contrast-125 saturate-150 z-20 opacity-85"
      />
    </section>
  );
};

export default CasesContainer;
