"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Praktisch en resultaatgericht',
      description: 'Ik focus op concrete oplossingen die direct impact hebben op uw organisatie.'
    },
    {
      icon: Heart,
      title: 'Betrokken en persoonlijk',
      description: 'Elke samenwerking is uniek. Ik investeer in een persoonlijke relatie met mijn klanten.'
    },
    {
      icon: Users,
      title: 'Zonder onnodige ruis',
      description: 'Heldere communicatie en transparante werkwijze, zonder ingewikkelde processen.'
    }
  ];

  const expertise = [
    'Organisatieontwikkeling',
    'Verandermanagement',
    'Leiderschapsontwikkeling',
    'Teamdynamiek',
    'Procesoptimalisatie',
    'Strategische planning',
    'Interim management',
    'Coaching & mentoring'
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
              Over mij
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met meer dan 15 jaar ervaring in management en organisatieontwikkeling, 
              help ik MKB-bedrijven bij hun belangrijkste uitdagingen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Professional Photo</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Mijn verhaal
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Na jarenlange ervaring in verschillende managementfuncties bij zowel grote 
                  corporaties als MKB-bedrijven, besloot ik mijn expertise in te zetten als 
                  zelfstandig consultant.
                </p>
                <p>
                  Ik geloof sterk in de kracht van praktische oplossingen en persoonlijke betrokkenheid. 
                  Mijn aanpak is altijd gericht op duurzame resultaten en het versterken van teams 
                  en organisaties van binnenuit.
                </p>
                <p>
                  Door mijn brede ervaring in verschillende sectoren kan ik snel schakelen en 
                  effectieve oplossingen bieden voor complexe vraagstukken. Ik werk graag samen 
                  met ondernemers en managers die echt iets willen bereiken.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mijn kernwaarden
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deze waarden vormen de basis van mijn werkwijze en bepalen hoe ik met klanten samenwerk.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mijn expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Door de jaren heen heb ik expertise opgebouwd in verschillende disciplines.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Laten we kennismaken
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Benieuwd hoe ik uw organisatie kan helpen? Ik ga graag met u in gesprek.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Plan een gesprek
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;