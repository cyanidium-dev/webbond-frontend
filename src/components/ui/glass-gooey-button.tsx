'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';

interface GlassGooeyButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const containerVariants: Variants = {
  initial: {},
  hover: {},
};

const circleVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -2 },
};

export default function GlassGooeyButton({
  text = 'Se mere',
  className,
  onClick,
}: GlassGooeyButtonProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        onClick={onClick}
        initial="initial"
        whileHover="hover"
        variants={containerVariants}
        className={cn(
          'group relative flex h-[42px] w-[149px] cursor-pointer items-center justify-between overflow-visible bg-transparent transition-transform active:scale-95',
          className,
        )}
      >
        {/* SVG определения для динамической Gooey маски */}
        <svg className="pointer-events-none absolute h-0 w-0">
          <defs>
            <filter id="glass-goo-filter">
              {/* Уменьшаем радиус размытия для более тонкой "шеи" */}
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              {/* Увеличиваем контраст (25) и смещение (-12) для более резкого и тонкого перехода */}
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>

            <mask
              id="glass-goo-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="160"
              height="42"
            >
              <g filter="url(#glass-goo-filter)">
                {/* Оригинальный путь из Figma в качестве базы */}
                <path
                  d="M92 0C97.8517 5.52596e-07 103.144 2.3935 106.952 6.25484C108.539 7.86386 111.461 7.86386 113.048 6.25484C116.856 2.3935 122.148 0 128 0C139.598 0 149 9.40202 149 21C149 32.598 139.598 42 128 42C122.148 42 116.856 39.6062 113.048 35.7447C111.461 34.1355 108.539 34.1355 106.952 35.7447C103.144 39.6062 97.8518 42 92 42H21C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 1.85224e-07 21 0H92Z"
                  fill="white"
                />
                {/* Анимированный круг, который расширяет форму при ховере.
                    По умолчанию он лежит ровно в правой части пути (cx=128, r=21) */}
                <m.circle
                  cx="128"
                  cy="21"
                  r="21"
                  fill="white"
                  variants={circleVariants}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </g>
            </mask>
          </defs>
        </svg>

        {/* Фон с эффектом стекла и Gooey маской */}
        <div
          className="absolute inset-y-0 left-0 right-[-10px] z-0"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            boxShadow: 'inset 3px -1px 11px -1px rgba(255, 255, 255, 0.12)',
            maskImage: 'url(#glass-goo-mask)',
            WebkitMaskImage: 'url(#glass-goo-mask)',
          }}
        />

        {/* Слой контента */}
        <div className="relative z-10 flex w-full items-center justify-between pl-[32px] pr-[14px]">
          <m.span
            variants={textVariants}
            className="font-montserrat text-[12px] font-light text-white"
          >
            {text}
          </m.span>
          <div className="flex items-center justify-center">
            <m.svg
              width="14"
              height="14"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={circleVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <path
                d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                fill="white"
              />
            </m.svg>
          </div>
        </div>
      </m.button>
    </LazyMotion>
  );
}
