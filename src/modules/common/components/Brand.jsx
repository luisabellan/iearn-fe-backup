import styled from "styled-components";
import { LogoText, LogoIcon } from "assets/icons";

const BrandContainer = styled.div`
  display: flex;
  height: 100%;

  svg {
    display: block;
    height: 100%;
    width: auto;
  }

  svg:last-of-type {
    padding-left: 5px;
  }
`;

const Brand = (props) => {
  return (
    <BrandContainer {...props}>
      <LogoIcon />
      <LogoText />
    </BrandContainer>
  );
};

export default Brand;
