"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Target, MessageCircle, Clock, Award } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: 'HR & Personeelsbeleid',
      description: 'Ondersteuning bij personeelsvraagstukken, van werving t ontwikkeling en conflictbemiddeling.',
      features: ['Werving & selectie', 'Personeelsontwikkeling', 'Conflictbemiddeling']
    },
    {
      icon: TrendingUp,
      title: 'Interim Management',
      description: 'Tijdelijke invulling van managementposities tijdens transitieperiodes of bij acute knelpunten.',
      features: ['Tijdelijk management', 'Transitiebegeleiding', 'Crisismanagement']
    },
    {
      icon: Target,
      title: 'Strategisch Advies',
      description: 'Praktische begeleiding bij strategische beslissingen en organisatieveranderingen.',
      features: ['Strategische planning', 'Organisatieontwikkeling', 'Procesoptimalisatie']
    },
    {
      icon: MessageCircle,
      title: 'Coaching & Training',
      description: 'Persoonlijke coaching voor ondernemers en training voor teams om beter te presteren.',
      features: ['Leiderschapscoaching', 'Teamtraining', 'Communicatietraining']
    },
    {
      icon: Clock,
      title: 'Projectmanagement',
      description: 'Begeleiding van complexe projecten van start t finish met focus op resultaat.',
      features: ['Projectplanning', 'Risicomanagement', 'Stakeholder management']
    },
    {
      icon: Award,
      title: 'Kwaliteitsverbetering',
      description: 'Implementatie van kwaliteitssystemen en continue verbetering van bedrijfsprocessen.',
      features: ['Proces analyse', 'Kwaliteitssystemen', 'Continue verbetering']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mijn Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Of je nu tijdelijke versterking zoekt of een frisse blik op je organisatie, ik help je praktisch en doelgericht verder.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-sky-700" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-sky-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Niet zeker welke dienst het beste past?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Laten we samen kijken naar uw specifieke situatie. 
            In een vrijblijvend gesprek bespreken we uw uitdagingen en mogelijke oplossingen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 transition-colors duration-200"
          >
            Plan een gesprek
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;