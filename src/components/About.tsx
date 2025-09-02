import { useEffect, useState } from 'react';
import profileImage from '@/assets/Robiu Photo Full.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className={`fade-in ${isVisible ? 'visible' : ''} text-center max-w-4xl mx-auto`}>
          <h2 className="section-title ml-56">About</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Alex Jordan - Product Designer"
                className="w-64 h-64 object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-lg text-secondary-foreground leading-relaxed mb-6">
                I'm a passionate product designer with over 5 years of experience creating 
                digital experiences that bridge the gap between user needs and business goals. 
                I believe in the power of simplicity and the importance of every detail.
              </p>
              <p className="text-lg text-secondary-foreground leading-relaxed mb-6">
                My approach combines strategic thinking with creative execution, always 
                keeping the human experience at the center of every design decision. I work 
                closely with development teams to ensure designs are not only beautiful 
                but also feasible and scalable.
              </p>
              <p className="text-lg text-secondary-foreground leading-relaxed">
                When I'm not designing, you'll find me exploring new design tools, 
                reading about emerging technologies, or traveling to find inspiration 
                in different cultures and environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;