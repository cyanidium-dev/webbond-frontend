import Image from 'next/image';
import ShadowFigure from './shadow-figure';
import ServicesSlider from './services-slider';

const ServicesContainer = () => {
  return (
    <section className="px-[20px] pb-[148px] overflow-hidden">
      <h2 className="font-light font-manrope text-[40px] text-white uppercase max-w-[260px]">
        Services og Priser
      </h2>
      <div className="relative mt-[32px] mb-[37px]">
        <div className="absolute bottom-[20px] left-[-48px] flex flex-row items-center transform rotate-90 text-[20px] uppercase font-montserrat text-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-[#939393] before:rounded-full before:mr-[14px]">
          Services
        </div>
        <div className="font-manrope font-light uppercase text-[20px] text-right text-white">
          Fra idé til resultat — kreativitet og kode i én formel
        </div>
      </div>
      <div className="relative -mx-[20px] h-[155px]">
        <Image
          src="/services-text.png"
          alt="services-container-title-banner"
          width={616}
          height={155}
          quality={100}
          className="absolute left-[-48px] max-w-none w-[616px] h-[155px]"
        />
        <ShadowFigure className="absolute top-[-60%]" />
      </div>
      <ServicesSlider />
    </section>
  );
};

export default ServicesContainer;
