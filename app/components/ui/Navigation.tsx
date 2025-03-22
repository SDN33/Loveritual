'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/comment-ca-marche', label: 'Comment ça marche' },
    { href: '/formules', label: 'Nos formules' },
    { href: '/exemples', label: 'Exemples de box' },
    { href: '/temoignages', label: 'Témoignages' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="LoveRitual Logo"
              width={150}
              height={40}
              className="h-20 w-auto"
            />
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#7D0633] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/connexion"
              className="text-[#7D0633] font-medium hover:text-[#7D0633]/80"
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="btn-primary"
            >
              S'inscrire
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#7D0633] hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/connexion"
                className="block px-3 py-2 text-base font-medium text-[#7D0633] hover:text-[#7D0633]/80 hover:bg-gray-50 rounded-md"
              >
                Connexion
              </Link>
              <Link
                href="/inscription"
                className="block px-3 py-2 text-base font-medium text-white bg-[#7D0633] hover:bg-[#7D0633]/90 rounded-md"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 