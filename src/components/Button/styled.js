import styled from 'styled-components';

export const ButtonElement = styled.button`
    box-sizing: border-box;
  appearance: none;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  border-radius: 0.6em;
  color: var(--senary);
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
`;
