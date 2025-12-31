'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { TEAM_DATA } from './team-data';
import GooeyWhiteButton from '../ui/gooey-white-button';

const DesktopTeamContainer = () => {
  return (
    <section className="relative pb-[191px]">
      <Image
        src="/desktop-team-title.webp"
        alt="team-text-desktop"
        width={2500}
        height={800}
        sizes="100vw"
        quality={75}
        className="w-[103%] max-w-none absolute md:top-[170px] lg:top-[100px] left-0 right-0 mx-auto select-none pointer-events-none"
      />
      {/* radial shadow right*/}
      <Image
        src="/team-desktop-radial-shadow.webp"
        alt="team-desktop-radial-shadow"
        width={1300}
        height={1200}
        sizes="100vw"
        quality={75}
        className="absolute bottom-[-600px] right-[-800px] max-w-none -z-20 pointer-events-none blur-[44px]"
      />
      <Carousel>
        <div className="flex items-center mb-[132px]">
          <h2 className="max-w-[200px] lg:max-w-[375px] relative md:text-[60px] lg:text-[64px] font-manrope font-light uppercase text-white leading-[120%] before:content-[''] before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[-46px] before:w-[20px] before:h-[20px] before:bg-white before:rounded-full">
            Vores team
          </h2>
          <GooeyWhiteButton
            text="Оm Os"
            className="ml-[84px] text-start w-full text-[14px] font-montserrat font-light text-black"
            width={236}
            height={52}
          />
          {/* Custom Navigation Buttons */}
          <div className="flex ml-auto gap-[24px]">
            <CarouselPrevious
              iconSize={32}
              className="static translate-y-0 w-[44px] h-[44px] rounded-full border-2 border-white text-white transition-colors cursor-pointer"
            ></CarouselPrevious>
            <CarouselNext
              iconSize={32}
              className="static translate-y-0 w-[44px] h-[44px] rounded-full bg-white transition-colors cursor-pointer"
            ></CarouselNext>
          </div>
        </div>
        <div>
          <CarouselContent className="-ml-4 pl-[20px]">
            {TEAM_DATA.map((teamItem) => (
              <CarouselItem
                key={teamItem.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="relative w-full max-w-[389px] h-[398px] p-[16px] rounded-[12px] flex flex-col backdrop-blur-md bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                  <Image
                    src={teamItem.image}
                    alt={teamItem.name}
                    fill
                    quality={80}
                    className="object-contain rounded-[13px]"
                  />
                  <div className="mt-auto flex flex-col gap-[6px] relative z-10">
                    <div className="px-[24px] w-fit flex items-center justify-center h-[47px] rounded-[32px] border border-white backdrop-blur-sm md:backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] font-manrope font-light text-[14px] leading-[120%] text-white uppercase">
                      {teamItem.position}
                    </div>
                    <div className="px-[24px] w-fit flex items-center justify-center h-[47px] rounded-[32px] bg-white font-manrope font-light text-[14px] leading-[120%] text-black uppercase">
                      {teamItem.name} {teamItem.lastName}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default DesktopTeamContainer;
