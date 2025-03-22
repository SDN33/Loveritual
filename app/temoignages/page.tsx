import Image from 'next/image';

export default function Temoignages() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Témoignages de nos clients
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez ce que nos abonnés pensent de LoveRitual
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Témoignage 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
                <Image 
                  src="/images/testimonial-1.jpg" 
                  alt="Marie et Thomas"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#7D0633]">Marie & Thomas</h3>
                <p className="text-gray-500">Abonnés depuis 1 an</p>
              </div>
            </div>
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <blockquote className="text-gray-700 italic mb-4">
              &quot;LoveRitual a transformé notre façon de passer du temps ensemble. Chaque box est une surprise qui nous fait sortir de notre routine. C&apos;est devenu notre rendez-vous mensuel préféré!&quot;
            </blockquote>
            <p className="text-gray-500 text-sm">15 janvier 2024</p>
          </div>
          
          {/* Témoignage 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
                <Image 
                  src="/images/testimonial-2.jpg" 
                  alt="Sophie et Lucas"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#7D0633]">Sophie & Lucas</h3>
                <p className="text-gray-500">Abonnés depuis 6 mois</p>
              </div>
            </div>
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <blockquote className="text-gray-700 italic mb-4">
              &quot;Nous attendons notre box avec impatience chaque mois. Les activités sont toujours originales et adaptées à notre couple. Un excellent investissement pour notre relation!&quot;
            </blockquote>
            <p className="text-gray-500 text-sm">28 février 2024</p>
          </div>
          
          {/* Témoignage 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
                <Image 
                  src="/images/testimonial-3.jpg" 
                  alt="Emma et Julien"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#7D0633]">Emma & Julien</h3>
                <p className="text-gray-500">Abonnés depuis 3 mois</p>
              </div>
            </div>
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <blockquote className="text-gray-700 italic mb-4">
              &quot;Ces box nous ont aidés à redécouvrir notre complicité après la naissance de notre enfant. C&apos;est un vrai moment pour nous retrouver.&quot;
            </blockquote>
            <p className="text-gray-500 text-sm">5 mars 2024</p>
          </div>
        </div>
        
        {/* Plus de témoignages */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {[
            {
              name: "Alexandre & Julie",
              duration: "2 mois",
              rating: 5,
              text: "Excellent concept, nous avons redécouvert le plaisir de faire des activités ensemble!"
            },
            {
              name: "Philippe & Clara",
              duration: "8 mois",
              rating: 5,
              text: "La qualité des produits est au rendez-vous, et les activités sont vraiment bien pensées."
            },
            {
              name: "Nicolas & Laura",
              duration: "4 mois",
              rating: 4,
              text: "Très bonne expérience globale, quelques activités moins adaptées à nos goûts mais l'ensemble est très satisfaisant."
            },
            {
              name: "Mathieu & Camille",
              duration: "1 an",
              rating: 5,
              text: "Après un an d'abonnement, nous sommes toujours aussi enthousiastes à l'ouverture de notre box mensuelle!"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#7D0633]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-[#7D0633]">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Abonnés depuis {item.duration}</p>
                </div>
                <div className="text-yellow-400">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5-item.rating)}
                </div>
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/inscription" className="btn-primary">
            Rejoindre la communauté
          </a>
        </div>
      </div>
    </main>
  );
}