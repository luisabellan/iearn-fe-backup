import React from "react";
import "./support.scss";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { List, Filter, ChevronLeft, ChevronRight } from "react-feather";
import { MoreVertical } from "react-feather";

//Assets
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";

//Utils
import { useWindowDimensions } from "../Utils/utils";

const Support = () => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const handleClick = () => {
    if (width < 1200) {
      history.push(`/support/asdasd`);
    }
  };

  return (
    <Row className="page-support">
      <Col>
        <Card>
          <CardBody className="pb-0 support-container">
            <Row className="pt-2 table-header">
              <Col xs="4 pr-0" sm="4" md="6" lg="8" className="pl-lg-3">
                <h4>Support</h4>
              </Col>
              {/* <Col xs="4 px-0" sm="4" md="3" lg="2" className="text-right">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <List size={20} color="#333" />
                    <span className="xs-hidden"> Sort</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col> */}
              {/* <Col xs="4 px-0" sm="4" md="3" lg="2">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <Filter size={20} color="#333" />
                    <span className="xs-hidden"> Filter</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col> */}
            </Row>
            <Row className="table-support">
              <Col className="px-0 pt-0 pt-lg-4">
                <Table hover>
                  <thead>
                    <tr>
                      <th>
                        <Row>
                          <Col
                            xs={{ order: 2, size: 6 }}
                            xl={{ size: 5, order: 1 }}
                            className="pl-2 pl-xl-5"
                          >
                            Ticket Details
                          </Col>
                          <Col
                            xl={{ size: 2, order: 2 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            Customer Name
                          </Col>
                          <Col xs={{ order: 3, size: 4 }} xl="2">
                            Submitted<span className="desktop-hidden"> By</span>
                          </Col>
                          <Col
                            xs={{ order: 1, size: 2 }}
                            xl={{ size: 2, order: 4 }}
                            className="pr-0"
                          >
                            Priority
                          </Col>
                          <Col
                            xl={{ size: 1, order: 5 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            &nbsp;
                          </Col>
                        </Row>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      <td>
                        <Row>
                          <Col
                            xs={{ order: 2, size: 6 }}
                            xl={{ size: 5, order: 1 }}
                            className="pl-2 pl-xl-4"
                          >
                            <Row>
                              <Col
                                sm="3"
                                className="text-center tab-below-hidden"
                              >
                                <img
                                  src={userImage}
                                  alt="logged-in-user"
                                  className="rounded-circle width-50"
                                />
                              </Col>
                              <Col xs="12" xl="9" className="pr-1 pl-2 pl-xl-0">
                                <p className="title">
                                  Contact Email not Linked
                                </p>
                                <p className="history">Updated 1 day ago</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xl={{ size: 2, order: 2 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            <p className="title">Tom Cruise</p>
                            <p className="history">on 24.05.2019 </p>
                          </Col>
                          <Col xs={{ order: 3, size: 4 }} xl="2">
                            <p className="title">May 26, 2019</p>
                            <p className="history">6:30 PM</p>
                          </Col>
                          <Col
                            xs={{ order: 1, size: 2 }}
                            xl={{ size: 2, order: 4 }}
                            className="pr-0"
                          >
                            <p className="prio-3 tab-below-hidden">HIGH</p>
                            <p className="prio-3 desktop-hidden">&nbsp;</p>
                          </Col>
                          <Col
                            xl={{ size: 1, order: 5 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            <button
                              className="button-transparent-2"
                              onClick={() => {
                                history.push(`/support/asdasd`);
                              }}
                            >
                              <MoreVertical size={20} color="#000" />
                            </button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
{/* 
                    <tr>
                      <td className="pb-0">
                        <div className="row justify-content-end pagination-options">
                          <div className="col-6 col-md-3 col-lg-4 col-xl-3 text-right">
                            Rows per page:{" "}
                            <select name="rows" className="select-rows">
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                          <div className="col-6 col-md-4 col-lg-4 col-xl-3 pl-0 pl-md-2">
                            1-8 of 1240&emsp;
                            <button className="button-transparent-2 set-transparent">
                              <ChevronLeft size="22" color="#000" />
                            </button>
                            &emsp;
                            <button className="button-transparent-2 set-transparent">
                              <ChevronRight size="22" color="#000" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Support;
