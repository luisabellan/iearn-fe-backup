import colors from "constants/colors";
import styled from "styled-components";

const Container = styled.div`
  background: ${colors.white};
  border: 2px solid ${colors.lightAsh};
  box-shadow: 4px 4px 10px ${colors.transparentBlack};
  border-radius: 10px;
  padding: 2rem 6rem;
  margin: 10rem auto 2rem;
  max-width: ${(props) => props.width || "640px"};
  width: 90%;
  height: ${(props) => props.width || "auto"};
`;

export default Container;
