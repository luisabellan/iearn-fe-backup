import { useState } from "react";
import styled from "styled-components";
import colors from "constants/colors";
import Button from "modules/common/components/Button";
import InputField from "modules/common/components/InputField";
import ButtonGroup from "modules/common/components/ButtonGroup";

const IntroText = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 3rem;
  letter-spacing: 0.09em;

  span {
    display: block;
    font-size: 1.8rem;
  }
`;

const SkillsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const Skill = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 10rem;
  min-height: 3.6rem;
  background: linear-gradient(0deg, #f7f8fc, #f7f8fc), #f7f8fc;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.6rem;
  margin: 0.2rem;
`;

const FormBox = styled.div`
  width: 75%;
  margin: 2rem auto 5rem;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > button {
      margin-left: 1rem;
    }
  }

  p {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

const AddSkills = () => {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "Context API",
    "Redux",
    "MongoDB",
  ]);

  const [inputValue, setInputValue] = useState("");

  const addSkill = (skill) => {
    if (skills.includes(skill) || skill.trim() === "") return;
    setSkills((skills) => skills.concat(skill));
  };

  const removeSkill = (skill) => {
    setSkills((skills) => skills.filter((s) => skill !== s));
  };

  return (
    <>
      <IntroText>
        Please add your skills below <span>(you can edit these later)</span>
      </IntroText>
      <SkillsArea>
        {skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsArea>
      <FormBox>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addSkill(inputValue);
            setInputValue("");
          }}
        >
          <InputField
            placeholder="Hooks"
            label="Skills"
            onChange={(ev) => {
              setInputValue(ev.target.value);
            }}
            value={inputValue}
          />
          <Button
            type="submit"
            background={colors.darkBlue}
            height="4rem"
            fontSize="2rem"
          >
            Add
          </Button>
        </form>
        <p>Press enter or press the “add” button to add multiple skills</p>
      </FormBox>
      <ButtonGroup />
    </>
  );
};

export default AddSkills;
