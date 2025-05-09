'use client';

import Image from 'next/image';
import Portrait from '@/public/portrait.jpeg';

export default function About() {
    return (
        <section className='about'>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-8 col-sm-12 content">
                        <div className="section-title">
                            <h1>Fabien VITRAT</h1>
                            <h2>A PROPOS DE MOI</h2>
                        </div>
                        <div className="row info">
                            <div className="col-lg-6">
                                <ul>
                                    <li><strong>Date de naissance :</strong> <span>1 mai 2007</span></li>
                                    <li><strong>Email :</strong> <span>vitratfabien@gmail.com</span></li>
                                    <li><strong>Téléphone :</strong> <span>+33 7 66 18 07 15</span></li>
                                    <li><strong>Ville :</strong> <span>Marseille, France</span></li>
                                </ul>
                            </div>
                            {/* Image visible seulement en mobile */}
                            <div className="portrait-mobile">
                                <Image 
                                    src={Portrait} 
                                    alt='Portrait'
                                    className='img-fluid'
                                />
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><strong>Age :</strong> <span>17 ans</span></li>
                                    <li><strong>Etablissement :</strong> <span>Lycée de Provence</span></li>
                                    <li><strong>Niveau :</strong> <span>Terminale</span></li>
                                    <li><strong>Langues :</strong> <span>Français, Espagnol, Anglais</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>Toujours à la recherche de nouvelles opportunités pour apprendre et évoluer, je m&apos;investis avec passion dans des projets variés. Curieux et déterminé, je m&apos;efforce de mêler rigueur, créativité et esprit d&apos;équipe pour relever chaque défi avec enthousiasme. À travers ce portfolio, je vous invite à plonger dans mon univers, façonné par mes passions, mes aspirations et mon ambition.</p>
                        </div>
                        <div className='passions'>
                            <p>SPORT</p>
                            <p>AUTOMOBILE</p>
                            <p>PHOTOGRAPHIE</p>
                            <p>VOYAGE</p>
                            <p>INFORMATIQUE</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 img">
                        <Image
                            src={Portrait}
                            alt='Portrait'
                            className='img-fluid'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}