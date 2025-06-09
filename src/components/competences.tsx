'use client';

import Image from 'next/image';
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
    return (
        <section className='competences'>
            <div className="container">
                <div className="section-title">
                    <h1>Fabien VITRAT</h1>
                    <h2>MES COMPETENCES</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 all">
                        <h3>LANGAGES INFORMATIQUES</h3>
                        <div className="langages">
                            <div className="skills-box" >
                                <ul className="skills-list">
                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">HTML5</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={HTML}
                                                    alt='HTML'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">CSS3</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={CSS}
                                                    alt='CSS'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">JavaScript</div>
                                            <div className="card-icon">
                                                <Image
                                                    src={JavaScript}
                                                    alt='JavaScript '
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">Python</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={Python}
                                                    alt='Python'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">Java</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={Java}
                                                    alt='Java'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">React</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={React}
                                                    alt='React'
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h3>OUTILS</h3>
                        <div className="langages">
                            <div className="skills-box" >
                                <ul className="skills-list">
                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">HTML5</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={Word}
                                                    alt='Word'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">CSS3</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={Excel}
                                                    alt='Excel'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">JavaScript</div>
                                            <div className="card-icon">
                                                <Image
                                                    src={PowerPoint}
                                                    alt='PowerPoint '
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">Python</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={OneNote}
                                                    alt='OneNote'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">Java</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={Visual}
                                                    alt='Visual studio code'
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card">
                                            <div className="tooltip">React</div>

                                            <div className="card-icon">
                                                <Image
                                                    src={Photoshop}
                                                    alt='Photoshop'
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}