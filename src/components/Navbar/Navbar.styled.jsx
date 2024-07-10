import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  background-color: #ec4899; 
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem; 

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem; 
  }
`;

export const Brand = styled.a`
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem; 
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 1.5rem; /* gap-6 */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
    gap: 1rem; 
  }
`;

export const Li = styled.li``;