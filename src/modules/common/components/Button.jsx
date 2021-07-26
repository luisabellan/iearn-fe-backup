import styled from "styled-components";
import colors from "constants/colors";

const Button = styled.button`
  background: ${(props) => props.background || colors.lightGreen};
  border: 2px solid ${colors.darkBlue};
  border-radius: 10px;
  color: ${(props) => props.color || colors.white};
  font-size: ${(props) => props.fontSize || "3.6rem"};
  text-transform: uppercase;
  padding: 0.2rem 5rem;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  cursor: pointer;
  letter-spacing: 0.025em;
`;

export default Button;
