import CtaWrapper from "@/components/case-page/cta/cta-wrapper";
import ContactsContainer from "@/components/contacts/contacts-container";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const CasesDynamicPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <>
      <Header />
      <div className="pt-15 sm:pt-20 md:pt-[110px] pb-5 sm:pb-10 md:pb-[30px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-8">
        <CtaWrapper />
        <ContactsContainer />
      </div>
      <Footer />
    </>
  );
};

export default CasesDynamicPage;
