export default function Livraison() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#7D0633] mb-8 text-center">
          Informations de livraison
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Délais de livraison</h2>
          <p className="text-gray-600 mb-4">
            Chez LoveRitual, nous mettons tout en œuvre pour que vous receviez votre box dans les meilleurs délais. 
            Voici les informations concernant nos délais de livraison :
          </p>
          
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
            <li>Les box sont expédiées entre le 1er et le 5 de chaque mois.</li>
            <li>Le délai de livraison standard est de 2 à 5 jours ouvrés en France métropolitaine.</li>
            <li>Pour les DOM-TOM, comptez 5 à 10 jours ouvrés.</li>
            <li>Pour les livraisons internationales (Belgique, Suisse, Luxembourg), le délai est de 3 à 7 jours ouvrés.</li>
          </ul>
          
          <p className="text-gray-600">
            Un email de confirmation avec le numéro de suivi vous sera envoyé dès l'expédition de votre box.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Frais de livraison</h2>
          <p className="text-gray-600 mb-4">
            Les frais de livraison sont calculés en fonction de votre localisation :
          </p>
          
          <table className="w-full mb-4 border-collapse">
            <thead>
              <tr className="bg-[#F8F0F3]">
                <th className="px-4 py-2 text-left text-[#7D0633] border border-gray-200">Zone de livraison</th>
                <th className="px-4 py-2 text-left text-[#7D0633] border border-gray-200">Frais de livraison</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">France métropolitaine</td>
                <td className="px-4 py-2 border border-gray-200">Offerts</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Corse</td>
                <td className="px-4 py-2 border border-gray-200">5,90 €</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">DOM-TOM</td>
                <td className="px-4 py-2 border border-gray-200">12,90 €</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Belgique, Suisse, Luxembourg</td>
                <td className="px-4 py-2 border border-gray-200">8,90 €</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Autres pays européens</td>
                <td className="px-4 py-2 border border-gray-200">14,90 €</td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-gray-600">
            Les frais de livraison sont automatiquement calculés lors de la validation de votre commande.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Suivi de commande</h2>
          <p className="text-gray-600 mb-4">
            Pour suivre votre commande, vous pouvez :
          </p>
          
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Vous connecter à votre compte client et consulter la section "Mes commandes"</li>
            <li>Utiliser le numéro de suivi reçu par email en vous rendant sur le site du transporteur</li>
            <li>Nous contacter directement par email à <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a> en précisant votre numéro de commande</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Questions fréquentes sur la livraison</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-[#7D0633]">Que faire si je ne suis pas présent(e) lors de la livraison ?</h3>
              <p className="text-gray-600">
                Si vous n'êtes pas présent lors de la livraison, le colis sera déposé dans votre boîte aux lettres si sa taille le permet. 
                Sinon, un avis de passage sera laissé avec les instructions pour récupérer votre colis.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#7D0633]">Puis-je modifier mon adresse de livraison après avoir passé ma commande ?</h3>
              <p className="text-gray-600">
                Vous pouvez modifier votre adresse de livraison jusqu'à l'expédition de votre commande. 
                Pour cela, contactez-nous rapidement par email à <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a> en précisant votre numéro de commande.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#7D0633]">Que faire si mon colis arrive endommagé ?</h3>
              <p className="text-gray-600">
                Si votre colis arrive endommagé, prenez des photos et contactez-nous dans les 48h suivant la réception à 
                <a href="mailto:contact@loveritual.com" className="text-[#7D0633] hover:underline">contact@loveritual.com</a>. 
                Nous ferons le nécessaire pour remplacer rapidement les produits endommagés.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#7D0633]">Puis-je faire livrer ma box à une adresse différente chaque mois ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez modifier votre adresse de livraison à tout moment depuis votre espace client, 
                au moins 5 jours avant l'expédition prévue de votre prochaine box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}