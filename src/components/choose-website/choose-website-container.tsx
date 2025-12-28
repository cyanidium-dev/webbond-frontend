import Image from 'next/image';
import ShadowEllipseForIphone from './shadow-ellipse-for-iphone';
import GooeyWhiteButton from '../ui/gooey-white-button';
import WebsiteSelector from './website-selector';

const ChooseWebsiteContainer = () => {
  return (
    <section className="relative z-20 px-[20px]">
      <Image
        src="/fon-choose.png"
        alt="choose-website-banner"
        width={1000}
        height={1000}
        sizes="(max-width: 768px) 100vw, 1000px"
        quality={60}
        className="h-auto max-w-none w-[277.8vw] absolute top-[20px] left-[-105.6vw] contrast-125 saturate-150"
      />
      <h2 className="mb-[22px] max-w-[320px] font-manrope font-light text-[40px] leading-[120%] text-white uppercase">
        <span className="text-[#818181]">Vælg et website,</span> der arbejder
        for din virksomhed
      </h2>
      <div className="flex items-center mb-[22px]">
        <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={93}
            height={50}
            quality={75}
          />
        </div>
        <div className="font-montserrat font-light text-[12px] leading-[120%] text-white text-right max-w-[173px] ml-auto">
          Landingpages, hjemmesider eller webshops — et værktøj, der tiltrækker
          kunder, øger indtjeningen og frigør tid til at udvikle din virksomhed
        </div>
      </div>

      {/* website selector */}
      <WebsiteSelector />

      <ShadowEllipseForIphone className="absolute bottom-[-320px] right-[-30px] w-full" />
      <GooeyWhiteButton
        text="Bestil din hjemmeside"
        className="mx-auto text-start w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
    </section>
  );
};

export default ChooseWebsiteContainer;
