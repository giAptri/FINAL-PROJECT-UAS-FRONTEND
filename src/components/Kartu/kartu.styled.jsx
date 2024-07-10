import styled from 'styled-components';

export const Container = styled.div`
  margin: 100%;
  background-color: #F8F9FA;
`;

export const Kotak = styled.div`
  width: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 5px lightgray;
  background-color: #ffffff;
  margin: auto;
  border-style: solid;
  border-color: white;
  border-width: 1px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-basis: 40%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export const Kartutitle = styled.h3`
  color: #ec4899;
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const Kartudate = styled.p`
  color: #106ff5;
`;
