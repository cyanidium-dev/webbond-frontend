import dynamic from 'next/dynamic';
import Header from '@/components/header/header';
import HeroContainer from '@/components/hero/hero-container';
import { setRequestLocale } from 'next-intl/server';

// Heavy containers/sections loaded dynamically
const ServicesWrapper = dynamic(
  () => import('@/components/services/services-wrapper'),
  { ssr: true },
);
const ChooseWrapper = dynamic(
  () => import('@/components/choose-website/choose-wrapper'),
  { ssr: true },
);
const CasesWrapper = dynamic(() => import('@/components/cases/cases-wrapper'), {
  ssr: true,
});
const AboutWrapper = dynamic(() => import('@/components/about/about-wrapper'), {
  ssr: true,
});
const TeamWrapper = dynamic(() => import('@/components/team/team-wrapper'), {
  ssr: true,
});
const ReviewsContainer = dynamic(
  () => import('@/components/reviews/reviews-container'),
  { ssr: true },
);
const QuestionsAndAnswersContainer = dynamic(
  () =>
    import(
      '@/components/questions-and-answers/questions-and-answers-container'
    ),
  { ssr: true },
);
const BusinessWrapper = dynamic(
  () => import('@/components/business/business-wrapper'),
  { ssr: true },
);
const ContactsContainer = dynamic(
  () => import('@/components/contacts/contacts-container'),
  { ssr: true },
);
const Footer = dynamic(() => import('@/components/footer/footer'), {
  ssr: true,
});

import { getLocale } from 'next-intl/server';

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonical = `${baseUrl}/${locale}`;
  return {
    title: 'WebBond — Custom Websites and Digital Growth',
    description:
      'High-performance websites on pure code, SEO, advertising, and branding. We transform your digital presence into a customer-generating machine.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'WebBond — High-Performance Digital Solutions',
      description:
        'Custom web development, SEO, and professional branding for businesses that want to grow. See our cases and start your journey.',
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/Opengraph.webp`,
          width: 1200,
          height: 630,
          alt: 'WebBond — Digital Agency',
        },
      ],
      type: 'website',
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="pt-[60px] md:pt-[110px] pb-[20px] md:pb-[30px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-[32px]">
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
