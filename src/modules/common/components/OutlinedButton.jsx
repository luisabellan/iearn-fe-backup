import styled from "styled-components";

const OutlinedButton = styled.button`
  border: 2px solid #0c2340;
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 5rem;
  background-color: transparent;
  cursor: pointer;

  &::hover,
  &::active {
    background-color: unset;
  }
`;

export default OutlinedButton;
