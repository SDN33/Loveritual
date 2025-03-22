import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Separator from './components/ui/Separator';

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Séparateur entre Hero et HowItWorks */}
      <div className="relative z-10">
        <Separator variant="wave" color="#FFF8FA" />
      </div>
      
      <HowItWorks />
      
      {/* Séparateur entre HowItWorks et Pricing */}
      <div className="relative z-10">
        <Separator 
          variant="diagonal" 
          color="#FFF8FA" 
        />
      </div>
      
      <Pricing />
      
      {/* Séparateur entre Pricing et Testimonials */}
      <div className="relative z-10">
        <Separator 
          variant="curve" 
          color="#FFF8FA" 
        />
      </div>
      
      <Testimonials />

      {/* Séparateur entre Testimonials et Blog */}
      <div className="relative z-10">
        <Separator
          variant="wave"
          color="#FFF8FA"
        />
      </div>

    </main>
  );
}
