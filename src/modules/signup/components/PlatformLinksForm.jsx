import colors from "constants/colors";
import Button from "modules/common/components/Button";
import Centered from "modules/common/components/Centered";
import InputField from "modules/common/components/InputField";
import styled from "styled-components";

const IntroText = styled.p`
  font-size: 2.2rem;
  text-align: center;

  span {
    display: block;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  div {
    width: 48%;
  }
`;
const PlatformLinksForm = () => {
  return (
    <>
      <IntroText>
        <span>Please provide the link to your profile on the</span>
        <span>below platforms.</span>
      </IntroText>
      <Form>
        <div>
          <InputField type="url" label="Facebook" />
          <InputField type="url" label="Twitter" />
          <InputField type="url" label="Instagram" />
          <InputField type="url" label="LinkedIn" />
          <InputField type="url" label="Github" />
        </div>
        <div>
          <InputField type="url" label="Indeed" />
          <InputField type="url" label="Dice" />
          <InputField type="url" label="Upwork" />
          <InputField type="url" label="Angel" />
          <InputField type="url" label="Ziprecruiter" />
        </div>
        <Centered>
          <Button background={colors.lightAsh} color={colors.ash}>
            Back
          </Button>
          <Button background={colors.blue}>Next</Button>
        </Centered>
      </Form>
    </>
  );
};

export default PlatformLinksForm;
