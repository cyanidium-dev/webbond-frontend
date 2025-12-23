import GlassGooeyButton from './ui/glass-gooey-button';
import GooeyWhiteButton from './ui/gooey-white-button';
import DesktopHeader from './ui/desktop-header';

const Header = () => {
  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex flex-col gap-[32px]">
        {/* desktop header */}
        <div className="w-full">
          <DesktopHeader />
        </div>

        {/* white test btn */}
        <div className="mx-auto flex w-full justify-center">
          <GooeyWhiteButton text="slsls" />
        </div>

        {/* blur test btn */}
        <div className="mx-auto">
          <GlassGooeyButton text="Se mere" />
        </div>
      </div>
    </div>
  );
};

export default Header;
