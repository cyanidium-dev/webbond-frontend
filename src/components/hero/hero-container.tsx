import dynamic from 'next/dynamic';

const HeroDesktop = dynamic(() => import('./hero-desktop'), { ssr: true });
const HeroMobile = dynamic(() => import('./hero-mobile'), { ssr: true });

const HeroContainer = () => {
  return (
    <section>
      <div className="md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </section>
  );
};

export default HeroContainer;
