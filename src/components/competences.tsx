'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import HTML from '@/public/logo/html5.png';
import CSS from '@/public/logo/css3.png';
import JavaScript from '@/public/logo/js.png';
import Python from '@/public/logo/python.png';
import Java from '@/public/logo/java.png';
import React from '@/public/logo/react.png';
import Word from '@/public/logo/word.png';
import Excel from '@/public/logo/excel.png';    
import PowerPoint from '@/public/logo/power.png';
import OneNote from '@/public/logo/onenote.png'
import Photoshop from '@/public/logo/photoshop.png';
import Visual from '@/public/logo/visual.png'

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
        { name: 'HTML5', image: HTML, level: 90 },
        { name: 'CSS3', image: CSS, level: 85 },
        { name: 'JavaScript', image: JavaScript, level: 80 },
        { name: 'Python', image: Python, level: 75 },
        { name: 'Java', image: Java, level: 70 },
        { name: 'React', image: React, level: 75 }
    ];

    const tools = [
        { name: 'Microsoft Word', image: Word, level: 95 },
        { name: 'Microsoft Excel', image: Excel, level: 85 },
        { name: 'PowerPoint', image: PowerPoint, level: 90 },
        { name: 'OneNote', image: OneNote, level: 80 },
        { name: 'Visual Studio Code', image: Visual, level: 85 },
        { name: 'Photoshop', image: Photoshop, level: 70 }
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
                        {languages.map((skill, index) => (
                            <div 
                                key={index} 
                                className="skill-card"
                                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                            >
                                <div className="skill-icon">
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        width={50}
                                        height={50}
                                    />
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
                        ))}
                    </div>

                    <div className={`skills-grid ${activeTab === 'tools' ? 'active' : ''}`}>
                        {tools.map((tool, index) => (
                            <div 
                                key={index} 
                                className="skill-card"
                                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                            >
                                <div className="skill-icon">
                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        width={50}
                                        height={50}
                                    />
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}