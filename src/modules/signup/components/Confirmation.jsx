import styled from "styled-components";
import Button from "modules/common/components/Button";
import Centered from "modules/common/components/Centered";
import colors from "constants/colors";

const IntroText = styled.p`
  font-size: 2.2rem;
  text-align: center;

  span {
    display: block;
  }
`;

const Confirmation = () => {
  return (
    <>
      <IntroText>
        <span>You're all set!</span>
        <span>let's explore your dashboard!</span>
      </IntroText>
      <Centered>
        <Button background={colors.darkBlue}>Submit</Button>
      </Centered>
    </>
  );
};

export default Confirmation;
