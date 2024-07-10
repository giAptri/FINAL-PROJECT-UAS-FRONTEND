//import style untuk component hero
import {
  HeroContainer,
  HeroTextContainer,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButton,
  HeroImageContainer,
  HeroImage
} from './Hero.styled.jsx';


export default function Hero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTitle>Covid ID</HeroTitle>
        <HeroSubtitle>Monitoring Perkembangan Covid</HeroSubtitle>
        <HeroDescription>Temukan informasi terbaru tentang pandemi Covid-19 dan langkah-langkah pencegahan yang dapat Anda lakukan.</HeroDescription>
        <HeroButton>vaccine</HeroButton>
      </HeroTextContainer>
      <HeroImageContainer>
        <HeroImage src="/img/hero.svg" alt="Hero Image" />
      </HeroImageContainer>
    </HeroContainer>
  );
}
