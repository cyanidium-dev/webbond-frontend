import HeroDesktop from './hero-desktop';
import HeroMobile from './hero-mobile';

const HeroContainer = () => {
  return (
    <section>
      <div className='md:hidden'>
        <HeroMobile />
          </div>
          <div className='hidden md:block'>
            <HeroDesktop />
          </div>
    </section>
  );
};

export default HeroContainer;
