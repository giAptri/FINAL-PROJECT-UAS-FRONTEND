import { Kotak, Kartutitle, Kartudate } from './kartu.styled.jsx';

export default function Kartu({ Card }) {
    return (
        <Kotak>
            <Kartutitle>
                {Card.status}
            </Kartutitle>
            <Kartudate>
                {Card.total}
            </Kartudate>
        </Kotak>
     );
}


