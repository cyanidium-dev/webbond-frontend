import AboutContainer from '@/components/about/about-container';
import CasesContainer from '@/components/cases/cases-container';
import ChooseWebsiteContainer from '@/components/choose-website/choose-website-container';
import Header from '@/components/header/header';
import HeroMobile from '@/components/hero/hero-mobile';
import QuestionsAndAnswersContainer from '@/components/questions-and-answers/questions-and-answers-container';
import ReviewsContainer from '@/components/reviews/reviews-container';
import ServicesContainer from '@/components/services/services-container';
import TeamContainer from '@/components/team/team-container';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="py-[20px]">
      <Header />
      <HeroMobile />
      <ServicesContainer />
      <ChooseWebsiteContainer />
      <CasesContainer />
      <AboutContainer />
      <TeamContainer />
      <ReviewsContainer />
      <QuestionsAndAnswersContainer />
    </section>
  );
}
