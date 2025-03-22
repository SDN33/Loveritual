import HowItWorks from '../components/sections/HowItWorks';

export default function CommentCaMarche() {
  return (
    <main className="pt-20">
      <HowItWorks />
      
      {/* Contenu spécifique supplémentaire pour cette page */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-8">
            Vous avez des questions ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            N&apos;hésitez pas à consulter notre FAQ ou à nous contacter directement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/faq" className="btn-secondary">
              Voir la FAQ
            </a>
            <a href="/contact" className="btn-primary justify-center">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}