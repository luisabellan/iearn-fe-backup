import styled from "styled-components";
import InputField from "modules/common/components/InputField";
import ButtonGroup from "modules/common/components/ButtonGroup";

const IntroText = styled.p`
  font-size: 2.2rem;
  text-align: center;

  span {
    display: block;
  }
`;

const InputsContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div {
    width: 48%;

    input {
      width: 100%;
    }
  }
`;
const PlatformLinksForm = ({ next, previous }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    next();
  };
  return (
    <>
      <IntroText>
        <span>Please provide the link to your profile on the</span>
        <span>below platforms.</span>
      </IntroText>
      <form onSubmit={handleSubmit}>
        <InputsContainer>
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
            <InputField
              type="url"
              label="Ziprecruiter"
              placeholder="https://ziprecruiter.com/profile"
            />
          </div>
        </InputsContainer>
        <ButtonGroup back={previous} />
      </form>
    </>
  );
};

export default PlatformLinksForm;
