import { FaCheckCircle, FaHeartbeat, FaSkull } from 'react-icons/fa';
import {
    Kotak,
    Cardd,
    Item,
    Title,
    Confirmed,
    Death,
    Recovered,
    Contendate
} from './globall.styled.jsx';



export default function Globall({ Card }) {
    return (
        <Kotak>
            <Title>{Card.name}</Title>
                <Cardd>
                    <Item>
                        <Confirmed>
                        <FaCheckCircle style={{ marginRight: '0.5rem' }} />
                            Confirmed
                        </Confirmed>
                        <Contendate>{Card.numbers.confirmed}</Contendate>
                    </Item>
                    <Item>                        
                        <Recovered>
                        <FaHeartbeat style={{ marginRight: '0.5rem' }} />
                            Recovered
                        </Recovered>
                        <Contendate>{Card.numbers.recovered}</Contendate>
                    </Item>
                    <Item>
                        <Death>
                        <FaSkull style={{ marginRight: '0.5rem' }} />
                            Death
                        </Death>
                        <Contendate>{Card.numbers.death}</Contendate>
                    </Item>
                </Cardd>
        </Kotak>
    );
}


