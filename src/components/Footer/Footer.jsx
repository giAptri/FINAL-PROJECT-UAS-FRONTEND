import { Link } from 'react-router-dom';
import { FooterContainer, FooterLeft, FooterNav, FooterUl} from './Footer.styled';



export default function Footer() {
    return (
        <FooterContainer>
            <FooterLeft>
                <a href="/">Covid id</a>
                <p>Developed by gia</p>
            </FooterLeft>
            <FooterNav>
                <FooterUl>
                    <li><Link to="Pages/Global">Global</Link></li>
                    <li><Link to="Pages/Indonesia">Indonesia</Link></li>
                    <li><Link to="Pages/Provinsi">Provinsi</Link></li>
                    <li><Link to="Pages/About">About</Link></li>
                </FooterUl>
            </FooterNav>
        </FooterContainer>
    )
}
