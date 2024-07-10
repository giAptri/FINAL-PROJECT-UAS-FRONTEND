import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem; 

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem; 
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem; 
  font-weight: bold;
  color:  #ec4899; 
`;

export const Subtitle = styled.p`
  color: #60a5fa; 
`;

export const TableWrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
  }

  th {
    background-color: #ec4899; 
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #e2e8f0; 
  }
`;
