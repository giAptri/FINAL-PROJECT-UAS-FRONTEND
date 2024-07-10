import { Container, Nav, Ul, Li} from './Navbar.styled';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Container>
      <h1>Covid id</h1>
      <Nav>
        <Ul>
          <Li><Link to="Pages/Global">Global</Link></Li>
          <Li><Link to="Pages/Indonesia">Indonesia</Link></Li>
          <Li><Link to="Pages/Provinsi">Provinsi</Link></Li>
          <Li><Link to="Pages/About">About</Link></Li>
        </Ul>
      </Nav>
    </Container>
  );
}
