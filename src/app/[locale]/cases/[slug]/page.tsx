import CtaWrapper from '@/components/case-page/cta/cta-wrapper';
import CaseHeroContainer from '@/components/case-page/hero/case-hero-container';
import ContactsContainer from '@/components/contacts/contacts-container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { caseBySlugQuery } from '@/lib/queries';
import { CaseWithLanguage } from '@/types/case';
import { fetchSanityData } from '@/utils/fetchSanityData';

const CasesDynamicPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;

  const currentCase = await fetchSanityData<CaseWithLanguage>(caseBySlugQuery, {
    lang: locale,
    slug: slug,
  });

  const breadcrumbSteps = [
    { label: 'Home', href: `/` },
    { label: 'Work', href: `/cases` },
    { label: currentCase.title },
  ];

  return (
    <div className='pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-8'>
      {currentCase?.hero && <CaseHeroContainer currentCase={currentCase} />}
      <Breadcrumbs steps={breadcrumbSteps} className='mb-8' />
      <CtaWrapper />
      <ContactsContainer />
    </div>
  );
};

export default CasesDynamicPage;
