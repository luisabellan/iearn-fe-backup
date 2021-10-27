import colors from "constants/colors";
import styled from "styled-components";
import Brand from "modules/common/components/Brand";
import Container from "modules/common/components/Container";

const TopBar = styled.div`
  background-color: ${colors.black};
  padding: 1rem;
  height: 7rem;
  width: 100vw;
`;

export const AuthLayout = ({ children }) => {
  return (
    <>
      <TopBar>
        <Brand />
      </TopBar>
      <Container>{children}</Container>
    </>
  );
};

export default AuthLayout;
