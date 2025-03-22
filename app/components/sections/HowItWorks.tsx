import Image from 'next/image';

const steps = [
  {
    title: "Personnalisez votre box",
    description: "Répondez à quelques questions pour nous permettre de créer une box parfaitement adaptée à vos goûts et envies.",
    icon: "🎯"
  },
  {
    title: "Recevez votre box mensuelle",
    description: "Chaque mois, recevez une box surprise soigneusement sélectionnée, livrée directement à votre porte dans un packaging discret.",
    icon: "📦"
  },
  {
    title: "Vivez des moments magiques",
    description: "Découvrez ensemble le contenu de votre box et créez des moments inoubliables à deux.",
    icon: "✨"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En trois étapes simples, commencez votre voyage vers une relation plus épanouie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[#F2C4CE] rounded-full flex items-center justify-center text-4xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#7D0633] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/inscription"
            className="btn-primary text-lg inline-flex items-center gap-2"
          >
            Commencer l'aventure
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 