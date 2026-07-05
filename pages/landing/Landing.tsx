import Hero from "./components/Hero";
import ChooseYourRims from "./components/ChooseYourRims";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import Steps from "./components/4Steps";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import News from "./components/News";

const Landing = () => {
  return (
    <div>
      <Hero />
      <ChooseYourRims />
      <Benefits />
      <Testimonials />
      <Steps />
      <section id="service">
        <Services />
      </section>
      <FAQ />
      <News />
    </div>
  );
};

export default Landing;
