import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: ${(props) => props.background || "#ffffff"};
  padding: ${(props) => props.padding || "10px"};
`;

export default Card;
