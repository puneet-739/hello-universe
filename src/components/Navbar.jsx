const Navbar = () => {
  const items = ['Home', 'Experience','About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-full px-8 py-3">
      <ul className="flex gap-8 text-white text-sm md:text-base">
        {items.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition font-medium"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
