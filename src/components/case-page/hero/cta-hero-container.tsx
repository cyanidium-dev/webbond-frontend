// 'use client';
// import dynamic from 'next/dynamic';

import { CaseWithLanguage } from '@/types/case';

// import { useIsMobile } from '@/hooks/use-mobile';

// const HeroDesktop = dynamic(() => import('./hero-desktop'), { ssr: true });
// const HeroMobile = dynamic(() => import('./hero-mobile'), { ssr: true });

interface CtaHeroContainerProps {
  content: CaseWithLanguage['hero'];
  title: CaseWithLanguage['title'];
}

const CtaHeroContainer = ({ content, title }: CtaHeroContainerProps) => {
  // const isMobile = useIsMobile();

  // if (isMobile === undefined) return <div className="min-h-screen" />;
  return (
    <div>
      <p>Cta Hero Container {title}</p>
    </div>
  );
  // return <section>{isMobile ? <HeroMobile /> : <HeroDesktop />}</section>;
};

export default CtaHeroContainer;
