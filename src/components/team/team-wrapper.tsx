'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopTeamContainer from './desktop-team-container';
import TeamContainer from './team-container';

const TeamWrapper = () => {
  const isMobile = useIsMobile();

  return (
    <section>{isMobile ? <TeamContainer /> : <DesktopTeamContainer />}</section>
  );
};

export default TeamWrapper;
