'use client';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { CASES_MOCK_DATA } from './cases-mock-data';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import GooeyWhiteButton from '../ui/gooey-white-button';

const DesktopCasesContainer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);
  return (
    <section className="pt-[183px] pb-[74px]">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          containScroll: 'trimSnaps',
        }}
      >
        <h2 className="relative mb-[48px] text-[75px] font-manrope font-light uppercase text-white leading-[120%]">
          <span className="text-[#818181]">Cases</span> WebBond {'{ }'}{' '}
          CodeSite.Art
        </h2>
        <div className="flex items-center mb-[60px]">
          <GooeyWhiteButton
            text="Få et tilbud"
            className="text-start w-full text-[14px] font-montserrat font-light text-black"
            width={236}
            height={52}
          />
          <p className="ml-[48px] max-w-[230px] text-[14px] font-montserrat font-light text-white leading-[120%]">
            Virksomheder, der har betroet os deres forretning
          </p>
          {/* Custom Navigation Buttons */}
          <div className="flex items-center gap-[24px] ml-auto">
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
        <CarouselContent>
          {CASES_MOCK_DATA.map((caseItem) => (
            <CarouselItem
              key={caseItem.id}
              className="pl-5 md:basis-[70%] lg:basis-[50%] xl:basis-[40%] 2xl:basis-[30%]"
            >
              <Link href={`/cases/${caseItem.id}`}>
                <div className="relative w-full max-w-[495px] min-h-[600px] rounded-[20px] p-[24px] flex flex-col">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    quality={100}
                    sizes="(max-width: 1250px) 45vw, 500px"
                    className="object-fill rounded-[20px]"
                  />
                  <div className="absolute top-[24px] right-[24px] z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white">
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="relative z-10 font-manrope font-light text-[28px] leading-[120%] text-white uppercase mb-[18px] max-w-[191px]">
                    {caseItem.title}
                  </h2>
                  <p className="relative z-10 font-montserrat font-light text-[10px] leading-[120%] text-[#bdbdbd] max-w-[191px]">
                    {caseItem.description}
                  </p>
                  <ul className="relative z-10 mt-auto flex gap-1 flex-wrap">
                    {caseItem.services.map((service) => (
                      <li
                        className="font-montserrat font-light text-[14px] text-white leading-[120%] px-[24px] py-[15px] rounded-[32px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] flex justify-between items-center"
                        key={service}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-[9px] mt-[44px]">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="w-[23px] h-[23px] rounded-full border border-white flex items-center justify-center transition-all bg-transparent p-0 cursor-pointer active:scale-[0.9]"
              aria-label={`Go to slide ${index + 1}`}
            >
              {current === index + 1 && (
                <div className="w-[12px] h-[12px] bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default DesktopCasesContainer;
