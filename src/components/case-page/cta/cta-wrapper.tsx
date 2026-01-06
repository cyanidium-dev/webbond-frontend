import CtaContainer from "./cta-container";
import DesktopCtaContainer from "./desktop-cta-container";

const CtaWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <CtaContainer />
      </div>
      <div className="hidden md:block">
        <DesktopCtaContainer />
      </div>
    </section>
  );
};

export default CtaWrapper;
