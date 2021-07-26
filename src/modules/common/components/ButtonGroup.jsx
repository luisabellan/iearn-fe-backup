import styled from "styled-components";
import colors from "constants/colors";
import Button from "modules/common/components/Button";

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem; */

  display: flex;
  justify-content: center;

  & > button:first-of-type {
    margin-right: 2rem;
  }
`;

const ButtonGroup = ({ next, back }) => {
  return (
    <Container>
      <Button
        width="20rem"
        background={colors.lightAsh}
        color={colors.ash}
        onClick={back}
      >
        Back
      </Button>
      <Button width="20rem" background={colors.blue} onClick={next}>
        Next
      </Button>
    </Container>
  );
};

export default ButtonGroup;
