import { CheckIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: "Rituel Découverte",
    price: "39,90",
    description: "Idéal pour les couples qui débutent ou les relations récentes",
    features: [
      "Box d'introduction axée sur les jeux de société",
      "Activités ludiques pour couples",
      "Petits cadeaux surprises",
      "Guide d'activités inclus",
      "Niveau d'intimité : 2/5"
    ],
    cta: "Choisir cette formule",
    popular: false
  },
  {
    name: "Rituel Passion",
    price: "59,90",
    description: "Notre formule la plus populaire avec un mélange équilibré",
    features: [
      "Jeux de couple exclusifs",
      "Accessoires romantiques",
      "Défis relationnels",
      "Guide personnalisé",
      "Niveau d'intimité : 3/5"
    ],
    cta: "Choisir cette formule",
    popular: true
  },
  {
    name: "Rituel Intense",
    price: "79,90",
    description: "Pour les couples qui veulent une expérience premium",
    features: [
      "Accessoires haut de gamme",
      "Expériences sensorielles",
      "Cadeaux personnalisés",
      "Guide expert détaillé",
      "Niveau d'intimité : 5/5"
    ],
    cta: "Choisir cette formule",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-[#F2C4CE]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-4">
            Nos formules
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule qui correspond le mieux à vos envies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-[#7D0633] text-white transform scale-105 shadow-xl'
                  : 'bg-white shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="mb-4">
                  <span className="bg-[#D4AF37] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${
                plan.popular ? 'text-white' : 'text-[#7D0633]'
              }`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.price}€
                </span>
                <span className={`text-sm ${
                  plan.popular ? 'text-white/80' : 'text-gray-500'
                }`}>
                  /mois
                </span>
              </div>
              
              <p className={`mb-6 ${
                plan.popular ? 'text-white/80' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>
              
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 mt-0.5 ${
                      plan.popular ? 'text-[#D4AF37]' : 'text-[#7D0633]'
                    }`} />
                    <span className={
                      plan.popular ? 'text-white/90' : 'text-gray-600'
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-[#7D0633] hover:bg-gray-100'
                    : 'bg-[#7D0633] text-white hover:bg-[#7D0633]/90'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Tous nos abonnements incluent la livraison gratuite et sont sans engagement.
            <br />
            Satisfait ou remboursé sur votre première box !
          </p>
        </div>
      </div>
    </section>
  );
}