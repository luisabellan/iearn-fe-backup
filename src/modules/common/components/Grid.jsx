import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns || 2}, 1fr)`};
  grid-row: ${(props) => props.rows || 1};
  grid-gap: 0 30px;
`;

export default Grid;
