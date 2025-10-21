import data from "../data/portfolioData.json"
import SocialLinks from "./SocialLinks"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-5xl md:text-5xl font-bold mb-4">I'm <span className="text-indigo-400">{data.name}</span></h1>
      <p className="text-xl md:text-2xl max-w-xl mb-6">
        {data.designation}
      </p>
      {/* <a href="#projects" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white transition">
        See My Work
      </a> */}
      <SocialLinks />
    </section>
  );
};

export default Hero;
