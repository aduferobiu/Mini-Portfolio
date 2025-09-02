import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className={`nav-sticky transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between py-4">
          <div className="flex-1"></div>
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('work')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="flex-1 flex justify-end">
            <button
              onClick={toggleTheme}
              className={`theme-toggle ${isDarkMode ? 'dark' : ''}`}
              aria-label="Toggle theme"
            >
              <div className="theme-toggle-thumb"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;