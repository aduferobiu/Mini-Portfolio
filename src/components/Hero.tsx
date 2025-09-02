import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center container-padding">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-name mb-6">
            ALEX JORDAN
          </h1>
          <p className="hero-description mx-auto">
            Product Designer crafting digital experiences that feel simple, modern, and human
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;