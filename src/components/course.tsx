'use client';

import { experiences } from '../data/parcoursProAca';

export default function Course() {
    return (
        <section className="course">
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
