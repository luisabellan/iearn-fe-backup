import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "../profile.scss";
import { MapPin, PhoneCall, Mail, Edit } from "react-feather";
import { useLocation } from "react-router-dom";
import SpinnerComponent from "../../../../components/spinner/spinner";

//States
import states from "../../SignUp/json/states_hash.json";
//Source: https://gist.github.com/mshafrir/2646763

//Assets
// import profilePlaceholder from "../../../../assets/img/_main/profile-placeholder.jpg";

//Context
import withUserContext from "../../../../utility/withContexts/withUser";

//Notes
//Circle taken from: https://codepen.io/cbracco/pen/qnduh

//API
import api from "../../../../api/api";

//Assets
import facebook from "../../../../assets/img/logos/logo-facebook.png";
import twitter from "../../../../assets/img/logos/logo-twitter.png";
import instagram from "../../../../assets/img/logos/logo-instagram.png";
import slack from "../../../../assets/img/logos/logo-slack.png";
import linkedin from "../../../../assets/img/logos/logo-linkedin.png";

//Modals
import ProfilePicture from "../_modals/ProfilePicture/ProfilePicture";
import EditProfile from "../_modals/EditProfile/EditProfile";
import EditSkills from "../_modals/EditSkills/EditSkills";
import EditMarket from "../_modals/EditMarket/EditMarket";
import EditMentorships from "../_modals/EditMentorships/EditMentorships";

