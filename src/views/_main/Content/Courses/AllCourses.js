import React, { useEffect } from "react";
import "./courses.scss";
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
import {
  List,
  Filter,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ArrowUp,
} from "react-feather";
import { MoreVertical } from "react-feather";

//Assets
import userImage from "../../../../assets/img/portrait/small/avatar-s-1.png";
import placeholder from "../_temp/placeholder.png";

//Utils
import { useWindowDimensions } from "../../Utils/utils";
import withTitleContext from "../../../../layouts/utils/withContexts/withTitle";

const Courses = (props) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  useEffect(() => {
    props.setPageTitle("Courses");
  });

  const handleClick = () => {
    if (width < 1200) {
      history.push(`/courses/asdasd`);
    }
  };

  return (
    <Row className="page-courses">
      <Col>
        <Card>
          <CardBody className="pb-0 courses-container">
            <Row className="pt-2 table-header">
              <Col xs="4 pr-0" sm="4" md="6" lg="8" xl="10" className="pl-lg-3">
                <h4>All Courses</h4>
              </Col>
              <Col
                xs="4 px-0"
                sm="4"
                md="3"
                lg="2"
                xl="1"
                className="text-right"
              >
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <List size={20} color="#333" />
                    <span className="xs-hidden"> Sort</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col xs="4 px-0" sm="4" md="3" lg="2" xl="1">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <Filter size={20} color="#333" />
                    <span className="xs-hidden"> Filter</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
            <Row className="table-courses">
              <Col className="px-0 pt-0 pt-lg-4">
                <Table hover>
                  <thead>
                    <tr>
                      <th>
                        <Row>
                          <Col xl={{ size: 4 }} className="pl-2 pl-xl-4">
                            Course Overview
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            className="xs-hidden tab-below-hidden text-center"
                          >
                            Progress
                          </Col>
                          <Col xl={{ size: 2 }} className="text-center">
                            Upvotes
                          </Col>
                          <Col xl={{ size: 3 }} className="pr-0 text-center">
                            Author
                          </Col>
                          <Col
                            xl={{ size: 1 }}
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
                          <Col xl={{ size: 4 }} className="pl-2 pl-xl-4">
                            <Row>
                              <Col
                                sm="3"
                                className="text-center tab-below-hidden"
                              >
                                <img
                                  src={placeholder}
                                  alt="logged-in-user"
                                  className="width-100"
                                />
                              </Col>
                              <Col xs="12" xl="9" className="pr-1 pl-2 pl-xl-0">
                                <p className="title">
                                  Week 0 - Course Foundations
                                </p>
                                <p className="history">Updated 1 day ago</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            className="xs-hidden tab-below-hidden text-center"
                          >
                            <p className="title">13 / 13</p>
                            <p className="history">on 24.05.2019 </p>
                          </Col>
                          <Col xl={{ size: 2 }} className="text-center">
                            <p className="title">
                              <button className="button-transparent-2">
                                <ArrowDown size="22" color="#c5c7cd" />
                              </button>
                              &ensp;18&ensp;
                              <button className="button-transparent-2">
                                <ArrowUp size="22" color="#0c2340" />
                              </button>
                            </p>
                          </Col>
                          <Col xl={{ size: 3 }} className="pr-0">
                            <Row>
                              <Col
                                className="text-right tab-below-hidden"
                                xl={{ size: 5 }}
                              >
                                <img
                                  src={userImage}
                                  alt="logged-in-user"
                                  className="rounded-circle width-50"
                                />
                              </Col>
                              <Col
                                className="pr-1 pl-2 pl-xl-0"
                                xl={{ size: 7 }}
                              >
                                <p className="title">Barnes, Elle</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xl={{ size: 1 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            <button
                              className="button-transparent-2"
                              onClick={() => {
                                history.push(`/content/courses/asdasd`);
                              }}
                            >
                              <MoreVertical size={20} color="#000" />
                            </button>
                          </Col>
                        </Row>
                      </td>
                    </tr>

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
                    </tr>
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

export default withTitleContext(Courses);
