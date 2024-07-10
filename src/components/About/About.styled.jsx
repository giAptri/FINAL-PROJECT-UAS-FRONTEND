import styled from 'styled-components';

export const HeroContainer = styled.div`
  padding: 4rem; 
  display: flex;
  flex-direction: column;
  background-color: white;

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

export const HeroTextContainer = styled.div`
  flex: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem; 
  color: #ec4899; 
`;

export const HeroSubtitle = styled.p`
  margin-bottom: 1.25rem; 
  color: #3b82f6; 
`;

export const HeroDescription = styled.p`
  margin-bottom: 2rem; 
`;

export const HeroButton = styled.button`
  background-color: #ec4899; 
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #db2777; 
  }
`;

export const HeroImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const HeroImage = styled.img`
  max-width: 25rem; 
  width: 100%;
`;
