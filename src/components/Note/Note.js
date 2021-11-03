

import React, { useState } from "react";
import styled from "styled-components";

//don't delete yet import status from '../../assets/status.png'; (luisabellan)
import remove from '../../assets/icons/remove.png';

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

const Button = styled.button`
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
      {isShown ?
        <Span id={props.id} onClick={toggleShow}>{props.content}</Span>
        :
        <Button id={props.id} onClick={toggleShow}>
          <span>VIEW</span>
        </Button>
      }
    </div>

  )

}




export default Note;
