
import ChooseWebsiteContainer from './choose-website-container';
import DesktopChooseWebsiteContainer from './desktop-choose-website-container';

const ChooseWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <ChooseWebsiteContainer />
      </div>
      <div className="hidden md:block">
        <DesktopChooseWebsiteContainer />
      </div>
    </section>
  );
};

export default ChooseWrapper;
