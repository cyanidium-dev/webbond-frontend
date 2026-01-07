import CtaWrapper from "@/components/case-page/cta/cta-wrapper";
import ContactsContainer from "@/components/contacts/contacts-container";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
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
    <section className="pt-15 sm:pt-20 md:pt-[110px] pb-5 sm:pb-10 md:pb-[30px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-8">
      <Header />
      <CtaWrapper />
      <ContactsContainer />
      <Footer />
    </section>
  );
};

export default CasesDynamicPage;
