import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // Utiliser une photo aléatoire de Unsplash pour le fond
  const randomHeroImage = "./images/hero-bg.webp";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F2C4CE] to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={randomHeroImage}
          alt="Couple déballant une box LoveRitual"
          fill
          className="object-cover opacity-20"
          priority
          unoptimized // Pour permettre l'utilisation d'URLs externes
        />
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-16 text-center">
        <div className="absolute top-8 right-8 bg-[#7D0633] text-white rounded-full py-2 px-6 transform rotate-3">
          <p className="text-lg font-semibold">-50% sur votre première box</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#7D0633] mb-6">
          Ravivez votre flamme chaque mois
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
          Des box personnalisées livrées à votre porte pour créer des moments inoubliables à deux
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/inscription"
            className="btn-primary text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all"
          >
            Commencez votre rituel d'amour
          </Link>
          <Link 
            href="/comment-ca-marche"
            className="btn-secondary text-lg"
          >
            Découvrir comment ça marche
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-600 font-medium">
            Déjà plus de 10 000 couples conquis
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image 
                    src={`https://source.unsplash.com/random/40x40/?face,portrait&sig=${i}`}
                    alt={`Utilisateur ${i}`}
                    width={40}
                    height={40}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}