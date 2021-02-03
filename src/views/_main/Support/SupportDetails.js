import React from "react";
import "./support.scss";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { ChevronLeft, Plus, Minus } from "react-feather";

//Utils
import { getDateTime } from "../Utils/utils";

//Assets
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";

const SupportDetails = () => {
  const history = useHistory();

  const currentUser = "Tom Cruise";

  const convo = [
    {
      text: `Hello, I have a problem.`,
      author: "Tom Cruise",
      date: new Date(),
    },
    {
      text: `What's the problem, Sir Tom?`,
      author: "Howard Jones",
      date: new Date(),
    },
    {
      text: `This.`,
      author: "Tom Cruise",
      date: new Date(),
    },
    {
      text: `Excuse me. What?`,
      author: "Howard Jones",
      date: new Date(),
    },
    {
      text: `Existing.`,
      author: "Tom Cruise",
      date: new Date(),
    },
    {
      text: `LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO LMFAO `,
      author: "Howard Jones",
      date: new Date(),
    },
  ];

  const mapConvo = () => {
    return convo.map((item, index) => (
      <Row key={index}>
        <Col>
          <div
            className={`text-container ${
              item.author === currentUser
                ? "owner float-right"
                : "helper float-left"
            }`}
          >
            <p className="text-details">
              {item.author}&emsp;<span>{getDateTime(item.date)}</span>
            </p>
            <p className="text-content">{item.text}</p>
          </div>
        </Col>
      </Row>
    ));
  };

  return (
    <Row className="page-support">
      <Col>
        <Card>
          <CardBody className="support-details">
            <Row className="details-header">
              <Col xs={{ size: 3, order: 1 }} sm="1" xl="2">
                <button
                  className="button-transparent-2"
                  onClick={() => history.push(`/support`)}
                >
                  <ChevronLeft size="22" color="#ccc" />
                  <span className="mobile-hidden tablet-hidden tab-hidden">
                    {" "}
                    Back
                  </span>
                </button>
              </Col>
              <Col xs={{ size: 5, order: 2 }} sm="7" xl="4">
                <Row>
                  <Col
                    xs="3"
                    className="text-center mobile-hidden tablet-hidden"
                  >
                    <img
                      src={userImage}
                      alt="logged-in-user"
                      className="rounded-circle width-50"
                    />
                  </Col>
                  <Col xs="9" className="pr-1 pl-0">
                    <p className="title">Tom Cruise</p>
                    <p className="history">May 26, 2019</p>
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ size: 4, order: 3 }}
                className="mobile-hidden tablet-hidden tab-hidden"
              >
                <p className="title">Contact Email not Linked</p>
              </Col>
              <Col
                xs={{ size: 4, order: 3 }}
                xl={{ size: 2, order: 4 }}
                className="pl-0 px-md-3 text-right"
              >
                <span className="prio-3">HIGH</span>
              </Col>
            </Row>
            <Row className="details-subheader desktop-hidden p-2">
              <Col xs="8">
                <p className="title">Contact Email not Linked</p>
              </Col>
              <Col xs="4">
                <p className="history text-right">Update 1 day ago</p>
              </Col>
            </Row>
            <Row className="convo-container">
              <Col>{mapConvo()}</Col>
            </Row>
            <Row className="mt-3">
              <Col xs={{size: 12, order: 2}} lg={{order: 1}} className="send-container">
                <Input type="textarea" rows="1" />
                <button className="button-send">Send</button>
              </Col>

              <Col xs={{size: 12, order: 1}} lg={{order: 2}} className="send-container-bottom">
                <p>
                  Priority&emsp;
                  <button className="button-transparent-2">
                    <Plus size="22" color="#57C478" />
                  </button>
                  &ensp;
                  <button className="button-transparent-2">
                    <Minus size="22" color="#F22613" />
                  </button>
                  <button className="button-transparent-2 ml-5">
                    Mark Resolved
                  </button>
                </p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default SupportDetails;
