'use client';

export default function Values() {
    return (
        <section className='valeurs'>
            <div className="container">
                <div className="section-title">
                    <h1>Fabien VITRAT</h1>
                    <h2>MES VALEURS</h2>
                </div>
                <div className="all">
                    <div className="row gauche">
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-solid fa-hand-holding-heart"></i>
                                <h2>BIENVEILLANCE</h2>
                            </div>
                        </div>
                        <div className="col-6 description">
                            <p>Prends le temps d'écouter les autres</p>
                            <p>Participation à du bénévolat</p>
                        </div>
                    </div>
                    <div className="row droite">
                        <div className="col-6 description">
                            <p>Réalisation de projets en équipe</p>
                            <p>Bonne gestion et réalisation</p>
                        </div>
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-solid fa-people-group"></i>
                                <h2>TRAVAIL D’EQUIPE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gauche">
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-solid fa-handshake-angle"></i>
                                <h2>ENGAGEMENT</h2>
                            </div>
                        </div>
                        <div className="col-6 description">
                            <p>Donner du temps aux autres</p>
                            <p>Course de solidarité, Lourdes...</p>
                        </div>
                    </div>
                    <div className="row droite derniere">
                        <div className="col-6 description">
                            <p>Découvrir de nouvelles choses</p>
                            <p>Apprendre et voir de nouvelles choses</p>
                        </div>
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-regular fa-lightbulb"></i>
                                <h2>CURIOSITE</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="citation">
                    <p>"Les valeurs sont le sens que l'on choisit de donner à la vie."</p>
                    <p className="auteur">Jean-Paule Satres</p>
                </div>*/
                }
            </div>
        </section>

    )
}