import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ec4899; 
  color: white;
  padding: 2rem 4rem; 

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 2rem; 
  }
`;

export const FooterLeft = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 1rem; 
    text-align: center;
  }
`;

export const FooterNav = styled.nav`
  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const FooterUl = styled.ul`
  display: flex;
  gap: 1.25rem; 

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 0.75rem; 
  }
`;



