import colors from "constants/colors";
import styled from "styled-components";
import Brand from "modules/common/components/Brand";

const TopBar = styled.div`
  background-color: ${colors.black};
  padding: 1rem;
  height: 40px;
`;

const AuthLayout = ({ children }) => {
  return (
    <>
      <TopBar>
        <Brand />
      </TopBar>
    </>
  );
};

export default AuthLayout;
