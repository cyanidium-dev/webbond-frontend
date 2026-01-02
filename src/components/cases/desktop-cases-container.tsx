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
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const DesktopCasesContainer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const t = useTranslations('Cases');

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
    <LazyMotion features={domAnimation}>
      <section className="pt-[183px] relative">
        <Image
          src="/desktop-cases-shadow.webp"
          alt="shadow-slider"
          width={1300}
          height={1300}
          sizes="100vw"
          quality={60}
          className="absolute right-[-550px] top-[-650px] max-w-none -z-10 pointer-events-none select-none blur-[44px]"
        />
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            containScroll: 'trimSnaps',
          }}
        >
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-[48px] text-[75px] font-manrope font-light uppercase text-white leading-[120%]"
          >
            {t.rich('title', {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </m.h2>

          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="flex items-center mb-[60px]"
          >
            <m.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <GooeyWhiteButton
                text={t('button')}
                className="text-center w-full text-[14px] font-montserrat font-light text-black"
                width={236}
                height={52}
              />
            </m.div>

            <m.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="ml-[48px] max-w-[230px] text-[14px] font-montserrat font-light text-white leading-[120%]"
            >
              {t('subtitle')}
            </m.p>

            <m.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              className="flex items-center gap-[24px] ml-auto"
            >
              <CarouselPrevious
                iconSize={32}
                className="static translate-y-0 w-[44px] h-[44px] rounded-full border-2 border-white text-white transition-colors cursor-pointer"
              ></CarouselPrevious>
              <CarouselNext
                iconSize={32}
                className="static translate-y-0 w-[44px] h-[44px] rounded-full bg-white transition-colors cursor-pointer"
              ></CarouselNext>
            </m.div>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            <CarouselContent>
              {CASES_MOCK_DATA.map((caseItem) => (
                <CarouselItem
                  key={caseItem.id}
                  className="pl-5 md:basis-[70%] lg:basis-[50%] xl:basis-[40%]"
                >
                  <m.div
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <Link href={`/cases/${caseItem.id}`}>
                      <m.div
                        whileHover={{ y: -10 }}
                        className="relative w-full max-w-[495px] min-h-[600px] rounded-[20px] p-[24px] flex flex-col group"
                      >
                        <Image
                          src={caseItem.image}
                          alt={caseItem.title}
                          fill
                          quality={80}
                          sizes="(max-width: 1250px) 45vw, 500px"
                          className="object-fill rounded-[20px] transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute top-[24px] right-[24px] z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white transition-transform duration-300 group-hover:rotate-45">
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
                      </m.div>
                    </Link>
                  </m.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </m.div>

          {/* Pagination Dots */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-[9px] mt-[44px]"
          >
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
          </m.div>
        </Carousel>
      </section>
    </LazyMotion>
  );
};

export default DesktopCasesContainer;
