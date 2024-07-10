import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 5px;
  }
`;

export const Section = styled.section`
  margin: 5rem 0;
  text-align: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-basis: 50%;
    margin: 2rem;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 2rem;
  }
`;

export const Judul = styled.h1`
  font-size: 2.5rem;
  color: #ec4899;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #4361ee;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const KotakIsi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;