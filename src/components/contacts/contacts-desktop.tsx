'use client';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { links } from './contacts-container';
import { useTranslations } from 'next-intl';

const ContactsDesktop = () => {
  const t = useTranslations('Contacts');

  return (
    <div className="hidden md:flex items-center justify-between mb-[41px]">
      <GooeyWhiteButton
        text={t('button')}
        className="text-center w-full text-[14px] font-montserrat font-light text-black"
        width={168}
        height={42}
      />
      <div className="flex flex-col xl:flex-row items-center gap-[20px] xl:gap-[72px]">
        <div className="relative font-manrope font-light text-[20px] text-white leading-[120%] xl:before:content-[''] xl:before:block xl:before:absolute xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:right-[-40px] xl:before:w-[16px] xl:before:h-[16px] xl:before:bg-white xl:before:rounded-full">
          {t('cvr')}
        </div>
        <div className="relative font-manrope font-light text-[20px] text-white leading-[120%] xl:before:content-[''] xl:before:block xl:before:absolute xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:right-[-40px] xl:before:w-[16px] xl:before:h-[16px] xl:before:bg-white xl:before:rounded-full">
          {t('city')}
        </div>
        <div className=" font-manrope font-light text-[20px] text-white leading-[120%]">
          {t('email')}
        </div>
      </div>
      <ul className="flex items-center gap-[15px]">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" aria-label={link.label}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactsDesktop;
