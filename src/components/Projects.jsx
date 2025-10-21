import data from '../data/portfolioData.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-lg border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-2 text-indigo-300">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>

            {/* Skills */}
            {proj.skills && (
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/20 text-indigo-300 text-sm px-3 py-1 rounded-full border border-indigo-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
