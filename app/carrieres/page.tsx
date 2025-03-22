export default function Carrieres() {
  const jobs = [
    {
      id: 1,
      title: "Responsable marketing digital",
      type: "Temps plein",
      location: "Paris",
      remote: "Hybride"
    },
    {
      id: 2,
      title: "Développeur front-end",
      type: "Temps plein",
      location: "Lyon",
      remote: "Télétravail possible"
    },
    {
      id: 3,
      title: "Assistant(e) service client",
      type: "Temps partiel",
      location: "Paris",
      remote: "Sur site"
    },
    {
      id: 4,
      title: "Chargé(e) de contenu éditorial",
      type: "Freelance",
      location: "Partout en France",
      remote: "Télétravail complet"
    }
  ];

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Rejoignez notre équipe
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez nos opportunités de carrière et contribuez à répandre l'amour et la complicité dans les couples
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#7D0633] mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-gray-600 mb-4">
              Chez LoveRitual, nous croyons que le travail doit être aussi enrichissant que la vie personnelle. 
              Nous avons créé un environnement de travail bienveillant, innovant et dynamique, où chaque membre de l'équipe 
              peut s'épanouir et contribuer à notre mission commune.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Une équipe jeune et passionnée</li>
              <li>Des projets variés et stimulants</li>
              <li>Un équilibre vie professionnelle/vie personnelle</li>
              <li>Des avantages sociaux attractifs</li>
              <li>Des possibilités d'évolution</li>
            </ul>
          </div>
          <div>
            <img src="/images/team-work.jpg" alt="Notre équipe au travail" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-6 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#7D0633] mb-2">Passion</h3>
              <p className="text-gray-600">
                Nous sommes passionnés par notre mission d'aider les couples à renforcer leur relation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#7D0633] mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous cherchons constamment de nouvelles idées pour améliorer nos produits et services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#7D0633] mb-2">Bienveillance</h3>
              <p className="text-gray-600">
                Nous cultivons un environnement de travail respectueux et inclusif.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-6">Offres d'emploi</h2>
          
          <div className="space-y-4">
            {jobs.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#7D0633] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">{job.type}</span>
                      <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">{job.location}</span>
                      <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">{job.remote}</span>
                    </div>
                  </div>
                  <a 
                    href={`/carrieres/${job.id}`} 
                    className="bg-[#7D0633] text-white px-4 py-2 rounded hover:bg-[#9A0E48] transition duration-300"
                  >
                    Postuler
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Vous ne trouvez pas le poste qui vous correspond ?</h2>
          <p className="text-gray-600 mb-6">
            Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents !
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#7D0633] text-white px-6 py-3 rounded-lg hover:bg-[#9A0E48] transition duration-300"
          >
            Envoyer une candidature spontanée
          </a>
        </div>
      </div>
    </main>
  );
}