import GlassGooeyButton from '../ui/glass-gooey-button';
import GooeyWhiteButton from '../ui/gooey-white-button';
import DesktopHeader from '../ui/desktop-header';
import MobileLaptopHeader from '../ui/mobile-laptop-header';

const Header = () => {
  return (
    <header>
      <div className="lg:hidden">
        <MobileLaptopHeader />
      </div>
    </header>
  );
};

export default Header;
