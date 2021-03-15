import React from "react";
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
import { Link } from "react-router-dom";

//Assets
import userImage from "../../../../assets/img/_main/amy-santiago.png";

const UserProfile = () => {
  return (
    <Row className="profile-container">
      <Col>
        <Card>
          <CardBody>
            <div className="row justify-content-center">
              <div className="col-11">
                <Row>
                  <Col>
                    <h3 className="tablet-hidden tab-hidden desktop-hidden mb-0">
                      Amy Santiago
                    </h3>
                    <hr className="tablet-hidden tab-hidden desktop-hidden" />
                  </Col>
                </Row>
                <Row>
                  <Col className="profile-picture" xs="5" sm="4" md="4">
                    <Row>
                      <Col className="px-0 px-md-2">
                        <img
                          src={userImage}
                          alt="logged-in-user"
                          className="rounded-circle"
                        />
                      </Col>
                    </Row>
                    <Row className="tablet-hidden tab-hidden desktop-hidden">
                      <Col>
                        <p className="text-center">GMT +8</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="py-3 profile-info pr-0" xs="7" sm="8" md="8">
                    <h1 className="sm-hidden mobile-hidden">Jake Peralta</h1>
                    <h3 className="mt-0 mt-md-3">
                      <MapPin className="mr-1 mr-md-3" color="#DADADA" />{" "}
                      Brooklyn
                    </h3>
                    <h3 className="mt-0 mt-md-3">
                      <PhoneCall className="mr-1 mr-md-3" color="#DADADA" />{" "}
                      555-555-555
                    </h3>
                    <h3 className="mt-0 mt-md-3">
                      <Mail className="mr-1 mr-md-3" color="#DADADA" />{" "}
                      email@email.com
                    </h3>
                  </Col>
                </Row>
                <Row className="mt-md-3">
                  <Col className="sm-hidden mobile-hidden" md={{ size: 4 }}>
                    <p className="text-center">Time Zone: GMT +8</p>
                  </Col>
                  <Col xs={{ order: 2, size: 12 }} md={{ size: 4, order: 1 }}>
                    <p className="text-center mb-0 mb-md-2">
                      Preferred method of communication: <u>Facebook</u>
                    </p>
                  </Col>
                  <Col xs={{ order: 1, size: 12 }} md={{ size: 4, order: 2 }}>
                    <p className="text-center">
                      <Facebook className="mr-3" />
                      <Instagram className="mr-3" />
                      <Twitter className="mr-3" />
                      <Linkedin className="mr-3" />
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="list-container">
                  <Col>
                    <h2>Skills:</h2>
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

export default UserProfile;
