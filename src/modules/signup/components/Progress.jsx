import colors from "constants/colors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width}rem;
  margin: 3rem auto;
`;

const Step = styled.span`
  display: block;
  width: 1.1rem;
  height: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => (props.active ? colors.darkBlue : colors.lightAsh)};

  &:hover {
    transform: scale(1.1);
  }
`;

const Progress = ({ currentStep, steps }) => {
  return (
    <Container width={steps * 1.5}>
      {[...Array(steps).keys()].map((step) => (
        <Step key={step} active={step <= currentStep} />
      ))}
    </Container>
  );
};

export default Progress;
