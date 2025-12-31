import AboutContainer from './about-container';
import AboutDesktopContainer from './about-desktop-container';

const AboutWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <AboutContainer />
      </div>
      <div className="hidden md:block">
        <AboutDesktopContainer />
      </div>
    </section>
  );
};

export default AboutWrapper;
