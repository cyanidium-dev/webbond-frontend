'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const AboutDesktopContainer = () => {
  const t = useTranslations('About');

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative pt-[80px] pb-[173px]">
        {/* decor elements */}

        <div className="absolute inset-0 pointer-events-none -z-20">
          {/* right decor */}
          <Image
            src="/about-desktop-right-decor.webp"
            alt="about-red-decor-right"
            width={1700}
            height={1700}
            sizes="100vw"
            quality={100}
            className="absolute top-[-450px] right-[-800px] origin-top-right h-auto max-w-none pointer-events-none contrast-125 saturate-150"
          />
          {/* left decor */}
          <Image
            src="/about-desktop-left-decor.webp"
            alt="about-red-decor-left"
            width={1500}
            height={1500}
            sizes="100vw"
            quality={100}
            className="absolute top-[-550px] left-[-1060px] origin-top-left scale-[1.18] h-auto max-w-none pointer-events-none contrast-125 saturate-150"
            // className="absolute top-[-550px] left-[-1090px] 2xl:left-[-980px] origin-top-left scale-[1.18] h-auto max-w-none -z-20 pointer-events-none contrast-125 saturate-150"
          />
          {/* shadow */}
          <Image
            src="/about-desktop-shadow.webp"
            alt="about-desktop-shadow"
            width={1000}
            height={600}
            sizes="33vw"
            quality={60}
            className="absolute top-[-140px] w-[1000px] h-[700px] right-[-270px] origin-top-right max-w-none pointer-events-none blur-3xl"
            // className="absolute top-[-280px] right-[-270px] 2xl:top-[100px] 2xl:w-[800px] 2xl:h-[600px] 2xl:right-[-20px] origin-top-right h-auto max-w-none -z-10 pointer-events-none blur-3xl"
          />
        </div>

        {/* radial shadow left*/}
        <Image
          src="/about-desktop-radial-shadow-left.webp"
          alt="about-desktop-radial-shadow-left"
          width={1200}
          height={1300}
          sizes="33vw"
          quality={100}
          className="absolute bottom-[-200px] left-[-600px] origin-top-left h-auto max-w-none -z-30 pointer-events-none blur-[44px]"
        />

        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-[29px] ml-auto flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]"
        >
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={93}
            height={50}
            quality={80}
          />
        </m.div>
        <div className="max-w-[951px] ml-auto">
          <m.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-[40px] text-[64px] font-manrope font-light uppercase text-white leading-[120%]"
          >
            {t('title')}
          </m.h2>
          <div className="relative pl-[20px]">
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-[2px] h-[88px] origin-bottom"
            >
              <Image
                src="/hero-mobile-description-vetical-lie.png"
                alt="hero-mobile-description-vetical-lie"
                width={2}
                height={88}
                className="w-full h-full"
              />
            </m.div>

            <m.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-monserat text-[18px] text-white leading-[120%] mb-[25px] max-w-[270px]"
            >
              {t.rich('description', {
                gray: (chunks) => (
                  <span className="text-[#818181]">{chunks}</span>
                ),
              })}
            </m.p>
          </div>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="relative max-w-[407px] font-manrope text-[20px] font-light uppercase text-white leading-[120%] ml-auto mb-[48px] after:content-[''] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[-36px] after:w-[20px] after:h-[20px] after:bg-white after:rounded-full after:z-20"
          >
            {t('resultsTitle')}
          </m.p>
          <m.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.8 },
              },
            }}
            className="flex justify-end gap-[20px] relative z-30 mb-[48px]"
          >
            <li className="relative w-[304px] h-[213px] p-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
              <m.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="font-manrope font-light text-[24px] text-white leading-[120%] uppercase"
              >
                {t('growth')}
              </m.p>
              <m.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-[-45px] right-[25px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-30 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
              >
                1
              </m.div>
            </li>
            <li className="flex items-end relative w-[304px] h-[213px] p-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
              <m.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="font-manrope font-light text-[24px] text-white leading-[120%] uppercase"
              >
                {t('visibility')}
              </m.p>
              <m.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: -20 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-[-65px] right-[25px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
              >
                2
              </m.div>
            </li>
            <li className="relative w-[304px] h-[213px] p-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden">
              <m.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="font-manrope font-light text-[24px] text-white leading-[120%] uppercase"
              >
                {t('efficiency')}
              </m.p>
              <m.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-[-50px] right-[15px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
              >
                3
              </m.div>
            </li>
          </m.ul>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center"
          >
            <GooeyWhiteButton
              text={t('button')}
              className="relative z-30 text-center w-full text-[14px] font-montserrat font-light text-black"
              width={236}
              height={52}
            />
            <div className="flex-1 h-px bg-linear-to-r from-[#FFFFFF] to-[#0A0704]"></div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default AboutDesktopContainer;
