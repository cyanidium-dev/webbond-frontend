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
}

const GooeyWhiteButton = ({
  text,
  className,
  icon,
  onClick,
}: GooeyWhiteButtonProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        onClick={onClick}
        initial="initial"
        whileHover="hover"
        className={cn(
          'group relative flex h-[52px] w-[236px] cursor-pointer items-center justify-between overflow-visible bg-transparent transition-transform active:scale-95',
          className,
        )}
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
                <path
                  d="M167 0C174.356 0 180.997 3.0548 185.727 7.96463C187.194 9.48763 189.806 9.48763 191.273 7.96463C196.003 3.0548 202.644 0 210 0C224.359 0 236 11.6406 236 26C236 40.3594 224.359 52 210 52C202.644 52 196.003 48.9448 191.274 44.0347C189.807 42.5116 187.193 42.5116 185.726 44.0347C180.997 48.9448 174.356 52 167 52H26C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0H167Z"
                  fill="white"
                />
                <m.circle
                  cx="210"
                  cy="26"
                  r="26"
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
        <div className="relative z-10 flex w-full items-center justify-between pl-8 pr-4">
          <span className="font-montserrat text-[16px] font-light leading-none text-gray-900">
            {text}
          </span>
          <div className="flex items-center justify-center">
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
                  fill="#0B0B0B"
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
