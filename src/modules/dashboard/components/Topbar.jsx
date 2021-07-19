import colors from "constants/colors";
import styled from "styled-components";
import avatar from "assets/images/avatar.png";

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ProfileCircle = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: contain;
  overflow: hidden;
  background-color: ${colors.ash};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

const ProfileImage = () => {
  const user = {
    url: "",
    altText: "",
  };
  return (
    <Flex>
      <span
        style={{
          display: "block",
          padding: "0 20px",
          borderLeft: "1px solid grey",
          fontSize: "1.4rem",
        }}
      >
        Jones Ferdinand
      </span>
      <ProfileCircle>
        <img src={user.url || avatar} alt={user.altText} />
      </ProfileCircle>
    </Flex>
  );
};

const PageTitle = styled.h1`
  flex-grow: 1;
  font-size: 2.4rem;
`;

const Topbar = () => {
  return (
    <Container>
      <PageTitle>Edit Profile</PageTitle>
      <ProfileImage />
    </Container>
  );
};

export default Topbar;
