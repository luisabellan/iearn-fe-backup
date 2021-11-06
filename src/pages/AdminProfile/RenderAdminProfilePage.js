import React from "react";
import styled from "styled-components";
import search from '../../assets/icons/search.png';
import notifications from '../../assets/icons/bell.png';
import location from '../../assets/icons/location.png';
import photo from '../../assets/icons/avatar.png';
import email from '../../assets/icons/email.png';
import phone from '../../assets/icons/phone.png';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import pencil from '../../assets/icons/pencil.png';
import add from '../../assets/icons/add.png';
import status from '../../assets/icons/status.png';
import remove from '../../assets/icons/remove.png';

import Note from "components/Note/Note";

import useWindowWidth from "../../hooks/useWindowWidth";

import {
  PageContainer,
  Mobile,
  Tablet,
  TimezoneCommunicationDiv

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


      {
        useWindowWidth() < 768 ?
            <PageContainer>
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
                <ContactInfoDiv>
                  <ProfilePhotoDiv>
                    <ProfilePhoto src={photo} alt="me" />
                  </ProfilePhotoDiv>
                  <ProfileInfoDiv>
                    <StatusDiv>
                      <StatusIconMobile src={status} alt="status" />
                      <Name>Ferdinand Jones</Name>
                    </StatusDiv>
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
                        <Email>email @email.com</Email>
                      </EmailDiv>
                      <TimezoneMobile>Time Zone: <span>GMT+8</span></TimezoneMobile>
                    </EmailAndTimezoneDiv>
                  </ProfileInfoDiv>
                </ContactInfoDiv>
                  <PreferedCommunicationMethodMobile>
                    Prefered method of communication: <a href="https://facebook.com">Facebook</a>
                  </PreferedCommunicationMethodMobile>
                  <SocialDiv>
                    <FacebookIcon src={facebook} alt="facebook" />
                    <InstagramIcon src={instagram} alt="instagram" />
                    <LinkedInIcon src={linkedin} alt="linkedin" />
                    <TwitterIcon src={twitter} alt="twitter" />
                  </SocialDiv>
                </ContactInfoSection>

                <Hr />
                <MoreInfoSection>
                  <SecondPencil src={pencil} alt="pencil" />
                  <SkillsSection>
                  <h2>Skills</h2>
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
                  <h2>Artifacts</h2>
                    <div>
                      <a href="https://resume.com">Resume</a>
                      <a href="https://mywebsite.com">Personal Website</a>
                      <a href="https://netlify.com">Deployed Project</a>
                    </div>


                  </ArtifactsSection>
                  <CredentialsSectionMobile>
                  <h2>Credentials</h2>
                    <div>
                      <a href="https://lambdaschool.com">Lambda School Web Dev</a>
                      <a href="https://grow.google/projectmanagement/#?modal_active=none">Google Project Management</a>
                      <a href="https://www.freecodecamp.org">FreeCodeCamp.com</a>
                    </div>
                  </CredentialsSectionMobile>

                  <NotesSection>
                  <NotesTitleDiv>
                      <NotesTitleAndAddIconDiv>
                      <NotesTitle>Notes</NotesTitle>
                      <AddIcon src={add} alt="add"></AddIcon>
                      </NotesTitleAndAddIconDiv>
                    </NotesTitleDiv>

                    <NotesHr />
                    <NotesDiv>

                      <NotesList>
                        {notes.map((note, id) => {


                          return (

                            <Note id={note.id} content={note.content} date={note.date} from={note.from} />

                          )
                        })}
                      </NotesList>

                    </NotesDiv>




                  </NotesSection>
                </MoreInfoSection>
              </ProfileInfoSection>



            </PageContainer>

          :

            <PageContainer>

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
                <InfoDiv>
                  <ProfilePhotoDiv>
                  <ProfilePhoto src={photo} alt="me" />
                  </ProfilePhotoDiv>
                  <ContactInfoDiv>
                    <StatusDiv>
                      <StatusIconTablet src={status} alt="status" />
                      <Name>Ferdinand Jones</Name>
                    </StatusDiv>
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
                      <Email>email @email.com</Email>
                    </EmailDiv>
                  </EmailAndTimezoneDiv>
                  </ContactInfoDiv>
                </InfoDiv>

                <TimezoneCommunicationDiv>
                    <PreferedCommunicationMethodTablet>
                    <TimezoneTablet>Time Zone: <span>GMT+8</span></TimezoneTablet>
                      Prefered method of communication: <a href="https://facebook.com">Facebook</a>
                    </PreferedCommunicationMethodTablet>
                    <SocialDiv>
                      <FacebookIcon src={facebook} alt="facebook" />
                      <InstagramIcon src={instagram} alt="instagram" />
                      <LinkedInIcon src={linkedin} alt="linkedin" />
                      <TwitterIcon src={twitter} alt="twitter" />
                    </SocialDiv>
                </TimezoneCommunicationDiv>
                </ContactInfoSection>

                <Hr />
                <MoreInfoSection>
                  <SecondPencil src={pencil} alt="pencil" />
                  <SkillsSection>
                  <h2>Skills</h2>
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
                  <h2>Artifacts</h2>
                    <div>
                      <a href="https://resume.com">Resume</a>
                      <a href="https://mywebsite.com">Personal Website</a>
                      <a href="https://netlify.com">Deployed Project</a>
                    </div>
                  </ArtifactsSection>

                  <CredentialsSectionTablet>
                    <h2>Credentials: </h2>
                    <div>
                      <a href="https://lambdaschool.com">Lambda School Web Dev</a>
                      <a href="https://grow.google/projectmanagement/#?modal_active=none">Google Project Management</a>
                      <a href="https://www.freecodecamp.org">FreeCodeCamp.com</a>
                    </div>
                  </CredentialsSectionTablet>

                  <NotesSection>
                    <NotesTitleDiv>
                      <NotesTitleAndAddIconDiv>
                        <NotesTitle>Notes: </NotesTitle>
                        <AddIcon src={add} alt="add" />
                      </NotesTitleAndAddIconDiv>
                    </NotesTitleDiv>
                    <NotesHr />
                    <NotesDiv>
                      <NotesList>
                        {notes.map((note, id) => {

                          return (
                            <div>
                              <Note id={note.id} date={note.date} from={note.from} content={note.content} />
                            </div>
                          )

                        })}
                      </NotesList>
                    </NotesDiv>
                  </NotesSection>
                </MoreInfoSection>


              </ProfileInfoSection>
          </PageContainer>
      }

    </div >
  );
}


const TopBarDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
            align-self: baseline;
            align-items: baseline;
      margin-top: 26px;
      width: 96%;


      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 100%;
        margin-left: -40px;
        margin-top: 26px;
  }
  `;

const IconsDiv = styled.div`
      display: flex;
      flex-direction: row;
            justify-content: center;
      margin-right: 0;
      padding-right: 0;
      //margin-top: 10px;


      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      }



`;

const SearchIcon = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
            align-items: baseline;


      img {

        margin-left: 15px;
        width: 16px;
        height: 16px;
        @media (min-width: ${props => props.theme.breakpoints.tablet}) {

        }
    
      }

`;
const NotificationsIcon = styled.div`


      img{
        padding-left: 10px;
      padding-right: 0;
      margin-right: 0;
      width: 16px * 0.375;
      height: 14px * 0.375;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {

      }
    }
  

`;
//here
const TitleDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-self: baseline;
      margin-left: 0;
      padding-left: 0;
      margin-right: 0;
      padding-right: 0;
      font-size: 20px;
      font-weight: bold;
      color: #000000;
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 24px;
  }

      h1{
        font-style: normal;
      font-weight:700;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-size: 0.875rem; // 14px
      line-height: 1.0981rem; // 17.57px
      color: ${(props) => props.theme.colors.profileFontColor};
      //width: 7.625rem; // 122px
      //margin-left: 0.625rem; // 10px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-weight: 700;
      font-size: 1.5rem; // 24px
      line-height: 1.8825rem; // 30.12px
      letter-spacing: 0.015625rem; // 0.3px
      // width: 12.5rem; // 200px
      margin-left: 1.625rem; // 20px
      margin-left: 50px;
      //margin-right: 400px;
    }
  }

      `;

const TopBarRightDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: baseline;

      `;

