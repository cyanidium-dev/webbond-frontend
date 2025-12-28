import Image from 'next/image';
import TeamSlider from './team-slider';
import GooeyWhiteButton from '../ui/gooey-white-button';

const TeamContainer = () => {
  return (
    <section className="relative z-1">
      <Image
        src="/team-mobile-title.webp"
        alt="team-text"
        width={440}
        height={241}
        quality={75}
        className="absolute top-[50px] left-0 right-0"
      />
      <div className="px-[20px]">
        <h2 className="max-w-[255px] relative mb-[52px] text-[40px] font-manrope font-light uppercase text-white leading-[120%] before:content-[''] before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[-26px] before:w-[20px] before:h-[20px] before:bg-white before:rounded-full">
          Vores team
        </h2>
      </div>
      <TeamSlider />
      <GooeyWhiteButton
        text="Få et tilbud"
        className="mx-auto text-start w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
    </section>
  );
};

export default TeamContainer;
