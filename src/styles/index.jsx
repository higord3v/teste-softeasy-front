import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;

${props => props.primary && css`
    min-height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
  `}
${props => props.secundary && css`
    flex-direction: column;
    width: 70%;
    justify-content: space-between; 
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 0;
`

export const H1 = styled.h1`
  font-weight: bold;
  font-family: sans-serif;
  color: rgba(0, 149, 64, 1)
`

export const AddIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 149, 64, 1);
  width: 5rem;
  height: 3.5rem;
  border-radius: 10px;
  box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`

export const MainInput = styled.input`
  all: unset;
  margin-bottom: 5rem;
  height: 2.5rem;
  padding: 0.2rem 0.1rem 0.2rem 10px;
  font-family: sans-serif;
  font-weight: bold;
  color:rgba(0, 149, 64, 1);
  border: 2px solid rgba(0, 149, 64, 1);
  border-radius: 10px;
  box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.4);
  &::placeholder {
    color: rgba(0, 149, 64, 1);
  }
  `

export const TableContainer = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  color:rgba(0, 149, 64, 1);
  border: 2px solid rgba(0, 149, 64, 1);
  border-radius: 10px;
  box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  `
export const TableHead = styled.div`
  background-color: rgba(0, 149, 64, 0.05);
  display: flex;
  align-items: center;
  width: 100%;
  > span {
    color: rgba(0, 149, 64, 1);
    padding: 0.4rem 0.2rem;
    border-right: 2px solid rgb(0, 149, 64);
    border-bottom: 0.5px solid gray;
    font-size: 0.8rem;
    height: 2rem;
  }
  & :last-child {
    border-right: none;
  }
  & :nth-last-child(1) {
    width: 10%
  } 
  & :nth-last-child(2) {
    width: 10%
  } 
  & :nth-last-child(3) {
    width: 40%
  } 
  & :nth-last-child(4) {
    width: 20%
  } 
  & :nth-last-child(5) {
    width: 20%;
  } 
`

export const TableLine = styled.div`
display: flex;
height: 3rem;

> span, div {
  padding: 0.2rem;
  font-size: 0.8rem;
  border-right: 2px solid rgb(0, 149, 64);
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-top: 0.5px solid gray;
}

  & :nth-last-child(1) {
    text-align: center;
    border-right: none;
    width: 10%;

    & :last-child {
      width: 1rem;
    }
    & :last-child {
      cursor: pointer;
    }
    & :nth-child(5) {
      width: 1rem;
    }
  } 
  & :nth-last-child(2) {
    width: 10%;
    & :first-child {
      white-space: nowrap;
    }
    > span {
      > span {
        width: 1.5rem;
        display: flex;
      }
    }
  } 

  & :nth-last-child(3) {
    width: 40%;
  } 
  & :nth-last-child(4) {
    width: 20%;
  } 
  & :nth-last-child(5) {
    width: 20%;
  } 
` 

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
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 4rem 5rem;
`;
export const Input = styled.input`
  all: unset;
  padding: 0.2rem;
  font-size: 1.7rem;
  font-weight: normal;
  border: 1px solid rgb(0, 149, 64);
  border-radius: 10px;
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
  border-radius: 10px;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 3.5rem;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: rgb(0, 149, 64);
      padding: 0.5rem 1.7rem;
      color: #f9f9f9;
      &:hover {
        background-color: #f9f9f9;
        color: rgb(0, 149, 64);
        border: 1px solid rgb(0, 149, 64)
      }
      `}
      ${(props) =>
    props.secundary &&
    css`
      color: rgb(0, 149, 64);
      background: #f9f9f9;
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
  border-radius: 10px;
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
      background: rgb(0, 149, 64);
      padding: 0.5rem 1.7rem;
      color: #f9f9f9;
      &:hover {
        background-color: #f9f9f9;
        color: rgb(0, 149, 64);
        border: 1px solid rgb(0, 149, 64)
      }
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

