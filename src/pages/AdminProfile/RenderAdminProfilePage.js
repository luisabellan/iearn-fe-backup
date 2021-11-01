import React from "react";
import styled from "styled-components";
import search from '../../assets/icons/search.png';
import notifications from '../../assets/icons/bell.png';
import location from '../../assets/icons/location.png';
// import photo from '../../assets/icons/avatar.png';
import photo from '../../assets/img/avatar.png';
import email from '../../assets/icons/email.png';
import phone from '../../assets/icons/phone.png';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import pencil from '../../assets/icons/pencil.png';
import add from '../../assets/icons/add.png';
//don't delete yet import status from '../../assets/status.png'; (luisabellan)
import remove from '../../assets/icons/remove.png';
import useWindowWidth from "../../hooks/useWindowWidth";

import {
  PageContainer,
  Mobile,
  Desktop

} from "../../components/styles";

import Navigation from "../../components/Navigation/Navigation";

const notes = [{
  id: 1,
  from: 'Jackie A.',
  content: "Ferdinand will be out from 1/16-2/24 for a previously planned family vacation",
  date: "12/24/2020",
},
{
  id: 2,
  from: 'Jackie A.',
  content: "Ferdinand has made tremendous progress. He completes tasks on time, and is always willing to help out his teammates.",
  date: "12/01/2020",
},
{
  id: 3,
  from: 'Jackie A.',
  content: "Communication warning 11/7",
  date: "11/07/2020",
}
];

