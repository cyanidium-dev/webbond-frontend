'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { startTransition, useOptimistic, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LangsProps {
  className?: string;
}

const LocaleSwitcher = ({ className }: LangsProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Оптимистичное состояние для языка
  const [optimisticLocale, setOptimisticLocale] = useOptimistic(locale);

  const onLocaleChange = (nextLocale: string) => {
    if (nextLocale !== locale) {
      // Оптимистично меняем UI
      startTransition(() => {
        setOptimisticLocale(nextLocale);
      });
      // Асинхронно меняем язык в роутере
      router.replace(pathname, { locale: nextLocale });
      router.refresh();
    }
  };

  const languages = [
    { code: 'da', label: 'DA' },
    { code: 'en', label: 'EN' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === optimisticLocale) || languages[0];

  return (
    <div className={cn('relative', className)}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button className="cursor-pointer flex items-center gap-[6px] text-white outline-none">
            <span className="font-montserrat font-medium text-[14px] uppercase">
              {currentLanguage.label}
            </span>
            {isOpen ? (
              <ChevronUp className="w-[16px] h-[16px]" />
            ) : (
              <ChevronDown className="w-[16px] h-[16px]" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border border-[#232323] bg-white rounded-[24px] p-[16px] w-[var(--radix-dropdown-menu-trigger-width)] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)] mt-2"
        >
          <div className="flex flex-col gap-[8px]">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => onLocaleChange(lang.code)}
                className="flex items-center justify-between p-0 focus:bg-transparent cursor-pointer"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="w-[16px] flex justify-center">
                    {optimisticLocale === lang.code && (
                      <Check className="w-[16px] h-[16px] text-[#232323]" />
                    )}
                  </div>
                  <span
                    className={cn(
                      'font-montserrat font-medium text-[16px] uppercase',
                      optimisticLocale === lang.code
                        ? 'text-[#232323]'
                        : 'text-[#232323]',
                    )}
                  >
                    {lang.label}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LocaleSwitcher;
