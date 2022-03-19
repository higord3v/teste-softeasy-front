import styled from 'styled-components';

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
  @media (max-width: 1070px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  @media (max-width: 375px) {
    bottom: 6px;
    right: 6px;
  }
`