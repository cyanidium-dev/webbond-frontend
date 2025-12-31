import DesktopBisinesContainer from './desktop-bisines-container';
import BusinessContainer from './business-container';

const BusinessWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <BusinessContainer />
      </div>
      <div className="hidden md:block">
        <DesktopBisinesContainer />
      </div>
    </section>
  );
};

export default BusinessWrapper;
