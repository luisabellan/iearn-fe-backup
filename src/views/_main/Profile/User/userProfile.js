import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "../profile.scss";
import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";
import { Link, useLocation } from "react-router-dom";
import SpinnerComponent from "../../../../components/spinner/spinner";

//Assets
import profilePlaceholder from "../../../../assets/img/_main/profile-placeholder.jpg";

//Context
import withUserContext from "../../../../utility/withContexts/withUser";

//Notes
//Circle taken from: https://codepen.io/cbracco/pen/qnduh

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProfile, setCurrentProfile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setCurrentProfile(location.state);
    setIsLoading(false);
  }, []);

  const mapSocialMedia = () => {
    const arr = [
      {
        icon: <Facebook className="mr-3" />,
        link: currentProfile.facebook,
        key: "facebook",
      },
      {
        icon: <Instagram className="mr-3" />,
        link: currentProfile.instagram,
        key: "instagram",
      },
      {
        icon: <Twitter className="mr-3" />,
        link: currentProfile.twitter,
        key: "twitter",
      },
      {
        icon: <Linkedin className="mr-3" />,
        link: currentProfile.linkedin,
        key: "linkedin",
      },
    ];

    return arr.map((item, index) => (
      <button
        className="button-transparent"
        key={index}
        disabled={!currentProfile[item.key]}
        onClick={() => window.open(`http://${item.link}`, "_blank")}
      >
        {item.icon}
      </button>
    ));
  };

  if (isLoading) return <SpinnerComponent />;

  return (
    <Row className="profile-container">
      <Col>
        <Card>
          <CardBody>
            <div className="row justify-content-center">
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
                <Row>
                  <Col className="profile-picture" xs="5" sm="4" md="4">
                    <Row>
                      <Col className="px-0 px-md-2">
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
                        <p className="text-center">
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
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="profile-info pr-0" xs="7" sm="8" md="8">
                    <h1 className="sm-hidden mobile-hidden text-capitalize">
                      {currentProfile.firstName} {currentProfile.lastName}
                    </h1>
                    <h3 className="mt-0 mt-md-3">
                      <MapPin className="mr-1 mr-md-3" color="#DADADA" />{" "}
                      <span
                        className={currentProfile.location ? "" : "opacity-50"}
                      >
                        {currentProfile.location
                          ? currentProfile.location
                          : "Unset"}
                      </span>
                    </h3>
                    <h3 className="mt-0 mt-md-3">
                      <PhoneCall className="mr-1 mr-md-3" color="#DADADA" />{" "}
                      <span
                        className={
                          currentProfile.businessPhone ? "" : "opacity-50"
                        }
                      >
                        {currentProfile.businessPhone
                          ? currentProfile.businessPhone
                          : "Unset"}
                      </span>
                    </h3>
                    <h3 className="mt-0 mt-md-3">
                      <Mail className="mr-1 mr-md-3" color="#DADADA" />{" "}
                      {currentProfile.email}
                    </h3>
                  </Col>
                </Row>
                <Row className="mt-md-3">
                  <Col className="sm-hidden mobile-hidden" md={{ size: 4 }}>
                    <p className="text-center">
                      Timezone:{" "}
                      <span
                        className={currentProfile.timezone ? "" : "opacity-50"}
                      >
                        {currentProfile.timezone
                          ? currentProfile.timezone
                          : "Unset"}
                      </span>
                    </p>
                  </Col>
                  <Col xs={{ order: 2, size: 12 }} md={{ size: 4, order: 1 }}>
                    <p className="text-center mb-0 mb-md-2">
                      Preferred method of communication:{" "}
                      <u className="text-capitalize">
                        {currentProfile.preferredContact}
                      </u>
                    </p>
                  </Col>
                  <Col xs={{ order: 1, size: 12 }} md={{ size: 4, order: 2 }}>
                    <p className="text-center">{mapSocialMedia()}</p>
                  </Col>
                </Row>
                <hr />
                <Row className="list-container">
                  <Col>
                    <h2>Skills:</h2>
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
                    <h2>Lessons Completed:</h2>
                    <Row>
                      <Col lg="12" xl="8">
                        <Row>
                          <Col xs="6" md="4">
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                          </Col>
                          <Col xs="6" md="4">
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                          </Col>
                          <Col xs="6" md="4">
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                            <p className="mb-1 mb-md-2">Lorem ipsum</p>
                          </Col>
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
  );
};

export default withUserContext(UserProfile);
