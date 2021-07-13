import ButtonGroup from "modules/common/components/ButtonGroup";
import styled from "styled-components";
import useSkills from "../hooks/useSkills";

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

const Section = styled.section`
  form > div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 3rem;
  }
`;

const Experience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    background: #f8fafc;
    border: #f8fafc;
    border-radius: 4px;
    width: 7.7rem;
    height: 3.6rem;
    padding: 2px;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    padding-left: 1rem;

    &::after {
      content: "*";
      color: red;
    }
  }
`;

const Skill = ({ skill, updateSkillLevel }) => {
  return (
    <Experience>
      <select
        name={skill.name}
        id={skill.name}
        onChange={(ev) => updateSkillLevel(skill.name, ev.target.value)}
        defaultValue={skill.level}
      >
        <option value="None">None</option>
        <option value="1-3">1-3</option>
        <option value="4-6">4-6</option>
        <option value="7-9">7-9</option>
        <option value="10+">10+</option>
      </select>
      <label htmlFor={skill.name}>{skill.name}</label>
    </Experience>
  );
};

const ExperienceForm = ({ next, previous }) => {
  const { skills, updateSkillLevel } = useSkills();

  return (
    <>
      <IntroText>
        Enter your experience below <span>(select all that apply)</span>
      </IntroText>
      <Section>
        <form>
          <div>
            {skills.map((skill) => (
              <Skill
                key={skill.name}
                skill={skill}
                updateSkillLevel={updateSkillLevel}
              />
            ))}
          </div>
          <ButtonGroup back={previous} next={next} />
        </form>
      </Section>
    </>
  );
};

export default ExperienceForm;
