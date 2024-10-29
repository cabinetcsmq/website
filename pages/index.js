import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Cabinet de Santé Mentale</title>
        <meta name="description" content="Cabinet professionnel de santé mentale - Accompagnement personnalisé et bienveillant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-4 border-primary-400 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Thérapie Individuelle</h3>
              <p className="text-gray-600">
                Un accompagnement personnalisé pour surmonter vos défis personnels et retrouver votre équilibre.
              </p>
            </div>
            <div className="border-t-4 border-primary-400 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Thérapie de Couple</h3>
              <p className="text-gray-600">
                Retrouvez l'harmonie dans votre relation et renforcez vos liens avec votre partenaire.
              </p>
            </div>
            <div className="border-t-4 border-primary-400 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Accompagnement Familial</h3>
              <p className="text-gray-600">
                Améliorez la communication et renforcez les liens au sein de votre famille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section id="apropos" className="py-12 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">À Propos</h2>
              <p className="text-gray-600 mb-4">
                Notre cabinet offre un espace sécurisant pour votre développement personnel 
                et votre bien-être mental. Avec une approche intégrative et bienveillante, 
                nous vous accompagnons dans votre cheminement vers un mieux-être.
              </p>
              <p className="text-gray-600 mb-4">
                Notre approche s'adapte à vos besoins spécifiques pour vous accompagner 
                au mieux dans votre parcours thérapeutique.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-64 rounded-lg shadow-lg">
              {/* Placeholder pour photo ou illustration */}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
