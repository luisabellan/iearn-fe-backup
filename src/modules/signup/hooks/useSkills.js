import { SignupFormContext } from "modules/signup/context/forms-context";
const { useContext } = require("react");

const useSkills = () => {
  const { skills, setSkills } = useContext(SignupFormContext);

  const addSkill = (skillName) => {
    setSkills((skills) => skills.concat({ name: skillName, level: "None" }));
  };

  const deleteSkill = (skillName) => {
    setSkills((skills) => skills.filter((skill) => skill.name !== skillName));
  };

  const updateSkillLevel = (skillName, level) => {
    setSkills((skills) =>
      skills.map((skill) =>
        skill.name === skillName ? { ...skill, level } : skill
      )
    );
  };

  return { skills, addSkill, deleteSkill, updateSkillLevel };
};

export default useSkills;
