export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Comment fonctionne l'abonnement LoveRitual ?",
      answer: "L'abonnement LoveRitual est un service de box mensuelles livrées directement chez vous. Chaque mois, vous recevez une box thématique contenant des articles soigneusement sélectionnés pour vous aider à créer des moments de complicité en couple. Vous pouvez choisir entre plusieurs formules d'abonnement selon vos préférences et votre budget."
    },
    {
      id: 2,
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace client. L'annulation prendra effet après la période en cours pour laquelle vous avez déjà payé. Vous continuerez à recevoir les box jusqu'à la fin de cette période."
    },
    {
      id: 3,
      question: "Quand ma box sera-t-elle livrée ?",
      answer: "Les box sont expédiées entre le 1er et le 5 de chaque mois. Le délai de livraison dépend de votre localisation, mais généralement, vous recevrez votre box entre le 5 et le 10 du mois. Vous recevrez un email avec un numéro de suivi dès que votre box sera expédiée."
    },
    {
      id: 4,
      question: "Les produits sont-ils adaptés à tous les types de couples ?",
      answer: "Oui, nous concevons nos box pour qu'elles soient inclusives et adaptées à tous les couples, quels que soient leur orientation, leur identité ou leurs préférences. Nous accordons une attention particulière à proposer des expériences qui répondent aux besoins de tous nos abonnés."
    },
    {
      id: 5,
      question: "Puis-je offrir un abonnement LoveRitual en cadeau ?",
      answer: "Absolument ! Les abonnements LoveRitual font d'excellents cadeaux pour les anniversaires, la Saint-Valentin ou toute autre occasion. Vous pouvez choisir la durée de l'abonnement-cadeau (3, 6 ou 12 mois) et nous nous occupons du reste. Le bénéficiaire recevra un email l'informant de votre cadeau, avec toutes les informations nécessaires pour activer son abonnement."
    },
    {
      id: 6,
      question: "Les produits inclus dans les box sont-ils de qualité ?",
      answer: "La qualité est l'une de nos priorités. Nous sélectionnons soigneusement chaque produit inclus dans nos box, en privilégiant des marques reconnues et des artisans talentueux. Tous les produits sont testés par notre équipe avant d'être inclus dans nos box."
    },
    {
      id: 7,
      question: "Puis-je connaître le contenu de la box avant de la recevoir ?",
      answer: "Le principe de LoveRitual est de vous surprendre chaque mois avec une nouvelle thématique et de nouveaux produits. Le contenu exact de la box reste donc secret jusqu'à sa réception. Cependant, nous partageons quelques indices sur les réseaux sociaux pour vous mettre l'eau à la bouche !"
    },
    {
      id: 8,
      question: "Que faire si je ne suis pas satisfait(e) d'un produit ?",
      answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait(e) d'un produit, contactez notre service client dans les 14 jours suivant la réception de votre box. Nous ferons notre possible pour trouver une solution adaptée à votre situation."
    }
  ];

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Foire aux questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Vous avez des questions ? Nous avons les réponses !
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#7D0633] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="text-gray-600 mb-6">
              N'hésitez pas à contacter notre équipe, nous serons ravis de vous aider !
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#7D0633] text-white px-6 py-3 rounded-lg hover:bg-[#9A0E48] transition duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}