import colors from "constants/colors";
import Button from "modules/common/components/Button";
import Centered from "modules/common/components/Centered";
import InputField from "modules/common/components/InputField";

const SignupForm = () => {
  return (
    <>
      <form>
        <InputField
          type="text"
          label="First name"
          required
          placeholder="John"
        />
        <InputField type="text" label="Last name" required placeholder="Doe" />
        <InputField
          type="email"
          label="Email"
          required
          placeholder="john.doe@gmail.com"
        />
        <InputField
          type="password"
          label="Password"
          required
          placeholder="*********"
        />
        <InputField
          type="password"
          label="Confirm password"
          required
          placeholder="*********"
        />
        <Centered>
          <Button type="submit" background={colors.blue}>
            Sign Up
          </Button>
        </Centered>
      </form>
      <Centered>
        <p>
          Sign up with <a href="/">Google</a> or{" "}
          <a href="/">Social Media Account</a>
        </p>
      </Centered>
      <Centered>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </Centered>
    </>
  );
};

export default SignupForm;
