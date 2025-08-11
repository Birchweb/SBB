"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Maria van der Berg',
      company: 'Technisch Installatiebedrijf Berg BV',
      role: 'Directeur-eigenaar',
      content: 'De ondersteuning bij onze reorganisatie was precies wat we nodig hadden. Praktisch, betrokken en zonder onnodige complexiteit. Onze medewerkers voelden zich gehoord en het proces verliep soepel.',
      rating: 5,
      industry: 'Technische installaties'
    },
    {
      id: 2,
      name: 'Jan Koster',
      company: 'Koster Logistiek',
      role: 'Managing Director',
      content: 'Tijdens een moeilijke periode met personeelstekorten heeft Support binnen bereik ons fantastisch geholpen. De interim-manager sprong direct in en zorgde voor stabiliteit. Echt een aanrader.',
      rating: 5,
      industry: 'Logistiek & Transport'
    },
    {
      id: 3,
      name: 'Sandra Willems',
      company: 'Willems Adviesgroep',
      role: 'Partner',
      content: 'De coaching heeft mij enorm geholpen in mijn leiderschapsontwikkeling. De persoonlijke aanpak en praktische tips hebben direct impact gehad op mijn effectiviteit als manager.',
      rating: 5,
      industry: 'Professionele dienstverlening'
    },
    {
      id: 4,
      name: 'Peter de Vries',
      company: 'De Vries Productie BV',
      role: 'Operationeel Manager',
      content: 'Het projectmanagement voor onze kwaliteitscertificering was uitstekend. Alles werd helder gecommuniceerd en we haalden alle deadlines. Precies zoals beloofd: resultaatgericht en zonder ruis.',
      rating: 5,
      industry: 'Productie & Manufacturing'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
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
            Wat Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek hoe we andere MKB-ondernemers hebben geholpen bij hun uitdagingen.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-sky-200 mb-6" />
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-heading text-lg font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sky-700 font-medium">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.company}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-full">
                    {currentTestimonial.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-sky-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;