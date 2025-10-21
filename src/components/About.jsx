import data from "../data/portfolioData.json"

const About = () => {
  return (
    <section id="about" className="py-20 text-white px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        {data.about}
      </p>
    </section>
  );
};

export default About;
