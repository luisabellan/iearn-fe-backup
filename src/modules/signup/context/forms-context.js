import { createContext } from "react";
import { useState } from "react";

const INITIAL_SIGNUP_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_LINKS_FORM_VALUES = {
  facebook: "",
  linkedin: "",
  github: "",
  twitter: "",
  instagram: "",
  indeed: "",
  dice: "",
  upwork: "",
  angel: "",
  ziprecruiter: "",
};

const INITIAL_SKILLS = [
  { name: "React", level: "None" },
  { name: "JavaScript", level: "4-6" },
  { name: "MongoDB", level: "7-9" },
  { name: "Project Management", level: "10+" },
  { name: "DynamoDB", level: "1-3" },
];

export const SignupFormContext = createContext({
  signupFormValues: INITIAL_SIGNUP_FORM_VALUES,
  linksValues: INITIAL_LINKS_FORM_VALUES,
  skills: INITIAL_SKILLS,
});

export const SignupFormProvider = ({ children }) => {
  const [signupFormValues, setSignUpFormValues] = useState(
    INITIAL_SIGNUP_FORM_VALUES
  );
  const [linksValues, setLinksValues] = useState(INITIAL_LINKS_FORM_VALUES);
  const [skills, setSkills] = useState(INITIAL_SKILLS);

  const value = {
    signupFormValues,
    setSignUpFormValues,
    linksValues,
    setLinksValues,
    skills,
    setSkills,
  };

  return (
    <SignupFormContext.Provider value={value}>
      {children}
    </SignupFormContext.Provider>
  );
};
