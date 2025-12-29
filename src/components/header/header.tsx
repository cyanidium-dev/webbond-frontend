import DesktopHeader from '../ui/desktop-header';
import MobileLaptopHeader from '../ui/mobile-laptop-header';

const Header = () => {
  return (
    <header>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="lg:hidden">
        <MobileLaptopHeader />
      </div>
    </header>
  );
};

export default Header;
