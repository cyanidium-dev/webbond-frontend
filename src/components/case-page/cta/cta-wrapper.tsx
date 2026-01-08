import CtaContainer from "./cta-container";
import DesktopCtaContainer from "./desktop-cta-container";

const CtaWrapper = () => {
  return (
    <section className="pt-[190px] pb-[148px]">
      <CtaContainer />
      <DesktopCtaContainer />
    </section>
  );
};

export default CtaWrapper;
