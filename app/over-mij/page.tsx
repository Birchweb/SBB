'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import Image from 'next/image';

// Deze mapping verbindt de string die in Strapi is opgeslagen met het juiste React-component
const iconMap = {
  Target: Target,
  Heart: Heart,
  Users: Users,
  Award: Award,
};

// Definieer het type voor de data die uit de Strapi-API komt
type StrapiCompanyValue = {
  id: number;
  icon: 'Target' | 'Heart' | 'Users' | 'Award'; // Specificeer de mogelijke icoon-waarden
  title: string;
  description: string;
};

// Definieer het type voor de geformatteerde waarden in onze state
type FormattedCompanyValue = {
  id: number;
  icon: React.ElementType; // Specificeer dat dit een React-component is
  title: string;
  description: string;
};

const AboutPage = () => {
  // Gebruik de FormattedCompanyValue type voor de state
  const [values, setValues] = useState<FormattedCompanyValue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const apiUrl = 'https://supreme-success-51183b1d0a.strapiapp.com/api/company-values';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Fout bij het ophalen van de waarden: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Nu vertellen we TypeScript dat `item` de `StrapiCompanyValue` structuur heeft
        const formattedValues: FormattedCompanyValue[] = data.data.map((item: StrapiCompanyValue) => ({
          id: item.id,
          icon: iconMap[item.icon],
          title: item.title,
          description: item.description,
        }));
        
        setValues(formattedValues);
      } catch (e) {
        setError((e as Error).message);
        console.error("Fout bij het ophalen van de waarden:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchValues();
  }, []);

  // De expertise data is nog steeds hardcoded
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-xl text-gray-600">Waarden laden...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-red-500">Fout: {error}</p>
      </div>
    );
  }
  
  // Als er geen waarden zijn, tonen we een melding
  if (values.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Geen waarden gevonden. Controleer de Strapi-content.</p>
      </div>
    );
  }

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
              Betrokken, daadkrachtig en oplossingsgericht – dat is wie ik ben en hoe ik werk.
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
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center relative">
                <Image
                  src="/images/about.jpeg" 
                  alt="Beschrijving van de afbeelding"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
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
            {values.map((value) => {
              // Vertel TypeScript dat dit een component is
              const IconComponent: React.ElementType = value.icon;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {/* Nu wordt IconComponent correct als een component gerenderd */}
                    {IconComponent && <IconComponent className="w-8 h-8 text-sky-700" />}
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
      <section className="bg-sky-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Laten we kennismaken
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Benieuwd hoe ik uw organisatie kan helpen? Ik ga graag met u in gesprek.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
