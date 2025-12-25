import ChooseWebsiteContainer from '@/components/choose-website/choose-website-container';
import Header from '@/components/header/header';
import HeroMobile from '@/components/hero/hero-mobile';
import ServicesContainer from '@/components/services/services-container';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="py-[20px] container mx-auto">
      <Header />
      <HeroMobile />
      <ServicesContainer />
      <ChooseWebsiteContainer />
    </section>
  );
}
