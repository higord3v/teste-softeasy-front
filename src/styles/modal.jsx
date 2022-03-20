import styled, { css } from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => isVisible ? 1: 0};
  pointer-events: ${({isVisible}) => isVisible ? 'auto': 'none'}
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px #00000070;
  border-radius: 10px;
  gap: 2rem;
  padding: 2rem 2rem;
  @media (max-width: 460px) {
    width: 70vw;
  }
  width: ${({ action }) => action !== 'delete' && '375px'};
  height: ${({ action }) => action !== 'delete' && '475px'};
`;

export const Input = styled.input`
  all: unset;
  padding: 0.2rem;
  box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.4);
  font-size: 16px;
  display: flex;
  width: 100%;
  font-weight: normal;
  border: 1px solid rgb(0, 149, 64);
  border-radius: 10px;
  position: relative;
  cursor: text;
  ${(props) =>
    props.search &&
    css`
      min-width: 10rem;
    `}
`;

export const Label = styled.label`
font-size: 1rem;
font-weight: bold;
margin-bottom: 0.3rem;
text-align: left;
display: flex;
align-items: stretch;
flex-direction: column;
`;

export const Span = styled.span`
color: red;
position: absolute;
margin-top: 50px;
`
