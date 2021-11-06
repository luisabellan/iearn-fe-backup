

import React, { useState } from "react";
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
//don't delete yet import status from '../../assets/status.png'; (luisabellan)
import remove from '../../assets/icons/remove.png';


const Span = styled.span`
      display: flex;
      flex-direction: row;
      align-self: center;
      text-align:center;
      //float:left;
      flex-wrap: wrap;
      font-family: ${(props) => props.theme.fonts.mulish};
      font-weight: 400;
      font-style: normal;
      font-size: 0.75rem; // 12px
      line-height: 1.25rem; // 20px
      letter-spacing: 0.0125rem; // 0.2px
      color: ${(props) => props.theme.colors.profileFontColor};
      width: auto;
      padding-right:8px;
      padding-left:8px;
      //max-width: max-content;

      &:hover {
        cursor: pointer;
      }
`;

const Button = styled.button`
  border: none;
  color: ${(props) => props.theme.colors.viewButton};
  &:hover {
        cursor: pointer;
      }

`;

const Note = (props) => {

  const [isShown, setIsShown] = useState(false);

  const toggleShow = () => {
    setIsShown(!isShown);
  };



  return (
    <div>
      <NoteDiv id={props.id}>
        <DateFromDiv>
          <DateFromNoteDiv>
            <Date><span>{props.date}</span></Date>
            <From className="from"><span>{props.from}</span></From>

          </DateFromNoteDiv>
          {isShown &&
            <Span id={props.id} onClick={toggleShow}>{props.content}</Span>
          }
          <EditDeleteIconsNoteDiv>

            <Button id={props.id} onClick={toggleShow}>
              <span>VIEW</span>
            </Button>


            <EditIcon src={pencil} alt="edit" />
            <DeleteIcon src={remove} alt="remove" />
          </EditDeleteIconsNoteDiv>
        </DateFromDiv>
        <NotesHr />
      </NoteDiv>
    </div>

  )

}


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

/* const Span = styled.span`
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
`; */

const DateFromNoteDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-self: center;
      margin-top: 0px;

      `;

export default Note;
