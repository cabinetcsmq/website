import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary-500">Cabinet de Santé Mentale</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-primary-500">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-primary-500">Services</a>
            <a href="#apropos" className="text-gray-700 hover:text-primary-500">À Propos</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-500">Contact</a>
            <a href="#blog" className="text-gray-700 hover:text-primary-500">Blog</a>
            <button className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-all">
              Prendre RDV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
