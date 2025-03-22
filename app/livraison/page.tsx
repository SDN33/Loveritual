export default function Livraison() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Livraison
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose prose-lg max-w-none">
            <h2>Informations de livraison</h2>
            <p>
              Chez LoveRitual, nous mettons tout en œuvre pour que votre box vous parvienne dans les meilleures conditions et dans les délais prévus.
            </p>
            
            <h3>Délais de livraison</h3>
            <p>
              Les box LoveRitual sont expédiées entre le 1er et le 5 de chaque mois. Le délai de livraison est généralement de :
            </p>
            <ul>
              <li>France métropolitaine : 2-3 jours ouvrés</li>
              <li>Belgique, Luxembourg, Suisse : 3-5 jours ouvrés</li>
            </ul>
            
            <h3>Suivi de commande</h3>
            <p>
              Un email contenant le numéro de suivi de votre colis vous sera envoyé dès l&apos;expédition de votre box. Vous pourrez suivre votre colis directement via le lien fourni dans cet email ou depuis votre espace client.
            </p>
            
            <h3>Frais de livraison</h3>
            <p>
              Les frais de livraison sont inclus dans le prix de nos abonnements pour la France métropolitaine.
            </p>
            <p>
              Pour les livraisons en Belgique, au Luxembourg et en Suisse, des frais supplémentaires s&apos;appliquent :
            </p>
            <ul>
              <li>Belgique et Luxembourg : 5€ par box</li>
              <li>Suisse : 8€ par box</li>
            </ul>
            
            <h3>Zones de livraison</h3>
            <p>
              Actuellement, nous livrons dans les zones suivantes :
            </p>
            <ul>
              <li>France métropolitaine (y compris la Corse)</li>
              <li>Belgique</li>
              <li>Luxembourg</li>
              <li>Suisse</li>
            </ul>
            <p>
              Nous travaillons à étendre notre service à d&apos;autres pays européens prochainement.
            </p>
            
            <h3>Colis non reçu ou endommagé</h3>
            <p>
              Si vous n&apos;avez pas reçu votre box 7 jours après la date d&apos;expédition ou si votre colis arrive endommagé, veuillez nous contacter rapidement à l&apos;adresse suivante : <a href="mailto:support@loveritual.fr" className="text-[#7D0633] hover:underline">support@loveritual.fr</a>
            </p>
            <p>
              Nous ferons notre possible pour résoudre la situation dans les plus brefs délais.
            </p>
            
            <h3>Transporteurs partenaires</h3>
            <p>
              Nous travaillons avec des transporteurs de confiance pour assurer la livraison de vos box :
            </p>
            <ul>
              <li>France : Colissimo</li>
              <li>International : DHL</li>
            </ul>
            
            <h3>Questions concernant la livraison</h3>
            <p>
              Pour toute question concernant la livraison de votre box, n&apos;hésitez pas à contacter notre service client :
            </p>
            <ul>
              <li>Par email : <a href="mailto:support@loveritual.fr" className="text-[#7D0633] hover:underline">support@loveritual.fr</a></li>
              <li>Par téléphone : 01 23 45 67 89 (du lundi au vendredi, de 9h à 18h)</li>
              <li>Via notre <a href="/contact" className="text-[#7D0633] hover:underline">formulaire de contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}