'use client';

import Image from 'next/image';
import Ingenieur from '@/public/ingenieur.jpg';
import Passions from '@/public/passions.jpg';
import Etudes from '@/public/etudes.jpg';
import Experiences from '@/public/voyage.jpg';

const valeurs = [
  {
    titre: 'ETUDES',
    image: Etudes,
    textes: [
      "Intégrer une classe préparatoire scientifique",
      'Réaliser le concours des grandes écoles d’ingénieurs'
    ]
  },
  {
    titre: "INGENIEUR",
    image: Ingenieur,
    textes: [
      'Contribuer des solutions innovantes',
      'Obtenir un diplôme d’ingénieur'
    ]
  },
  {
    titre: 'PASSIONS',
    image: Passions,
    textes: [
      'Jeux vidéo, sport, photographie et voyages',
      'Apprendre de nouvelles choses et m’épanouir'
    ]
  },
  {
    titre: 'EXPERIENCES',
    image: Experiences,
    textes: [
      'Explorer le monde',
      "Ressentir l'adrénaline",
    ]
  }
];

export default function Goals() {
  return (
    <section className="goals">
        <div className="container">
            <div className="section-title">
                <h1>Fabien VITRAT</h1>
                <h2>MES OBJECTIFS</h2>
            </div>
            <div className="row">
                <div className="goal">
                    {valeurs.map((valeur, index) => (
                        <div className="goal-item" key={index}>
                            <div className="image-container">
                                <Image 
                                    src={valeur.image}
                                    alt={valeur.titre} 
                                    className='img-fluid'
                                />
                                <div className="overlay">
                                    <span>{valeur.titre}</span>
                                </div>
                            </div>
                            <div className="goal-text">
                                {valeur.textes.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
