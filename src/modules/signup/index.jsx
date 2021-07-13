import styled from "styled-components";
import AuthLayout from "modules/common/components/layouts/components/AuthLayout";
// import PlatformLinksForm from "./components/PlatformLinksForm";
// import SignupForm from "./components/SignupForm";
import colors from "constants/colors";
import Progress from "./components/Progress";
// import AddSkills from "./components/AddSkills";
import ExperienceForm from "./components/ExperienceForm";
import { SignupFormProvider } from "./context/forms-context";
// import Confirmation from "./components/Confirmation";

const MainHeading = styled.h1`
  font-size: 4rem;
  color: ${colors.darkBlue};
  text-align: center;
`;

const Signup = () => {
  return (
    <AuthLayout>
      <MainHeading>Sign Up</MainHeading>
      <SignupFormProvider>
        {/* <SignupForm /> */}
        {/* <PlatformLinksForm /> */}
        {/* <AddSkills /> */}
        {/* <Confirmation /> */}
        <ExperienceForm />
        <Progress
          steps={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
          currentStep={3}
        />
      </SignupFormProvider>
    </AuthLayout>
  );
};

export default Signup;
