'use client';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { links } from './contacts-container';
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const ContactsDesktop = () => {
  const t = useTranslations('Contacts');

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="hidden md:flex items-center justify-between mb-[41px]"
      >
        <m.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <GooeyWhiteButton
            text={t('button')}
            className="text-center w-full text-[14px] font-montserrat font-light text-black"
            width={168}
            height={42}
          />
        </m.div>

        <div className="flex flex-col lg:flex-row items-center gap-[20px] xl:gap-[72px]">
          {[t('cvr'), t('city'), t('email')].map((text, idx) => (
            <m.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className={`relative font-manrope font-light text-[20px] text-white leading-[120%] ${
                idx < 2
                  ? "xl:before:content-[''] xl:before:block xl:before:absolute xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:right-[-40px] xl:before:w-[16px] xl:before:h-[16px] xl:before:bg-white xl:before:rounded-full"
                  : ''
              }`}
            >
              {text}
            </m.div>
          ))}
        </div>

        <m.ul
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex items-center gap-[15px]"
        >
          {links.map((link, index) => (
            <m.li
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={link.href} target="_blank" aria-label={link.label}>
                {link.icon}
              </a>
            </m.li>
          ))}
        </m.ul>
      </m.div>
    </LazyMotion>
  );
};
export default ContactsDesktop;
