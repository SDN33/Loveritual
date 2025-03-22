import Image from 'next/image';

export default function APropos() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          À propos de LoveRitual
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez notre histoire et notre mission
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-[#7D0633] mb-6">Notre histoire</h2>
            <p className="text-gray-700 mb-4">
              LoveRitual est née d&apos;une idée simple : aider les couples à maintenir une relation épanouissante dans un monde où le temps manque souvent.
            </p>
            <p className="text-gray-700 mb-4">
              Fondée en 2022 par Sophie et Marc, deux passionnés de psychologie positive et de développement personnel, notre entreprise s&apos;est donnée pour mission de créer des expériences qui renforcent les liens dans le couple.
            </p>
            <p className="text-gray-700">
              Aujourd&apos;hui, LoveRitual accompagne des milliers de couples à travers la France, avec une équipe passionnée qui cherche constamment à innover et à proposer des contenus de qualité.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden relative h-[400px]">
            <Image 
              src="/images/about-founders.jpg" 
              alt="Les fondateurs de LoveRitual"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="bg-gray-200 rounded-lg overflow-hidden order-2 md:order-1 relative h-[400px]">
            <Image 
              src="/images/about-mission.jpg" 
              alt="Notre mission"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[#7D0633] mb-6">Notre mission</h2>
            <p className="text-gray-700 mb-4">
              Chez LoveRitual, nous croyons que chaque relation mérite d&apos;être nourrie et célébrée.
            </p>
            <p className="text-gray-700 mb-4">
              Notre mission est d&apos;accompagner les couples dans leur quête d&apos;une relation épanouissante, en leur proposant des expériences qui favorisent la communication, l&apos;intimité et la complicité.
            </p>
            <p className="text-gray-700">
              Nous nous engageons à créer des produits et des services de qualité, conçus avec soin et pensés pour s&apos;adapter à tous les couples, quels que soient leur âge, leur orientation ou leur histoire.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-8">Notre équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Sophie Martin", role: "Co-fondatrice" },
              { name: "Marc Dubois", role: "Co-fondateur" },
              { name: "Emma Laurent", role: "Directrice créative" },
              { name: "Thomas Petit", role: "Responsable produit" },
              { name: "Julie Moreau", role: "Psychologue conseil" },
              { name: "Lucas Bernard", role: "Responsable marketing" },
              { name: "Léa Girard", role: "Relation client" },
              { name: "Paul Rousseau", role: "Logistique" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                  <Image 
                    src={`/images/team-${index+1}.jpg`} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[#7D0633]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}