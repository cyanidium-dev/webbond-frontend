import CtaWrapper from '@/components/case-page/cta/cta-wrapper';
import CtaHeroContainer from '@/components/case-page/hero/cta-hero-container';
import ContactsContainer from '@/components/contacts/contacts-container';
import { caseBySlugQuery } from '@/lib/queries';
import { CaseWithLanguage } from '@/types/case';
import { fetchSanityData } from '@/utils/fetchSanityData';
import { SanityClient } from 'next-sanity';

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
  console.log(currentCase);

  return (
    <div className='pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-8'>
      {currentCase?.hero && (
        <CtaHeroContainer
          content={currentCase?.hero}
          title={currentCase?.title}
        />
      )}
      <CtaWrapper />
      <ContactsContainer />
    </div>
  );
};

export default CasesDynamicPage;
