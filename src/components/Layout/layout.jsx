import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../Container/container";



export default function Layout({children}){
    return(
        <>
        <Navbar />
        <main>
            <Container>
            {children}
            </Container>
        </main>
        <Footer />
        </>
    );
}

