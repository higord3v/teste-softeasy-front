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
