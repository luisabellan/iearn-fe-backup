import styled from "styled-components";

const ChangeDirection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;

  @media screen and (min-width: 1440px) {
    display: flex;
    ${(props) =>
    props.direction === "row"
      ? "flex-direction: row;"
      : "flex-direction: column;"}
  }

  
`;



const PageContainer = styled.div`

  width: 100vw;
  background-color: ${(props) => props.theme.colors.bodyBackgroundColor};
  background-color: '#F7F8FC';
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 100%;

  &:after {
    content: "";
    display: block;
    height: 6.25rem;
  }
`;
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Tablet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  

  `;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin-top: 100px;


`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;


@media screen and(min-width: 1440px) {
  display: flex;

  justify-content: flex-start;

  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
}
`;

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
justify-self: center;
width: 100%;
height: 3.125rem; // 50px
background-color: black;


@media screen and(min-width: 1440px) {
  height: 7.875rem; // 126px
}
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
color: white;
`;

const Logo = styled.div`
display: flex;
flex-direction: row;
justify-self: center;
img{

  margin: 10px; // 10px
  width: 5.0625rem; // 81px
  height: 2.125rem; // 34px
  background-color: black;

  @media screen and(min-width: 1440px) {
    width: 114.06px;
    height: 47.94px;
  }

}
`;

const IEarnLink = styled.li`
display: flex;
justify-content: flex-start;
align-self: center;
margin-left: 0;
margin-right: auto;
margin-top: 7px;
padding-left: 10px;
width: max-content;
height: 37px;
letter-spacing: 0.4px;
font-family: ${(props) => props.theme.fonts.times};
font-style: normal;
font-weight: 400;
font-size: ${(props) => props.theme.fontSizes.iEarnLink}; // 26px
line-height: 1.8687rem; // 29.9px
color: white;

@media screen and(min-width: 1440px) {
  font-size: ${(props) => props.theme.fontSizes.iEarnLinkDesktop};
}
`;
const MainSection = styled.main`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;
align-self: flex-start;
width: 100 %;
margin-left: 1.4375rem;
margin-top: 1.0625rem;

@media screen and(min-width: 1440px) {
  display: flex;
  margin-top: 0;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin-left: 2.1875rem;
}
`;
const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
height: 4.0625rem;
width: 500px;
margin-top: 1.0625rem;

@media screen and(min-width: 1440px) {
  width: 20.625rem;
}
`;

const Emoji = styled.img`
display: flex;
width: 1.5rem; // 24px
height: 1.5rem; // 24px

margin-top: 0.4063rem;
margin-left: -305px;

@media screen and(min-width: 1440px) {
  margin-left: 375px; // 88
  margin-top: -24px;
}
`;

const MainTitle = styled.h1`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 18.3125rem; // 293px
align-self: flex-start;
justify-content: flex-start;
font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: ${(props) => props.theme.fontSizes.mainTitle};
line-height: 2.2231rem;
color: black;

@media screen and(min-width: 1440px) {
  font-size: ${(props) => props.theme.fontSizes.mainTitleDesktop};
  width: 220px; // 220px
}
`;
const SubTitleContainer = styled(MainTitle)`
display: flex;
flex-direction: row;
align-items: inline-flex;
width: 600px; // 600px
`;

const SubTitle = styled(MainTitle)`
display: flex;
font-family: Oswald;
font-style: normal;
font-weight: normal;
line-height: 2.2231rem; // 35.57px
width: 560px; // 250px

@media screen and(min-width: 1440px) {
  width: 400px; // 245px
}
`;

