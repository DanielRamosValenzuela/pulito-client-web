import { Container } from '@/lib/layout/Container';
import { Wrapper } from '@/lib/layout/Wrapper';
import { MapBoxMap } from '@/ui/MapBoxMap';
import AccordionItems from '@/ui/AccordionItems';

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
