
'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import AboutContainer from './about-container';
import AboutDesktopContainer from './about-desktop-container';

const AboutWrapper = () => {
  const isMobile = useIsMobile();

  return (
    <section>
      {isMobile ? <AboutContainer /> : <AboutDesktopContainer />}
    </section>
  );
};

export default AboutWrapper;
