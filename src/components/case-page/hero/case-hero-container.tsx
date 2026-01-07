// 'use client';
// import dynamic from 'next/dynamic';

import { CaseWithLanguage } from '@/types/case';
import CaseHeroMobile from './case-hero-mobile';
import CaseHeroDesktop from './case-hero-desktop';

// import { useIsMobile } from '@/hooks/use-mobile';

// const HeroDesktop = dynamic(() => import('./hero-desktop'), { ssr: true });
// const HeroMobile = dynamic(() => import('./hero-mobile'), { ssr: true });

export interface CtaHeroContainerProps {
  content: CaseWithLanguage['hero'];
  title: CaseWithLanguage['title'];
}

const CaseHeroContainer = (props: CtaHeroContainerProps) => {
  // const isMobile = useIsMobile();

  // if (isMobile === undefined) return <div className="min-h-screen" />;

  return (
    <section>
      <CaseHeroMobile props={props} /> : <CaseHeroDesktop props={props} />
    </section>
  );
};

export default CaseHeroContainer;
