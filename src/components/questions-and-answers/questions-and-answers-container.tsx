import QuestionsAccordion from './questions-accordion';
import Image from 'next/image';

const QuestionsAndAnswersContainer = () => {
  return (
    <section className="relative px-[20px] md:px-0 pt-[148px] md:pt-[178px]">
      {/* questions-shadow left */}
      <Image
        src="/questions-shadow.webp"
        alt="questions-shadow"
        width={1582}
        height={1477}
        sizes="(max-width: 768px) 100vw, 1582px"
        quality={100}
        className="absolute w-[1582px] h-[1477px] top-[-120px] left-[-440px] max-w-none -z-10 pointer-events-none"
      />
      {/* radial shadow right*/}
      <Image
        src="/desktop-questions-shadow.webp"
        alt="questions-desktop-radial-shadow"
        width={1500}
        height={1500}
        sizes="100vw"
        quality={75}
        className="absolute bottom-[-300px] right-[-400px] max-w-none -z-20 pointer-events-none blur-[44px]"
      />
      <h2 className="max-w-[240px] md:max-w-full mb-[48px] font-manrope font-light text-[40px] md:text-[64px] leading-[120%] text-white uppercase [text-shadow:4px_3px_9px_rgba(255,0,166,0.2)]">
        Spørgsmål og svar
      </h2>
      <QuestionsAccordion />
      <Image
        src="/questions-red-decor.webp"
        alt="questions-right-decor"
        width={898}
        height={388}
        quality={100}
        className="absolute bottom-[-90px] left-[-100px] max-w-none -z-20 pointer-events-none contrast-125 saturate-150"
      />
    </section>
  );
};

export default QuestionsAndAnswersContainer;
