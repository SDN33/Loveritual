import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Testimonials />
    </main>
  );
}
