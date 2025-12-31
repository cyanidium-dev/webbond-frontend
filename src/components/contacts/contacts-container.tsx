
'use client';
import FacebookIcon from './facebook-icon';
import LinkedinIcon from './linkedin-icon';
import TelegramIcon from './telegram-icon';
import InstagramIcon from './instagram-icon';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';

export const links = [
  {
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/',
  },
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/',
  },
  {
    icon: <TelegramIcon />,
    href: 'https://www.telegram.org/',
  },
];

const ContactsContainer = () => {
  const t = useTranslations('Contacts');

  return (
    <section className="px-[20px] pb-[36px] md:hidden">
      <div className="relative max-w-[130px] font-manrope font-light text-[20px] text-white leading-[120%] before:content-[''] before:block before:absolute before:bottom-[-40px] before:left-0 before:w-[16px] before:h-[16px] before:bg-white before:rounded-full">
        {t('cvr')}
      </div>
      <div className="mt-[60px] relative max-w-[160px] font-manrope font-light text-[20px] text-white leading-[120%] before:content-[''] before:block before:absolute before:bottom-[-40px] before:left-0 before:w-[16px] before:h-[16px] before:bg-white before:rounded-full">
        {t('city')}
      </div>
      <div className="mt-[60px] max-w-[228px] font-manrope font-light text-[20px] text-white leading-[120%]">
        {t('email')}
      </div>
      <ul className="flex items-center gap-[15px] mt-[36px] mb-[44px]">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <GooeyWhiteButton
        text={t('button')}
        className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
    </section>
  );
};

export default ContactsContainer;
