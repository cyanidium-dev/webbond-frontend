import QuestionsAccordion from './questions-accordion';
import QuestionsRadialShadow from './qustions-radial-shadow';
import Image from 'next/image';

const QuestionsAndAnswersContainer = () => {
  return (
    <section className="relative z-10 px-[20px] pt-[148px]">
      <QuestionsRadialShadow className="absolute top-[-120px] left-[-440px] max-w-none -z-20 pointer-events-none" />
      <h2 className="max-w-[240px] mb-[48px] font-manrope font-light text-[40px] leading-[120%] text-white uppercase [text-shadow:4px_3px_9px_rgba(255,0,166,0.2)]">
        Spørgsmål og svar
      </h2>
      <QuestionsAccordion />
      <Image
        src="/questions-right-decor.png"
        alt="questions-right-decor"
        quality={80}
        width={1873}
        height={1873}
        className="absolute top-[-240px] right-[-980px] max-w-none -z-30 pointer-events-none"
      />
    </section>
  );
};

export default QuestionsAndAnswersContainer;
