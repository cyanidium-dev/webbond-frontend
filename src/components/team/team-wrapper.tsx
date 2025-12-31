import DesktopTeamContainer from './desktop-team-container';
import TeamContainer from './team-container';

const TeamWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <TeamContainer />
      </div>
      <div className="hidden md:block">
        <DesktopTeamContainer />
      </div>
    </section>
  );
};

export default TeamWrapper;
