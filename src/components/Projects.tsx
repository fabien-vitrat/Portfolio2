'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Les ressources humaines',
    description: "Site internet servant à rien mais qui a été fait pour le plaisir...Site internet servant à rien mais qui a été fait pour le plaisir...Site internet servant à rien mais qui a été fait pour le plaisir...Site internet servant à rien mais qui a été fait pour le plaisir...",
    link: '#',
    github: '#',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development'
  },
  {
    title: 'Gestion de Projets',
    description: "Un outil fictif pour montrer une gestion agile d'équipe...",
    link: '#',
    github: '#',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack'
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h1>Fabien VITRAT</h1>
          <h2>MON PORTFOLIO</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="project-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  fill
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <Link href={project.link} className="project-link">
                      <ExternalLink size={20} />
                    </Link>
                    <Link href={project.github} className="project-link">
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}