import styled from 'styled-components';


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