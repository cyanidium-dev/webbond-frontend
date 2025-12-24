'use client';

import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';
import { navItems } from '@/components/header/navigate-data';
import { useTranslations } from 'next-intl';

interface DesktopHeaderProps {
  className?: string;
}

const circleVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 8 },
};

export default function DesktopHeader({ className }: DesktopHeaderProps) {
  const t = useTranslations();
  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial="initial"
        whileHover="hover"
        className={cn('relative w-[1216px] h-[60px] mx-auto mt-10', className)}
      >
        {/* SVG определения для масок и фильтров */}
        <svg className="pointer-events-none absolute h-0 w-0">
          <defs>
            {/* Общий Gooey фильтр для создания формы маски */}
            <filter id="header-goo-filter">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              />
            </filter>

            {/* Фильтр для внутренней светлой тени (Highlight) */}
            <filter
              id="header-inner-highlight"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              {/* 1. Генерируем маску основной формы */}
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
                result="goo"
              />

              {/* 2. Эмуляция spread -0.5px */}
              <feMorphology
                radius="0.5"
                operator="erode"
                in="goo"
                result="eroded"
              />

              {/* 3. Создаем 'дырку' в заполнении (инверсия) */}
              <feFlood floodColor="white" result="flood" />
              <feComposite
                in="flood"
                in2="eroded"
                operator="out"
                result="hole"
              />

              {/* 4. Размываем края дырки и смещаем */}
              <feGaussianBlur in="hole" stdDeviation="3" result="blurHole" />
              <feOffset in="blurHole" dx="3" dy="-1" result="offset" />

              {/* 5. Обрезаем результат по изначальной форме (чтобы тень была только внутри) */}
              <feComposite
                in="offset"
                in2="goo"
                operator="in"
                result="shadow"
              />

              {/* 6. Применяем цвет и прозрачность (белый 0.12) */}
              <feColorMatrix
                in="shadow"
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
              />
            </filter>

            <mask
              id="header-mask-dynamic"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1250"
              height="100" // Увеличил высоту для маски
            >
              <g filter="url(#header-goo-filter)">
                <path
                  d="M887 0C894.331 8.69412e-07 901.046 2.63053 906.256 6.99805C908.101 8.54399 910.897 8.54393 912.742 6.998C917.952 2.63022 924.669 0 932 0H1186C1202.57 0 1216 13.4315 1216 30C1216 46.5685 1202.57 60 1186 60H932C924.669 60 917.953 57.3692 912.743 53.0013C910.898 51.4552 908.102 51.4552 906.257 53.0013C901.047 57.3692 894.331 60 887 60H30C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 1.18786e-07 30 0H887Z"
                  fill="white"
                />
                <m.circle
                  cx="932"
                  cy="30"
                  r="30"
                  fill="white"
                  variants={circleVariants}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </g>
            </mask>

            {/* Градиент для бордера - очень тёмный бордовый как на фото */}
            <linearGradient
              id="header-border-gradient-v2"
              x1="0"
              y1="30"
              x2="1216"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A0E0E" stopOpacity="0.6" />
              <stop offset="1" stopColor="#4A0E0E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* 1. Слой с Backdrop Blur и основным заполнением */}
        <div
          className="absolute inset-y-0 left-0 right-[-20px] z-0"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            maskImage: 'url(#header-mask-dynamic)',
            WebkitMaskImage: 'url(#header-mask-dynamic)',
          }}
        />

        {/* 2. Слой с Внутренней светлой тенью (Highlight Overlay) */}
        <svg
          className="pointer-events-none absolute left-0 top-0 overflow-visible z-1"
          width="1250"
          height="60"
        >
          <g filter="url(#header-inner-highlight)">
            <path
              d="M887 0C894.331 8.69412e-07 901.046 2.63053 906.256 6.99805C908.101 8.54399 910.897 8.54393 912.742 6.998C917.952 2.63022 924.669 0 932 0H1186C1202.57 0 1216 13.4315 1216 30C1216 46.5685 1202.57 60 1186 60H932C924.669 60 917.953 57.3692 912.743 53.0013C910.898 51.4552 908.102 51.4552 906.257 53.0013C901.047 57.3692 894.331 60 887 60H30C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 1.18786e-07 30 0H887Z"
              fill="white"
            />
            <m.circle
              cx="932"
              cy="30"
              r="30"
              fill="white"
              variants={circleVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </g>
        </svg>

        {/* 3. Слой с градиентным бордером (1px) - тёмный бордовый */}
        <svg
          className="pointer-events-none absolute left-0 top-0 z-20 overflow-visible"
          width="1250"
          height="60"
        >
          <path
            d="M887 0C894.331 8.69412e-07 901.046 2.63053 906.256 6.99805C908.101 8.54399 910.897 8.54393 912.742 6.998C917.952 2.63022 924.669 0 932 0H1186C1202.57 0 1216 13.4315 1216 30C1216 46.5685 1202.57 60 1186 60H932C924.669 60 917.953 57.3692 912.743 53.0013C910.898 51.4552 908.102 51.4552 906.257 53.0013C901.047 57.3692 894.331 60 887 60H30C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 1.18786e-07 30 0H887Z"
            fill="none"
            stroke="url(#header-border-gradient-v2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Слой контента */}
        <div className="relative z-10 flex h-full w-full items-center justify-between pl-8 pr-12">
          {/* Левая часть (887px) */}
          <div className="flex w-[855px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="font-montserrat text-[14px] font-bold tracking-widest text-white">
                C&lt;&gt;DE-S/ITE.ART{' '}
                <span className="mx-2 font-light text-white/50">{'{ }'}</span>{' '}
                WEBBOND
              </span>
            </div>

            {/* Nav */}
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.titleKey}
                  href={item.href}
                  className="font-montserrat text-[12px] font-medium tracking-wider text-white/80 transition-colors hover:text-white"
                >
                  {t(item.titleKey)}
                </a>
              ))}
            </nav>

            {/* Language switch */}
            <div className="flex items-center gap-4">
              <div className="h-6 w-px bg-white/10" />
              <button className="flex items-center gap-2 font-montserrat text-[12px] font-medium text-white/80 hover:text-white">
                DA
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Правая часть (после перешейка) */}
          <div className="flex items-center gap-6">
            <span className="font-montserrat text-[12px] font-medium tracking-widest text-white">
              BOOK EN KONSULTATION
            </span>
            <m.div
              variants={circleVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white"
            >
              <svg width="14" height="14" viewBox="0 0 21 19" fill="none">
                <path
                  d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                  fill="#0B0B0B"
                />
              </svg>
            </m.div>
          </div>
        </div>
      </m.header>
    </LazyMotion>
  );
}
