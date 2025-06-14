'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function About() {
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

        const element = document.querySelector('.about');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const personalInfo = [
        { label: 'Date de naissance', value: '1 mai 2007' },
        { label: 'Email', value: 'vitratfabien@gmail.com' },
        { label: 'Téléphone', value: '+33 7 66 18 07 15' },
        { label: 'Ville', value: 'Marseille, France' },
        { label: 'Age', value: '17 ans' },
        { label: 'Établissement', value: 'Lycée de Provence' },
        { label: 'Niveau', value: 'Terminale' },
        { label: 'Langues', value: 'Français, Espagnol, Anglais' }
    ];

    const passions = ['SPORT', 'AUTOMOBILE', 'PHOTOGRAPHIE', 'VOYAGE', 'INFORMATIQUE'];

    return (
        <section className={`about ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="section-title">
                    <h1>Fabien VITRAT</h1>
                    <h2>À PROPOS DE MOI</h2>
                </div>
                
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <h3>Qui suis-je ?</h3>
                            <p>
                                Toujours à la recherche de nouvelles opportunités pour apprendre et évoluer, 
                                je m'investis avec passion dans des projets variés. Curieux et déterminé, 
                                je m'efforce de mêler rigueur, créativité et esprit d'équipe pour relever 
                                chaque défi avec enthousiasme.
                            </p>
                        </div>

                        <div className="personal-info">
                            <div className="info-grid">
                                {personalInfo.map((info, index) => (
                                    <div key={index} className="info-item">
                                        <span className="info-label">{info.label}</span>
                                        <span className="info-value">{info.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="passions-section">
                            <h4>Mes passions</h4>
                            <div className="passions-tags">
                                {passions.map((passion, index) => (
                                    <span key={index} className="passion-tag">
                                        {passion}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-container">
                            <Image
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1"
                                alt="Portrait de Fabien VITRAT"
                                className="portrait-img"
                                width={400}
                                height={500}
                                priority
                            />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}