function RenderAdminProfilePage(props) {

  return (
    <div>
      <PageContainer
      /*   onClick={(e) => {
          document.querySelector(".firstname-label").classList.remove("active");
          document.querySelector(".lastname-label").classList.remove("active");
          document.querySelector(".email-label").classList.remove("active");
          document.querySelector(".linkedin-label").classList.remove("active");
        }} */
      >
        <Navigation />
        <TopBarDiv className="topBar">
          <TitleDiv><h1>Profile</h1></TitleDiv>
          <TopBarRightDiv className="name-p">
            <IconsDiv className="icons">
              <SearchIcon >
                <img className="search" src={search} alt="search" />
              </SearchIcon>
              <NotificationsIcon >
                <img className="notifications" src={notifications} alt="notifications" /></NotificationsIcon>
            </IconsDiv>
            <MiniName><span>Jones Ferdinand</span></MiniName>
            <Avatar src={photo} alt="me" />
          </TopBarRightDiv>
        </TopBarDiv>

        <ProfileInfoSection>
          <ContactInfoSection>
            <Pencil src={pencil} alt="pencil" />
            <ProfilePhoto src={photo} alt="me" />
            <Name>Ferdinand Jones</Name>
            <ProjectName>MentorBeast</ProjectName>
            <LocationAndPhoneDiv>
              <LocationDiv className='location'>
                <LocationIcon src={location} alt="location" />
                <Location>San Diego</Location>
              </LocationDiv>
              <PhoneDiv className='phone'>
                <PhoneIcon src={phone} alt="phone" />
                <Phone>555-555-5555</Phone>
              </PhoneDiv>
            </LocationAndPhoneDiv>
            <EmailAndTimezoneDiv>
              <EmailDiv className='email'>
                <EmailIcon src={email} alt="email" />
                <Email>email@email.com</Email>
              </EmailDiv>
              {

                useWindowWidth() >= 768 ?
                  null
                  :
                  <TimezoneDiv className='timezone'>
                    <Timezone>Time Zone:<span>GMT+8</span></Timezone>
                  </TimezoneDiv>
              }


            </EmailAndTimezoneDiv>
            {
              useWindowWidth() >= 768 ?
                <Desktop>
                  <PreferedCommunicationMethod>
                    Prefered method of communication: <a href="https://facebook.com">Facebook</a>
                  </PreferedCommunicationMethod>
                  <SocialDiv>
                    <FacebookIcon src={facebook} alt="facebook" />
                    <InstagramIcon src={instagram} alt="instagram" />
                    <LinkedInIcon src={linkedin} alt="linkedin" />
                    <TwitterIcon src={twitter} alt="twitter" />
                  </SocialDiv>
                </Desktop>
                :
                <Mobile>
                  <PreferedCommunicationMethod>
                    Prefered method of communication: <a href="https://facebook.com">Facebook</a>
                  </PreferedCommunicationMethod>
                  <SocialDiv>
                    <FacebookIcon src={facebook} alt="facebook" />
                    <InstagramIcon src={instagram} alt="instagram" />
                    <LinkedInIcon src={linkedin} alt="linkedin" />
                    <TwitterIcon src={twitter} alt="twitter" />
                  </SocialDiv>
                </Mobile>
            }

          </ContactInfoSection>
          <Hr />
          <MoreInfoSection>
            <SecondPencil src={pencil} alt="pencil" />
            <SkillsSection>
              <h2>Skills:</h2>
              <div>
                <p>React.js</p>
                <p>Java</p>
                <p>Automations</p>
                <p>React Native</p>
                <p>Python</p>
                <p>Node.js</p>
              </div>

            </SkillsSection>

            <ArtifactsSection>
              <h2>Artifacts:</h2>
              <div>
                <a href="https://resume.com">Resume</a>
                <a href="https://mywebsite.com">Personal Website</a>
                <a href="https://netlify.com">Deployed Project</a>
              </div>


            </ArtifactsSection>

            <CredentialsSection>
              <h2>Credentials:</h2>
              <div>
                <a href="https://lambdaschool.com">Lambda School Web Dev</a>
                <a href="https://grow.google/projectmanagement/#?modal_active=none">Google Project Management</a>
                <a href="https://www.freecodecamp.org">FreeCodeCamp.com</a>
              </div>
            </CredentialsSection>

            <NotesSection>
              <NotesTitleDiv>
                <NotesTitleAndAddIconDiv>
                  <NotesTitle>Notes:</NotesTitle>
                  <AddIcon src={add} alt="add" />
                </NotesTitleAndAddIconDiv>
              </NotesTitleDiv>
              <NotesHr />
              <NotesDiv>

                <NotesList>
                  {notes.map((note, id) => {
                    return (

                      <NoteDiv id='note.id'>
                        <DateFromDiv>
                          <DateFromNoteDiv>
                            <Date><span>{note.date}</span></Date>
                            <From className="from"><span>{note.from}</span></From>
                            <Note>{note.content}</Note>
                          </DateFromNoteDiv>
                          <EditAndDeleteIconsDiv>
                            <EditIcon src={pencil} alt="edit" />
                            <DeleteIcon src={remove} alt="remove" />
                          </EditAndDeleteIconsDiv>
                        </DateFromDiv>
                        <NotesHr />
                      </NoteDiv>

                    )
                  })}
                </NotesList>

              </NotesDiv>




            </NotesSection>
          </MoreInfoSection>
        </ProfileInfoSection>






      </PageContainer >
    </div >
  );
}


const TopBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 22px;
  margin-top: 26px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    

  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-right: 0;
  padding-right: 0;


  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
  }
  

  
  `;

const SearchIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: baseline;
  
  
  img {
    
    margin-left: 15px;
    width: 16px;
    height: 16px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      
    }
    
  }

`
const NotificationsIcon = styled.div`
  img{
    padding-left: 10px;
    padding-right: 0;
    margin-right: 0;
    width: 16px;
    height: 14px;
    width: 100%;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    }
  }

`;
//here
const TitleDiv = styled.div`

h1{
    font-style: normal;
    font-weight:700;
    font-family: ${(props) => props.theme.fonts.mulish};
    font-size: 0.875rem; // 14px
    line-height: 1.0981rem; // 17.57px
    color: ${(props) => props.theme.colors.profileFontColor};
    width: 7.625rem; // 122px
    margin-left: 0.625rem; // 10px

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-weight: 700;
      font-size: 1.5rem; // 24px
      line-height: 1.8825rem; // 30.12px
      letter-spacing: 0.015625rem; // 0.3px
      width: 10.625rem; // 150px
      margin-left: 1.625rem; // 20px
    }
  }
  
`;

const TopBarRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;


`;

const MiniName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: last baseline;
  width: max-content;
  padding-left: 0;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.875rem; // 14px  
    line-height: 1.25rem; // 20 px
    letter-spacing: 0.0125rem; // 0.2px
  }
  
  span{
    padding-left: 16px;
    padding-right: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
    font-family: ${(props) => props.theme.fonts.mulish}; // Mulish
    color: ${(props) => props.theme.colors.profileFontColor};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    }
  }


`;

const Avatar = styled.img`
  display:flex;
  justify-content: center;
  align-self: center;
  margin-top: -8px;
  border: 2px solid ${(props) => props.theme.colors.brokenWhite};
  border-radius: 50%;
  width: 2.5187rem; // 40.3px
  height: 1.7237rem; // 27.58px
  padding-right: 10px;
`;

const ProfileInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 90%;
  margin-top: 1.0625rem; // 17px
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.profileBackgroundColor};
  border: 1px solid #DFE0EB;
  border-radius: 5px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(100% - 17px * 2);
    margin-left: 17px;
    margin-right: 17px;
  }


`;
const ContactInfoSection = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: calc(100%-17px * 2);
  //padding-left: 17px;
  //padding-right: 17px;
  margin-top: 1.0625rem; // 17px
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.profileBackgroundColor};

`;
const ProfilePhoto = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border-radius: 50%;
`;

const Name = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 600;
  font-style: normal;
  font-size: 1.25rem; // 20px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  //height: 2rem; // 32px
  margin-top: 1rem; // 16px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem; // 24px
    line-height: 1.8825rem; // 30.12px
    letter-spacing: 0.015625rem; // 0.3px
    //height: 2.5rem; // 40px
    margin-top: 1.5rem; // 20px
  }



`;

const ProjectName = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 400;
  font-style: normal;
  font-size: 1rem; // 16px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  height: 2rem; // 32px
  margin-top: 0.75rem; // 12px

`;

const LocationAndPhoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-top: 1.1875rem; // 19px
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const LocationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  `;

const LocationIcon = styled.img`
  display: flex;
  align-self: center;
  width: 0.8387rem; // 13.42px
  height: 1.1663rem; // 18.66px
  padding-right: 0.5494rem; // 8.79px
`;

const Location = styled.p`
  display: flex;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 600;
  font-style: normal;
  font-size: 0.875rem; // 14px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  width: max-content;
  padding-right: 22px; // 22px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem; // 18px
    line-height: 1.25rem; // 20px
    letter-spacing: 0.0125rem; // 0.2px
    font-weight: 600;
    color: ${(props) => props.theme.colors.profileFontColor};
    margin-left: 4px; // 4px
  }
`;

const PhoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 16px;
  }
`;

const PhoneIcon = styled.img`
  display: flex;
  align-self: center;
  width: 1.0781rem; // 17.25px
  height: 1.0781rem; // 17.25px
  padding-right: 0.5494rem; // 8.79px
`;

const Phone = styled.p`
  display: flex;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 600;
  font-style: normal;
  font-size: 0.875rem; // 14px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  width: max-content;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem; // 18px
    line-height: 1.25rem; // 20px
    letter-spacing: 0.0125rem; // 0.2px
    font-weight: 600;
    color: ${(props) => props.theme.colors.profileFontColor};
  }

`;

const EmailAndTimezoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 1.375rem; // 22px
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 0;
    flex-direction: column;
  }
  
`;

const EmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 16px;
  }
  
  `;
const EmailIcon = styled.img`
  display: flex;
  align-self: center;
  width: 1.2312rem; // 19.7px
  height: 0.9581rem; // 15.33px
  padding-right: 10px; // 10px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 34px;
    margin-right: -2px;
  }
