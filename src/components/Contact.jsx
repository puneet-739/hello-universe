import data from "../data/portfolioData.json"

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
      <p className="mb-8">
        I'm open to freelance opportunities, collaborations, or just a chat. Let's build something cool!
      </p>
      <a href={`mailto:${data.email}`} className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded text-white">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
