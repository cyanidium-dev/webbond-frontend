'use client';

import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { WEBSITE_TYPES_MOCK } from './choose-website-mock';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

const WebsiteSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(WEBSITE_TYPES_MOCK[0].id);

  const selectedData =
    WEBSITE_TYPES_MOCK.find((item) => item.id === selectedId) ||
    WEBSITE_TYPES_MOCK[0];

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button className="w-full px-[18px] h-[53px] rounded-[42px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] cursor-pointer flex justify-between items-center text-white outline-none">
            <span className="font-manrope font-light text-[14px] uppercase text-white">
              {selectedData.type}
            </span>
            {isOpen ? (
              <ChevronUp className="w-[16px] h-[16px]" />
            ) : (
              <ChevronDown className="w-[16px] h-[16px]" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="relative border-none bg-white/3 backdrop-blur-[32px] rounded-[24px] p-[16px] w-(--radix-dropdown-menu-trigger-width) shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] mt-2 z-250 overflow-hidden"
        >
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none"
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
          <div className="relative flex flex-col gap-[8px] z-10">
            {WEBSITE_TYPES_MOCK.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="flex items-center justify-between p-0 focus:bg-white/10 cursor-pointer rounded-lg px-2 py-1 transition-colors outline-none"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="w-[16px] flex justify-center">
                    {selectedId === item.id && (
                      <Check className="w-[16px] h-[16px] text-white" />
                    )}
                  </div>
                  <span className="font-manrope font-light text-[14px] uppercase text-white">
                    {item.type}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="relative mt-[32px] mb-[28px] h-[333px]">
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={selectedData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'linear' }}
              className="mx-auto relative max-w-[320px] h-[333px] bg-white/6 rounded-[14px] isolation-isolate"
              style={{
                transform: 'translate3d(0,0,0)',
                WebkitTransform: 'translate3d(0,0,0)',
              }}
            >
              <p className="absolute z-10 top-[24px] right-[16px] max-w-[183px] leading-[120%] font-montserrat font-light text-[12px] text-white">
                {selectedData.description}
              </p>
              <Image
                src={selectedData.fonImage}
                alt="choosefon"
                fill
                quality={80}
                className="rounded-[14px]"
                priority
                style={{
                  transform: 'translate3d(0,0,0)',
                  WebkitTransform: 'translate3d(0,0,0)',
                }}
              />
              <Image
                src={selectedData.phoneImage}
                alt="choosefon"
                width={360}
                height={550}
                quality={100}
                className="absolute top-[-13px] left-[36px] max-w-none h-auto w-[360px]"
                priority
                style={{
                  transform: 'translate3d(0,0,0)',
                  WebkitTransform: 'translate3d(0,0,0)',
                }}
              />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </>
  );
};

export default WebsiteSelector;
