import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 2rem 6rem;
  margin: 10rem auto 2rem;
  width: ${(props) => props.width || "640px"};
  height: ${(props) => props.width || "auto"};
`;

export default Container;
