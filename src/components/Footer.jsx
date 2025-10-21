import data from "../data/portfolioData.json"

const Footer = () => {
  return (
    <footer className="text-white text-center py-6 text-sm bg-black/20 backdrop-blur-md mt-20">
      <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
