import styled from "styled-components";
import AuthLayout from "modules/common/components/layouts/components/AuthLayout";
// import PlatformLinksForm from "./components/PlatformLinksForm";
// import SignupForm from "./components/SignupForm";
import colors from "constants/colors";
import Confirmation from "./components/Confirmation";

const MainHeading = styled.h1`
  font-size: 4rem;
  color: ${colors.darkBlue};
  text-align: center;
`;

const Signup = () => {
  return (
    <AuthLayout>
      <MainHeading>Sign Up</MainHeading>
      {/* <SignupForm /> */}
      {/* <PlatformLinksForm /> */}
      <Confirmation />
    </AuthLayout>
  );
};

export default Signup;
