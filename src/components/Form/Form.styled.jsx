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

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const FormContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #ec4899;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #374151;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #ec4899;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ec4899;
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.5);
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid #ec4899;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ec4899;
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.5);
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ec4899;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #be185d;
  }

  &:active {
    background-color: #be185d;
  }
`;
