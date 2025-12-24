'use client';
import Burger from '../header/burger';
import LocaleSwitcher from '../header/lang-switch';
import Logo from '../header/logo';
import { useState } from 'react';

const MobileLaptopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-100">
      <div className="relative flex justify-between px-[20px] py-[15px] backdrop-blur-[32px] bg-white/3 rounded-[40px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
        {/* Gradient Border Overlay */}
        <div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          style={{
            padding: '1px',
            background:
              'linear-gradient(to right, rgba(74, 14, 14, 0.6), rgba(74, 14, 14, 0.1))',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        <Logo />
        <div className="flex items-center gap-[24px]">
          <LocaleSwitcher />
          <div className="w-px h-[20px] bg-[#d2d2d2]"></div>
          <Burger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      </div>
    </div>
  );
};

export default MobileLaptopHeader;
