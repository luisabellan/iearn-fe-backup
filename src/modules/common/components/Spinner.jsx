import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
`;

const Spinner = () => {
  return (
    <Container>
      <ClipLoader
        className="clip-loader"
        sizeUnit={"px"}
        size={60}
        color={"#FF586B"}
        loading={true}
      />
    </Container>
  );
};

export default Spinner;
