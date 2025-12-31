import Header from '@/components/header/header';
import QuestionsAndAnswersContainer from '@/components/questions-and-answers/questions-and-answers-container';
import ReviewsContainer from '@/components/reviews/reviews-container';
import ContactsContainer from '@/components/contacts/contacts-container';
import Footer from '@/components/footer/footer';
import HeroContainer from '@/components/hero/hero-container';
import ServicesWrapper from '@/components/services/services-wrapper';
import ChooseWrapper from '@/components/choose-website/choose-wrapper';
import CasesWrapper from '@/components/cases/cases-wrapper';
import AboutWrapper from '@/components/about/about-wrapper';
import TeamWrapper from '@/components/team/team-wrapper';
import BusinessWrapper from '@/components/business/business-wrapper';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="pt-[60px] md:pt-[110px] pb-[20px] md:pb-[30px] md:container md:mx-auto md:px-[32px]">
      <Header />
      <div id="hero">
        <HeroContainer />
      </div>
      <div id="services">
        <ServicesWrapper />
      </div>
      <div id="prices">
        <ChooseWrapper />
      </div>
      <div id="cases">
        <CasesWrapper />
      </div>
      <div id="about">
        <AboutWrapper />
      </div>
      <TeamWrapper />
      <ReviewsContainer />
      <QuestionsAndAnswersContainer />
      <BusinessWrapper />
      <ContactsContainer />
      <Footer />
    </section>
  );
}
