import styled from "styled-components";
import InputField from "modules/common/components/InputField";
import ButtonGroup from "modules/common/components/ButtonGroup";
import useLinksValues from "../hooks/useLinksValues";

const IntroText = styled.p`
  font-size: 2.2rem;
  text-align: center;

  span {
    display: block;
  }
`;

const InputsContainer = styled.div`
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
  const { values, handleInputChange } = useLinksValues();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CALLED!");
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
            <InputField
              type="url"
              label="Facebook"
              value={values.facebook}
              name="facebook"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Twitter"
              value={values.twitter}
              name="twitter"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Instagram"
              value={values.instagram}
              name="instagram"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="LinkedIn"
              value={values.linkedin}
              name="linkedin"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Github"
              value={values.github}
              name="github"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputField
              type="url"
              label="Indeed"
              value={values.indeed}
              name="indeed"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Dice"
              value={values.dice}
              name="dice"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Upwork"
              value={values.upwork}
              name="upwork"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Angel"
              value={values.angel}
              name="angel"
              onChange={handleInputChange}
            />
            <InputField
              type="url"
              label="Ziprecruiter"
              placeholder="https://ziprecruiter.com/profile"
              value={values.ziprecruiter}
              name="ziprecruiter"
              onChange={handleInputChange}
            />
          </div>
        </InputsContainer>
        <ButtonGroup back={previous} />
      </form>
    </>
  );
};

export default PlatformLinksForm;
