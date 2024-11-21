import { MapBoxMap } from '@/ui/MapBoxMap';
import AccordionItems from '@/ui/AccordionItems';
import { Container, Wrapper } from '@/lib/layout';

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
