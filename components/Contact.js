import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-primary-500 mr-4" />
              <p className="text-gray-600">123 Rue de la Santé, 75000 Paris</p>
            </div>
            <div className="flex items-center mb-6">
              <Phone className="w-6 h-6 text-primary-500 mr-4" />
              <p className="text-gray-600">01 23 45 67 89</p>
            </div>
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-primary-500 mr-4" />
              <p className="text-gray-600">contact@cabinet-sante-mentale.fr</p>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-primary-500 mr-4" />
              <p className="text-gray-600">Lun-Ven: 9h-19h<br />Sur rendez-vous</p>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-primary-400 to-primary-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-all">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
