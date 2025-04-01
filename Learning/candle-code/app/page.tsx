import Products from '@/components/homeComponents/Products';
import Heading from '@/components/homeComponents/Heading';
import Benefits from '@/components/homeComponents/Benefits';
import Testimonials from '@/components/homeComponents/Testimonials';

export default function Home() {
  return (
    <>
      <Heading />
      <Products />
      <Benefits />
      <Testimonials />
    </>
  );
}
