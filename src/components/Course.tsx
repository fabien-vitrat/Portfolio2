'use client';

import { useEffect, useState } from 'react';

const experiences = [
    {
        Ecole: "École de Provence",
        Diplome: "Baccalauréat : Terminale Générale",
        Dates: "Juillet 2025",
        Mention: "En cours...",
        Icon: "fa-solid fa-school",
        Type: "aca",
    },
    {
        IntitulePoste: "Stagiaire",
        Entreprise: "Fondation CMA CMG",
        TypeEmploi: "Stage",
        Lieu: "Marseille, Provence-Alpes-Côte d'Azur, France",
        Dates: "26 Fév. 2024 - 1 Mars 2024",
        Icon: "fa-solid fa-building",
        Type: "pro",
    },
    {
        IntitulePoste: "Stagiaire - Découverte monde professionnel",
        Entreprise: "Service de l'énergie opérationnelle",
        TypeEmploi: "Stage",
        Lieu: "Istres, Provence-Alpes-Côte d'Azur, France",
        Dates: "19 Juin 2024 - 23 Juin 2024",
        Icon: "fa-solid fa-building",
        Type: "pro",
    },
    {
        Ecole: "École de Provence",
        Diplome: "Diplôme national du Brevet des Collèges",
        Dates: "Juillet 2022",
        Mention: "Très bien",
        Icon: "fa-solid fa-school",
        Type: "aca",
    },
    {
        IntitulePoste: "Stagiaire - Découverte monde professionnel",
        Entreprise: "Trapil",
        TypeEmploi: "Stage",
        Lieu: "Port-de-Bouc, Provence-Alpes-Côte d'Azur, France",
        Dates: "3 Jan. 2022 - 7 Jan. 2022",
        Icon: "fa-solid fa-building",
        Type: "pro",
    }
];

export default function Course() {
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

        const element = document.querySelector('.course');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`course ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="section-title">
                    <h1>Fabien VITRAT</h1>
                    <h2>MES PARCOURS</h2>
                </div>

                <div className="row">
                    <div className="parcours-separation parcours parcours-colonnes">
                        {experiences.map((experience, index) => (
                            <div key={index} className="parcours-experience">
                                <span className="parcours-icon">
                                    <i className={`${experience.Icon}`}></i>
                                </span>
                                <div className="parcours-infos">
                                    <div className="parcours-fleche"></div>
                                    <div>
                                        <h3 className="ecole-entreprise">
                                            {experience.Diplome
                                                ? experience.Diplome
                                                : experience.IntitulePoste
                                            }
                                        </h3>
                                        <p className="diplome-entreprise">
                                            {experience.Ecole 
                                                ? experience.Ecole 
                                                : `${experience.Entreprise} - ${experience.TypeEmploi}`
                                            }
                                        </p>
                                        <p className="lieu-mention">
                                            {experience.Lieu
                                                ? experience.Lieu
                                                : `Mention : ${experience.Mention}`
                                            }
                                        </p>
                                    </div>
                                    <div className="parcours-date">
                                        <p>{experience.Dates}</p>
                                    </div>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}