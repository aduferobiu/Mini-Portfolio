import { useEffect, useState } from 'react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    id: 1,
    title: 'Dashboard Redesign',
    description: 'Complete UX overhaul of a complex analytics platform, focusing on information hierarchy and user workflow optimization.',
    image: project1,
    technologies: ['UI/UX Design', 'Prototyping', 'User Research']
  },
  {
    id: 2,
    title: 'Mobile Commerce App',
    description: 'End-to-end design of a mobile shopping experience with emphasis on conversion optimization and accessibility.',
    image: project2,
    technologies: ['Mobile Design', 'E-commerce', 'Accessibility']
  },
  {
    id: 3,
    title: 'Brand Identity System',
    description: 'Comprehensive brand identity and design system creation for a growing fintech startup, including guidelines and components.',
    image: project3,
    technologies: ['Brand Design', 'Design Systems', 'Visual Identity']
  }
];

const Work = () => {
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

    const section = document.getElementById('work');
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
    <section id="work" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="section-title">Selected Work</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my approach to solving complex design challenges 
              through research, iteration, and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;