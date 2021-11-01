import React from 'react'
import styled from 'styled-components';
import headerLogoGreen from "../../assets/images/header-logo-green.png";
import {
  Wrapper,
  HeaderContainer,
  Header,
  Logo,
  IEarnLink,
} from "../styles";

const Nav = styled.nav`
  display: flex;
  flex-direction: col;
  justify-content: center;
  color: white;
  height: 3.125rem; // 50px
  width: 100%;
  
`;





const DesktopNavigation = (props) => {


  return (
    <Wrapper>
      <Nav>
        <HeaderContainer>
          <Header>
            <Logo src={headerLogoGreen} alt="" />
            <IEarnLink to="/login">{props.linkText}</IEarnLink>
          </Header>

        </HeaderContainer>
      </Nav>
    </Wrapper>

  )

}

export default DesktopNavigation;