const UserProfile = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [editMarket, setEditMarket] = useState(false);
  const [editMentorships, setEditMentorships] = useState(false);

  const location = useLocation();

  useEffect(() => {
    api
      .get(`/users/${location.state.id}`)
      .then((res) => {
        setCurrentProfile(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const mapSocialMedia = () => {
    const arr = [
      {
        icon: facebook,
        link: currentProfile.facebook,
        key: "facebook",
      },
      {
        icon: instagram,
        link: currentProfile.instagram,
        key: "instagram",
      },
      {
        icon: twitter,
        link: currentProfile.twitter,
        key: "twitter",
      },
      {
        icon: linkedin,
        link: currentProfile.linkedin,
        key: "linkedin",
      },
      {
        icon: slack,
        link: currentProfile.slack,
        key: "slack",
      },
    ];

    return arr.map((item, index) => {
      if (currentProfile[item.key]) {
        return (
          <button
            className="button-transparent btn-socials"
            key={index}
            onClick={() => window.open(`http://${item.link}`, "_blank")}
          >
            <img src={item.icon} alt={item.key} />
          </button>
        );
      }

      return (
        <span className="button-transparent btn-socials opacity-50" key={index}>
          <img src={item.icon} alt={item.key} />
        </span>
      );
    });
  };

  if (isLoading) return <SpinnerComponent />;

  return (
    <>
      <ProfilePicture
        {...{
          isOpen: profilePicture,
          toggle: () => setProfilePicture(!profilePicture),
          profile: currentProfile,
        }}
      />
      <EditProfile
        {...{
          isOpen: editProfile,
          toggle: () => setEditProfile(!editProfile),
          profile: currentProfile,
        }}
      />
      <EditSkills
        {...{
          isOpen: editSkills,
          toggle: () => setEditSkills(!editSkills),
          profile: currentProfile,
        }}
      />
      <EditMarket
        {...{
          isOpen: editMarket,
          toggle: () => setEditMarket(!editMarket),
          profile: currentProfile,
        }}
      />
      <EditMentorships
        {...{
          isOpen: editMentorships,
          toggle: () => setEditMentorships(!editMentorships),
          profile: currentProfile,
        }}
      />
      <Row className="profile-container">
        <Col>
          <Card>
            <CardBody>
              <div className="row justify-content-center pb-4">
                <div className="col-11">
                  <Row>
                    <Col className="tablet-hidden tab-hidden desktop-hidden mb-0">
                      <h5 className="text-blue font-weight-bold">Profile</h5>
                      <h3 className="font-weight-bold text-capitalize">
                        {currentProfile.firstName} {currentProfile.lastName}
                      </h3>
                      <hr className="tablet-hidden tab-hidden desktop-hidden mb-0" />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="profile-picture mt-3" md="4" sm="8" xs="8">
                      <Row>
                        <Col className="px-0 px-md-2">
                          {props.user.role === "administrator" ? (
                            <div
                              className="edit-profile"
                              onClick={() => setProfilePicture(!profilePicture)}
                            >
                              <div className="edit-icon">
                                <Edit size="30" color="#0C2340" />
                                <p className="mt-2">Update Profile Picture</p>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          {currentProfile.userImg ? (
                            <img
                              src={`https://mentor-beast-nuclius.s3.us-east-2.amazonaws.com/${currentProfile.userImg}`}
                              alt="logged-in-user"
                              className="rounded-circle"
                            />
                          ) : (
                            <div className="circle">
                              <div className="circle__inner">
                                <div className="circle__wrapper">
                                  <div className="circle__content">
                                    {currentProfile.firstName[0]}{" "}
                                    {currentProfile.lastName[0]}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Col>
                      </Row>
                      <Row className="tablet-hidden tab-hidden desktop-hidden">
                        <Col>
                          {/* <p className="text-center">
                            Timezone:{" "}
                            <span
                              className={
                                currentProfile.timezone ? "" : "opacity-50"
                              }
                            >
                              {currentProfile.timezone
                                ? currentProfile.timezone
                                : "Unset"}
                            </span>
                          </p> */}
                        </Col>
                      </Row>
                    </Col>
                    <Col className="profile-info pr-0" md="8" sm="11" xs="12">
                      <h1 className="sm-hidden mobile-hidden text-capitalize">
                        {currentProfile.firstName} {currentProfile.lastName}
                      </h1>
                      {props.user.role === "administrator" ? (
                        <div className="edit-button">
                          <button
                            className="button-transparent"
                            onClick={() => setEditProfile(!editProfile)}
                          >
                            <Edit size="22" />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <h5 className="mt-0 mt-md-3">
                        <MapPin className="mr-1 mr-md-3" color="#464855" />{" "}
                        <span
                          className={
                            currentProfile.location ? "" : "opacity-50"
                          }
                        >
                          {currentProfile.location
                            ? currentProfile.location
                            : ""}
                        </span>
                      </h5>
                      <h5 className="mt-0 mt-md-3">
                        <PhoneCall className="mr-1 mr-md-3" color="#464855" />{" "}
                        <span
                          className={
                            currentProfile.businessPhone ? "" : "opacity-50"
                          }
                        >
                          {currentProfile.businessPhone
                            ? currentProfile.businessPhone
                            : ""}
                        </span>
                      </h5>
                      <h5 className="mt-0 mt-md-3">
                        <Mail className="mr-1 mr-md-3" color="#464855" />{" "}
                        {currentProfile.email}
                      </h5>
                      <p className="mt-3">{mapSocialMedia()}</p>
                    </Col>
                  </Row>
                  <Row className="mt-md-3">
                    <Col className="sm-hidden mobile-hidden" md={{ size: 4 }}>
                      {/* <p className="text-center">
                        Timezone:{" "}
                        <span
                          className={
                            currentProfile.timezone ? "" : "opacity-50"
                          }
                        >
                          {currentProfile.timezone
                            ? currentProfile.timezone
                            : "Unset"}
                        </span>
                      </p> */}
                    </Col>
                    <Col xs={{ order: 2, size: 12 }} md={{ size: 4, order: 1 }}>
                      {/* <p className="text-center mb-0 mb-md-2">
                        Preferred method of communication:{" "}
                        <u className="text-capitalize">
                          {currentProfile.preferredContact}
                        </u>
                      </p> */}
                    </Col>
                  </Row>
                  <hr />
                  <Row className="list-container">
                    <Col>
                      <h2>Skills:</h2>
                      {props.user.role === "administrator" ? (
                        <div className="edit-button">
                          <button
                            className="button-transparent"
                            onClick={() => setEditSkills(!editSkills)}
                          >
                            <Edit size="22" />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <Row>
                        <Col lg="12" xl="8">
                          <Row>
                            {currentProfile.skills.map((skill, index) => (
                              <Col key={index} xs="6" md="4">
                                <p className="mb-1 mb-md-2 text-capitalize">
                                  {skill}
                                </p>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                        <Col lg="0" xl="4"></Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="list-container">
                    <Col>
                      <h2>Markets:</h2>
                      {props.user.role === "administrator" ? (
                        <div className="edit-button">
                          <button
                            className="button-transparent"
                            onClick={() => setEditMarket(!editMarket)}
                          >
                            <Edit size="22" />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <Row>
                        <Col lg="12" xl="8">
                          <Row>
                            {currentProfile.markets
                              ? currentProfile.markets.map((market, index) => (
                                  <Col key={index} xs="6" md="4">
                                    <p className="mb-1 mb-md-2 text-capitalize">
                                      {states[market]}
                                    </p>
                                  </Col>
                                ))
                              : ""}
                          </Row>
                        </Col>
                        <Col lg="0" xl="4"></Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="list-container">
                    <Col>
                      <h2>Mentorships:</h2>
                      {props.user.role === "administrator" ? (
                        <div className="edit-button">
                          <button
                            className="button-transparent"
                            onClick={() => setEditMentorships(!editMentorships)}
                          >
                            <Edit size="22" />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <Row>
                        <Col lg="12" xl="8">
                          <Row>
                            {currentProfile.mentorships
                              ? currentProfile.mentorships.map(
                                  (mentorship, index) => (
                                    <Col key={index} xs="6" md="4">
                                      <p className="mb-1 mb-md-2 text-capitalize">
                                        {mentorship}
                                      </p>
                                    </Col>
                                  )
                                )
                              : ""}
                          </Row>
                        </Col>
                        <Col lg="0" xl="4"></Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default withUserContext(UserProfile);
