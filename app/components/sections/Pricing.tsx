import { CheckIcon, GiftIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: "Rituel Découverte",
    price: "19,90",
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
    price: "39,90",
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
    price: "59,90",
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

        {/* Section Cadeau */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#FFE4EF] to-[#FFF8FA] rounded-2xl p-8 shadow-lg border border-[#7D0633]/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-[#7D0633] p-4 rounded-full">
                <GiftIcon className="w-12 h-12 text-white" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#7D0633] mb-2">Offrir LoveRitual en cadeau</h3>
                <p className="text-gray-700 mb-4">
                  LoveRitual est un cadeau parfait pour un couple ami, des jeunes mariés ou pour célébrer un anniversaire de relation. Vous pouvez choisir entre différentes durées d&apos;abonnement cadeau (3, 6 ou 12 mois).
                </p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex-1 min-w-[140px] bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-[#7D0633] font-bold text-xl mb-1 block">3 mois</span>
                    <span className="text-gray-700 text-sm">à partir de 59,70€</span>
                  </div>
                  <div className="flex-1 min-w-[140px] bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-[#7D0633] font-bold text-xl mb-1 block">6 mois</span>
                    <span className="text-gray-700 text-sm">à partir de 113,40€</span>
                    <span className="bg-[#7D0633] text-white text-xs px-2 py-0.5 rounded-full ml-1">-5%</span>
                  </div>
                  <div className="flex-1 min-w-[140px] bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-[#7D0633] font-bold text-xl mb-1 block">12 mois</span>
                    <span className="text-gray-700 text-sm">à partir de 214,92€</span>
                    <span className="bg-[#7D0633] text-white text-xs px-2 py-0.5 rounded-full ml-1">-10%</span>
                  </div>
                </div>
                
                <button className="mt-6 bg-[#7D0633] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#7D0633]/90 transition-colors flex items-center justify-center gap-2 mx-auto md:mx-0">
                  <GiftIcon className="w-5 h-5" />
                  Offrir un abonnement
                </button>
              </div>
            </div>
          </div>
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