`;
const Email = styled.p`
  display: flex;
  align-self: baseline;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 600;
  font-style: normal;
  font-size: 0.75rem; // 12px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  width: max-content;
  padding-right: 0.6875rem; // 11px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem; // 18px
    line-height: 1.25rem; // 20px
    letter-spacing: 0.0125rem; // 0.2px
    font-weight: 600;
    color: ${(props) => props.theme.colors.profileFontColor};
  }
`;

const TimezoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Timezone = styled.p`

  display: flex;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 300;
  font-style: normal;
  font-size: 0.75rem; // 12px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  width: max-content;

  span {
    padding-left: 16px;
  }
`;

const PreferedCommunicationMethod = styled.p`
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 300;
  font-style: normal;
  font-size: 0.75rem; // 12px
  line-height: 1.25rem; // 20px
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};
  width: max-content;
  margin-top: 1.25rem; // 20px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.875rem; // 14px
    line-height: 1.25rem; // 20px
    letter-spacing: 0.0125rem; // 0.2px
    font-weight: 300;
    color: ${(props) => props.theme.colors.profileFontColor};
  }

  a {
    padding-left: 20px;
    text-decoration: underline;
    margin-top: -2px;
    color: ${(props) => props.theme.colors.profileFontColor};
  }


  

`;

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 1.25rem; // 16px
  margin-top: 1.1875rem; // 19px
  margin-left: 16px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 40px;
    margin-top: 10px;
  } 


`;

const FacebookIcon = styled.img`
  display: flex;
  align-items: center;
  padding-right: 6px;
  width: 1.5625rem; // 25px
  height: 1.3675rem; // 21.88px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 3.125rem; // 50px
    height: 2.7344rem; // 43.75px
  }
`;

const InstagramIcon = styled.img`
  display: flex;
  align-items: center;
  padding-right: 6px;
  width: 1.5631rem; // 25.01px
  height: 1.3675rem; // 21.88px
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 3.1269rem; // 50.03px
    height: 2.735rem; // 43.76px
  }

`;

const LinkedInIcon = styled.img`
  display: flex;
  align-items: center;
  padding-right: 6px;
  width: 1.5625rem; // 25px
  height: 1.5625rem; // 25px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 3.125rem; // 50px
    height: 3.125rem; // 50px
  }

`;

const TwitterIcon = styled.img`
  display: flex;
  align-items: center;
  width: 1.5625rem; // 25px
  height: 1.5625rem; // 25px

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 3.125rem; // 50px
    height: 2.5381rem; // 40.61px
  }

`;

const Pencil = styled.img`
  position: absolute;
  display: block;
  width: 32px; // 32px
  height: 30px; // 30px
  right: 28px;
  top: 138px;
  color: ${(props) => props.theme.colors.pencil};

  &:hover {
    cursor: pointer;
  }
`;

const Hr = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.hr};
  width: 80%;
  margin-bottom: 0px;
`;

const MoreInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 1.25rem; // 20px
  margin-bottom: 1.25rem; // 20px



`;
const SecondPencil = styled.img`
  position: absolute;
  display: block;
  width: 32px; // 32px
  height: 30px; // 30px
  right: 25px;
  top: 510px;
  color: ${(props) => props.theme.colors.pencil};

  &:hover {
    cursor: pointer;
  }
`;


const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: row;
  margin-left: 10px;


  

  h2 {
      width: max-content;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 600;
      font-style: normal;
      font-size: 0.875rem; // 14px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};


  }

  div {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    gap: 3px;

    p{
      width: max-content;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 400;
      font-style: normal;
      font-size: 0.75rem; // 12px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};


    }
  }
  `;

const ArtifactsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin-top: 28px;
  margin-left: 10px;
  
  h2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: max-content;
    font-family: ${(props) => props.theme.fonts.mulish};
    font-weight: 600;
    font-style: normal;
    font-size: 0.875rem; // 14px
    line-height: 1.25rem; // 20px
    letter-spacing: 0.0125rem; // 0.2px
    color: ${(props) => props.theme.colors.profileFontColor};


  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    
    a {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-right: 19px;

      width: max-content;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 400;
      font-style: normal;
      font-size: 0.75rem; // 12px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      text-decoration: none;

      color: ${(props) => props.theme.colors.artifactsLinks};
    }
  }
`;

const CredentialsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin-left: 30px;
  margin-top: 24px;
  margin-left: 10px;


  h2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-family: ${(props) => props.theme.fonts.mulish};
    font-weight: 600;
    font-style: normal;
    font-size: 0.875rem; // 14px
    line-height: 1.25rem; // 20px
    letter-spacing: 0.0125rem; // 0.2px
    color: ${(props) => props.theme.colors.profileFontColor};


  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    
    
    a {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      min-width: fit-content;
      padding-right: 8px;

      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 400;
      font-style: normal;
      font-size: 0.75rem; // 12px
      line-height: 16px; // 16px
      letter-spacing: 0.0125rem; // 0.2px
      text-decoration: none;

      color: ${(props) => props.theme.colors.artifactsLinks};
    }
  }
`;

const NotesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 24px;
  margin-left: 10px;
  max-width: 100%;


  
`;





const NotesTitleAndAddIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NotesTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;

`;

const DateFromNoteDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  margin-top: 0px;
 
`;


const NotesTitle = styled.h2`
display: flex;
justify-content: flex-start;
align-self: center;
font-family: ${(props) => props.theme.fonts.mulish};
font-weight: 600;
font-style: normal;
font-size: 0.875rem; // 14px
line-height: 1.25rem; // 20px
letter-spacing: 0.0125rem; // 0.2px
color: ${(props) => props.theme.colors.profileFontColor};
`;

const AddIcon = styled.img`
display: flex;

width: 17x; // 17px
height: 17x; // 17px
color: ${(props) => props.theme.colors.pencil};

  &:hover {
  cursor: pointer;
}
`;



const NotesList = styled.ul`


`;
const NotesDiv = styled.div`
margin-top: 0px;
`;

const NoteDiv = styled.div`

display: flex;
flex-direction: column;

`;


const NotesHr = styled(Hr)`
  border: 1px solid ${(props) => props.theme.colors.notesHr};
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-self: flex-start;
  margin-left: 0px;
  margin-bottom: 4px;

`;

const DateFromDiv = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
justify-self: center;
align-items: flex-start;
margin-top: 0px;

`;




const Date = styled.p`


  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 0;
  margin-right: 8px;
  span {
  font-family: ${(props) => props.theme.fonts.mulish};
  font-weight: 400;
  font-style: normal;
  font-size: 0.75rem; // 12px
  line-height: 1.25rem; // 20px
  margin-right: 8px;
  letter-spacing: 0.0125rem; // 0.2px
  color: ${(props) => props.theme.colors.profileFontColor};

}
`;

const From = styled.p`
display: flex;
flex-direction: row;
justify-content: flex-start;
font-family: ${(props) => props.theme.fonts.mulish};
font-weight: 400;
font-style: normal;
font-size: 0.75rem; // 12px
line-height: 1.25rem; // 20px
letter-spacing: 0.0125rem; // 0.2px
color: ${(props) => props.theme.colors.profileFontColor};
min-width: max-content;
margin-right: 8px;

`;

const Note = styled.p`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
font-family: ${(props) => props.theme.fonts.mulish};
font-weight: 400;
font-style: normal;
font-size: 0.75rem; // 12px
line-height: 1.25rem; // 20px
letter-spacing: 0.0125rem; // 0.2px
color: ${(props) => props.theme.colors.profileFontColor};
`;

const EditAndDeleteIconsDiv = styled.div`
display: flex;
flex-direction: row;
`;

const EditIcon = styled.img`
/* display: flex;
flex-direction: row;
justify-content: flex-start; */
width: 20px; // 20px
height: 20px; // 20px
color: ${(props) => props.theme.colors.pencil};
margin-right: 10px;
padding-left: 8px;

  &:hover {
  cursor: pointer;
}
`;

const DeleteIcon = styled.img`
width: 20px; // 20px
height: 20px; // 20px

  &:hover {
  cursor: pointer;
}
`;

export default RenderAdminProfilePage;