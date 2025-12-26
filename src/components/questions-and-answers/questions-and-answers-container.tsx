import QuestionsAccordion from './questions-accordion';

const QuestionsAndAnswersContainer = () => {
  return (
    <section className="relative z-10 container px-[20px] pt-[148px] overflow-x-clip">
      <h2 className="max-w-[240px] mb-[48px] font-manrope font-light text-[40px] leading-[120%] text-white uppercase [text-shadow:4px_3px_9px_rgba(255,0,166,0.2)]">
        Spørgsmål og svar
      </h2>
      <QuestionsAccordion />
    </section>
  );
};

export default QuestionsAndAnswersContainer;
