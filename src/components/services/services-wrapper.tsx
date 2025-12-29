import DesktopServicesContainer from "./desktop-services-container";
import ServicesContainer from "./services-container";


const ServicesWrapper = () => {
  return (
    <section>
      <div className="md:hidden">
        <ServicesContainer />
      </div>
      <div className="hidden md:block">
        <DesktopServicesContainer />
      </div>
    </section>
  );
}

export default ServicesWrapper