import QuestionsAccordion from './questions-accordion';
import Image from 'next/image';

const QuestionsAndAnswersContainer = () => {
  return (
    <section className="relative px-[20px] pt-[148px]">
      <Image
        src="/questions-shadow.webp"
        alt="questions-shadow"
        width={1582}
        height={1477}
        sizes="(max-width: 768px) 100vw, 1582px"
        quality={100}
        className="absolute w-[1582px] h-[1477px] top-[-120px] left-[-440px] max-w-none -z-10 pointer-events-none"
      />
      <h2 className="max-w-[240px] mb-[48px] font-manrope font-light text-[40px] leading-[120%] text-white uppercase [text-shadow:4px_3px_9px_rgba(255,0,166,0.2)]">
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
