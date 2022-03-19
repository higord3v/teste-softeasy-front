import styled, { css } from 'styled-components'; 

export const Button = styled.button`
  all: unset;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px #00000070;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: rgb(0, 149, 64);
      color: #f9f9f9;
      &:hover {
        background-color: #f9f9f9;
        color: rgb(0, 149, 64);
        border: 1px solid rgb(0, 149, 64);
        transition: opacity 0.1s;
      }
      `}
`;

export const CancelButton = styled.div`
  all: unset;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px #00000070;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: rgb(0, 149, 64);
      color: #f9f9f9;
      &:hover {
        background-color: #f9f9f9;
        color: rgb(0, 149, 64);
        border: 1px solid rgb(0, 149, 64)
      }
    `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  gap: 0.5rem;
`;
