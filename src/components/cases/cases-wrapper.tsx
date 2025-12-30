import CasesContainer from './cases-container';
import DesktopCasesContainer from './desktop-cases-container';

const CasesWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <CasesContainer />
      </div>
      <div className="hidden md:block">
        <DesktopCasesContainer />
      </div>
    </section>
  );
};

export default CasesWrapper;
