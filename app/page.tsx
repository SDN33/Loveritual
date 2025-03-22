import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <div className='-mt-18'>
        <Pricing />
      </div>     
      <Testimonials />
    </main>
  );
}