const ContentContainer = styled.div`
width: 20.4375rem; // 327px
height: 16.5rem; // 264px
margin-top: 2.3125rem;
font-size: ${(props) => props.theme.fontSizes.small};

@media screen and(min-width: 1440px) {
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: 38.625rem; // 618px
  height: 16.875rem; // 270px
  margin-top: 3.5rem;
  width: 38.625rem; // 618px
}
`;
const FirstParagraph = styled.p`
font-family: Noto Sans;
font-style: normal;
font-weight: 400;
line-height: 1.375rem;

  strong {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem;
}

@media screen and(min-width: 1440px) {
  margin-top: -3.6875rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
}
`;
const SecondParagraph = styled.p`
margin-top: 2rem;
font-family: Noto Sans;
font-style: normal;
font-weight: 400;
line-height: 1.375rem;
font-size: ${(props) => props.theme.fontSizes.small};

@media screen and(min-width: 1440px) {
  width: 500px;
}
`;
const OrderedList = styled.ol`
list-style-type: decimal;
margin-top: 2rem;
margin-left: 1rem;
font-family: Noto Sans;
font-style: normal;
font-weight: 400;
font-size: ${(props) => props.theme.fontSizes.small};
line-height: 1.375rem;
margin-top: 0.875rem;
`;
const GirlImage = styled.div`
margin-top: 0.875rem;
height: 250; // 250px
width: 347px; // 347px
margin-left: -10px;
background-image: url(${(props) => props.src});

@media screen and(min-width: 1440px) {
  margin-top: 14px;
  margin-left: 13px;
  width: 40rem; // 640px
  height: 28.875rem; // 462px
}
`;

const ManImage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
width: 400px; // 390px
height: 400px; // 251px
margin-top: -50px;
margin-left: -50px;
background-image: url(${(props) => props.src});

@media screen and(min-width: 1440px) {
  width: 40rem; // 640px
  height: 25.8125rem; // 462px
  margin-top: 1.5rem;
  margin-left: -18px; //
}
`;

const FooterContainer = styled.footer`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
align-self: flex-start;
width: 100 %;
height: 4.4375rem; // 71px
margin-top: 2.625rem; // 42px

@media screen and(min-width: 1440px) {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  margin-top: 100px;
  width: 370px;
  height: 27px;
}
`;

const FooterLogo = styled.img`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-self: flex-start;

width: 3.5625rem; // 57px
height: 1.5rem; // 24px
padding-bottom: 0.75rem;
margin-left: 1.75rem;
margin-right: 0.6875rem;
margin-top: 1.625rem;

@media screen and(min-width: 1440px) {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  width: 7.1288rem; // 114.06px
  height: 2.9962rem; // 47.94px
}
`;

const FooterLinks = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-start;

align-items: flex-start;
align-self: flex-start;

width: 11.375rem; // 182px
height: 2.75rem; // 44px
padding-top: 1.875rem;
padding-bottom: 0.75rem;
flex-wrap: wrap;
padding-top: 0.75rem;
padding-bottom: 0.9375rem;
padding-left: 0.6875rem;
margin-top: 5px;
font-family: Noto Sans;

@media screen and(min-width: 1440px) {
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem; // 20px
  text-decoration-line: underline;
  width: 23.125rem; // 370px
  height: 1.6875rem; // 27px
  line-height: 1.6875rem; // 27px
  margin-top: 1.5rem; // 24px
}
`;
const Link = styled.li`
font-family: Noto Sans;
font-style: normal;
font-weight: 400;
font-size: ${(props) => props.theme.fontSizes.small};
line-height: 1.3619rem;
text-decoration: underline;
margin-right: 1rem;

@media screen and(min-width: 1440px) {
  font-size: ${(props) => props.theme.fontSizes.medium};
}
`;

export {
  Wrapper,
  MainTitle,
  SubTitleContainer,
  SubTitle,
  ContentContainer,
  FirstParagraph,
  SecondParagraph,
  OrderedList,
  GirlImage,
  ManImage,
  FooterContainer,
  FooterLogo,
  FooterLinks,
  Link,
  ChangeDirection,
  Emoji,
  Header,
  HeaderContainer,
  IEarnLink,
  Logo,
  MainSection,
  PageContainer,
  TitleContainer,
  Mobile,
  Tablet,
  Row
};
