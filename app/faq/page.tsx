export default function FAQ() {
  const faqItems = [
    {
      question: "Comment fonctionne l'abonnement à LoveRitual ?",
      answer: "LoveRitual est un service d'abonnement mensuel. Après votre inscription, vous recevrez chaque mois une box thématique contenant des activités, des produits et des conseils pour enrichir votre vie de couple. Vous pouvez choisir entre plusieurs formules selon vos préférences et votre budget."
    },
    {
      question: "Quand ma box sera-t-elle livrée ?",
      answer: "Les box LoveRitual sont expédiées entre le 1er et le 5 de chaque mois. Le délai de livraison est généralement de 2 à 5 jours ouvrés selon votre localisation."
    },
    {
      question: "Puis-je offrir LoveRitual en cadeau ?",
      answer: "Absolument ! LoveRitual est un cadeau parfait pour un couple ami, des jeunes mariés ou pour célébrer un anniversaire de relation. Vous pouvez choisir entre différentes durées d'abonnement cadeau (3, 6 ou 12 mois) dans notre section 'Offrir'."
    },
    {
      question: "Comment puis-je modifier ou annuler mon abonnement ?",
      answer: "Vous pouvez gérer facilement votre abonnement depuis votre espace client. L'annulation est possible à tout moment et prendra effet à la fin de la période en cours. Pour modifier votre formule, rendez-vous dans la section 'Mon abonnement' de votre compte."
    },
    {
      question: "Les box sont-elles adaptées à tous les couples ?",
      answer: "Oui ! Nos box sont conçues pour s'adapter à la diversité des couples, quels que soient leur âge, leur orientation ou la durée de leur relation. Nous veillons à proposer des activités inclusives et adaptables selon vos préférences et votre confort."
    },
    {
      question: "Que contient une box LoveRitual typique ?",
      answer: "Chaque box contient généralement : 1-2 activités à réaliser ensemble, des produits en lien avec le thème du mois (bien-être, jeux, décoration, gourmandises...), un guide d'accompagnement avec des conseils et des suggestions, et parfois des surprises exclusives."
    },
    {
      question: "Comment sont choisis les produits dans les box ?",
      answer: "Nous sélectionnons avec soin des produits de qualité, si possible fabriqués en France ou en Europe, et nous favorisons les marques éthiques et durables. Chaque élément est choisi pour sa pertinence avec le thème du mois et sa capacité à créer une expérience enrichissante pour le couple."
    },
    {
      question: "Est-il possible de personnaliser ma box ?",
      answer: "Avec notre formule Premium, vous pouvez accéder à certaines options de personnalisation. Vous pouvez également remplir votre profil de préférences lors de votre inscription pour nous aider à adapter au mieux le contenu de vos box."
    },
    {
      question: "Livrez-vous à l'international ?",
      answer: "Actuellement, nous livrons en France métropolitaine, en Belgique, au Luxembourg et en Suisse. Nous travaillons à étendre notre service à d'autres pays européens prochainement."
    },
    {
      question: "Que faire si je ne suis pas satisfait de ma box ?",
      answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas pleinement satisfait de votre box, contactez notre service client dans les 14 jours suivant la réception. Nous ferons notre possible pour trouver une solution adaptée."
    }
  ];

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Questions fréquentes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Tout ce que vous devez savoir sur LoveRitual
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-[#7D0633]">
                    {item.question}
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#7D0633] mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est à votre disposition pour vous aider.
            </p>
            <a href="/contact" className="bg-[#7D0633] text-white px-6 py-3 rounded-lg inline-block hover:bg-[#66052A] transition-colors">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}