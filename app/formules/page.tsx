import Pricing from '../components/sections/Pricing';

export default function Formules() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Nos formules d&apos;abonnement
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Choisissez la formule qui correspond le mieux à vos envies et à votre budget
        </p>
      </div>
      
      <Pricing />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-8">
            Des questions sur nos formules ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre équipe est disponible pour vous aider à choisir la formule qui vous convient le mieux.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}