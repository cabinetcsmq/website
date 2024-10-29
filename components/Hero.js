import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Votre Bien-être Mental est Notre Priorité
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Un accompagnement professionnel et bienveillant pour votre épanouissement personnel. 
            Découvrez un espace sécurisant pour votre développement.
          </p>
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-3 rounded-md text-lg hover:opacity-90 transition-all shadow-lg">
              Première Consultation
            </button>
            <button className="bg-white text-primary-500 border-2 border-primary-500 px-8 py-3 rounded-md text-lg hover:bg-primary-50 transition-all">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
      
      {/* Caractéristiques */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise Professionnelle</h3>
            <p className="text-gray-600">Une approche personnalisée basée sur des méthodes éprouvées</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Espace Bienveillant</h3>
            <p className="text-gray-600">Un environnement sécurisant pour votre développement personnel</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Suivi Personnalisé</h3>
            <p className="text-gray-600">Un accompagnement adapté à vos besoins spécifiques</p>
          </div>
        </div>
      </div>
    </section>
  );
}
