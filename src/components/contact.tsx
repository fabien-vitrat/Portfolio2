import Image from 'next/image';

export default function Contact() {
  return (
    <section className="contact">
        <div className="container">
            <div className="section-title">
                <h1>Fabien VITRAT</h1>
                <h2>MES VALEURS</h2>
            </div>
            <div className="row align-items-center">
        {/* Colonne gauche - Infos contact */}
        <div className="col-md-6">
          <h1>
            <span className="fadedText">FABIEN VITRAT</span>{' '}
            <strong className="text-dark">CONTACT</strong>
          </h1>
          <ul className="list-unstyled mt-4">
            <li className="mb-2">
              <strong>E-MAIL</strong> &nbsp; vitrafabien@gmail.com
            </li>
            <li className="mb-2">
              <strong>LINKEDIN</strong> &nbsp; Fabien VITRAT
            </li>
            <li className="mb-2">
              <strong>GIT-HUB</strong> &nbsp; Fabien VITRAT
            </li>
            <li className="mb-2">
              <strong>VILLE</strong> &nbsp; Marseille
            </li>
          </ul>
        </div>

        {/* Colonne droite - Image de la carte */}
        <div className="col-md-6 position-relative">
          <div className="mapWrapper w-100 h-100">
          
            <Image
              src=""
              alt="Carte de l'Europe"
              layout="fill"
              objectFit="cover"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
        </div>
    </section>
  );
}
