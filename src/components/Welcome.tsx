'use client';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="welcome accueil">
      <div className="welcome-overlay"></div>
      <div className={`welcome-content ${isVisible ? 'visible' : ''}`}>
        <div className="welcome-text">
          <h1 className="welcome-title">
            <span className="title-line">FABIEN</span>
            <span className="title-line">VITRAT</span>
          </h1>
          <div className="welcome-subtitle">
            <span className="subtitle-item">ÉTUDIANT</span>
            <span className="subtitle-separator">•</span>
            <span className="subtitle-item">PASSIONNÉ</span>
            <span className="subtitle-separator">•</span>
            <span className="subtitle-item">DÉVELOPPEUR</span>
          </div>
          <p className="welcome-description">
            Découvrez mon univers à travers mes projets, mes valeurs et mes aspirations
          </p>
        </div>
      </div>
      
      <button className="scroll-indicator" onClick={scrollToNext}>
        <ChevronDown size={32} />
        <span>Découvrir</span>
      </button>
    </section>
  );
}