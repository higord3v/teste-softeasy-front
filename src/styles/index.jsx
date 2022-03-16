import styled, { css } from "styled-components";

//Books
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 200);
`;

export const Title = styled.h1` 
  text-align: center;
  font-size: 3.5rem;
  color: blue;
`;

export const Section = styled.div`
  display: flex;
  padding: 1rem 20rem;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Info = styled.span`
  all: unset;
  width: 20rem;
  font-size: 1.6rem;
  font-family: sans-serif;
  color: white;
  font-weight: bold;
  border-bottom: 0.2rem solid blue;
  color: blue;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  
`;

export const BookCard = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid black(0, 0, 0, 0.7);
  width: 30rem;
  height: 30rem;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

// Modal
export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;
export const Form = styled.form`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  width: 30rem;
  background-color: #fff;
  border-radius: 1rem;
`;
export const Input = styled.input`
  all: unset;
  padding: 0.2rem;
  font-size: 1.7rem;
  font-weight: normal;
  border: 0.2rem solid tomato;
  border-radius: 0.3rem;
  cursor: text;
  ${(props) =>
    props.search &&
    css`
      min-width: 10rem;
    `}
`;

export const Label = styled.label`
font-size: 1.7rem;
font-weight: bold;
text-align: center;
display: flex;
flex-direction: column;
${(props) =>
  props.search &&
  css`
      padding: 0.5rem 1.7rem;
      justify-content: center;
      align-items: center;
    `}
`;

export const Span = styled.label`
font-size: 1rem;
font-weight: bold;
text-align: center;
color: red;
`;

export const Button = styled.button`
  all: unset;
  border-radius: 1rem;
  background: green;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 3.5rem;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: blue;
      padding: 0.5rem 1.7rem;
    `}
  ${(props) =>
    props.secundary &&
    css`
      background: red;
      padding: 0.5rem 1.7rem;
    `}
    ${(props) =>
      props.especial &&
      css`
      font-weight: bold;
      font-size: 3.2rem;
      padding: 1rem 3rem;
      position: fixed;
      bottom: 2rem;
      right: 3vw;
      @media (max-width: 800px) {
        font-size: 3.2rem;
        padding: 0.3rem 1.5rem;
      }
    `}
`;

export const CancelButton = styled.div`
  all: unset;
  border-radius: 1rem;
  background: green;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 3.5rem;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: blue;
      padding: 0.5rem 1.7rem;
    `}
  ${(props) =>
    props.secundary &&
    css`
      background: red;
      padding: 0.5rem 1.7rem;
    `}
    ${(props) =>
      props.especial &&
      css`
      font-weight: bold;
      font-size: 3.2rem;
      padding: 1rem 3rem;
      position: fixed;
      bottom: 2rem;
      right: 3vw;
      @media (max-width: 800px) {
        font-size: 3.2rem;
        padding: 0.3rem 1.5rem;
      }
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;