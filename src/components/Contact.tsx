'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vitratfabien@gmail.com',
      link: 'mailto:vitratfabien@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 7 66 18 07 15',
      link: 'tel:+33766180715'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Marseille, France',
      link: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Fabien VITRAT',
      link: '#'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Fabien VITRAT',
      link: '#'
    }
  ];

  return (
    <section className={`contact ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h1>Fabien VITRAT</h1>
          <h2>CONTACT</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Restons en contact</h3>
              <p>
                N'hésitez pas à me contacter pour discuter de projets, 
                d'opportunités ou simplement pour échanger !
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a 
                    key={index}
                    href={info.link}
                    className="contact-item"
                    style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                  >
                    <div className="contact-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envoyez-moi un message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}