"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@supportbinnenbereik.nl',
      description: 'Stuur een email voor vragen of afspraken'
    },
    {
      icon: Phone,
      title: 'Telefoon',
      value: '+31 6 12 34 56 78',
      description: 'Bel voor directe ondersteuning'
    },
    {
      icon: MapPin,
      title: 'Locatie',
      value: 'Nederland',
      description: 'Werkzaam door heel Nederland'
    },
    {
      icon: Clock,
      title: 'Bereikbaarheid',
      value: 'Ma-Vr 9:00-17:00',
      description: 'Buiten kantooruren op afspraak'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Heeft u vragen of wilt u een vrijblijvend gesprek plannen? 
              Ik ga graag met u in gesprek over uw uitdagingen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-700 font-medium mb-2">
                    {info.value}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Stuur een bericht
              </h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
                Waarom contact opnemen?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Vrijblijvend gesprek</h4>
                    <p className="text-gray-600">Een eerste kennismaking zonder verplichtingen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Snelle respons</h4>
                    <p className="text-gray-600">Binnen 24 uur reactie op uw bericht</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Persoonlijke aanpak</h4>
                    <p className="text-gray-600">Elke situatie is uniek en verdient maatwerk</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Praktische oplossingen</h4>
                    <p className="text-gray-600">Focus op concrete resultaten voor uw organisatie</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Tip:</strong> Beschrijf kort uw situatie in het contactformulier, 
                  dan kan ik me beter voorbereiden op ons gesprek.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;