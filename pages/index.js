import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabinet de Santé Mentale</title>
        <meta name="description" content="Cabinet professionnel de santé mentale - Accompagnement personnalisé et bienveillant" />
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
            {/* ... autres services ... */}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  )
}
