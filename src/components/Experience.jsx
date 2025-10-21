import data from '../data/portfolioData.json';

const Experience = () => {
  const experiences = data.experience;

  return (
    <section id="experience" className="py-20 text-white px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>
      <div className="space-y-10 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-white/10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-2 top-2 w-4 h-4 bg-indigo-400 rounded-full border-4 border-white/20 shadow-md group-hover:scale-110 transition-transform"></div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-center flex-wrap mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">{exp.title}</h3>
                  <p className="text-sm text-white/70">{exp.company} • {exp.type}</p>
                </div>
                <div className="text-right text-sm text-white/50 mt-2 sm:mt-0">
                  <p>{exp.startDate} – {exp.endDate}</p>
                  <p className="">{exp.location}</p>
                </div>
              </div>

              <ul className="list-disc list-inside mt-4 text-white/80 space-y-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
