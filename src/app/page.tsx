import { MapBoxMap } from '@/ui/MapBoxMap';
import { Wrapper } from '@/lib/layout/Wrapper';
import { Container } from '@/lib/layout/Container';
import AccordionItems from '@/ui/AccordionItems';
import Navbar from '@/lib/components/organisms/Navbar';
import HamburgerMenu from '@/lib/components/organisms/HamburgerMenu';
import Footer from '@/lib/components/organisms/Footer';

export default function Home() {
  return (
    <main className='grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased'>
      <Navbar />
      <HamburgerMenu />
      <Container className='h-screen pt-36'>
        <Wrapper className='gap-10'>
          <AccordionItems />
          <MapBoxMap />
        </Wrapper>
      </Container>
      <Footer />
    </main>
  );
}
