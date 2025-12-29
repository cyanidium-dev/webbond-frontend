import AboutContainer from '@/components/about/about-container';
import BusinessContainer from '@/components/business/business-container';
import CasesContainer from '@/components/cases/cases-container';
import ChooseWebsiteContainer from '@/components/choose-website/choose-website-container';
import Header from '@/components/header/header';
import HeroMobile from '@/components/hero/hero-mobile';
import QuestionsAndAnswersContainer from '@/components/questions-and-answers/questions-and-answers-container';
import ReviewsContainer from '@/components/reviews/reviews-container';
import ServicesContainer from '@/components/services/services-container';
import TeamContainer from '@/components/team/team-container';
import ContactsContainer from '@/components/contacts/contacts-container';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/footer/footer';
import HeroContainer from '@/components/hero/hero-container';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="py-[20px] md:py-[30px] md:container md:mx-auto md:px-[32px] overflow-x-clip">
      <Header />
      <HeroContainer />
      <ServicesContainer />
      <ChooseWebsiteContainer />
      <CasesContainer />
      <AboutContainer />
      <TeamContainer />
      <ReviewsContainer />
      <QuestionsAndAnswersContainer />
      <BusinessContainer />
      <ContactsContainer />
      <Footer />
    </section>
  );
}
