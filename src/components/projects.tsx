'use client';

import Image from 'next/image';

import projet1 from '@/public/etudes.jpg';
import projet2 from '@/public/etudes.jpg';
import Link from 'next/link';

const projects = [
  {
    title: 'Les ressources humaines',
    description: "Site internet servant à rien mais qui a été fait pour le plaisir...Site internet servant à rien mais qui a été fait pour le plaisir...Site internet servant à rien mais qui a été fait pour le plaisir...Site internet servant à rien mais qui a été fait pour le plaisir...",
    link: '#',
    image: projet1,
  },
  {
    title: 'Gestion de Projets',
    description: "Un outil fictif pour montrer une gestion agile d’équipe...",
    link: '#',
    image: projet2,
  },
];

export default function Projects() {
  return (
    <section className="projects portfolio-wrapper">
        <div className="container">

            <div className="section-title">
                <h1>Fabien VITRAT</h1>
                <h2>MON PORTFOLIO</h2>
            </div>

            <div className="portfolio">
                {projects.map((project, index) => (
                    <div className="project row" key={index}>
                        <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="img-fluid"
                            />
                        </div>
                        <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-1 right' : 'left'}`}>
                            <h2 className="fw-semibold">{project.title}</h2>
                            <div className="project-description">
                                <p className="mb-3">{project.description}</p>
                                <Link href={project.link} className="text-dark">
                                    Lien du Site
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
};
