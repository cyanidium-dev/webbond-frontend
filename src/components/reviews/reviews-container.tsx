import Image from 'next/image';
import ReviewsSlider from './reviews-slider';
import SkobkiUI from './skobki-ui';
// import ReviewsShadow from './reviews-shadow';

const ReviewsContainer = () => {
  return (
    <section className="relative px-[20px] pt-[148px]">
      <h2 className="max-w-[307px] mb-[24px] font-manrope font-light text-[40px] leading-[120%] text-white uppercase">
        Vores kunders anmeldelser
      </h2>
      <p className="max-w-[191px] font-montserrat font-light text-[14px] leading-[120%] text-white mb-[44px]">
        Se hvad vores kunder siger om os, og gennemgå vores anmeldelser
      </p>
      <ReviewsSlider />
      <SkobkiUI className="absolute top-[308px] right-[-40px] -z-10 pointer-events-none" />
      <Image
        src="/reviews-shadow.webp"
        alt="reviews-shadow"
        width={1176}
        height={1106}
        className="absolute max-w-none top-[-80px] right-[-680px] pointer-events-none select-none -z-20"
      />
    </section>
  );
};

export default ReviewsContainer;
