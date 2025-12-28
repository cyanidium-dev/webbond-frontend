'use client';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Link, usePathname } from '@/i18n/navigation';
import { navItems } from '@/components/header/navigate-data';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';
import ArrowUpRightForBtn from './arrow-up-right-for-btn';
import MobileLaptopHeader from '../ui/mobile-laptop-header';
import { useEffect } from 'react';

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'circOut',
      },
    },
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <div className="relative lg:hidden flex items-center">
        <SheetTrigger asChild>
          <button className="outline-hidden">
            {isOpen ? (
              <Image
                src="/close.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src="/Hamburger-Menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            )}
          </button>
        </SheetTrigger>
      </div>
      <SheetContent
        side="right"
        className="w-full p-0 [&>button[data-slot='sheet-close']]:hidden bg-[#0B0B0B] border-none overflow-hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-full overflow-y-auto px-[20px] pt-[160px] pb-[40px]">
          <LazyMotion features={domAnimation}>
            {/* Accessibility - Hidden Title and Description */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation menu with links to different sections
            </SheetDescription>

            {/* Mobile Navigation */}
            <nav className="flex-1 mb-[40px]">
              <m.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-[32px]"
              >
                {navItems.map((item) => (
                  <m.li
                    key={item.titleKey}
                    variants={itemVariants}
                    className="pt-[12px] pb-[20px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[270px] after:bg-linear-to-r after:from-[#E63B44] after:to-transparent"
                  >
                    <Link
                      locale={locale}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base leading-[120%] font-montserrat transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-[#00dfd0]'
                          : 'text-white hover:text-[#00dfd0]'
                      }`}
                    >
                      {t(item.titleKey)}
                    </Link>
                  </m.li>
                ))}
              </m.ul>
            </nav>
          </LazyMotion>
          <Button className="w-full text-[14px] uppercase text-white font-montserrat h-[60px] pl-[36px] pr-[13px] py-[13px] backdrop-blur-[32px] bg-white/3 rounded-[40px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] shrink-0">
            Book en konsultation
            <div className="ml-auto w-[36px] h-[36px] flex items-center justify-center bg-white rounded-full">
              <ArrowUpRightForBtn />
            </div>
          </Button>
        </div>
        {/* FIXED DECORATION IMAGE */}
        <Image
          src="/mobile-menu-decor.png"
          alt="menu decor"
          width={670}
          height={670}
          sizes="(max-width: 768px) 100vw, 670px"
          quality={60}
          className="absolute -bottom-[270px] -right-[300px] -z-10 w-[670px] h-auto pointer-events-none select-none max-w-none contrast-125 saturate-150"
          priority
        />
      </SheetContent>
    </Sheet>
  );
};

export default Burger;
