import data from '../data/portfolioData.json'

const Skills = () => {
  const skills = data.skills;

  return (
    <section id="skills" className="py-20 text-white px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-indigo-700/20 px-4 py-2 rounded-full border border-indigo-500 text-sm">
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
