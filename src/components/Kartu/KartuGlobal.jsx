import {  
    Container,
    Section,
    Judul,
    Subtitle,
    KotakIsi } from './KartuGlobal.styled';
import Globall from '../Global/global';

export default function KartuGlobal({ CardsRegion }) {
    return (
        <Container>
            <Section>
                <Judul>Situasi Berdasarkan Negara</Judul>
                <Subtitle>bacaan pilihan covid</Subtitle>
                <KotakIsi>
                    {CardsRegion.map((Card) => {
                        return <Globall key={Card.total} Card={Card} />;
                    })}
                </KotakIsi>
            </Section>
        </Container>
    );
}


