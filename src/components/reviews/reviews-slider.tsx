'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { REVIEWS_DATA } from './reviews-data';

const ReviewsSlider = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {REVIEWS_DATA.map((reviewItem) => (
          <CarouselItem
            key={reviewItem.id}
            className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="relative w-full h-[160px] p-[20px] rounded-[6px] flex flex-col backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)]">
              <div className="flex items-center gap-[28px]">
                <Image
                  src={reviewItem.image}
                  alt={reviewItem.name}
                  width={58}
                  height={58}
                  quality={75}
                  className="object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <div className="text-[20px] text-white font-manrope font-light leading-[120%] uppercase mb-[4px]">
                    {reviewItem.name}
                  </div>
                  <div className="text-[12px] text-white font-manrope font-light leading-[120%] uppercase mb-[14px]">
                    {reviewItem.position}
                  </div>
                  <div className="max-w-[194px] font-montse rrat font-light text-[8px] leading-[120%] text-white">
                    {reviewItem.review}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Custom Navigation Buttons */}
      <div className="flex justify-center lg:justify-end gap-[12px] mt-[24px] mb-[40px]">
        <CarouselPrevious
          iconSize={32}
          className="static translate-y-0 w-[44px] h-[44px] rounded-full border-2 bg-transparent border-white text-white transition-colors cursor-pointer"
        ></CarouselPrevious>
        <CarouselNext
          iconSize={32}
          className="static translate-y-0 w-[44px] h-[44px] rounded-full bg-white transition-colors cursor-pointer"
        ></CarouselNext>
      </div>
    </Carousel>
  );
};

export default ReviewsSlider;
