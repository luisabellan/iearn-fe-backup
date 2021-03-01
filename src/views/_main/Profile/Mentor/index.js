import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "./mentor.scss";
import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";

//Assets
import userImage from "../../../../assets/img/_main/jake-peralta.png";

const MentorProfile = () => {
  return (
    <Row className="profile-container">
      <Col>
        <Card>
          <CardBody>
            <div className="row justify-content-center">
              <div className="col-11">
                <Row>
                  <Col className="profile-picture" lg="4">
                    <img
                      src={userImage}
                      alt="logged-in-user"
                      className="rounded-circle"
                    />
                  </Col>
                  <Col className="py-3 profile-info" lg="8">
                    <h1>Jake Peralta</h1>
                    <h3 className="mt-3">
                      <MapPin className="mr-3" color="#DADADA" /> Brooklyn
                    </h3>
                    <h3 className="mt-3">
                      <PhoneCall className="mr-3" color="#DADADA" /> 555-555-555
                    </h3>
                    <h3 className="mt-3">
                      <Mail className="mr-3" color="#DADADA" /> email@email.com
                    </h3>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <p className="text-center">Time Zone: GMT +8</p>
                  </Col>
                  <Col>
                    <p className="text-center">
                      Preferred method of communication: <u>Facebook</u>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-center">
                      <Facebook className="mr-3" />
                      <Instagram className="mr-3" />
                      <Twitter className="mr-3" />
                      <Linkedin className="mr-3" />
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <h2>Skills:</h2>
                    <Row>
                      <Col lg="8">
                        <Row>
                          <Col>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                          </Col>
                          <Col>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                          </Col>
                          <Col>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="4"></Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <h2>Courses:</h2>
                    <Row>
                      <Col lg="8">
                        <Row>
                          <Col>
                            <p>Lorem ipsum</p>
                          </Col>
                          <Col>
                            <p>Lorem ipsum</p>
                          </Col>
                          <Col>
                            <p>Lorem ipsum</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="4">
                        <p>See All</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <h2>Resources:</h2>
                    <Row>
                      <Col lg="8">
                        <Row>
                          <Col>
                            <p>Lorem ipsum</p>
                          </Col>
                          <Col>
                            <p>Lorem ipsum</p>
                          </Col>
                          <Col>
                            <p>Lorem ipsum</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="4">
                        <p>See All</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="text-right">
                    <h3>See Deals</h3>
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

export default MentorProfile;
