import styled from "styled-components";
import colors from "constants/colors";
import AuthLayout from "modules/common/components/layouts/components/AuthLayout";
import Progress from "./components/Progress";
import AddSkills from "./components/AddSkills";
import ExperienceForm from "./components/ExperienceForm";
import SignupForm from "./components/SignupForm";
import PlatformLinksForm from "./components/PlatformLinksForm";
import Confirmation from "./components/Confirmation";
import { SignupFormProvider } from "./context/forms-context";
import useSteps from "./hooks/useSteps";

const MainHeading = styled.h1`
  font-size: 4rem;
  color: ${colors.darkBlue};
  text-align: center;
`;

const STEPS = [
  { id: 1, component: SignupForm },
  { id: 2, component: PlatformLinksForm },
  { id: 3, component: AddSkills },
  { id: 4, component: ExperienceForm },
  { id: 5, component: Confirmation },
];

const Signup = () => {
  const { currentStep, previousStep, nextStep } = useSteps(STEPS.length);
  const { component: Step } = STEPS[currentStep];
  return (
    <SignupFormProvider>
      <AuthLayout>
        <MainHeading>Sign Up</MainHeading>
        <Step previous={previousStep} next={nextStep} />
        <Progress currentStep={currentStep} steps={STEPS.length} />
      </AuthLayout>
    </SignupFormProvider>
  );
};

export default Signup;
