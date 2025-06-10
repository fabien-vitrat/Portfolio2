'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Ingenieur from '@/public/ingenieur.jpg';
import Passions from '@/public/passions.jpg';
import Etudes from '@/public/etudes.jpg';
import Experiences from '@/public/voyage.jpg';

const goals = [
  {
    titre: 'ÉTUDES',
    image: Etudes,
    textes: [
      "Intégrer une classe préparatoire scientifique",
      'Réaliser le concours des grandes écoles d\'ingénieurs'
    ],
    color: '#3498db'
  },
  {
    titre: "INGÉNIEUR",
    image: Ingenieur,
    textes: [
      'Contribuer à des solutions innovantes',
      'Obtenir un diplôme d\'ingénieur'
    ],
    color: '#e74c3c'
  },
  {
    titre: 'PASSIONS',
    image: Passions,
    textes: [
      'Jeux vidéo, sport, photographie et voyages',
      'Apprendre de nouvelles choses et m\'épanouir'
    ],
    color: '#2ecc71'
  },
  {
    titre: 'EXPÉRIENCES',
    image: Experiences,
    textes: [
      'Explorer le monde',
      "Ressentir l'adrénaline",
    ],
    color: '#f39c12'
  }
];

export default function Goals() {
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

    const element = document.querySelector('.goals');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`goals ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h1>Fabien VITRAT</h1>
          <h2>MES OBJECTIFS</h2>
        </div>
        
        <div className="goals-grid">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="goal-card"
              style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
            >
              <div className="goal-image-container">
                <Image 
                  src={goal.image}
                  alt={goal.titre} 
                  className="goal-image"
                  fill
                />
                <div className="goal-overlay" style={{ backgroundColor: `${goal.color}CC` }}>
                  <h3>{goal.titre}</h3>
                </div>
              </div>
              <div className="goal-content">
                {goal.textes.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}