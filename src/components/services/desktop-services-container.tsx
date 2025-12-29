import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import ServiceDesktopSlider from './service-desktop-slider';

const DesktopServicesContainer = () => {
  return (
    <section className="pt-[118px] pb-[200px] relative">
      <div className="flex justify-between mb-[100px]">
        <div className="flex flex-col relative">
          <p className="max-w-[300px] mb-[58px] font-montserrat font-light text-[14px] text-white leading-[120%]">
            Hjemmesider på ren kode, SEO, reklame og branding — alt, hvad du
            behøver for en succesfuld online-forretning
          </p>
          <GooeyWhiteButton
            text="Få et tilbud"
            className="text-start w-full text-[14px] font-montserrat font-light text-black"
            width={236}
            height={52}
          />
          <div className="absolute top-[50px] left-[320px] flex flex-row items-center transform rotate-90 text-[20px] uppercase font-montserrat text-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-[#939393] before:rounded-full before:mr-[14px]">
            Services
          </div>
        </div>
        <div>
          <h2 className="font-light font-manrope text-[64px] leading-[120%] text-white uppercase max-w-[607px] mb-[33px]">
            Services og Priser
          </h2>
          <p className="max-w-[324px] ml-auto font-manrope font-light text-[20px] leading-[120%] text-white uppercase text-right">
            Fra idé til resultat — kreativitet og kode i én formel
          </p>
        </div>
      </div>
      <ServiceDesktopSlider />
      <Image
        src="/shadow-slider.webp"
        alt="shadow-slider"
        width={1050}
        height={900}
        sizes="100vw"
        quality={100}
        className="absolute left-[150px] top-[-50px] -z-10 pointer-events-none select-none blur-[44px] transform-gpu"
      />
    </section>
  );
};

export default DesktopServicesContainer;
