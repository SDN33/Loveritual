import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Marie & Thomas",
    location: "Paris",
    image: "https://source.unsplash.com/random/100x100/?couple&sig=1",
    text: "LoveRitual a vraiment transformé notre routine de couple. Chaque mois, c'est comme un nouveau rendez-vous amoureux qui nous attend !",
    rating: 5
  },
  {
    name: "Sophie & Lucas",
    location: "Lyon",
    image: "https://source.unsplash.com/random/100x100/?couple&sig=2",
    text: "Les box sont toujours pleines de surprises originales. C'est devenu notre petit rituel mensuel préféré pour nous retrouver.",
    rating: 5
  },
  {
    name: "Laura & Stéphane",
    location: "Bordeaux",
    image: "https://source.unsplash.com/random/100x100/?couple&sig=3",
    text: "La qualité des produits est exceptionnelle et les activités sont très bien pensées. Ça nous aide vraiment à maintenir notre connexion.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos membres disent de leur expérience LoveRitual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F2C4CE] rounded-full px-6 py-2">
            <span className="text-[#7D0633] font-semibold">
              Note moyenne de 4.9/5
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-4 h-4 text-[#7D0633]"
                />
              ))}
            </div>
            <span className="text-[#7D0633] font-semibold">
              sur plus de 10 000 avis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}