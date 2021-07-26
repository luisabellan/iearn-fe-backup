import { SignupFormContext } from "modules/signup/context/forms-context";
import { useContext } from "react";

const useLinksValues = () => {
  const { linksValues, setLinksValues } = useContext(SignupFormContext);

  const handleInputChange = (event) => {
    const { value, name, id } = event.target;
    const key = name || id;
    setLinksValues((linksValues) => ({ ...linksValues, [key]: value }));
  };

  return { values: linksValues, handleInputChange };
};

export default useLinksValues;
