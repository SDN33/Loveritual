export default function Exemples() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Exemples de box
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez quelques exemples de box que vous pourriez recevoir
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemple de box 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/box-example-1.jpg" alt="Box romantique" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7D0633] mb-2">Box romantique</h3>
              <p className="text-gray-600">Une sélection d'accessoires pour une soirée en amoureux inoubliable.</p>
            </div>
          </div>
          
          {/* Exemple de box 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/box-example-2.jpg" alt="Box bien-être" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7D0633] mb-2">Box bien-être</h3>
              <p className="text-gray-600">Des produits relaxants pour prendre soin de vous et votre partenaire.</p>
            </div>
          </div>
          
          {/* Exemple de box 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/box-example-3.jpg" alt="Box découverte" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7D0633] mb-2">Box découverte</h3>
              <p className="text-gray-600">Une box pour explorer de nouvelles activités en couple.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}