import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Cabinet de Santé Mentale</h3>
            <p className="text-primary-100">
              Un accompagnement professionnel pour votre bien-être mental
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-primary-100 hover:text-white">Accueil</a></li>
              <li><a href="#services" className="text-primary-100 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-primary-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <p className="text-primary-100">
              Lundi - Vendredi: 9h - 19h<br />
              Samedi: Sur rendez-vous<br />
              Dimanche: Fermé
            </p>
          </div>
        </div>
        <div className="border-t border-primary-400 mt-8 pt-8 text-center">
          <p className="text-primary-100">
            © 2024 Cabinet de Santé Mentale. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
