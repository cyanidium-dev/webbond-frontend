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
import ShadowEllipseForIphone from './shadow-ellipse-for-iphone';
import GooeyWhiteButton from '../ui/gooey-white-button';

const ChooseWebsiteContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState('Landingpage');

  const websiteTypes = ['Landingpage', 'Hjemmeside', 'Webshop'];

  return (
    <section className="relative z-10 container mx-auto px-[20px] overflow-x-clip">
      <h2 className="mb-[22px] max-w-[320px] font-manrope font-light text-[40px] leading-[120%] text-white uppercase">
        <span className="text-[#818181]">Vælg et website,</span> der arbejder
        for din virksomhed
      </h2>
      <div className="flex items-center mb-[22px]">
        <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={93}
            height={50}
          />
        </div>
        <div className="font-montserrat font-light text-[12px] leading-[120%] text-white text-right max-w-[173px] ml-auto">
          Landingpages, hjemmesider eller webshops — et værktøj, der tiltrækker
          kunder, øger indtjeningen og frigør tid til at udvikle din virksomhed
        </div>
      </div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button className="w-full px-[18px] h-[53px] rounded-[42px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] cursor-pointer flex justify-between items-center text-white outline-none">
            <span className="font-manrope font-light text-[14px] uppercase text-white">
              {selectedWebsite}
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
          {/* Gradient Border Overlay */}
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
            {websiteTypes.map((type) => (
              <DropdownMenuItem
                key={type}
                onClick={() => setSelectedWebsite(type)}
                className="flex items-center justify-between p-0 focus:bg-white/10 cursor-pointer rounded-lg px-2 py-1 transition-colors outline-none"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="w-[16px] flex justify-center">
                    {selectedWebsite === type && (
                      <Check className="w-[16px] h-[16px] text-white" />
                    )}
                  </div>
                  <span className="font-manrope font-light text-[14px] uppercase text-white">
                    {type}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="mx-auto relative max-w-[320px] h-[333px] bg-white/6 rounded-[14px] mt-[32px] mb-[28px]">
        <p className="absolute z-10 top-[24px] right-[16px] max-w-[183px] leading-[120%] font-montserrat font-light text-[12px] text-white">
          En enkel side med alt det vigtigste – perfekt, når du vil præsentere
          ét produkt eller én tjeneste og få kunder hurtigt
        </p>
        <Image
          src="/choose-fon.webp"
          alt="choosefon"
          fill
          quality={80}
          className="rounded-[14px]"
        />
        <Image
          src="/choose-iphone.png"
          alt="choosefon"
          width={360}
          height={550}
          quality={100}
          className="absolute top-[-13px] left-[36px] max-w-none h-auto w-[360px]"
        />
      </div>
      <ShadowEllipseForIphone className="absolute bottom-[-320px] right-[-30px] w-full" />
      <GooeyWhiteButton
        text="Bestil din hjemmeside"
        className="mx-auto text-start w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
    </section>
  );
};

export default ChooseWebsiteContainer;
