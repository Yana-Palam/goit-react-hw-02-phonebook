import styled from 'styled-components';

export const Contact = styled.li`
  border: 2px solid #5446aa;
  border-radius: 2px;
  padding: 6px 12px;
  min-width: 490px;
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p``;

export const Button = styled.button`
  max-width: 120px;
  padding: 8px 10px;
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
