import { AuthLayout } from "../common/components/layouts/components/AuthLayout";
import InputField from "modules/common/components/InputField";
import styled from "styled-components";
import Button from "modules/common/components/Button";
import Centered from "modules/common/components/Centered";
import { useState } from "react/cjs/react.production.min";

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-bottom: 6rem;

  span {
    display: block;
    font-size: 3.2rem;

    &:first-of-type {
      font-size: 4rem;
    }
  }
`;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Title>
        <span>iEarn Nuclius</span>
        <span>Resource Center</span>
      </Title>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          placeholder="john.doe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
