import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';

const AboutContainer = () => {
  return (
    <section className="relative z-10 px-[20px] pt-[150px] overflow-x-clip">
      <h2 className="mb-[28px] text-[40px] font-manrope font-light uppercase text-white leading-[120%]">
        Om WebBond {'{ }'} Code.Site.Art
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
          <span className="text-[#818181]">
            Vi kombinerer kreativitet, kode og strategi i ét partnerskab
          </span>{' '}
          for at <span className="text-[#818181]">gøre</span> din virksomhed
          stærkere og mere succesfuld
        </p>
      </div>
      <p className="relative font-manrope text-[20px] font-light uppercase text-white leading-[120%] ml-auto mb-[58px] max-w-[171px] after:content-[''] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[-36px] after:w-[20px] after:h-[20px] after:bg-white after:rounded-full after:z-20">
        Resultater, du får i samarbejde med os:
      </p>
      <ul className="flex flex-col gap-4 w-full relative z-30 mb-[28px]">
        <li className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
          <p className="w-full max-w-[183px] font-manrope font-light text-base text-white leading-[120%] uppercase break-words">
            Vækst: Tiltræk flere kunder og øg dit salg
          </p>
          <div className="absolute top-[-15px] right-[17px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-30 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            1
          </div>
          {/* bg-linear-to-b from-white/25 to-white/0  */}
        </li>
        <li className="relative flex items-center justify-end w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
          <p className="w-full max-w-[191px] font-manrope font-light text-base text-white leading-[120%] uppercase break-words">
            Synlighed: Bliv set online og skab indtryк hos dine kunder
          </p>
          <div className="absolute top-[-25px] left-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            2
          </div>
        </li>
        <li className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
          <p className="w-full max-w-[210px] font-manrope font-light text-base text-white leading-[120%] uppercase break-words">
            Effektivitet: Spar tid med smarte, automatiserede løsninger
          </p>
          <div className="absolute top-[-20px] right-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            3
          </div>
        </li>
      </ul>
      <GooeyWhiteButton
        text="Få et tilbud"
        className="mx-auto relative z-30 text-start w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
      <Image
        src="/about-radial-shadow.png"
        alt="about-radial-shadow"
        width={1158}
        height={1131}
        quality={80}
        className="absolute top-[30%] left-[-840px] h-auto max-w-none z-20 pointer-events-none"
      />
      <Image
        src="/about-red-decor-right.png"
        alt="about-red-decor-right"
        width={1300}
        height={1300}
        quality={80}
        className="absolute top-[150px] right-[-840px] h-auto max-w-none z-20 pointer-events-none"
      />
    </section>
  );
};

export default AboutContainer;
