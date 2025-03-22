import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Separator from './components/ui/Separator';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Separator variant="wave" color="#FFF8FA" />
      
      <HowItWorks />
      
      <Separator variant="diagonal" color="white" />
      
      <div className='-mt-18'>
        <Pricing />
      </div>
      
      <Separator variant="curve" color="white" />
      
      <Testimonials />
    </main>
  );
}
