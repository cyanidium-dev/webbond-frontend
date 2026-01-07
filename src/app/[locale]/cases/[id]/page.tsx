import CtaWrapper from "@/components/case-page/cta/cta-wrapper";
import ContactsContainer from "@/components/contacts/contacts-container";

const CasesDynamicPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-8">
      <CtaWrapper />
      <ContactsContainer />
    </div>
  );
};

export default CasesDynamicPage;
