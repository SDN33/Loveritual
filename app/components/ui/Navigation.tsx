"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: '/comment-ca-marche', label: 'Comment ça marche' },
    { href: '/formules', label: 'Nos formules' },
    { href: '/exemples', label: 'Exemples de box' },
    { href: '/temoignages', label: 'Témoignages' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="LoveRitual Logo"
              width={150}
              height={40}
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#7D0633] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Boutons d'action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/connexion" 
              className="text-gray-700 hover:text-[#7D0633] transition-colors"
            >
              Connexion
            </Link>
            <Link 
              href="/inscription" 
              className="bg-[#7D0633] text-white px-4 py-2 rounded-lg hover:bg-[#66052A] transition-colors"
            >
              S'inscrire
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[#7D0633] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col space-y-2">
                  <Link 
                    href="/connexion" 
                    className="text-gray-700 hover:text-[#7D0633] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link 
                    href="/inscription" 
                    className="bg-[#7D0633] text-white px-4 py-2 rounded-lg hover:bg-[#66052A] transition-colors inline-block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    S'inscrire
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}