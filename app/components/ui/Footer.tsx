import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  produit: [
    { label: 'Comment ça marche', href: '/comment-ca-marche' },
    { label: 'Nos formules', href: '/formules' },
    { label: 'Exemples de box', href: '/exemples' },
    { label: 'Témoignages', href: '/temoignages' }
  ],
  entreprise: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Carrières', href: '/carrieres' },
    { label: 'Contact', href: '/contact' }
  ],
  aide: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Livraison', href: '/livraison' },
    { label: 'Retours', href: '/retours' },
    { label: 'Confidentialité', href: '/confidentialite' }
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/loveritual' },
    { label: 'Facebook', href: 'https://facebook.com/loveritual' },
    { label: 'Pinterest', href: 'https://pinterest.com/loveritual' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#7D0633] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.png"
                alt="LoveRitual Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6">
              LoveRitual vous aide à maintenir la flamme dans votre couple avec des box mensuelles personnalisées, livrées directement chez vous.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-bold text-lg mb-4">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.produit.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Aide</h3>
            <ul className="space-y-2">
              {footerLinks.aide.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} LoveRitual. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                CGV
              </Link>
              <Link
                href="/confidentialite"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 