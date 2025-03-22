import Pricing from '../components/sections/Pricing';

export default function Formules() {
  return (
    <main className="pt-20">
      <Pricing />
      
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#7D0633] mb-8">
            Des questions sur nos formules ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre équipe est disponible pour vous aider à choisir la formule qui vous convient le mieux.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}