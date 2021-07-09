import styled from "styled-components";
import colors from "constants/colors";

const Button = styled.button`
  background: ${(props) => props.background || colors.lightGreen};
  border: 2px solid ${colors.darkBlue};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${colors.white};
  font-size: 3.6rem;
  text-transform: uppercase;
  padding: 0.2rem 5rem;
  width: ${(props) => props.width || "auto"};
  cursor: pointer;
  letter-spacing: 0.025em;
  /* transform: translateX(50%);
  left: 50%; */
`;

export default Button;
