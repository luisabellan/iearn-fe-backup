import styled from "styled-components";
import { ReactComponent as LogoIcon } from "assets/icons/logo-icon.svg";
import { ReactComponent as LogoText } from "assets/icons/logo-text.svg";

const BrandContainer = styled.div`
  display: flex;
  height: 100%;

  svg {
    display: block;
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
