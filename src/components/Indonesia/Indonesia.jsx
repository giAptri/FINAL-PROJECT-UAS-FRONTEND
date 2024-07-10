import {
    Container,
    Section,
    Judul,
    Subtitle,
    KotakIsi
  } from './Indonesia.styled.jsx';
  import Kartu from '../Kartu/kartu.jsx';
  

  export default function Indonesia({ Cards ,title = "Dunia", subtitle = "Berikut Data jumlah  Covid yang ada di Seluruh Negara"}) {

    return (
      <Container>
        <Section>
          <Judul>{title}</Judul>
          <Subtitle>{subtitle}</Subtitle>
          <KotakIsi>
            {Cards.map((Card) => (
              <Kartu key={Card.total} Card={Card} />
            ))}
          </KotakIsi>
        </Section>
      </Container>
    );
  }
  

  