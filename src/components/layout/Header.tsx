import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id") || "";

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Work", id: "work" },
    { name: "Articles", id: "articles" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height + some padding
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-6 relative w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex-none text-xl font-semibold dark:text-white"
            aria-label="Brand"
          >
            preline
          </button>
          <div className="md:hidden">
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}>
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
