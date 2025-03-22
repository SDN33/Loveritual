export default function APropos() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          À propos de LoveRitual
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Notre histoire, notre mission et nos valeurs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#7D0633] mb-4">Notre histoire</h2>
            <p className="text-gray-600 mb-4">
              LoveRitual est né d'une idée simple : aider les couples à entretenir leur relation au quotidien. 
              Fondée en 2025 par Laura et Stéphane, un couple passionné par l'idée de créer des moments de connexion authentique, 
              notre entreprise s'est donné pour mission de raviver la flamme dans les relations amoureuses.
            </p>
            <p className="text-gray-600">
              Après avoir constaté que la routine et le manque de temps étaient les principaux ennemis de l'intimité dans les couples, 
              nous avons imaginé un concept permettant de réintroduire facilement de la nouveauté et du plaisir partagé dans la vie quotidienne.
            </p>
          </div>
          <div>
            <img src="/images/founders.jpg" alt="Fondateurs de LoveRitual" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-6 text-center">Notre mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Nous croyons fermement que les petits gestes quotidiens font les grandes histoires d'amour. 
            Notre mission est d'aider les couples à créer des moments précieux, à renforcer leur complicité 
            et à entretenir leur relation grâce à des rituels simples mais significatifs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-[#7D0633] text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-[#7D0633] mb-2">Authenticité</h3>
            <p className="text-gray-600">
              Nous privilégions des expériences authentiques qui encouragent la connexion émotionnelle et la sincérité.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-[#7D0633] text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-[#7D0633] mb-2">Durabilité</h3>
            <p className="text-gray-600">
              Nous nous engageons à proposer des produits respectueux de l'environnement et à réduire notre impact écologique.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-[#7D0633] text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-[#7D0633] mb-2">Inclusivité</h3>
            <p className="text-gray-600">
              Nous célébrons l'amour sous toutes ses formes et concevons nos box pour tous les couples, sans exception.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-6 text-center">Notre équipe</h2>
          <p className="text-gray-600 text-center mb-8">
            Derrière LoveRitual, il y a une équipe passionnée qui travaille chaque jour pour vous offrir des expériences uniques.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <img src="/images/team-1.jpg" alt="Marie" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#7D0633]">Marie</h3>
              <p className="text-gray-600">Co-fondatrice</p>
            </div>
            
            <div className="text-center">
              <img src="/images/team-2.jpg" alt="Thomas" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#7D0633]">Thomas</h3>
              <p className="text-gray-600">Co-fondateur</p>
            </div>
            
            <div className="text-center">
              <img src="/images/team-3.jpg" alt="Sophie" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#7D0633]">Sophie</h3>
              <p className="text-gray-600">Directrice créative</p>
            </div>
            
            <div className="text-center">
              <img src="/images/team-4.jpg" alt="Lucas" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-bold text-[#7D0633]">Lucas</h3>
              <p className="text-gray-600">Responsable produits</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}