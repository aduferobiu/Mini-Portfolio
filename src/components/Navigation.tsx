import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav-sticky transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-center py-4">
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('work')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;