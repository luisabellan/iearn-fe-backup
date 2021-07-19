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

const CenteredBtn = styled(Centered)`
  margin: 6rem auto 3rem;
`;

const Confirmation = () => {
  return (
    <>
      <IntroText>
        <span>You're all set!</span>
        <span>Let's explore your dashboard!</span>
      </IntroText>
      <CenteredBtn>
        <Button background={colors.blue}>Submit</Button>
      </CenteredBtn>
    </>
  );
};

export default Confirmation;
