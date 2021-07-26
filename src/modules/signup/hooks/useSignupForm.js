import { SignupFormContext } from "modules/signup/context/forms-context";
const { useContext } = require("react");

const useSignupForm = () => {
  const { signupFormValues, setSignupFormValues } =
    useContext(SignupFormContext);

  const handleInputChange = (event) => {
    const { value, name, id } = event.target;
    const key = name || id;
    setSignupFormValues((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return { values: signupFormValues, handleInputChange, handleSubmit };
};

export default useSignupForm;
