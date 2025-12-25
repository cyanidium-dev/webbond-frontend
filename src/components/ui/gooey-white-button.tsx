'use client';
import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';

const circleVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

interface GooeyWhiteButtonProps {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const GooeyWhiteButton = ({
  text,
  className,
  icon,
  onClick,
  width = 236,
  height = 52,
}: GooeyWhiteButtonProps) => {
  const radius = height / 2;
  const bridgeWidth = height * 1.327; // Пропорция из оригинала (69/52)
  const mainBodyRight = width - bridgeWidth;
  const circleX = width - radius;
  const circleY = radius;

  // Рассчитываем путь для SVG маски
  // Основано на оригинальном пути, где:
  // bridgeWidth = 69 (236 - 167)
  // radius = 26 (52 / 2)
  const pathData = `
    M${mainBodyRight} 0
    C${mainBodyRight + 7.356} 0 ${mainBodyRight + 13.997} 3.0548 ${
    mainBodyRight + 18.727
  } 7.96463
    C${mainBodyRight + 20.194} 9.48763 ${mainBodyRight + 22.806} 9.48763 ${
    mainBodyRight + 24.273
  } 7.96463
    C${mainBodyRight + 29.003} 3.0548 ${mainBodyRight + 35.644} 0 ${circleX} 0
    C${width - radius + 14.359} 0 ${width} 11.6406 ${width} ${radius}
    C${width} ${height - 11.6406} ${
    width - radius + 14.359
  } ${height} ${circleX} ${height}
    C${mainBodyRight + 35.644} ${height} ${mainBodyRight + 29.003} ${
    height - 3.0552
  } ${mainBodyRight + 24.274} ${height - 7.9653}
    C${mainBodyRight + 22.807} ${height - 9.4884} ${mainBodyRight + 20.193} ${
    height - 9.4884
  } ${mainBodyRight + 18.726} ${height - 7.9653}
    C${mainBodyRight + 13.997} ${height - 3.0552} ${
    mainBodyRight + 7.356
  } ${height} ${mainBodyRight} ${height}
    H${radius}
    C${radius - 14.3594} ${height} 0 ${height - 11.6406} 0 ${radius}
    C0 11.6406 ${radius - 14.3594} 0 ${radius} 0
    H${mainBodyRight}Z
  `;

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        onClick={onClick}
        initial="initial"
        whileHover="hover"
        className={cn(
          'group relative flex cursor-pointer items-center overflow-visible bg-transparent transition-transform active:scale-95',
          className,
        )}
        style={{ width, height }}
      >
        {/* SVG маска на основе пути из Figma */}
        <svg className="pointer-events-none absolute h-0 w-0">
          <defs>
            <filter id="goo-filter-white">
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
            <mask id="white-goo-mask">
              <g filter="url(#goo-filter-white)">
                <path d={pathData} fill="white" />
                <m.circle
                  cx={circleX}
                  cy={circleY}
                  r={radius}
                  fill="white"
                  variants={circleVariants}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </g>
            </mask>
          </defs>
        </svg>

        {/* Белый фон с примененной маской */}
        <div
          className="absolute inset-y-0 left-0 right-[-14px] z-0 bg-white"
          style={{
            maskImage: 'url(#white-goo-mask)',
            WebkitMaskImage: 'url(#white-goo-mask)',
          }}
        />

        {/* Слой контента */}
        <div className="relative z-10 flex h-full w-full items-center">
          {/* Spacer to balance the icon area on the right */}
          <div style={{ width: height }} className="shrink-0" />

          <span className="flex-1 text-center leading-none">{text}</span>

          <div
            style={{ width: height }}
            className="flex shrink-0 items-center justify-center"
          >
            {icon || (
              <m.svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={circleVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <path
                  d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                  fill="currentColor"
                />
              </m.svg>
            )}
          </div>
        </div>
      </m.button>
    </LazyMotion>
  );
};

export default GooeyWhiteButton;
