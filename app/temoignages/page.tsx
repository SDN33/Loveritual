export default function Temoignages() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Témoignages clients
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez ce que nos clients pensent de LoveRitual
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Témoignage 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/images/testimonial-1.jpg" alt="Sophie" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold text-[#7D0633]">Sophie et Marc</h3>
                <p className="text-gray-500">Abonnés depuis 6 mois</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"LoveRitual a ravivé la flamme dans notre couple. Chaque mois, c'est l'excitation de découvrir notre nouvelle box et de partager ces moments ensemble."</p>
          </div>
          
          {/* Témoignage 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/images/testimonial-2.jpg" alt="Julie" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold text-[#7D0633]">Julie et Thomas</h3>
                <p className="text-gray-500">Abonnés depuis 1 an</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"Après 10 ans de mariage, nous avions besoin de nouveauté. LoveRitual nous a aidés à redécouvrir notre complicité et à créer de nouveaux souvenirs ensemble."</p>
          </div>
          
          {/* Autres témoignages */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/images/testimonial-3.jpg" alt="Alexandre" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold text-[#7D0633]">Alexandre et Paul</h3>
                <p className="text-gray-500">Abonnés depuis 3 mois</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"Nous avons adoré chaque box reçue jusqu'à présent. Le service client est excellent et les produits sont de grande qualité. Merci LoveRitual !"</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/images/testimonial-4.jpg" alt="Léa" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold text-[#7D0633]">Léa et Sarah</h3>
                <p className="text-gray-500">Abonnées depuis 8 mois</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"Ce qui nous plaît le plus avec LoveRitual, c'est la surprise chaque mois et la qualité des produits sélectionnés. Ça nous a vraiment aidées à prendre du temps pour nous."</p>
          </div>
        </div>
      </div>
    </main>
  );
}