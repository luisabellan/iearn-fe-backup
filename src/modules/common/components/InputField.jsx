import styled from "styled-components";
import colors from "constants/colors";

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;

  label {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.transparentBlack};

    span {
      color: red;
      font-weight: normal;
      padding-left: 0.4rem;
    }
  }

  input {
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #e5e5e5;
    width: 100%;
    background: transparent;
    font-size: 1.6rem;
    font-weight: bold;
    transition: border 0.8s;

    &::placeholder {
      font-size: inherit;
      color: ${colors.ash};
      opacity: 0.8;
    }
  }
`;

const InputField = ({ label, required, ...inputProps }) => {
  return (
    <InputContainer>
      {label ? (
        <label htmlFor={inputProps.id || inputProps.name || label}>
          {label}
          {required && <span>*</span>}
        </label>
      ) : null}
      <input
        id={inputProps.id || inputProps.name || label}
        {...inputProps}
        required={required}
      />
    </InputContainer>
  );
};

export default InputField;
