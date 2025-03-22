export default function Carrieres() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Rejoignez l&apos;équipe LoveRitual
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez nos opportunités de carrière et participez à notre mission
        </p>
        
        <div className="bg-[#FFF8FA] p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-6">Pourquoi nous rejoindre ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#7D0633] text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Une mission inspirante</h3>
              <p className="text-gray-600">Contribuez à améliorer la vie de milliers de couples en France.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#7D0633] text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Une startup en croissance</h3>
              <p className="text-gray-600">Rejoignez une entreprise dynamique avec de nombreuses opportunités d&apos;évolution.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#7D0633] text-4xl mb-4">🌈</div>
              <h3 className="text-xl font-bold mb-2">Une culture bienveillante</h3>
              <p className="text-gray-600">Travaillez dans un environnement qui valorise l&apos;équilibre vie pro/perso et le bien-être.</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-[#7D0633] mb-6">Nos offres d&apos;emploi</h2>
        <div className="grid grid-cols-1 gap-6 mb-16">
          {[
            { title: "Responsable de production", type: "CDI", location: "Paris" },
            { title: "Chef de produit", type: "CDI", location: "Paris" },
            { title: "Rédacteur/rice contenu", type: "Freelance", location: "Remote" },
            { title: "Chargé(e) de relation client", type: "CDD", location: "Lyon" },
          ].map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#7D0633]">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#7D0633]">{job.title}</h3>
                  <div className="flex mt-2">
                    <span className="text-gray-600 mr-4">{job.type}</span>
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                </div>
                <a href={`/carrieres/${index+1}`} className="bg-[#7D0633] text-white px-6 py-2 rounded-lg hover:bg-[#66052A] transition-colors">
                  Postuler
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p className="text-gray-600 mb-6">
            Envoyez-nous une candidature spontanée et racontez-nous pourquoi vous souhaitez rejoindre l&apos;aventure LoveRitual !
          </p>
          <a href="/contact" className="bg-[#7D0633] text-white px-6 py-3 rounded-lg inline-block hover:bg-[#66052A] transition-colors">
            Candidature spontanée
          </a>
        </div>
      </div>
    </main>
  );
}