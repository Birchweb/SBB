"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BookOpen, Briefcase } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Target,
      title: 'Advies & Consultancy',
      description: 'Strategische ondersteuning bij complexe vraagstukken. Van organisatieontwikkeling tot procesoptimalisatie.',
      features: ['Organisatieontwikkeling', 'Procesoptimalisatie', 'Strategische planning', 'Verandermanagement']
    },
    {
      icon: Briefcase,
      title: 'Interim Management',
      description: 'Tijdelijke invulling van managementfuncties tijdens transitieperiodes of bij acute knelpunten.',
      features: ['Tijdelijk management', 'Crisismanagement', 'Transitiebegeleiding', 'Teamleiderschap']
    },
    {
      icon: BookOpen,
      title: 'Coaching & Training',
      description: 'Persoonlijke ontwikkeling van medewerkers en teams voor duurzame groei en betere prestaties.',
      features: ['Leiderschapsontwikkeling', 'Teamcoaching', 'Communicatietraining', 'Persoonlijke coaching']
    },
    {
      icon: Users,
      title: 'Projectbegeleiding',
      description: 'End-to-end begeleiding van complexe projecten met focus op resultaat en stakeholder management.',
      features: ['Projectmanagement', 'Stakeholder management', 'Risicobeheer', 'Kwaliteitsborging']
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
              Onze Diensten
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Praktische en resultaatgerichte ondersteuning voor uw management- en personeelsvraagstukken. 
              Betrokken, persoonlijk en zonder onnodige ruis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-blue-700" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om samen te werken?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Laten we in gesprek gaan over hoe ik uw organisatie kan ondersteunen bij uw uitdagingen.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Neem contact op
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;