import { AuthLayout } from "modules/common/components/layouts";
import InputField from "modules/common/components/InputField";
import styled from "styled-components";
import Button from "modules/common/components/Button";
import Centered from "modules/common/components/Centered";

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-bottom: 6rem;

  /* p {
    text-align: center;
    display: inline-block;
    width: 100%;
    font-size: 1.7rem;
  } */

  span {
    display: block;
    font-size: 3.2rem;

    &:first-of-type {
      font-size: 4rem;
    }
  }
`;

const Signin = () => {
  return (
    <AuthLayout>
      <Title>
        <span>iEarn Nuclius</span>
        <span>Resource Center</span>
      </Title>
      <form>
        <InputField
          label="Email"
          type="email"
          placeholder="john.doe@email.com"
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="***********"
          required
        />
        <Centered>
          <Button type="submit">Login</Button>
        </Centered>
      </form>
      <Centered>
        <p>
          Login with <a href="/">Google</a>
        </p>
      </Centered>
      <Centered>
        <p>
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </Centered>
    </AuthLayout>
  );
};

export default Signin;
