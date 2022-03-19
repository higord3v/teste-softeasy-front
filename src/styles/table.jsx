import styled from 'styled-components';

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
  @media (max-width: 1070px) {
    width: 700px;
  }
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
    border-right: none;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    & :last-child {
      width: 1rem;
      cursor: pointer;
    }
    & :first-child {
      width: 1rem;
    }
    & :nth-child(5) {
      width: 1rem;
    }
  } 
  & :nth-last-child(2) {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
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