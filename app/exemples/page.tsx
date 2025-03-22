import Image from 'next/image';

export default function Exemples() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Exemples de box LoveRitual
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez le contenu de nos box précédentes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemple de box */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative h-64">
                <Image 
                  src={`/images/box-exemple-${item}.jpg`} 
                  alt={`Box exemple ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#7D0633] mb-2">Box de {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'][item-1]} 2024</h3>
                <p className="text-gray-600 mb-4">Thème: {['Reconnexion', 'Saint-Valentin', 'Communication', 'Aventure', 'Bien-être', 'Évasion'][item-1]}</p>
                <p className="text-gray-700">Description du contenu de la box et des activités proposées.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}