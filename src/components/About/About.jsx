//import style untuk component About
import {
    HeroContainer,
    HeroTextContainer,
    HeroTitle,
    HeroSubtitle,
    HeroDescription,
    HeroImageContainer,
    HeroImage
  } from './About.styled.jsx';
  
  
  
  export default function About() {
    return (
      <HeroContainer>
        <HeroTextContainer>
          <HeroTitle>Tentang Covid ID</HeroTitle>
          <HeroSubtitle>WebsiteMonitoring Perkembangan Covid</HeroSubtitle>
          <HeroDescription>COVID ID adalah sebuah website yang memberikan berbagai informasi mengenai perkembangan covid-19 yang sedang merajak dari Dunia dan Dalam Negeri.</HeroDescription>
        </HeroTextContainer>
        <HeroImageContainer>
          <HeroImage src="/img/hero.svg" alt="Hero Image" />
        </HeroImageContainer>
      </HeroContainer>
    );
  }
  