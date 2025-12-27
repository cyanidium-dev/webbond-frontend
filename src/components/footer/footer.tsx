import Image from 'next/image';
import FooterLogo from './footer-logo';

const Footer = () => {
  return (
    <footer className="px-[20px] pt-[20px] pb-[40px]">
      <div className="w-full h-px bg-linear-to-r from-white via-white to-[#686868] mb-[32px]" />

      <div className="relative w-full h-[143px] flex items-center rounded-[12px] overflow-hidden">
        {/* Логотип со встроенным градиентным фоном теперь внизу */}
        <FooterLogo className="absolute inset-0" />

        {/* Декор накладывается сверху в режиме multiply для эффекта глубоких теней */}
        <Image
          src="/footer-decor.png"
          alt="Footer Decor"
          fill
          quality={100}
          className="object-cover opacity-60 mix-blend-multiply pointer-events-none z-10"
        />
      </div>
    </footer>
  );
};

export default Footer;
