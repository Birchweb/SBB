"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Voor welke bedrijven zijn jullie diensten geschikt?',
      answer: 'Onze diensten zijn specifiek gericht op het midden- en kleinbedrijf (MKB). We werken met bedrijven van 10 tot 250 medewerkers in verschillende sectoren, van productie tot dienstverlening. Of je nu een familiebedrijf bent dat wil professionaliseren of een groeiende onderneming met nieuwe uitdagingen, wij kunnen je ondersteunen.'
    },
    {
      question: 'Hoe snel kunnen jullie starten met een project?',
      answer: 'Afhankelijk van de urgentie en complexiteit van je vraagstuk kunnen we vaak binnen een week starten. Voor interim-management kunnen we in acute situaties zelfs binnen 24-48 uur beschikbaar zijn. We plannen altijd eerst een vrijblijvend gesprek om je situatie te begrijpen en de beste aanpak te bepalen.'
    },
    {
      question: 'Wat onderscheidt Support binnen bereik van andere consultants?',
      answer: 'Onze aanpak is praktisch, persoonlijk en zonder onnodige ruis. We geloven niet in dure rapporten die in de kast verdwijnen, maar in hands-on begeleiding die direct resultaat oplevert. Onze consultant heeft ruime ervaring in het MKB en begrijpt de specifieke uitdagingen van ondernemers.'
    },
    {
      question: 'Hoe zit het met de kosten en facturering?',
      answer: 'We werken transparant met vaste uurtarieven of projectprijzen, afhankelijk van wat het beste past bij je situatie. Je krijgt altijd vooraf een duidelijke offerte zonder verborgen kosten. Voor langere projecten kunnen we werken met maandelijkse facturering om de cashflow te spreiden.'
    },
    {
      question: 'Kunnen jullie ook op locatie werken?',
      answer: 'Absoluut! We werken door heel Nederland en komen graag op locatie. Vooral bij interim-management en teamtrainingen is aanwezigheid op de werkvloer essentieel. Voor adviestrajecten combineren we vaak locatiebezoeken met online sessies voor maximale efficiëntie.'
    },
    {
      question: 'Wat gebeurt er na afloop van een project?',
      answer: 'We zorgen altijd voor een goede overdracht en nazorg. Je krijgt concrete aanbevelingen en tools om zelfstandig verder te kunnen. Daarnaast blijven we beschikbaar voor vragen en kunnen we afspraken maken voor periodieke evaluaties om de voortgang te monitoren.'
    },
    {
      question: 'Hoe meten jullie het succes van een project?',
      answer: 'Aan het begin van elk project stellen we samen concrete, meetbare doelstellingen vast. Dit kunnen KPI\'s zijn zoals medewerkertevredenheid, productiviteit of financiële resultaten. We evalueren regelmatig de voortgang en passen waar nodig de aanpak aan om de doelen te behalen.'
    },
    {
      question: 'Kunnen jullie helpen bij acute crisissituaties?',
      answer: 'Ja, we hebben ervaring met crisissituaties zoals plotseling vertrek van sleutelpersonen, conflicten in het team of acute financiële uitdagingen. In dergelijke gevallen kunnen we snel schakelen en binnen 24 uur een plan van aanpak presenteren om de situatie te stabiliseren.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier vind je antwoorden op de meest gestelde vragen over onze diensten en werkwijze.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-heading text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-sky-50 rounded-2xl"
        >
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
            Staat je vraag er niet bij?
          </h3>
          <p className="text-gray-600 mb-6">
            Neem gerust contact met ons op. We beantwoorden graag al je vragen in een persoonlijk gesprek.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 transition-colors duration-200"
          >
            Stel je vraag
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;