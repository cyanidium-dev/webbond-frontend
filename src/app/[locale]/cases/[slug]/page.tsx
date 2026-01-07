import CtaWrapper from "@/components/case-page/cta/cta-wrapper";
import ContactsContainer from "@/components/contacts/contacts-container";
import { caseBySlugQuery } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";

const CasesDynamicPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;

  const caseList = await fetchSanityData(caseBySlugQuery, {
    lang: locale,
    slug: slug,
  });

  console.log(caseList);

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-8">
      <CtaWrapper />
      <ContactsContainer />
    </div>
  );
};

export default CasesDynamicPage;
