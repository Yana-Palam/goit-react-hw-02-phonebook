import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid #5446aa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 16px 60px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 370px;

  &:hover,
  &:focus {
    outline: none;
    border-color: #5446aa;
  }
`;

export const Button = styled.button`
  max-width: 120px;
  padding: 10px 12px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  background-color: #5446aa;
  color: #ffffff;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #7968e7;
  }
`;
