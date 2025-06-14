'use client';

import { useEffect, useState } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

export default function Competences() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('languages');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector('.competences');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const languages = [
        { name: 'HTML5', icon: Globe, level: 90 },
        { name: 'CSS3', icon: Palette, level: 85 },
        { name: 'JavaScript', icon: Code, level: 80 },
        { name: 'Python', icon: Code, level: 75 },
        { name: 'Java', icon: Code, level: 70 },
        { name: 'React', icon: Code, level: 75 }
    ];

    const tools = [
        { name: 'Microsoft Word', icon: Globe, level: 95 },
        { name: 'Microsoft Excel', icon: Database, level: 85 },
        { name: 'PowerPoint', icon: Globe, level: 90 },
        { name: 'OneNote', icon: Globe, level: 80 },
        { name: 'Visual Studio Code', icon: Code, level: 85 },
        { name: 'Photoshop', icon: Palette, level: 70 }
    ];

    return (
        <section className={`competences ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="section-title">
                    <h1>Fabien VITRAT</h1>
                    <h2>MES COMPÉTENCES</h2>
                </div>
                
                <div className="competences-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'languages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('languages')}
                    >
                        Langages de programmation
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tools')}
                    >
                        Outils & Logiciels
                    </button>
                </div>

                <div className="competences-content">
                    <div className={`skills-grid ${activeTab === 'languages' ? 'active' : ''}`}>
                        {languages.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="skill-card"
                                    style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                                >
                                    <div className="skill-icon">
                                        <IconComponent size={32} />
                                    </div>
                                    <h4>{skill.name}</h4>
                                    <div className="skill-progress">
                                        <div 
                                            className="skill-progress-bar"
                                            style={{ '--width': `${skill.level}%` } as React.CSSProperties}
                                        ></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`skills-grid ${activeTab === 'tools' ? 'active' : ''}`}>
                        {tools.map((tool, index) => {
                            const IconComponent = tool.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="skill-card"
                                    style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                                >
                                    <div className="skill-icon">
                                        <IconComponent size={32} />
                                    </div>
                                    <h4>{tool.name}</h4>
                                    <div className="skill-progress">
                                        <div 
                                            className="skill-progress-bar"
                                            style={{ '--width': `${tool.level}%` } as React.CSSProperties}
                                        ></div>
                                    </div>
                                    <span className="skill-percentage">{tool.level}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}