const MiniName = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: baseline;
      padding-left: 0;
      margin-bottom: 5px;
            padding-top: -20px;
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
      width: max-content;
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

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      }
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
        //width: calc(100%-17px * 2);
        //margin-left: 17px;
        ///margin-right: 17px;
        width: 92%;
   
  }


      `;
const ContactInfoSection = styled.div`

      display: flex;
      flex-direction: column;
      justify-content: flex;
      align-items: center;
      align-self: center;
      margin-top: 1.0625rem; // 17px
      box-sizing: border-box;
      background-color: ${(props) => props.theme.colors.profileBackgroundColor};

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column; //here
        justify-content: center;
        align-items: center;
        align-self: center;
        justify-content: flex-start;
        align-items: flex-start;
        align-self: flex-start;
        margin-left: 60px;

  }

  `;
const InfoDiv = styled.div`

@media(min-width: ${props => props.theme.breakpoints.tablet }) {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width:100%;


}

`;
const ProfileInfoDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      margin-top: 1.0625rem; // 17px
      box-sizing: border-box;
      background-color: ${(props) => props.theme.colors.profileBackgroundColor};
      border-radius: 5px; 
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column; //here
      }

    
`;
const ProfilePhotoDiv = styled.div`
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: 1.0625rem; // 17px
      box-sizing: border-box;
      background-color: ${(props) => props.theme.colors.profileBackgroundColor};
      border-radius: 5px; 
`;

const ProfilePhoto = styled.img`
      display: flex;
      justify-content: center;
      align-self: center;
      align-items: center;
      width: 294.5px *0.385; // 294.5px * 0.385
      height: 187.42px *0.385;
      border-radius: 50%;



      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        display: flex;
        width: 200px;
        height: 200px;
        //margin-right: 100px;
        //margin-left:100px;
        margin-bottom: 0px;
        //margin-left: 210px;
      }


`;
const ContactInfoDiv = styled.div`
     
     @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -50px;
     }

`;

const StatusDiv = styled.div`
      display: flex;
      flex-direction: inline-flex;
      justify-content: flex-start;
      align-self: center;
      align-items: center;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 80px;
      }
`;

const StatusIconMobile = styled.img`
  display: flex;
  align-self: center;
  width:1.2rem;
  height:0.9rem;
  //position: absolute;
  //top: 284px;
  padding-right: 5px;
  margin-top: 0;


`;

const StatusIconTablet = styled.img`
  display: flex;
  align-self: center;
  width:1.2rem;
  height:0.9rem;
  position: absolute;
  top: 284px;
  padding-right: 5px;
  position: revert;
  align-self: baseline;
  width: 1.2rem *1.6;
  height: 0.9rem *1.6;
  padding-right: 5px;
  padding-top: -80px;
    


`;

const Name = styled.p`
      display: flex;
      flex-direction: row;
      justify-content: last baseline;
      align-self: center;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 600;
      font-style: normal;
      font-size: 1.25rem; // 20px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};
      //height: 2rem; // 32px
      //margin-top: 1rem; // 16px
      //text-align: center;
      margin-left: 20px; // 16px


      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 2.125rem; // 34px
      line-height: 1.25rem;  // 20 px
      letter-spacing: 0.0125rem; // 0.2px
      //height: 2.5rem; // 40px
      //margin-top: 80px; // 100px
      //margin-right: 300px;
      //padding-left: 17px;
      margin-top: 0;
  }



      `;

const ProjectName = styled.p`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-self: center;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 400;
      font-style: normal;
      font-size: 1rem; // 16px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};
      height: 2rem; // 32px
      margin-top: 0.75rem; // 12px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      //  display: none;
      flex-direction: column;
      //margin-left: 80px;
      margin-right:115px;
  }


      `;

const LocationAndPhoneDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-self: center;
      align-items: baseline;
      margin-top: 1.1875rem; // 19px
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        margin-right: 60px;
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
      width: 13.4192px * 0.375; // 13.42px
      width: 13.4192px * 0.375; // 13.42px
      height: 1.1663rem * 0.375; // 18.66px
      padding-right: 12px; // 8.79px
      //margin-left: 80px;
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
    
  }
      `;

const PhoneDiv = styled.div`
      display: flex;
      flex-direction: row;
      align-self: center;
      align-items: baseline;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 16px;
  }
      `;

const PhoneIcon = styled.img`
      display: flex;
      align-self: center;
      width: 1.0781rem* 0.375; // 17.25px
      height: 1.0781rem* 0.375; // 17.25px
      padding-right: 0.5494rem; // 8.79px
      //margin-left: 80px;

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
      margin-left: 20px;
      }

      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
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
      width: 1.2312rem * 0.375; // 19.7px
      height: 0.9581rem * 0.375; // 15.33px
      padding-right: 10px; // 10px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: -40px;
      //margin-right: -2px;
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

/* const TimezoneDiv = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        //margin-top: 200px;
        //margin-left: -300px;
        font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 300;
      font-style: normal;
      font-size: 14px; // 14px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      margin: 0;
      padding: 0;
  
  }

      `; */
const TimezoneMobile = styled.p`

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
const TimezoneTablet = styled.p`

      display: flex;
      align-self: center;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 300;
      font-style: normal;
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};
      width: max-content;
      font-size: 14px; // 14px
      padding-top: -16px;
      padding-right: 16px;
      display: flex;
      align-self: flex-start;
      margin-left: 0px;


      span {
        padding-left: 16px;
  }
      `;

const PreferedCommunicationMethodMobile = styled.p`
      display: flex;
      flex-direction: row;
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
      //margin-bottom: 300px;

      a {
        padding-left: 20px;
      text-decoration: underline;
      margin-top: -2px;
      color: ${(props) => props.theme.colors.profileFontColor};
  }



      `;

const PreferedCommunicationMethodTablet = styled(PreferedCommunicationMethodMobile)`

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-self: center;
      align-items: center;
      font-size: 0.875rem; // 14px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      font-weight: 300;
      color: ${(props) => props.theme.colors.profileFontColor};
      margin: 0;
      padding: 0;
      margin-top: 20px;



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
        margin-left: 40px;
        margin-top: 20px;
        margin-bottom: 10px;

    
  }


      `;

const FacebookIcon = styled.img`
      display: flex;
      align-items: center;
      padding-right: 6px;
      width: 1.5625rem * 0.375; // 25px
      height: 1.3675rem  * 0.375; // 21.88px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 31px  * 0.375; // 31px
      height: 27.13px  * 0.375; // 27.13px
      }

      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        width: 3.125rem * 0.375; // 50px
        height: 2.7344rem * 0.375;
      }
      `;

const InstagramIcon = styled.img`
      display: flex;
      align-items: center;
      padding-right: 6px;
      width: 1.5631rem * 0.375; // 25.01px
      height: 1.3675rem * 0.375; // 21.88px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 31px * 0.375; // 31px
      height: 27.13px * 0.375; // 27.13px
  }

      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        width: 3.1269rem * 0.375; // 50.03px
      height: 2.735rem * 0.375; // 43.76px
  }

      `;

const LinkedInIcon = styled.img`
      display: flex;
      align-items: center;
      padding-right: 6px;
      width: 1.5625rem * 0.375; // 25px
      height: 1.5625rem * 0.375; // 25px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 31px * 0.375; // 31px
      height: 31px * 0.375; // 31px
  }

      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        width: 3.125rem * 0.375; // 50px
      height: 3.125rem * 0.375; // 50px
  }

      `;

const TwitterIcon = styled.img`
      display: flex;
      align-items: center;
      width: 1.5625rem * 0.375; // 25px
      height: 1.5625rem * 0.375; // 25px

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 31px * 0.375; // 31px
      height: 31px * 0.375; // 31px
  }

      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        width: 3.125rem * 0.375; // 50px
      height: 2.5381rem * 0.375; // 40.61px
  }

      `;

const Pencil = styled.img`
      position: absolute;
      display: block;
      width: 49px; // 32px
      height: 46px; // 30px
      right: 5%;
      top: 138px;
      color: ${(props) => props.theme.colors.pencil};
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      }

      &:hover {
        cursor: pointer;
  }
      `;

const Hr = styled.hr`
      border: 1px solid ${(props) => props.theme.colors.hr};
      width: 100%;
      max-width: 90%;
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
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-left: 40px;
      }



      `;
const SecondPencil = styled.img`
      position: absolute;
      display: block;
      width: 15.43px * 0.375; // 32px
      height: 14.48px * 0.375; // 30px
      right: 8%;
      top: 555px;
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
      margin-top: 10px;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      }




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
      padding-top: 5px;

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
      padding-top: 10px;
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



      h2 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-self: flex-start;
        font-family: ${(props) => props.theme.fonts.mulish};
        font-weight: 600;
        font-style: normal;
        font-size: 0.875rem; // 14px
        line-height: 1.25rem; // 20px
        letter-spacing: 0.0125rem; // 0.2px
        color: ${(props) => props.theme.colors.profileFontColor};
        margin-left: 0;
        padding-left: 0;

      }

      div {
        display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;


      a {
        display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      min-width: fit-content;
      padding-right: 8px;
      padding-top: ;

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


const CredentialsSectionMobile = styled(CredentialsSection)`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-self: flex-start;
      align-items: center;
      margin-top: 24px;
      margin-left: 10px;

      h2 {


      }

      div {

        flex-direction: column;

        a {
          padding-top: 10px;;
        }
      }
`;


const CredentialsSectionTablet = styled(CredentialsSectionMobile)`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-self: flex-start;
      align-items: center;
      margin-top: 24px;
      margin-left: 10px;


      h2 {


      }

      div {

        flex-direction: row;

        a {
          padding-bottom: 10px;

      }
  }
      `;

const NotesSection = styled.section`
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      margin-left: 10px;
      max-width: 100%;
      width: 100%;



      `;





const NotesTitleAndAddIconDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 87%;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        max-width: 86%;
      }
      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        max-width: 85.6%;
      }


      `;
const AddIcon = styled.img`
      display: flex;
      width: 17px * 0.375; // 17px
      height: 17px * 0.375; // 17px
      align-self: end;

      color: ${(props) => props.theme.colors.pencil};

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      }
      &:hover {
        cursor: pointer;
}
      `;

const NotesTitleDiv = styled.div`
      display: flex;
      flex-direction: row;
      align-self: flex-start;
      width: 92vw;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 97vw;
      }


      `;

/* const DateFromNoteDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-self: center;
      margin-top: 0px;

      `; */


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





