import HowItWorks from '../components/sections/HowItWorks';

export default function CommentCaMarche() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Comment fonctionne LoveRitual ?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Découvrez comment notre service de box mensuelles peut transformer votre relation
        </p>
      </div>
      
      <HowItWorks />
      
      {/* Contenu spécifique supplémentaire pour cette page */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-8">
            Vous avez des questions ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            N'hésitez pas à consulter notre FAQ ou à nous contacter directement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/faq" className="btn-secondary">
              Voir la FAQ
            </a>
            <a href="/contact" className="btn-primary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}