import styled from "styled-components";
import colors from "constants/colors";

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    font-size: 1.7rem;
    color: ${colors.transparentBlack};

    a {
      color: ${colors.darkBlue};
    }
  }
`;
export default Centered;