const NotesList = styled.ul`


      `;
const NotesDiv = styled.div`
      margin-top: 0px;
      `;

const NoteDiv = styled.div`

      display: flex;
      flex-direction: column;

      `;


const NotesHr = styled.hr`
      border: 1px solid ${(props) => props.theme.colors.notesHr};
      display: flex;
      width: 100%;
      max-width: 90%;
      justify-content: flex-start;
      align-self: flex-start;
      margin-left: 0px;
      margin-bottom: 8px;
      max-width: 85%;

      `;

const DateFromDiv = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      justify-self: center;
      align-items: flex-start;
      margin-top: 0px;
      max-width: 85%;

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



const EditDeleteIconsNoteDiv = styled.div`
      display: flex;
      flex-direction: row;
      `;

const EditIcon = styled.img`
      width: 35px; // 20px
      height: 22px; // 20px
      color: ${(props) => props.theme.colors.pencil};
      ////padding-right: 10px;
      padding-left: 14px;

      &:hover {
        cursor: pointer;
}
      `;

const DeleteIcon = styled.img`
      width: 20px; // 20px
      height: 20px; // 20px
      margin-left: 8px;

      &:hover {
        cursor: pointer;
}
      `;

const Span = styled.span`
      display: flex;
      flex-direction: row;
      align-self: start;
      float:left;
      flex-wrap: wrap;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 400;
      font-style: normal;
      font-size: 0.75rem; // 12px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};
      width: auto;
      max-width: max-content;

      &:hover {
        cursor: pointer;
      }
`;


export default RenderAdminProfilePage;
