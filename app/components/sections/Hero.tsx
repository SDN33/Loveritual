"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-40 pb-16 md:pb-24 px-4 overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 -z-10 bg-[#FFF8FA]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFE4EF] opacity-60 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-[#FFE4EF] opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Contenu texte */}
        <div className="text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7D0633] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ravivez la flamme dans votre couple
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Recevez chaque mois une box surprise conçue pour renforcer votre complicité et créer des moments <br/>d&apos;intimité inoubliables
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#formules" 
              className="btn-primary"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Découvrir nos formules
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-white"
              />
            </a>
            <a href="/comment-ca-marche" className="btn-secondary">Comment ça marche</a>
          </motion.div>
        </div>
        
        {/* Image hero */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
            <div className="relative h-[400px] md:h-[400px] shadow-xl rounded-lg overflow-hidden">
            <Image 
              src="/images/hero-couple.webp" 
              alt="Couple ouvrant une Love Ritual Box" 
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 568px) 100vw, 50vw"
            />
            </div>
          
          {/* Badge flottant */}
          <motion.div 
            className="absolute -top-6 -right-6 md:top-10 md:-right-12 bg-white p-3 rounded-lg shadow-lg"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-[#7D0633] font-bold">
              <span className="block text-3xl">+2000</span>
              <span className="text-sm">couples épanouis</span>
            </p>
          </motion.div>
          
          {/* Badge flottant */}
          <motion.div 
            className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white p-3 rounded-lg shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-1">★★★★★</span>
              <span className="text-sm font-bold">4.9/5</span>
            </div>
            <p className="text-xs text-gray-600">basé sur 327 avis</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}