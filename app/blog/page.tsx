export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "5 activités pour raviver la flamme dans votre couple",
      excerpt: "Découvrez des idées simples mais efficaces pour retrouver la complicité des premiers jours.",
      date: "15 mars 2025",
      image: "/images/blog-1.jpg",
      slug: "raviver-la-flamme"
    },
    {
      id: 2,
      title: "L'importance de la communication dans le couple",
      excerpt: "Comment une communication saine peut transformer votre relation et renforcer vos liens.",
      date: "2 mars 2025",
      image: "/images/blog-2.jpg",
      slug: "importance-communication"
    },
    {
      id: 3,
      title: "Les rituels quotidiens qui renforcent les relations",
      excerpt: "Ces petites habitudes qui font toute la différence dans votre vie de couple.",
      date: "18 février 2025",
      image: "/images/blog-3.jpg",
      slug: "rituels-quotidiens"
    },
    {
      id: 4,
      title: "Comment gérer les conflits dans le couple",
      excerpt: "Des techniques efficaces pour résoudre les désaccords et renforcer votre relation.",
      date: "5 février 2025",
      image: "/images/blog-4.jpg",
      slug: "gerer-conflits"
    },
  ];

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Blog LoveRitual
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Conseils, astuces et inspiration pour votre vie de couple
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-[#7D0633] mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href={`/blog/${article.slug}`} className="text-[#7D0633] font-medium hover:underline">
                  Lire la suite →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}