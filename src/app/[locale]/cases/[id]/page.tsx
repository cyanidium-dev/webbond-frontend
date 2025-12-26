const CasesDynamicPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div className="text-white">CasesDynamicPage {id}</div>;
};

export default CasesDynamicPage;
