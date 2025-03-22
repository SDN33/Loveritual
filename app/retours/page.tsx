export default function Retours() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#7D0633] mb-8 text-center">
          Politique de retours et remboursements
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Conditions de retour</h2>
          <p className="text-gray-600 mb-4">
            Chez LoveRitual, nous souhaitons que vous soyez entièrement satisfait(e) de votre expérience. 
            Voici notre politique de retour :
          </p>
          
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
            <li>Vous disposez d'un délai de 14 jours à compter de la réception de votre box pour nous signaler tout problème.</li>
            <li>Les produits doivent être retournés dans leur état d'origine, non utilisés et dans leur emballage d'origine.</li>
            <li>Les produits personnalisés, d'hygiène intime ou les denrées alimentaires ouvertes ne peuvent pas être retournés pour des raisons d'hygiène.</li>
            <li>Pour les box sur abonnement, l'annulation de l'abonnement n'entraîne pas le remboursement des box déjà expédiées.</li>
          </ul>
          
          <p className="text-gray-600">
            Pour toute question concernant les retours, n'hésitez pas à contacter notre service client à <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a>.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Procédure de retour</h2>
          <p className="text-gray-600 mb-4">
            Pour effectuer un retour, veuillez suivre ces étapes :
          </p>
          
          <ol className="list-decimal pl-5 text-gray-600 space-y-2 mb-4">
            <li>Contactez notre service client à <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a> en indiquant votre numéro de commande et le motif du retour.</li>
            <li>Attendez la confirmation de notre équipe et les instructions pour le retour.</li>
            <li>Emballez soigneusement les produits à retourner dans leur emballage d'origine.</li>
            <li>Joignez le formulaire de retour que nous vous aurons envoyé par email.</li>
            <li>Envoyez le colis à l'adresse indiquée dans les instructions.</li>
          </ol>
          
          <p className="text-gray-600">
            Les frais de retour sont à votre charge, sauf dans le cas d'un produit défectueux ou d'une erreur de notre part.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Remboursements</h2>
          <p className="text-gray-600 mb-4">
            Une fois votre retour reçu et vérifié, nous procéderons au remboursement :
          </p>
          
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
            <li>Le remboursement sera effectué sur le mode de paiement initial utilisé lors de votre achat.</li>
            <li>Le délai de remboursement peut varier entre 5 et 10 jours ouvrés après réception et vérification de votre retour.</li>
            <li>Vous recevrez un email de confirmation dès que le remboursement aura été effectué.</li>
          </ul>
          
          <p className="text-gray-600">
            Selon le motif du retour, nous pourrons vous proposer :
          </p>
          
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Un remboursement complet de la box</li>
            <li>Un remboursement partiel (pour les produits concernés uniquement)</li>
            <li>Un remplacement du ou des produits défectueux</li>
            <li>Un avoir sur votre prochaine commande</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Questions fréquentes sur les retours</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-[#7D0633]">Puis-je retourner une box ouverte ?</h3>
              <p className="text-gray-600">
                Vous pouvez retourner une box après l'avoir ouverte, à condition que les produits soient intacts, 
                non utilisés et dans leur emballage d'origine. Certains produits comme les denrées alimentaires ouvertes 
                ou les articles d'hygiène intime ne peuvent cependant pas être retournés.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#7D0633]">Que faire si un produit est défectueux ?</h3>
              <p className="text-gray-600">
                Si l'un des produits de votre box est défectueux, prenez une photo et contactez-nous immédiatement à 
                <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a>. 
                Nous vous enverrons un produit de remplacement sans frais supplémentaires.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#7D0633]">Puis-je annuler une commande avant son expédition ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler votre commande avant son expédition. Contactez-nous rapidement par email 
                à <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a> 
                en précisant votre numéro de commande. Si la commande n'a pas encore été traitée, nous procéderons à son annulation 
                et au remboursement intégral.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#7D0633]">Comment puis-je suivre l'état de mon remboursement ?</h3>
              <p className="text-gray-600">
                Vous pouvez suivre l'état de votre remboursement en vous connectant à votre compte client et en consultant 
                la section "Mes commandes". Si vous avez des questions, n'hésitez pas à contacter notre service client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}