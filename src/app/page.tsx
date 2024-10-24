import { Wrapper } from '@/lib/layout/Wrapper';
import { Container } from '../lib/layout/Container';
import AccordionItems from '@/ui/AccordionItems';
import { MapBoxMap } from '@/ui/MapBoxMap';

export default function Home() {
  return (
    <Container>
      <Wrapper>
      <AccordionItems/>
      <MapBoxMap/>
      </Wrapper>
    </Container>
  );
}
