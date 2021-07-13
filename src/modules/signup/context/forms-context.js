import { createContext } from "react";
import { useState } from "react";
import { useMemo } from "react/cjs/react.production.min";

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
  { name: "React", level: null },
  { name: "JavaScript", level: null },
  { name: "MongoDB", level: null },
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

  const value = useMemo(
    () => ({
      signupFormValues,
      setSignUpFormValues,
      linksValues,
      setLinksValues,
      skills,
      setSkills,
    }),
    [signupFormValues, linksValues, skills]
  );

  return (
    <SignupFormContext.Provider value={value}>
      {children}
    </SignupFormContext.Provider>
  );
};
