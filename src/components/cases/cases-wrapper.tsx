'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import CasesContainer from './cases-container';
import DesktopCasesContainer from './desktop-cases-container';

const CasesWrapper = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <section>
      {isMobile ? <CasesContainer /> : <DesktopCasesContainer />}
    </section>
  );
};

export default CasesWrapper;
