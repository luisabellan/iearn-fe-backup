
import React from 'react'
import burgerMenu from '../../assets/icons/burger-menu.svg';
import { GlobalStyles } from '../../global';
import styled from 'styled-components';
/* import theme from '../../../theme'; */
import Theme from '../../theme';
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
  flex-direction: row;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: +1;
  opacity: 1;
  color: red;
  text-align: center;
  width:100%;
  min-height:50px; // 50px
  height:50px; // 50px
  min-width: 100%;
  font-size: 1rem;

  @media (min-width: 300px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) {
    font-size: 1.3rem;
  }
  @media (min-width: 500px) {
    font-size: 1.3rem;
  }

  @media (min-width: 800px) {
    font-size: 1.4rem;
  }
  a{

    padding: 1rem;
    margin-top: 0;
    height: 2rem;

    color: #ecf1ed;
    text-decoration: none;
    font-size: $font-size-small-mobile;
    @media (min-width: 500px) {
      font-size: $font-size-mobile;
    }

    @media (min-width: 800px) {
      font-size: $font-size-tablet;
    }

    @media (min-width: 1000px) {
      font-size: $font-size-desktop;
    }
  }
  a:hover {
    border-bottom: 2px solid #4fd1c5;
    text-decoration: none;
    padding-bottom: 2.3rem;
  }
  .is-active {
    border-bottom: 2px solid red;
  }



`;

const MenuImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 2.85px;
  margin-right: 10px;
  width: 2.5625rem; // 41px
  height: 2rem; // 32px
`;
const MobileNavigation = (props) => {


  return (
    <Theme>
      <GlobalStyles />

      <Wrapper>
        <Nav>
          <HeaderContainer>
            <Header>
              <Logo>
                <img src={headerLogoGreen} alt="" />
              </Logo>
              <IEarnLink to="/login">{props.linkText}</IEarnLink>
              <MenuImg src={burgerMenu} alt="" />
            </Header>
          </HeaderContainer>
        </Nav>
      </Wrapper>
    </Theme >
  )


}


export default MobileNavigation