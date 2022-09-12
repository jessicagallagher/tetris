import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  @media (max-width: 768px) {
    grid-template-rows: repeat(
      ${(props) => props.height},
      calc(40vw / ${(props) => props.width})
    );
  }
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  @media (max-width: 768px) {
    max-width: 40vw;
  }
  background: #111;
`;
