'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';

import { useTranslations } from 'next-intl';

interface SuccessModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal = ({ isOpen, onOpenChange }: SuccessModalProps) => {
  const t = useTranslations('SuccessModal');
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="overflow-hidden sm:max-w-[500px] flex flex-col items-center justify-start pt-[60px] pb-[60px] md:pb-[140px] gap-[24px] rounded-[16px]"
      >
        <DialogClose className="absolute right-4 top-4 z-20 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-[#232323] cursor-pointer">
          <XIcon className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="relative z-10 flex flex-col items-center gap-[8px]">
          <DialogTitle className="text-center mb-[12px] mb:mb-[20px] font-actay font-bold text-[28px] mt-[10px] md:text-[40px] uppercase text-[#232323] leading-none">
            {t('title')}
          </DialogTitle>
          <p className="text-center font-montserrat text-[16px] text-[#1a130d] mt-2">
            {t('description')}
          </p>
        </DialogHeader>
        <DialogClose asChild>
          <Button className="relative z-10 cursor-pointer w-full max-w-[200px] h-[54px] rounded-full bg-[#00dfd0] text-white font-bold font-actay uppercase text-[14px] md:text-[16px] hover:bg-[#08fcec] transition-colors shadow-none mt-4">
            {t('button')}
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
