"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Marie & Thomas",
      position: "Abonnés depuis 1 an",
      icon: "👩‍❤️‍👨",
      iconBg: "#FFE4EF",
      quote: "LoveRitual a transformé notre façon de passer du temps ensemble. Chaque box est une surprise qui nous fait sortir de notre routine."
    },
    {
      name: "Sophie & Lucas",
      position: "Abonnés depuis 6 mois",
      icon: "👩‍❤️‍💋‍👨",
      iconBg: "#F0F8FF",
      quote: "Nous attendons notre box avec impatience chaque mois. Les activités sont toujours originales et adaptées à notre couple."
    },
    {
      name: "Emma & Julien",
      position: "Abonnés depuis 3 mois",
      icon: "👫",
      iconBg: "#F0FFF4",
      quote: "Ces box nous ont aidés à redécouvrir notre complicité après la naissance de notre enfant. Un vrai moment pour nous retrouver."
    },
    {
      name: "Alex & Sam",
      position: "Abonnés depuis 8 mois",
      icon: "👩‍❤️‍👩",
      iconBg: "#FFF0F5",
      quote: "Les box LoveRitual sont inclusives et parfaitement adaptées à tous les couples. Une découverte mensuelle que nous adorons partager."
    },
    {
      name: "Mathieu & Kevin",
      position: "Abonnés depuis 4 mois",
      icon: "👨‍❤️‍👨",
      iconBg: "#F5F0FF",
      quote: "Des moments de qualité garantis chaque mois. LoveRitual nous aide à créer des souvenirs précieux dans notre relation."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7D0633] mb-6">
            Ce que disent nos abonnés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des couples épanouis qui partagent leur expérience
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFF8FA] p-8 rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div 
                className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-4xl"
                style={{ backgroundColor: testimonials[activeIndex].iconBg }}
              >
                {testimonials[activeIndex].icon}
              </div>
              <div>
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </blockquote>
                <div className="font-bold text-[#7D0633]">{testimonials[activeIndex].name}</div>
                <div className="text-gray-500">{testimonials[activeIndex].position}</div>
              </div>
            </div>
          </motion.div>

          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#7D0633] hover:bg-[#FFF8FA] transition-colors"
            aria-label="Témoignage précédent"
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-16 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#7D0633] hover:bg-[#FFF8FA] transition-colors"
            aria-label="Témoignage suivant"
          >
            →
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? "bg-[#7D0633]" : "bg-gray-300"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}