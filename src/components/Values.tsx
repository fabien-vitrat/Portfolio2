'use client';

import { useEffect, useState } from 'react';
import { Heart, Users, Handshake, Lightbulb } from 'lucide-react';

export default function Values() {
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

        const element = document.querySelector('.values');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const values = [
        {
            icon: Heart,
            title: 'BIENVEILLANCE',
            descriptions: [
                'Prends le temps d\'écouter les autres',
                'Participation à du bénévolat'
            ],
            color: '#e74c3c'
        },
        {
            icon: Users,
            title: 'TRAVAIL D\'ÉQUIPE',
            descriptions: [
                'Réalisation de projets en équipe',
                'Bonne gestion et réalisation'
            ],
            color: '#3498db'
        },
        {
            icon: Handshake,
            title: 'ENGAGEMENT',
            descriptions: [
                'Donner du temps aux autres',
                'Course de solidarité, Lourdes...'
            ],
            color: '#2ecc71'
        },
        {
            icon: Lightbulb,
            title: 'CURIOSITÉ',
            descriptions: [
                'Découvrir de nouvelles choses',
                'Apprendre et voir de nouvelles choses'
            ],
            color: '#f39c12'
        }
    ];

    return (
        <section className={`values ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="section-title">
                    <h1>Fabien VITRAT</h1>
                    <h2>MES VALEURS</h2>
                </div>
                
                <div className="values-grid">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div 
                                key={index} 
                                className={`value-card ${index % 2 === 0 ? 'left' : 'right'}`}
                                style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
                            >
                                <div className="value-icon" style={{ backgroundColor: value.color }}>
                                    <IconComponent size={32} />
                                </div>
                                <div className="value-content">
                                    <h3>{value.title}</h3>
                                    <div className="value-descriptions">
                                        {value.descriptions.map((desc, i) => (
                                            <p key={i}>{desc}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}